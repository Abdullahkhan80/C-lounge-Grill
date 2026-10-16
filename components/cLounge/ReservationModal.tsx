"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Sparkles, 
  AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  C_LOUNGE_INFO, 
  SEATING_OPTIONS, 
  PARTY_SIZES, 
  TIME_SLOTS 
} from "@/data/cLoungeData";

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
    seatingArea: "dining",
    specialRequests: "",
  });

  useEffect(() => {
    const currentToday = new Date().toISOString().split("T")[0];
    setToday(currentToday);
    setFormData((prev) => ({ ...prev, date: currentToday }));
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = "Please provide a valid phone number.";
    }
    if (!formData.date) errs.date = "Please select a date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
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
      seatingArea: "dining",
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
          className="fixed inset-0 bg-[#0a0a0a]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#161616] border border-[#2a2a2a] rounded-md shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Subtle Top Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a56a] to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#a9a39a] hover:text-[#f5f0e8] hover:bg-[#222222] rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#c9a56a] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Table Reservation Request
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8] mt-1">
                  Reserve at C Lounge & Grill
                </h3>
                <p className="text-xs text-[#a9a39a] mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#c9a56a]" />
                  1735 E 172nd St, Bronx, NY 10472 · +1 (646) 785-5832
                </p>

                {/* Demo Mode Notice Banner */}
                <div className="mt-3 p-2.5 rounded bg-[#1f1a12] border border-[#c9a56a]/30 flex items-start gap-2 text-[11px] text-[#dfbe85]">
                  <AlertCircle className="w-4 h-4 text-[#c9a56a] shrink-0 mt-0.5" />
                  <span>
                    <strong>Notice:</strong> Reservations are submitted as inquiries. A team member will confirm your table based on availability.
                  </span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full px-3.5 py-2.5 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                    />
                    {errors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(646) 000-0000"
                      className="w-full px-3.5 py-2.5 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@example.com"
                    className="w-full px-3.5 py-2.5 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                      Date *
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                      Preferred Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                      Party Size *
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                    >
                      {PARTY_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                    Seating Experience
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-3 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                  >
                    {SEATING_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                    Special Requests / Celebrations (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="Birthday, anniversary, booth preference, or dietary requests..."
                    className="w-full px-3.5 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] placeholder-[#555] transition-colors"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs uppercase tracking-wider text-[#a9a39a] hover:text-[#f5f0e8] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.15em] transition-all rounded-sm shadow-md hover:shadow-[#c9a56a]/20 flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-[#101010] border-t-transparent rounded-full animate-spin" />
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
            /* Success confirmation screen */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a56a]/10 border border-[#c9a56a] flex items-center justify-center text-[#c9a56a]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8]">
                Reservation Request Received
              </h3>
              
              <p className="text-xs sm:text-sm text-[#a9a39a] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#f5f0e8] font-medium">{formData.fullName}</span>. We have logged your reservation request for <span className="text-[#c9a56a]">{formData.partySize}</span> on <span className="text-[#c9a56a]">{formData.date} at {formData.time}</span>.
              </p>

              <div className="p-4 bg-[#1b1b1b] border border-[#2a2a2a] rounded-sm max-w-md mx-auto text-left text-xs space-y-1.5 text-[#a9a39a]">
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-[#f5f0e8]">1735 E 172nd St, Bronx, NY</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="text-[#f5f0e8]">+1 (646) 785-5832</span>
                </div>
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span className="text-amber-400 font-medium">Pending Confirmation</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.15em] rounded-sm"
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
