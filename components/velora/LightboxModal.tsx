"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryPhoto } from "@/restaurant.config";

interface LightboxProps {
  photo: GalleryPhoto | null;
  photos: GalleryPhoto[];
  onClose: () => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
}

export function LightboxModal({
  photo,
  photos,
  onClose,
  onSelectPhoto,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (photo) {
        const currentIndex = photos.findIndex((p) => p.id === photo.id);
        if (e.key === "ArrowRight") {
          const nextIndex = (currentIndex + 1) % photos.length;
          onSelectPhoto(photos[nextIndex]);
        }
        if (e.key === "ArrowLeft") {
          const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
          onSelectPhoto(photos[prevIndex]);
        }
      }
    };

    if (photo) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [photo, photos, onClose, onSelectPhoto]);

  if (!photo) return null;

  const currentIndex = photos.findIndex((p) => p.id === photo.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    onSelectPhoto(photos[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    onSelectPhoto(photos[prevIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#120F0D]/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 text-[#F7F3EC] hover:text-[#B88960] bg-[#1B1714]/80 rounded-full transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 text-[#F7F3EC] hover:text-[#B88960] bg-[#1B1714]/80 hover:bg-[#25201C] rounded-full transition-colors"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 text-[#F7F3EC] hover:text-[#B88960] bg-[#1B1714]/80 hover:bg-[#25201C] rounded-full transition-colors"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content Area */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full flex flex-col items-center"
        >
          <div className="relative w-full h-[60vh] sm:h-[72vh] rounded overflow-hidden shadow-2xl border border-[#38302A]">
            <Image
              src={photo.image}
              alt={photo.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="mt-4 text-center max-w-xl px-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88960] font-semibold">
              {photo.category} · {currentIndex + 1} of {photos.length}
            </span>
            <h4 className="font-editorial text-lg sm:text-xl text-[#F7F3EC] mt-1">
              {photo.title}
            </h4>
            <p className="text-xs text-[#D1C7B7] mt-1">
              {photo.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
