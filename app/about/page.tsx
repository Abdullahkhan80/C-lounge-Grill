"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Flame, 
  Wine, 
  HeartHandshake, 
  Calendar, 
  ArrowRight,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { C_LOUNGE_INFO } from "@/data/cLoungeData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

export default function AboutPage() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Immersive Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-20 lg:pb-28 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
              alt="C Lounge dining room ambiance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              A Warm Sanctuary of Flavor <br className="hidden sm:inline" />
              <span className="text-[#c9a56a] italic font-light">& Nightlife in the Bronx</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              Founded on the belief that great dining and elevated lounge culture should feel warm, accessible, and unforgettable, C Lounge & Grill welcomes the Bronx to gather, toast, and indulge.
            </p>
          </div>
        </section>

        {/* Narrative & Hospitality Philosophy */}
        <section className="py-20 lg:py-28 bg-[#161616]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" />
                    THE C LOUNGE ESSENCE
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#f5f0e8] mt-2">
                    Crafted for Savoring, Built for Connecting
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                  Located along East 172nd Street, our space was thoughtfully arranged to bridge two distinct worlds: the culinary satisfaction of an authentic grillhouse and the magnetic, celebratory pull of an upscale New York cocktail lounge.
                </p>

                <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                  We believe true hospitality begins the moment you enter our doorway. From the ambient lighting and comfortable seating arrangements to the warmth of our greeting and the meticulous care behind each cocktail pour, our objective is simple: create an environment where time slows down and memories are forged.
                </p>

                <div className="p-5 bg-[#1b1b1b] border-l-2 border-[#c9a56a] rounded-sm space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#c9a56a] font-semibold">
                    The Culinary Philosophy
                  </h4>
                  <p className="text-xs sm:text-sm text-[#a9a39a] leading-relaxed">
                    High heat, vibrant seasoning, and honest ingredients. Every steak cut, skewer, and seafood selection is flame-seared to lock in natural juices and layered with scratch marinades and sauces.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-md overflow-hidden border border-[#2a2a2a] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                    alt="Grill craftsmanship at C Lounge"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#101010]/90 backdrop-blur-md border border-[#262626] rounded-sm text-xs">
                    <span className="text-[10px] uppercase tracking-wider text-[#c9a56a] font-semibold block">
                      Bronx Dining Culture
                    </span>
                    <p className="text-[#f5f0e8] mt-0.5">
                      Bringing prime dining craftsmanship and late-evening lounge sophistication to our community.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillars of Experience */}
        <section className="py-20 lg:py-28 bg-[#101010] border-t border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold">
                OUR COMMITMENTS
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                Hospitality, Flavor & Atmosphere
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="luxury-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#c9a56a]/10 border border-[#c9a56a]/30 flex items-center justify-center text-[#c9a56a]">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#f5f0e8]">
                  Open Flame Grill
                </h3>
                <p className="text-xs sm:text-sm text-[#a9a39a] leading-relaxed">
                  Steaks, chops, and skewers cooked over blazing heat for caramelized crusts, tender interiors, and rich smoky aromas.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#c9a56a]/10 border border-[#c9a56a]/30 flex items-center justify-center text-[#c9a56a]">
                  <Wine className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#f5f0e8]">
                  Crafted Mixology
                </h3>
                <p className="text-xs sm:text-sm text-[#a9a39a] leading-relaxed">
                  Signature cocktails prepared with premium spirits, fresh citrus squeezes, infused syrups, and bespoke flair.
                </p>
              </div>

              <div className="luxury-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#c9a56a]/10 border border-[#c9a56a]/30 flex items-center justify-center text-[#c9a56a]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#f5f0e8]">
                  Community Warmth
                </h3>
                <p className="text-xs sm:text-sm text-[#a9a39a] leading-relaxed">
                  A neighborhood living room where regulars and first-timers alike are greeted as cherished guests of honor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Reservation CTA Banner */}
        <section className="py-20 bg-[#161616] border-t border-[#222222]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold">
              PLAN YOUR VISIT
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
              Experience C Lounge & Grill Tonight
            </h2>
            <p className="text-sm text-[#a9a39a] max-w-xl mx-auto leading-relaxed">
              Join us at 1735 E 172nd St in the Bronx for dinner, drinks, and unforgettable company.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setReservationOpen(true)}
                className="px-7 py-3.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm flex items-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <a
                href={C_LOUNGE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-[#333333] hover:border-[#c9a56a] text-[#f5f0e8] hover:text-[#c9a56a] text-xs uppercase tracking-[0.16em] rounded-sm flex items-center gap-2"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <CLoungeFooter />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
