"use client";

import { useState } from "react";
import { X, CheckCircle2, GlassWater } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SPACE_OPTIONS } from "@/data/restaurantData";

interface EventInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSpace?: string;
}

export default function EventInquiryModal({
  isOpen,
  onClose,
  preselectedSpace,
}: EventInquiryModalProps) {
  const [selectedSpace, setSelectedSpace] = useState(preselectedSpace || SPACE_OPTIONS[0].title);
  const [guestCount, setGuestCount] = useState("20");
  const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("Cocktail Reception / Dinner Party");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
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
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#191715]">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C0635A]/20 border border-[#C0635A]/40 flex items-center justify-center text-[#D87C73]">
                  <GlassWater className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-editorial text-xl text-white">Private Events & Buyouts</h3>
                  <p className="text-[11px] text-stone-400 font-light">Rose’s Luxury Events Office</p>
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

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="submitted"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35 }}
                    className="py-8 text-center space-y-5"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-editorial text-3xl text-white">Inquiry Received</h4>
                    <p className="text-stone-300 text-sm font-light leading-relaxed max-w-md mx-auto">
                      Thank you, {name}. Our Director of Private Dining will review your event details for{" "}
                      <strong className="text-[#E8CA72]">{selectedSpace}</strong> and contact you at{" "}
                      <strong className="text-white">{email}</strong> within 24 hours.
                    </p>
                    <motion.button
                      onClick={handleResetAndClose}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-8 py-3 rounded-full bg-[#C0635A] hover:bg-[#D87C73] text-white text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer mt-4"
                    >
                      Close
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                        Select Space
                      </label>
                      <select
                        value={selectedSpace}
                        onChange={(e) => setSelectedSpace(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                      >
                        {SPACE_OPTIONS.map((space) => (
                          <option key={space.id} value={space.title} className="bg-[#1C1A18] text-white">
                            {space.title} ({space.capacity})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                          Estimated Guests
                        </label>
                        <input
                          type="number"
                          min="6"
                          max="120"
                          required
                          value={guestCount}
                          onChange={(e) => setGuestCount(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                          Desired Date
                        </label>
                        <input
                          type="date"
                          required
                          value={eventDate}
                          onChange={(e) => setEventDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37] [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                        Event Type
                      </label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                      >
                        <option value="Cocktail Reception / Dinner Party" className="bg-[#1C1A18]">
                          Cocktail Reception / Dinner Party
                        </option>
                        <option value="Wedding / Rehearsal Dinner" className="bg-[#1C1A18]">
                          Wedding / Rehearsal Dinner
                        </option>
                        <option value="Corporate / Milestone Celebration" className="bg-[#1C1A18]">
                          Corporate / Milestone Celebration
                        </option>
                        <option value="Full Townhouse Buyout" className="bg-[#1C1A18]">
                          Full Townhouse Buyout
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-stone-400 font-medium mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
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
                          Phone *
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
                        Additional Details or Wishes
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Tell us about the vibe, special culinary requests, or timing..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#C0635A] to-[#D87C73] text-white text-xs uppercase tracking-widest font-semibold hover:shadow-xl transition-all cursor-pointer mt-2"
                    >
                      Send Private Dining Inquiry
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

