"use client";

import { useState } from "react";
import { Sparkles, Wine, FileText, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES } from "@/data/restaurantData";

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export default function MenuSection({ onOpenReservation }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("tasting");
  const [showPdfToast, setShowPdfToast] = useState(false);

  const selectedCategory = MENU_CATEGORIES.find((c) => c.id === activeCategory) || MENU_CATEGORIES[0];

  const handleDownloadPdf = () => {
    setShowPdfToast(true);
    setTimeout(() => {
      window.print();
    }, 400);
    setTimeout(() => {
      setShowPdfToast(false);
    }, 4000);
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#0E0D0C] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-6"
        >
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
                Dinner Service & Pairings
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal">
              The Dining Menu
            </h2>
            <p className="text-stone-400 font-light text-sm md:text-base mt-2 max-w-xl">
              An ever-evolving composition of local seasonal produce, wood-hearth warmth,
              and playful American eclectic gastronomy.
            </p>
          </div>

          {/* Action: Print / PDF Menu */}
          <div className="flex items-center space-x-3">
            <motion.button
              onClick={handleDownloadPdf}
              id="download-menu-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs uppercase tracking-widest text-stone-300 hover:text-white transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 mr-2 text-[#D4AF37]" />
              Print / Save Seasonal Menu
            </motion.button>
          </div>
        </motion.div>

        {/* Category Switcher Tabs with Sliding Pill */}
        <div className="flex items-center space-x-2 sm:space-x-4 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {MENU_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm tracking-wider uppercase font-medium transition-colors whitespace-nowrap cursor-pointer z-10 ${
                  isActive ? "text-white" : "text-stone-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[#C0635A] rounded-full shadow-lg shadow-rose-950/40 -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {!isActive && (
                  <div className="absolute inset-0 bg-[#181614] rounded-full border border-white/5 -z-20" />
                )}
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Category Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* Category Banner & Intro */}
            <div className="mb-10 p-6 rounded-2xl bg-[#141210] border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-editorial text-2xl text-[#E8CA72]">
                  {selectedCategory.tagline}
                </h3>
                <p className="text-stone-300 text-sm font-light mt-1 max-w-3xl">
                  {selectedCategory.description}
                </p>
              </div>
              <div className="text-xs text-stone-500 italic shrink-0">
                * Dietary accommodations warmly tailored upon request
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {selectedCategory.items.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.45)" }}
                  className="p-6 md:p-8 rounded-2xl bg-[#141210]/70 border border-white/[0.08] transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Header row: Dish title & Price */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-editorial text-xl md:text-2xl text-[#FBF9F5] group-hover:text-[#E8CA72] transition-colors leading-snug">
                          {dish.name}
                        </h4>
                      </div>
                      <span className="font-editorial text-lg text-[#D4AF37] whitespace-nowrap">
                        {dish.price}
                      </span>
                    </div>

                    {/* Badges row */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {dish.isSignature && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#D4AF37]/20 text-[#E8CA72] border border-[#D4AF37]/30">
                          <Sparkles className="w-2.5 h-2.5 mr-1 animate-pulse-subtle" />
                          Signature
                        </span>
                      )}
                      {dish.dietary?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider text-stone-400 bg-white/5 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-stone-300 text-sm font-light leading-relaxed mb-4">
                      {dish.description}
                    </p>
                  </div>

                  {/* Pairing note */}
                  {dish.pairingNote && (
                    <div className="pt-3 border-t border-white/5 flex items-center text-xs text-stone-400">
                      <Wine className="w-3.5 h-3.5 mr-2 text-[#C0635A] shrink-0" />
                      <span className="text-stone-400">
                        <strong className="text-stone-300 font-normal">Sommelier Note: </strong>
                        {dish.pairingNote}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Seasonal Notice & Reservation Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-3xl bg-gradient-to-r from-[#1C1A18] via-[#161413] to-[#1C1A18] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#E8CA72] font-medium">
              Daily Sourcing & Chef’s Table
            </span>
            <h4 className="font-editorial text-2xl md:text-3xl text-white">
              Prepared to indulge in tonight’s seatings?
            </h4>
            <p className="text-stone-400 text-sm font-light max-w-xl">
              We release prime reservations on a 30-day rolling calendar. Walk-ins are
              welcomed at the ground-floor bar every evening starting at 5:00 PM.
            </p>
          </div>

          <motion.button
            onClick={onOpenReservation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] text-[#0B0A09] font-medium text-xs uppercase tracking-widest shadow-lg hover:shadow-amber-500/25 transition-all cursor-pointer whitespace-nowrap"
          >
            Reserve for Dinner
          </motion.button>
        </motion.div>
      </div>

      {/* PDF Toast Notification with AnimatePresence */}
      <AnimatePresence>
        {showPdfToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-[#1C1A18] border border-[#D4AF37] text-white shadow-2xl flex items-center space-x-3"
          >
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Menu Ready for Printing</p>
              <p className="text-[11px] text-stone-400">Opening your browser’s print view...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

