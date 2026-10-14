"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Maximize2, 
  Calendar, 
  ArrowRight, 
  UtensilsCrossed, 
  Wine, 
  Building2 
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { StClairNavbar } from "@/components/StClairNavbar";
import { StClairFooter } from "@/components/StClairFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { MobileReserveBar } from "@/components/MobileReserveBar";
import { ST_CLAIR_DATA, GalleryPhoto } from "@/data/stClairData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "food" | "cocktails" | "atmosphere">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [reservationOpen, setReservationOpen] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "all") return ST_CLAIR_DATA.gallery;
    return ST_CLAIR_DATA.gallery.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black pb-16 sm:pb-0">
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/St-Clair-southern-oysters.jpg"
            alt="The St. Clair Gallery"
            fill
            className="object-cover opacity-20 filter brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0c]/90 via-[#0e0d0c]/95 to-[#0e0d0c]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c19] border border-[#c5a059]/40 text-[#c5a059] text-xs font-medium uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Visual Culinary Journey
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f4efe6] tracking-tight leading-tight">
            Restaurant Gallery
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            Authentic culinary creations, handcrafted cocktails, and the warm Southern atmosphere of The St. Clair in Pell City.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[58px] sm:top-[73px] z-30 bg-[#12100e]/95 backdrop-blur-md border-b border-[#26231f] py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
          {[
            { id: "all", label: "All Photography" },
            { id: "food", label: "Steaks & Cuisine" },
            { id: "cocktails", label: "Craft Cocktails" },
            { id: "atmosphere", label: "Atmosphere & Venue" },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 tracking-wide whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-[#0e0d0c] font-bold"
                    : "text-[#b5ab9d] hover:text-[#f4efe6] hover:bg-[#25221d] border border-[#2f2b26]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] rounded-full shadow-md shadow-[#c5a059]/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                layout
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#161412] border border-[#2b2722] hover:border-[#c5a059]/60 transition-all duration-300 cursor-pointer shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#f4efe6] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-4 h-4 text-[#c5a059]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#0e0d0c]/80 text-[#c5a059] border border-[#c5a059]/30 mb-1.5">
                    {photo.category}
                  </span>
                  <p className="font-editorial text-sm sm:text-base text-[#f4efe6] line-clamp-2 group-hover:text-[#c5a059] transition-colors leading-snug">
                    {photo.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-14 sm:py-16 bg-[#161412] border-t border-[#2a2622]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="font-editorial text-2xl sm:text-4xl text-[#f4efe6] font-bold">
            Taste What You See in Person
          </h2>
          <p className="text-xs sm:text-sm text-[#a89f91] max-w-xl mx-auto">
            Book a dinner table at The St. Clair or stop in for lunch, happy hour, or Sunday brunch at The Tavern.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setReservationOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              Reserve on Resy
            </motion.button>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1c1a17] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <StClairFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* Mobile Sticky Booking Bar */}
      <MobileReserveBar onOpenReservation={() => setReservationOpen(true)} />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <ImageLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />
    </div>
  );
}
