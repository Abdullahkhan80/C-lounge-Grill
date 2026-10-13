"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, Utensils, Wine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TIME_SLOTS, RESTAURANT_INFO } from "@/data/restaurantData";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDetails?: {
    guests: number;
    date: string;
    time: string;
  };
}

export default function ReservationModal({
  isOpen,
  onClose,
  initialDetails,
}: ReservationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [guests, setGuests] = useState(initialDetails?.guests || 2);
  const [date, setDate] = useState(initialDetails?.date || "2026-10-15");
  const [minDate, setMinDate] = useState("2026-10-15");
  const [time, setTime] = useState(initialDetails?.time || "7:00 PM");
  const [seatingArea, setSeatingArea] = useState<"parlor" | "roof">("parlor");

  // Contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialNotes, setSpecialNotes] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setMinDate(today);
    if (!initialDetails?.date) {
      setDate(today);
    }
  }, [initialDetails?.date]);

  useEffect(() => {
    if (initialDetails) {
      if (initialDetails.guests) setGuests(initialDetails.guests);
      if (initialDetails.date) setDate(initialDetails.date);
      if (initialDetails.time) setTime(initialDetails.time);
    }
  }, [initialDetails]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleProceedToContact = () => {
    setStep(2);
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const code = "RL-" + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(code);
    setStep(3);
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", duration: 0.45, bounce: 0.15 }}
            className="relative w-full max-w-xl bg-[#141210] border border-white/15 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Bar */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#191715]">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#E8CA72]">
                  <Sparkles className="w-4 h-4 animate-pulse-subtle" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-white">Table Reservation</h3>
                  <p className="text-[11px] text-stone-400 font-light">Rose’s Luxury • Capitol Hill</p>
                </div>
              </div>

              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </motion.button>
            </div>


        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <AnimatePresence mode="wait">
            {/* STEP 1: Select Seating, Party, Date & Time */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -14 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >

              {/* Seating Area Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5">
                  Choose Dining Experience
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSeatingArea("parlor")}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      seatingArea === "parlor"
                        ? "bg-[#201D1B] border-[#D4AF37] text-white shadow-lg"
                        : "bg-[#121110] border-white/5 text-stone-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-editorial text-base text-white">Townhouse Parlor</span>
                      <Utensils className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <p className="text-[11px] text-stone-400 font-light">
                      Flickering candles, open hearth pass & vinyl music.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSeatingArea("roof")}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                      seatingArea === "roof"
                        ? "bg-[#201D1B] border-[#D4AF37] text-white shadow-lg"
                        : "bg-[#121110] border-white/5 text-stone-400 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-editorial text-base text-white">The Roof Garden</span>
                      <Wine className="w-4 h-4 text-[#C0635A]" />
                    </div>
                    <p className="text-[11px] text-stone-400 font-light">
                      Glass atrium, climbing ivy & open skylight terrace.
                    </p>
                  </button>
                </div>
              </div>

              {/* Party Size Buttons */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5">
                  Party Size
                </label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5, 6, 8].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`w-12 h-11 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                        guests === num
                          ? "bg-[#C0635A] text-white shadow-md shadow-rose-950/40"
                          : "bg-white/5 text-stone-300 hover:bg-white/10 border border-white/5"
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Input */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5">
                  Reservation Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    min={minDate}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37] [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-2.5">
                  Available Seating Times
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = time === slot.time;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() => setTime(slot.time)}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#D4AF37]/20 border-[#D4AF37] text-white"
                            : "bg-white/5 border-white/5 text-stone-300 hover:bg-white/10"
                        }`}
                      >
                        <p className="text-sm font-medium text-white">{slot.time}</p>
                        <p className="text-[10px] text-amber-300/80">{slot.tag}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Goodwill reminder */}
              <div className="p-3.5 rounded-xl bg-[#C0635A]/10 border border-[#C0635A]/20 text-[11px] text-stone-300 flex items-center space-x-2">
                <span className="text-[#C0635A] font-semibold text-xs">♥ Goodwill:</span>
                <span>Your reservation funds a meal for a child in need tonight.</span>
              </div>

              <button
                type="button"
                onClick={handleProceedToContact}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] text-[#0B0A09] text-xs uppercase tracking-widest font-semibold hover:shadow-xl transition-all cursor-pointer"
              >
                Continue to Guest Details
              </button>
            </motion.div>
          )}

          {/* STEP 2: Guest Details & Confirmation Form */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -14 }}
              transition={{ duration: 0.25 }}
            >
              <form onSubmit={handleConfirmReservation} className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-stone-300 flex items-center justify-between">
                <div>
                  <span className="text-[#E8CA72] font-medium uppercase tracking-wider block text-[10px]">
                    Table Summary
                  </span>
                  <span>{guests} {guests === 1 ? "Guest" : "Guests"} • {date} at {time}</span>
                  <span className="text-stone-400 block text-[11px]">
                    {seatingArea === "parlor" ? "Townhouse Parlor" : "The Roof Garden"}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-[#D87C73] underline hover:text-white"
                >
                  Edit
                </button>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Katherine Pierce"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(202) 555-0199"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                  Dietary Restrictions or Celebration Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g., Anniversary celebration, pescatarian, celebrating a promotion..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2 flex items-center space-x-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 text-xs uppercase tracking-widest font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] text-[#0B0A09] text-xs uppercase tracking-widest font-semibold hover:shadow-xl transition-all cursor-pointer"
                >
                  Confirm Table
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* STEP 3: Confirmed Success State */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="py-6 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-[#1C2E20] border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#E8CA72] text-[10px] uppercase tracking-widest font-semibold border border-[#D4AF37]/30">
                Reservation Confirmed
              </span>
              <h3 className="font-editorial text-3xl text-white mt-3">
                We Can’t Wait to Welcome You, {name}!
              </h3>
              <p className="text-stone-300 text-sm font-light mt-1">
                Confirmation Code: <strong className="text-[#E8CA72] font-mono">{confirmationCode}</strong>
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2 text-xs text-stone-300">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-stone-400">Date & Time:</span>
                <span className="font-medium text-white">{date} at {time}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-stone-400">Guests & Room:</span>
                <span className="font-medium text-white">
                  {guests} {guests === 1 ? "Guest" : "Guests"} ({seatingArea === "parlor" ? "Townhouse Parlor" : "The Roof Garden"})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Location:</span>
                <span className="font-medium text-white">{RESTAURANT_INFO.address}</span>
              </div>
            </div>

            <div className="text-[11px] text-stone-400 leading-relaxed">
              A confirmation has been sent to <strong className="text-stone-200">{email}</strong>.
              If your plans change, please give us 24 hours notice so another party may celebrate.
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3.5 rounded-full bg-[#C0635A] hover:bg-[#D87C73] text-white text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
            >
              Close & Return to Menu
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.div>
</motion.div>
)}
</AnimatePresence>
);
}
