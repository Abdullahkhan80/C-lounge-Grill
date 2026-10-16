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
  Music,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { ImageLightboxModal } from "@/components/cLounge/ImageLightboxModal";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/cLoungeData";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "dining" | "cocktails" | "lounge">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [reservationOpen, setReservationOpen] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "all") return GALLERY_PHOTOS;
    return GALLERY_PHOTOS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Gallery Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Experiences</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              The C Lounge Atmosphere
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              Step inside our world of flame-grilled specialties, handcrafted mixology, and sophisticated Bronx nightlife.
            </p>

            <div className="mt-4 text-[11px] text-[#736e67] italic">
              * Photography captures the refined hospitality and lounge atmosphere of C Lounge & Grill.
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="sticky top-[69px] z-30 bg-[#101010]/95 backdrop-blur-md border-b border-[#222222] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "all"
                    ? "bg-[#c9a56a] text-[#101010]"
                    : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                }`}
              >
                All Atmosphere
              </button>

              <button
                onClick={() => setActiveFilter("dining")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "dining"
                    ? "bg-[#c9a56a] text-[#101010]"
                    : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                }`}
              >
                Dining & Grill
              </button>

              <button
                onClick={() => setActiveFilter("cocktails")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "cocktails"
                    ? "bg-[#c9a56a] text-[#101010]"
                    : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                }`}
              >
                Cocktails & Bar
              </button>

              <button
                onClick={() => setActiveFilter("lounge")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "lounge"
                    ? "bg-[#c9a56a] text-[#101010]"
                    : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                }`}
              >
                Lounge & Nights
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24 bg-[#101010]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative h-80 rounded-md overflow-hidden cursor-pointer border border-[#262626] bg-[#161616]"
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#101010]/80 text-[#c9a56a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#262626]">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a56a] font-semibold block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="font-editorial text-xl text-[#f5f0e8]">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#a9a39a] mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8]">
                Come Experience the Vibes in Person
              </h3>
              <p className="text-xs text-[#a9a39a]">
                1735 E 172nd St, Bronx, NY 10472 · Open for evening dinner & lounge
              </p>
              <div>
                <button
                  onClick={() => setReservationOpen(true)}
                  className="px-6 py-3 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all"
                >
                  Reserve Your Table
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CLoungeFooter />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <ImageLightboxModal
        photo={selectedPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}
