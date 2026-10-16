"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryPhoto } from "@/data/stClairData";

interface ImageLightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function ImageLightboxModal({ photo, onClose, onNext, onPrev }: ImageLightboxModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {photo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md"
          />

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
            aria-label="Close image modal"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>

          {/* Prev / Next buttons */}
          {onPrev && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onPrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#c5a059] hover:text-[#0d0c0b] transition-all z-40 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          )}

          {onNext && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#c5a059] hover:text-[#0d0c0b] transition-all z-40 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          )}

          {/* Image & Caption Container */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 10 }}
            transition={{ type: "spring", duration: 0.35, bounce: 0.15 }}
            className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center z-10"
          >
            <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
                className="object-contain"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mt-3 sm:mt-4 text-center px-4"
            >
              <h4 className="font-editorial text-lg sm:text-2xl text-white font-bold tracking-wide">
                {photo.title}
              </h4>
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.22em] text-[#c5a059] font-medium block mt-0.5">
                The St. Clair Culinary Collection • Pell City, Alabama
              </span>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
