"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { ST_CLAIR_DATA } from "@/data/stClairData";

interface MobileReserveBarProps {
  onOpenReservation: () => void;
}

export function MobileReserveBar({ onOpenReservation }: MobileReserveBarProps) {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#141312]/95 backdrop-blur-xl border-t border-white/15 px-3.5 py-2.5 shadow-2xl flex items-center justify-between gap-2.5"
    >
      <div className="flex flex-col min-w-0">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
          <span className="text-[10px] uppercase tracking-wider text-[#c5a059] font-bold truncate">
            The St. Clair
          </span>
        </div>
        <span className="text-[11px] text-slate-300 font-light truncate">
          Pell City, AL • Open 7 Days
        </span>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <a
          href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
          aria-label="Call restaurant"
          className="p-2.5 rounded-xl bg-white/10 text-white border border-white/15 hover:bg-white/20 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
        </a>

        <motion.button
          onClick={onOpenReservation}
          whileTap={{ scale: 0.94 }}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] text-xs uppercase tracking-wider font-bold shadow-lg flex items-center gap-1.5 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Reserve</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default MobileReserveBar;
