"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  Phone,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [today, setToday] = useState("2026-10-16");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "2026-10-16",
    time: "7:00 PM",
    partySize: "2 Guests",
    seatingArea: "main-hearth",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const currentToday = new Date().toISOString().split("T")[0];
    setToday(currentToday);
    setFormData((prev) => ({ ...prev, date: currentToday }));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please provide your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = "Please provide a contact phone number.";
    }
    if (!formData.date) errs.date = "Please select a date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        setApiError(result.error || "Failed to process reservation request.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: today,
      time: "7:00 PM",
      partySize: "2 Guests",
      seatingArea: "main-hearth",
      specialRequests: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#120F0D]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#1B1714] border border-[#38302A] rounded-md shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B88960] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#8E867E] hover:text-[#F7F3EC] hover:bg-[#25201C] rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.22em] text-[#B88960] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Table Reservation Request
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC] mt-1">
                  Reserve at {RESTAURANT_CONFIG.brandName}
                </h3>
                <p className="text-xs text-[#D1C7B7] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#B88960]" />
                  {RESTAURANT_CONFIG.contact.addressLine1}, {RESTAURANT_CONFIG.contact.cityStateZip}
                </p>

                {/* Demo Notice Banner */}
                <div className="mt-3 p-3 rounded bg-[#25201C] border border-[#B88960]/30 flex items-start gap-2.5 text-xs text-[#E8E1D5]">
                  <AlertCircle className="w-4 h-4 text-[#B88960] shrink-0 mt-0.5" />
                  <span>
                    <strong>Sales Demo Notice:</strong> This reservation form operates in demonstration mode. In a live deployment, this connects seamlessly to OpenTable, Resy, SevenRooms, or email booking alerts.
                  </span>
                </div>
              </div>

              {apiError && (
                <div className="mb-4 p-3 rounded bg-red-900/30 border border-red-500/50 text-xs text-red-300">
                  {apiError}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Julian Hayes"
                      className="w-full px-3.5 py-2.5 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="julian@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                      Date *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                      Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                    >
                      {RESTAURANT_CONFIG.timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                      Party Size *
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-3 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                    >
                      {RESTAURANT_CONFIG.partySizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                    Seating Experience
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-3.5 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                  >
                    {RESTAURANT_CONFIG.seatingOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                    Special Notes / Celebrations
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Anniversary, dietary preferences, wine requests..."
                    className="w-full px-3.5 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#D1C7B7] hover:text-[#F7F3EC] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm shadow-md flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-[#1B1714] border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Submit Reservation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC]">
                Reservation Request Recorded
              </h3>
              
              <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#F7F3EC] font-medium">{formData.fullName}</span>. We have recorded your request for <span className="text-[#B88960]">{formData.partySize}</span> on <span className="text-[#B88960]">{formData.date} at {formData.time}</span>.
              </p>

              <div className="p-4 bg-[#25201C] border border-[#38302A] rounded-sm max-w-md mx-auto text-left text-xs space-y-1.5 text-[#D1C7B7]">
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span className="text-[#F7F3EC]">{RESTAURANT_CONFIG.brandName} — {RESTAURANT_CONFIG.subBrand}</span>
                </div>
                <div className="flex justify-between">
                  <span>Contact:</span>
                  <span className="text-[#F7F3EC]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span>Demo Mode:</span>
                  <span className="text-[#B88960] font-medium">Ready for Booking Adapter</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
