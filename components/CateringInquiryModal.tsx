"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Phone, Calendar, Users, Building, Send, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ST_CLAIR_DATA } from "@/data/stClairData";

interface CateringInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CateringInquiryModal({ isOpen, onClose }: CateringInquiryModalProps) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("Private Dinner");
  const [guestCount, setGuestCount] = useState("20");
  const [preferredDate, setPreferredDate] = useState("");
  const [space, setSpace] = useState("The St. Clair Dining Room");
  const [notes, setNotes] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = "Name is required";
    if (!phone.trim()) errs.phone = "Phone number is required";
    if (!email.trim() || !email.includes("@")) errs.email = "Valid email is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.12 }}
            className="relative w-full max-w-xl bg-[#1a1917] text-[#faf7f0] rounded-2xl shadow-2xl border border-white/10 overflow-hidden my-4 z-10 max-h-[92vh] flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#141312] px-5 sm:px-6 py-4 sm:py-5 border-b border-white/10 flex items-center justify-between shrink-0">
              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#c5a059] block">
                  Private Gatherings & Celebrations
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Private Dining & Catering Inquiry
                </h3>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-5 py-4"
                >
                  <div className="w-16 h-16 bg-[#c5a059]/20 text-[#c5a059] rounded-full flex items-center justify-center mx-auto border border-[#c5a059]/40">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-editorial text-2xl font-bold text-white">
                      Inquiry Received
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, {fullName}. Our event management team led by Jennifer Andrews will review your request for approximately {guestCount} guests and contact you at {phone} within 24 hours.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#22201e] border border-white/10 text-xs text-slate-300 max-w-md mx-auto space-y-1.5 text-left">
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">Event Type:</span>
                      <span className="font-semibold text-white">{eventType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1">
                      <span className="text-slate-400">Space:</span>
                      <span className="font-semibold text-white">{space}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-slate-400">Date Requested:</span>
                      <span className="font-semibold text-[#c5a059]">{preferredDate || "To be discussed"}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 text-xs font-semibold flex items-center justify-center gap-2"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                      <span>Call (659) 658-4271</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 bg-[#c5a059] text-[#0d0c0b] font-bold text-xs rounded-xl hover:brightness-110 cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-3 py-2 bg-[#161514] border rounded-lg text-white outline-none transition-colors ${
                          errors.fullName ? "border-rose-500" : "border-white/15 focus:border-[#c5a059]"
                        }`}
                      />
                      {errors.fullName && <p className="text-rose-400 text-[10px] mt-0.5">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="(205) 555-0199"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3 py-2 bg-[#161514] border rounded-lg text-white outline-none transition-colors ${
                          errors.phone ? "border-rose-500" : "border-white/15 focus:border-[#c5a059]"
                        }`}
                      />
                      {errors.phone && <p className="text-rose-400 text-[10px] mt-0.5">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Email Address *</label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3 py-2 bg-[#161514] border rounded-lg text-white outline-none transition-colors ${
                        errors.email ? "border-rose-500" : "border-white/15 focus:border-[#c5a059]"
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-[10px] mt-0.5">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Event Type</label>
                      <select
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                        className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white outline-none focus:border-[#c5a059]"
                      >
                        <option value="Private Dinner">Private Dinner</option>
                        <option value="Rehearsal Dinner">Rehearsal Dinner</option>
                        <option value="Corporate Gathering">Corporate Event</option>
                        <option value="Birthday / Anniversary">Birthday / Milestone</option>
                        <option value="Off-Site Catering">Off-Site Catering</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Approx. Guests</label>
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white outline-none focus:border-[#c5a059]"
                      >
                        <option value="8-12">8 – 12 Guests</option>
                        <option value="12-20">12 – 20 Guests</option>
                        <option value="20-35">20 – 35 Guests</option>
                        <option value="35-50">35 – 50 Guests</option>
                        <option value="50+">50+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-medium">Preferred Date</label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Preferred Venue Setting</label>
                    <select
                      value={space}
                      onChange={(e) => setSpace(e.target.value)}
                      className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white outline-none focus:border-[#c5a059]"
                    >
                      <option value="The St. Clair Dining Room">The St. Clair Dining Room (Intimate & Refined)</option>
                      <option value="The Tavern Area">The Tavern (Lively Bar & Dining Atmosphere)</option>
                      <option value="Full Restaurant Buyout">Full Restaurant Buyout</option>
                      <option value="Off-Site Venue">Delivered to Our Venue (Catering)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">Event Details / Menu Preferences</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your celebration, timing, dietary requirements, or favorite menu items..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white outline-none focus:border-[#c5a059] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 text-slate-400 hover:text-white cursor-pointer"
                    >
                      Cancel
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-2.5 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] font-bold text-xs rounded-xl shadow-md hover:brightness-110 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Event Inquiry</span>
                    </motion.button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
