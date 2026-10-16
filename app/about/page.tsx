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
  ArrowUpRight
} from "lucide-react";
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export default function AboutPage() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Immersive Hero */}
        <section className="relative pt-36 sm:pt-44 pb-20 lg:pb-28 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
              alt={`${RESTAURANT_CONFIG.brandName} Dining Philosophy`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              Honest Craft, Shared Moments, <br className="hidden sm:inline" />
              <span className="text-[#B88960] italic font-light">& Warm Hospitality</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              {RESTAURANT_CONFIG.positioning} Conceived as a celebration of open flame, peak seasonal produce, and unpretentious elegance.
            </p>
          </div>
        </section>

        {/* Narrative & Ethos (Light Cream Contrast) */}
        <section className="py-20 lg:py-28 bg-[#F7F3EC] text-[#1B1714]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" />
                    THE VELORA ESSENCE
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#1B1714] mt-2">
                    Crafted for Savoring, Built for Connecting
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#38302A] leading-relaxed">
                  Great hospitality is never about theatrical pretense; it is about creating an environment where people feel genuinely at home. At VELORA, every plate emerges from a respect for the ingredients: where they were grown, who harvested them, and how simple heat transforms them into memory.
                </p>

                <p className="text-sm sm:text-base text-[#38302A] leading-relaxed">
                  From our wood-fired hearth to our botanical mixology counter, every detail is engineered to foster effortless socializing. We honor the ritual of passing plates across the table, savoring a thoughtfully paired glass of wine, and letting dinner stretch comfortably into the night.
                </p>

                <div className="p-5 bg-[#FDFBF7] border-l-2 border-[#B88960] rounded-sm shadow-sm space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#B88960] font-semibold">
                    The Culinary Philosophy
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5B6851] leading-relaxed">
                    Open wood fire, clean acidity, and unhurried ferments. We favor texture, balance, and ingredients that speak clearly for themselves.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-md overflow-hidden shadow-2xl border border-[#D1C7B7]">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                    alt="Culinary hearth at VELORA"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#1B1714]/90 backdrop-blur-md border border-[#38302A] rounded-sm text-xs text-[#F7F3EC]">
                    <span className="text-[10px] uppercase tracking-wider text-[#B88960] font-semibold block">
                      Contemporary Hospitality
                    </span>
                    <p className="text-[#D1C7B7] mt-0.5">
                      Adaptable for modern culinary concepts, boutique dining rooms, and high-energy social lounges.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pillars of Atmosphere */}
        <section className="py-20 lg:py-28 bg-[#1B1714] border-t border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold">
                OUR COMMITMENTS
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
                Hospitality, Flavor & Ambiance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="espresso-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#B88960]/10 border border-[#B88960]/30 flex items-center justify-center text-[#B88960]">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#F7F3EC]">
                  The Live Hearth
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
                  Steaks, whole catches, and seasonal vegetables roasted over white-oak coals for rich caramelized flavors and aromatic smoke.
                </p>
              </div>

              <div className="espresso-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#B88960]/10 border border-[#B88960]/30 flex items-center justify-center text-[#B88960]">
                  <Wine className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#F7F3EC]">
                  Botanical Mixology
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
                  House-clarified extracts, single-origin amari, and balanced zero-proof infusions crafted with seasonal precision.
                </p>
              </div>

              <div className="espresso-card p-8 rounded-md space-y-4">
                <div className="w-12 h-12 rounded bg-[#B88960]/10 border border-[#B88960]/30 flex items-center justify-center text-[#B88960]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-editorial text-2xl text-[#F7F3EC]">
                  Effortless Grace
                </h3>
                <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
                  Intuitive service that anticipates needs without intruding on conversation, ensuring each visit feels deeply personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Reservation CTA Banner */}
        <section className="py-20 bg-[#120F0D] border-t border-[#38302A]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold">
              JOIN OUR TABLE
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
              Experience {RESTAURANT_CONFIG.brandName}
            </h2>
            <p className="text-sm text-[#D1C7B7] max-w-xl mx-auto leading-relaxed">
              We invite you to savor thoughtfully prepared food and relaxed hospitality.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setReservationOpen(true)}
                className="px-7 py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm flex items-center gap-2 shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>

              <Link
                href="/menu"
                className="px-6 py-3.5 border border-[#38302A] hover:border-[#B88960] text-[#F7F3EC] hover:text-[#B88960] text-xs uppercase tracking-[0.16em] rounded-sm flex items-center gap-2"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
