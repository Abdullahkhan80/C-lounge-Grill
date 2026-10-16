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
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { LightboxModal } from "@/components/velora/LightboxModal";
import { RESTAURANT_CONFIG, GalleryPhoto } from "@/restaurant.config";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "culinary" | "cocktails" | "atmosphere" | "social">("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [reservationOpen, setReservationOpen] = useState(false);

  const filteredPhotos = useMemo(() => {
    if (activeFilter === "all") return RESTAURANT_CONFIG.galleryPhotos;
    return RESTAURANT_CONFIG.galleryPhotos.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Gallery Hero */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atmospheric Archive</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              The VELORA Gallery
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              Step inside our dining room, open hearth pass, and evening cocktail lounge.
            </p>

            <div className="mt-4 text-[11px] text-[#8E867E] italic">
              * Demonstration imagery curated to illustrate the bespoke visual aesthetic of the sales demo.
            </div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="sticky top-[69px] z-20 bg-[#1B1714]/95 backdrop-blur-md border-b border-[#38302A] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "all"
                    ? "bg-[#B88960] text-[#1B1714]"
                    : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                }`}
              >
                All Moments
              </button>

              <button
                onClick={() => setActiveFilter("culinary")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "culinary"
                    ? "bg-[#B88960] text-[#1B1714]"
                    : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                }`}
              >
                Culinary & Hearth
              </button>

              <button
                onClick={() => setActiveFilter("cocktails")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "cocktails"
                    ? "bg-[#B88960] text-[#1B1714]"
                    : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                }`}
              >
                Cocktails & Bar
              </button>

              <button
                onClick={() => setActiveFilter("atmosphere")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "atmosphere"
                    ? "bg-[#B88960] text-[#1B1714]"
                    : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                }`}
              >
                Dining Room
              </button>

              <button
                onClick={() => setActiveFilter("social")}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeFilter === "social"
                    ? "bg-[#B88960] text-[#1B1714]"
                    : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                }`}
              >
                Social Lounge
              </button>
            </div>
          </div>
        </section>

        {/* Gallery Masonry Grid */}
        <section className="py-16 lg:py-24 bg-[#1B1714]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="group relative h-80 rounded-md overflow-hidden cursor-pointer border border-[#38302A] bg-[#25201C]"
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1B1714]/80 text-[#B88960] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-[#38302A]">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom details */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#B88960] font-semibold block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="font-editorial text-xl text-[#F7F3EC]">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#D1C7B7] mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Reservation Callout */}
            <div className="mt-16 text-center space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC]">
                Ready to Join Us for Dinner?
              </h3>
              <p className="text-xs text-[#D1C7B7]">
                We welcome reservations for tables of all sizes in our dining room and lounge.
              </p>
              <div>
                <button
                  onClick={() => setReservationOpen(true)}
                  className="px-6 py-3 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all"
                >
                  Reserve Your Table
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <LightboxModal
        photo={selectedPhoto}
        photos={RESTAURANT_CONFIG.galleryPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}
