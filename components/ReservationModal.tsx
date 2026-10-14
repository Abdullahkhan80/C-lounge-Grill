"use client";

import React, { useState } from "react";
import { X, Calendar, Users, Clock, ExternalLink, Phone, Info, UtensilsCrossed, Wine, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ST_CLAIR_DATA } from "@/data/stClairData";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [diningRoomPref, setDiningRoomPref] = useState<"st-clair" | "tavern">("st-clair");
  const [partySize, setPartySize] = useState(2);
  const [time, setTime] = useState("18:30");

  const handleResyRedirect = () => {
    window.open(ST_CLAIR_DATA.resyUrl, "_blank", "noopener,noreferrer");
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

          {/* Modal Container */}
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
                  The St. Clair & Tavern
                </span>
                <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Table Reservations & Walk-Ins
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

            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
              {/* Two Experience Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#c5a059] mb-2.5">
                  Select Your Dining Experience
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDiningRoomPref("st-clair")}
                    className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                      diningRoomPref === "st-clair"
                        ? "border-[#c5a059] bg-[#22201e] ring-2 ring-[#c5a059]/25 shadow-lg"
                        : "border-white/10 bg-[#161514] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Wine className="w-4 h-4 text-[#c5a059]" />
                      <span className="font-bold text-sm text-white">The St. Clair</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Intimate dining room. Wed – Sat dinner. Reservations recommended via Resy.
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDiningRoomPref("tavern")}
                    className={`p-3.5 rounded-xl border text-left transition-all relative cursor-pointer ${
                      diningRoomPref === "tavern"
                        ? "border-[#c5a059] bg-[#22201e] ring-2 ring-[#c5a059]/25 shadow-lg"
                        : "border-white/10 bg-[#161514] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <UtensilsCrossed className="w-4 h-4 text-[#c5a059]" />
                      <span className="font-bold text-sm text-white">The Tavern</span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      Lively bar & dining. Open 7 days. First-come, first-served seating.
                    </p>
                  </button>
                </div>
              </div>

              {diningRoomPref === "tavern" ? (
                /* Tavern Walk-in Notice */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-[#22201e] border border-white/10 text-xs space-y-2 text-slate-300"
                >
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Info className="w-4 h-4 text-[#c5a059]" />
                    <span>The Tavern Welcomes Walk-Ins 7 Days a Week</span>
                  </div>
                  <p className="leading-relaxed text-slate-400 text-[11px] sm:text-xs">
                    Seating at The Tavern and bar is first-come, first-served for lunch, happy hour, dinner, and Sunday brunch. No advance reservations are required! Simply stop in or call ahead for large parties.
                  </p>
                </motion.div>
              ) : (
                /* St. Clair Resy Guidance */
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">Party Size</label>
                      <select
                        value={partySize}
                        onChange={(e) => setPartySize(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white font-medium focus:border-[#c5a059] outline-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 mb-1 font-medium">Preferred Time</label>
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full px-3 py-2 bg-[#161514] border border-white/15 rounded-lg text-white font-medium focus:border-[#c5a059] outline-none"
                      >
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#22201e] border border-white/10 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-white block">Official Booking Provider: Resy</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Online reservations for The St. Clair dining room are verified and secured directly on Resy. Clicking below opens our live reservation portal.
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleResyRedirect}
                  className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 text-[#0d0c0b] font-bold text-xs rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Book Table on Resy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                  className="w-full sm:w-auto py-3 px-4 bg-white/10 hover:bg-white/15 text-slate-200 border border-white/15 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Call (659) 658-4271</span>
                </motion.a>
              </div>

              <p className="text-[11px] text-slate-500 text-center leading-tight">
                For parties of 8 or more or private dining events, please call us directly or use our Catering & Events inquiry form.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
