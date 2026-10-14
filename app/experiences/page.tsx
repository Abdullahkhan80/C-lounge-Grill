"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Wine, 
  Beer, 
  Sparkles, 
  ExternalLink, 
  Users, 
  Check, 
  UtensilsCrossed, 
  ShieldCheck, 
  Phone
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { StClairNavbar } from "@/components/StClairNavbar";
import { StClairFooter } from "@/components/StClairFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { MobileReserveBar } from "@/components/MobileReserveBar";
import { ST_CLAIR_DATA } from "@/data/stClairData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
};

export default function ExperiencesPage() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black pb-16 sm:pb-0">
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/steak-baked-potato.jpg"
            alt="The St. Clair Dining Experience"
            fill
            className="object-cover opacity-20 filter brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0c]/90 via-[#0e0d0c]/95 to-[#0e0d0c]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c19] border border-[#c5a059]/40 text-[#c5a059] text-xs font-medium uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Two Unique Ambiances Under One Roof
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f4efe6] tracking-tight max-w-4xl mx-auto leading-tight">
            The St. Clair <span className="italic font-normal text-[#c5a059]">&</span> The Tavern
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 sm:mt-6 text-base sm:text-xl text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            Upscale culinary craft meets warm Southern hospitality in Pell City. Choose between an intimate fine dining evening or a lively neighborhood tavern experience.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setReservationOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all shadow-lg shadow-[#c5a059]/10 inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve The St. Clair</span>
            </motion.button>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1c1a17] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 hover:bg-[#25221d] transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Explore Menus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Experience 1: The St. Clair Dining Room */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              <Wine className="w-3.5 h-3.5" />
              Intimate & Elevated
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4efe6] leading-tight">
              The St. Clair <span className="italic font-normal text-[#c5a059]">Dining Room</span>
            </h2>
            <p className="text-base sm:text-lg text-[#c5a059] font-editorial italic">
              Reserved for romantic dates, quiet conversations & milestone celebrations.
            </p>
            <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed">
              Designed as a serene sanctuary away from the hustle of daily life, The St. Clair dining room provides a tranquil, candlelit setting. Open Wednesday through Saturday evenings, this space is dedicated to culinary artistry, featuring center-cut Certified Angus Beef steaks, jumbo sea scallops, and fresh seafood flown in and hand-prepped daily.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Open Wednesday through Saturday starting at 4:00 PM for dinner",
                "Certified Angus Beef hand-cut steaks, chops & fresh Gulf seafood",
                "Sommelier-curated collection of 30 wines by the glass & 50+ cellar bottles",
                "Attentive white-linen hospitality with dedicated table service",
                "Reservations highly recommended via Resy or telephone",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a059]">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#ddd5c7]">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setReservationOpen(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c5a059] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#d8b46e] transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve via Resy</span>
              </motion.button>
              <Link
                href="/menu"
                className="text-xs sm:text-sm text-[#c5a059] hover:text-[#d8b46e] underline underline-offset-4 font-semibold inline-flex items-center gap-1"
              >
                <span>View Dinner Menu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:col-span-6 relative">
            <div className="relative h-80 sm:h-[480px] rounded-2xl overflow-hidden border border-[#2e2a25] shadow-2xl">
              <Image
                src="/images/stclair/steak-baked-potato.jpg"
                alt="The St. Clair Hand-Cut Steaks"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-transparent to-transparent opacity-85" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-[#2e2a25]">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#c5a059] font-medium">Signature Selection</p>
                    <p className="font-editorial text-sm sm:text-lg text-[#f4efe6]">14oz Certified Angus NY Strip & Scallops</p>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#c5a059]/20 text-[#c5a059] text-[10px] sm:text-xs font-semibold shrink-0">Resy Seating</span>
                </div>
              </div>
            </div>

            {/* Inset badge photo */}
            <div className="hidden sm:block absolute -top-5 -left-5 w-32 h-32 rounded-xl overflow-hidden border-2 border-[#c5a059]/40 shadow-xl">
              <Image
                src="/images/stclair/scallops.jpg"
                alt="Pan-Seared Sea Scallops"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience 2: The Tavern */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 bg-[#141210] border-y border-[#26231f]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div variants={fadeInUp} className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative h-80 sm:h-[480px] rounded-2xl overflow-hidden border border-[#2e2a25] shadow-2xl">
                <Image
                  src="/images/stclair/burger.jpg"
                  alt="The Tavern Exit 158 Smashburger"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-[#2e2a25]">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#c5a059] font-medium">Tavern Staple</p>
                      <p className="font-editorial text-sm sm:text-lg text-[#f4efe6]">Exit 158 Double Smashed Burger</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-[#38332c] text-[#e8e0d4] text-[10px] sm:text-xs font-semibold shrink-0">Walk-Ins Welcome</span>
                  </div>
                </div>
              </div>

              {/* Inset photo */}
              <div className="hidden sm:block absolute -bottom-5 -right-5 w-36 h-36 rounded-xl overflow-hidden border-2 border-[#c5a059]/40 shadow-xl">
                <Image
                  src="/images/stclair/St-Clair-Tavern-cocktail.jpg"
                  alt="Handcrafted Tavern Cocktail"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-6 order-1 lg:order-2 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-medium uppercase tracking-widest">
                <Beer className="w-3.5 h-3.5" />
                Casual & Lively
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4efe6] leading-tight">
                The <span className="italic font-normal text-[#c5a059]">Tavern</span>
              </h2>
              <p className="text-base sm:text-lg text-[#c5a059] font-editorial italic">
                A warm, bustling gathering spot open 7 days a week.
              </p>
              <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed">
                Whether dropping in for lunch with coworkers, catching up over weekday Happy Hour, or watching the game with neighbors, The Tavern offers open seating, relaxed hospitality, and hearty culinary comfort. Featuring smashed craft burgers, smoked chicken wings, fried green tomatoes, and rotating taps.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Open 7 days a week for lunch, dinner & Sunday brunch",
                  "First-come, first-served open seating — no reservation required",
                  "Weekday Happy Hour: Monday through Friday from 3:00 PM – 6:00 PM",
                  "Rotating craft drafts, domestic favorites & seasonal hand-shaken cocktails",
                  "Full food menu served at the bar and tavern tables",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a059]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#ddd5c7]">{point}</span>
                  </div>
                ))}
              </div>

              {/* Happy hour highlight */}
              <div className="p-4 rounded-xl bg-[#1c1a17] border border-[#38332c] text-xs sm:text-sm">
                <div className="flex items-center justify-between font-editorial text-[#f4efe6] mb-1">
                  <span className="font-bold text-[#c5a059]">Tavern Happy Hour Specials</span>
                  <span className="text-xs text-[#a89f91]">Mon – Fri • 3pm – 6pm</span>
                </div>
                <p className="text-xs text-[#b0a79a] leading-relaxed">
                  $1 off draft & domestic beers • $1 off well cocktails • $6 half order smoked wings • $11 fried green tomato duo • $12 smash burger
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c5a059] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#d8b46e] transition-all inline-flex items-center justify-center gap-2"
                >
                  <UtensilsCrossed className="w-4 h-4" />
                  <span>View Tavern Menu</span>
                </Link>
                <Link
                  href="/contact"
                  className="text-xs sm:text-sm text-[#c5a059] hover:text-[#d8b46e] underline underline-offset-4 font-semibold inline-flex items-center gap-1"
                >
                  <span>Get Directions to Pell City</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Experience 3: Sunday Brunch */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden border border-[#2e2a25] bg-[#161412] p-6 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden md:block">
            <Image
              src="/images/stclair/steal-potatoes-and-eggs.jpg"
              alt="Sunday Brunch Steak and Eggs"
              fill
              className="object-cover"
            />
          </div>

          <motion.div variants={fadeInUp} className="relative z-10 max-w-2xl space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-medium uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              Every Sunday 11:00 AM – 3:00 PM
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4efe6] leading-tight">
              Sunday Brunch <span className="italic font-normal text-[#c5a059]">Tradition</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed">
              Sundays at The St. Clair are a celebrated Pell City ritual. Gather after morning services or sleep in and join us for hot scratch buttermilk biscuits, steak & eggs with crispy home fries, shrimp & grits, handcrafted bloody marys, and fresh mimosas.
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#1f1d19] border border-[#2f2b26]">
                <p className="text-[10px] text-[#a89f91] uppercase tracking-wider">Seating</p>
                <p className="font-editorial text-sm text-[#f4efe6] mt-0.5 font-bold">First-Come Seating</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1f1d19] border border-[#2f2b26]">
                <p className="text-[10px] text-[#a89f91] uppercase tracking-wider">Hours</p>
                <p className="font-editorial text-sm text-[#f4efe6] mt-0.5 font-bold">11:00 AM – 3:00 PM</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1f1d19] border border-[#2f2b26]">
                <p className="text-[10px] text-[#a89f91] uppercase tracking-wider">Evening</p>
                <p className="font-editorial text-sm text-[#f4efe6] mt-0.5 font-bold">Dinner 3:00 – 8:00 PM</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/menu"
                className="px-6 py-3 rounded-xl bg-[#c5a059] text-[#0d0c0b] font-bold text-xs sm:text-sm tracking-wide uppercase hover:bg-[#d8b46e] transition-all inline-flex items-center gap-2"
              >
                <span>View Sunday Brunch Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Comparison Matrix */}
      <section className="py-16 sm:py-20 bg-[#12100e] border-t border-[#26231f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#f4efe6] font-light">
              Side-by-Side <span className="italic font-normal text-[#c5a059]">Comparison</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#a89f91]">
              A handy overview to help you plan your next visit to The St. Clair.
            </p>
            <p className="text-[11px] text-[#c5a059] mt-1 md:hidden">
              Swipe table horizontally to view both rooms →
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#2e2a25] shadow-xl">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-[#2e2a25] bg-[#161412]">
                  <th className="py-4 px-5 text-xs uppercase tracking-wider text-[#8b8377] font-medium">Feature</th>
                  <th className="py-4 px-5 text-sm font-editorial font-bold text-[#c5a059] bg-[#1a1815]">
                    The St. Clair Dining Room
                  </th>
                  <th className="py-4 px-5 text-sm font-editorial font-bold text-[#f4efe6]">
                    The Tavern
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#221f1c] text-xs sm:text-sm text-[#cdc4b6]">
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Ambiance</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50 text-[#f4efe6]">Quiet, intimate, candlelit, romantic</td>
                  <td className="py-4 px-5">Lively, energetic, casual, neighborhood bar</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Reservation Policy</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50 text-[#c5a059] font-semibold">Recommended via Resy</td>
                  <td className="py-4 px-5">Walk-in only (First-come, first-served)</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Operating Schedule</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50">Wednesday – Saturday (Evenings)</td>
                  <td className="py-4 px-5">Open 7 days a week (Lunch, Happy Hour, Dinner)</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Menu Focus</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50">Certified Angus Steaks, Sea Scallops, Gulf Seafood</td>
                  <td className="py-4 px-5">Smashburgers, Smoked Wings, Bang Bang Shrimp, Sandwiches</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Bar Program</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50">30 Wines by the glass, 50+ cellar bottles</td>
                  <td className="py-4 px-5">Craft tap beers, domestic pints, seasonal cocktails</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Sunday Brunch</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50">Open seating during Sunday Brunch (11am – 3pm)</td>
                  <td className="py-4 px-5">Open seating during Sunday Brunch (11am – 3pm)</td>
                </tr>
                <tr>
                  <td className="py-4 px-5 uppercase tracking-wider text-[#8b8377] font-medium text-[11px]">Dress Code</td>
                  <td className="py-4 px-5 bg-[#1a1815]/50">Smart casual</td>
                  <td className="py-4 px-5">Casual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Reservation CTA Strip */}
      <section className="py-14 sm:py-16 bg-[#171512] border-t border-[#2a2622]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="font-editorial text-2xl sm:text-4xl text-[#f4efe6] font-light">
            Ready to Experience <span className="italic font-normal text-[#c5a059]">The St. Clair?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#a89f91] max-w-xl mx-auto">
            Book your table in the dining room via Resy, or drop by The Tavern whenever you are in Pell City.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setReservationOpen(true)}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve on Resy</span>
            </motion.button>
            <a
              href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#201d19] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#3b352d] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call (659) 658-4271</span>
            </a>
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
    </div>
  );
}
