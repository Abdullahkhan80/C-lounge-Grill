"use client";

import { motion } from "framer-motion";

interface MobileReserveBarProps {
  onOpenReservation: () => void;
}

export default function MobileReserveBar({ onOpenReservation }: MobileReserveBarProps) {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#121110]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 shadow-2xl flex items-center justify-between"
    >
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium flex items-center">
          ⭐ Michelin-Starred Dining
        </span>
        <span className="text-xs text-stone-300 font-light">
          Dinner • Capitol Hill
        </span>
      </div>

      <motion.button
        onClick={onOpenReservation}
        whileTap={{ scale: 0.94 }}
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] text-[#0B0A09] text-xs uppercase tracking-widest font-semibold shadow-lg transition-all cursor-pointer"
      >
        Book a Table
      </motion.button>
    </motion.div>
  );
}

