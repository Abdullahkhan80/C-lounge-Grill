"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Phone, 
  UtensilsCrossed, 
  Wine, 
  Sparkles, 
  ChevronRight, 
  Flame, 
  ArrowUpRight,
  Compass,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { LightboxModal } from "@/components/velora/LightboxModal";
import { RESTAURANT_CONFIG, GalleryPhoto } from "@/restaurant.config";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function HomePage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const featuredDishes = RESTAURANT_CONFIG.menuItems.filter((i) => i.isFeatured);

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      {/* 1. Global Demo Notification Banner */}
      <DemoBanner />

      {/* 2. Seasonal Announcement Bar */}
      <AnnouncementBar />

      {/* 3. Header / Navigation */}
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* =========================================================================
            HERO SECTION — Full-Screen Cinematic Ambiance & Editorial Typography
            ========================================================================= */}
        <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-4 sm:px-6 lg:px-8">
          {/* Background Imagery with Rich Espresso Vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85"
              alt={`${RESTAURANT_CONFIG.brandName} Dining Ambiance`}
              fill
              className="object-cover object-center scale-105 animate-pulse duration-[8000ms]"
              priority
            />
            {/* Dark Vignettes & Warm Contrast Layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1714] via-[#1B1714]/70 to-[#120F0D]/75" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1714]/90 via-transparent to-[#1B1714]/90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1B1714]/50 to-[#120F0D]/95" />
          </div>

          {/* Hero Content Container */}
          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6 pt-12">
            
            {/* Eyebrow Pill */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25201C]/80 border border-[#B88960]/30 backdrop-blur-md text-xs uppercase tracking-[0.25em] text-[#E8E1D5]"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B88960]" />
              <span>{RESTAURANT_CONFIG.subBrand} · Open Hearth & Craft Mixology</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#F7F3EC] leading-[1.08] font-normal"
            >
              Taste the <span className="italic font-light text-[#B88960]">Moment.</span>
            </motion.h1>

            {/* Supporting Editorial Line */}
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-[#D1C7B7] max-w-2xl mx-auto leading-relaxed font-light"
            >
              Where thoughtfully prepared food, relaxed upscale dining, and magnetic social energy meet. An adaptable hospitality destination curated for lingering evenings.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="pt-4 flex flex-wrap items-center justify-center gap-4"
            >
              <button
                onClick={() => setReservationOpen(true)}
                className="px-8 py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm shadow-xl hover:shadow-[#B88960]/20 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              <Link
                href="/menu"
                className="px-8 py-3.5 border border-[#38302A] bg-[#25201C]/60 hover:border-[#B88960] text-[#F7F3EC] hover:text-[#B88960] text-xs uppercase tracking-[0.16em] transition-all rounded-sm backdrop-blur-sm flex items-center gap-2"
              >
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Micro Details Overlaid Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs text-[#8E867E] uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88960]" />
                <span>Wood-Fired Hearth</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88960]" />
                <span>Botanical Mixology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88960]" />
                <span>Private Gatherings</span>
              </div>
            </motion.div>
          </div>

          {/* Tasteful Scroll Cue */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[#8E867E]">
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#B88960]" />
          </div>
        </section>

        {/* =========================================================================
            ASYMMETRICAL RESTAURANT INTRO & COLLAGE (Light Warm Cream Contrast)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#F7F3EC] text-[#1B1714] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Asymmetrical Photo Duo */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[380px] sm:h-[480px] w-full rounded-md overflow-hidden shadow-2xl border border-[#D1C7B7]/50">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Wood-Fired Culinary Craft"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-xs text-[#F7F3EC] uppercase tracking-wider font-medium">
                    Hearth Craft & Seasonality
                  </div>
                </div>

                {/* Overlapping secondary image */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-60 h-52 sm:h-68 rounded-md overflow-hidden shadow-2xl border-4 border-[#F7F3EC] hidden xs:block">
                  <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
                    alt="Botanical cocktail pour"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Editorial Copy */}
              <div className="lg:col-span-6 space-y-6 lg:pl-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" />
                    DISCOVER {RESTAURANT_CONFIG.brandName}
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-5xl text-[#1B1714] mt-2 leading-tight">
                    Where Honest Food Meets Refined Atmosphere
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#38302A] leading-relaxed">
                  {RESTAURANT_CONFIG.positioning} Conceived as a celebration of open fire, seasonal ingredients, and thoughtful craftsmanship, we invite guests to step out of the daily rush and savor each moment.
                </p>

                <p className="text-sm sm:text-base text-[#38302A] leading-relaxed">
                  Whether gathering for a lively evening of sharing plates and botanical cocktails, a quiet mid-week dinner, or a private celebratory milestone, every corner of our space is crafted with natural materials and attentive hospitality.
                </p>

                <div className="pt-2 flex items-center gap-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B88960] hover:text-[#976D49] font-semibold group transition-colors"
                  >
                    <span>Read Our Philosophy</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    href="/reservations"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#1B1714] hover:text-[#B88960] font-semibold transition-colors"
                  >
                    <span>Reserve a Table</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            FEATURED DISHES EDITORIAL GRID (Dark Espresso Elegance)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#1B1714] border-t border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  SEASONAL PREVIEWS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
                  Featured Creations
                </h2>
                <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-lg">
                  A representative selection from our hearth and cellar. Easily modified to reflect your actual seasonal repertoire.
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#25201C] hover:bg-[#B88960] text-[#B88960] hover:text-[#1B1714] border border-[#B88960]/30 transition-all text-xs uppercase tracking-[0.16em] font-semibold rounded-sm self-start md:self-auto"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDishes.slice(0, 4).map((item) => (
                <div
                  key={item.id}
                  className="espresso-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25201C] to-transparent opacity-60" />
                    <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#B88960] text-[#1B1714] rounded-sm shadow">
                      {item.dietary?.[0] || "Signature"}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <h4 className="font-editorial text-xl text-[#F7F3EC] group-hover:text-[#B88960] transition-colors leading-snug">
                          {item.name}
                        </h4>
                        <span className="text-sm font-semibold text-[#B88960] shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#D1C7B7] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.pairingNote && (
                      <p className="text-[11px] text-[#8E867E] italic pt-2 border-t border-[#38302A]">
                        {item.pairingNote}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            ATMOSPHERIC FULL-WIDTH STORYTELLING SECTION
            ========================================================================= */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85"
              alt={`${RESTAURANT_CONFIG.brandName} evening ambiance`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120F0D] via-[#120F0D]/90 to-[#120F0D]/75" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                <Wine className="w-3.5 h-3.5" />
                RELAXED UPSCALE HOSPITALITY
              </span>

              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#F7F3EC] leading-[1.15]">
                More Than a Meal. <br />
                <span className="text-[#B88960] italic font-light">A Social Ritual.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
                As dusk settles, our space transforms. Ambient candlelight plays off raw clay and dark walnut surfaces, while the hum of conversation pairs with soulful music and the rhythmic clinking of coupes.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#38302A]">
                <div>
                  <h4 className="font-editorial text-xl text-[#F7F3EC]">Open Hearth Pass</h4>
                  <p className="text-xs text-[#D1C7B7] mt-1 leading-relaxed">
                    Watch our culinary brigade sear over open white-oak coals.
                  </p>
                </div>
                <div>
                  <h4 className="font-editorial text-xl text-[#F7F3EC]">Botanical Bar</h4>
                  <p className="text-xs text-[#D1C7B7] mt-1 leading-relaxed">
                    House cordials, heritage amari, and zero-proof artisanal tonics.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setReservationOpen(true)}
                  className="px-7 py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-xl"
                >
                  Reserve Your Table
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            DINING EXPERIENCES (Dine In, Social Lounge, Celebrations)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#120F0D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold">
                CURATED ENVIRONMENTS
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
                Three Distinct Ways to Savor
              </h2>
              <p className="text-xs sm:text-sm text-[#D1C7B7]">
                Designed to transition effortlessly from relaxed lunch meetings to romantic dinners and late-night toasts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RESTAURANT_CONFIG.experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="espresso-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25201C] via-[#25201C]/40 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-[#120F0D]/80 rounded border border-[#38302A] text-[#B88960]">
                      {exp.tagline}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-editorial text-2xl text-[#F7F3EC] group-hover:text-[#B88960] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    <ul className="pt-2 border-t border-[#38302A] space-y-2 text-xs text-[#D1C7B7]">
                      {exp.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B88960]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            CHEF'S PHILOSOPHY SECTION (Without Invented Biography)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#414B39] text-[#F7F3EC] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              {RESTAURANT_CONFIG.philosophy.eyebrow}
            </span>

            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
              {RESTAURANT_CONFIG.philosophy.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#E8E1D5] max-w-2xl mx-auto leading-relaxed font-light">
              "{RESTAURANT_CONFIG.philosophy.lead}"
            </p>

            <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-3xl mx-auto leading-relaxed">
              {RESTAURANT_CONFIG.philosophy.description}
            </p>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F3EC] text-[#1B1714] hover:bg-[#E8E1D5] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow"
              >
                <span>Read Full Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            GALLERY PREVIEW SECTION
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#1B1714] border-t border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold">
                  VISUAL ARCHIVE
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
                  Inside {RESTAURANT_CONFIG.brandName}
                </h2>
                <p className="text-xs sm:text-sm text-[#D1C7B7]">
                  Atmospheric glimpses of dining, mixology, and celebratory evenings. Click to view high-resolution imagery.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#B88960] hover:text-[#CBA079] font-semibold"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {RESTAURANT_CONFIG.galleryPhotos.slice(0, 4).map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative h-64 sm:h-80 rounded overflow-hidden cursor-pointer group border border-[#38302A]"
                >
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#120F0D]/30 group-hover:bg-[#120F0D]/10 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-wider text-[#B88960]">
                      {photo.category}
                    </span>
                    <p className="text-xs font-medium text-[#F7F3EC] line-clamp-1">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            RESERVATION CTA SECTION (Deep Espresso Elegance)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#120F0D] border-t border-[#38302A] text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center justify-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              PLAN YOUR EVENING
            </span>

            <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
              Reserve Your Table at {RESTAURANT_CONFIG.brandName}
            </h2>

            <p className="text-sm sm:text-base text-[#D1C7B7] max-w-xl mx-auto leading-relaxed">
              We look forward to welcoming you. Join us in the dining room, around the hearth pass, or in the social lounge for an evening of warm hospitality.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setReservationOpen(true)}
                className="px-8 py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-xl"
              >
                Book a Reservation
              </button>

              <Link
                href="/events"
                className="px-8 py-3.5 border border-[#38302A] hover:border-[#B88960] text-[#F7F3EC] hover:text-[#B88960] text-xs uppercase tracking-[0.16em] rounded-sm transition-all"
              >
                Inquire for Private Events
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            VISIT / LOCATION BLOCK (Owner Editable)
            ========================================================================= */}
        <section className="py-20 bg-[#1B1714] border-t border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    LOCATION & HOURS
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl text-[#F7F3EC] mt-2">
                    In the Heart of the District
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#D1C7B7]">
                  <div className="p-4 bg-[#25201C] border border-[#38302A] rounded-sm space-y-1">
                    <h4 className="text-xs uppercase tracking-wider text-[#B88960] font-semibold">
                      Address
                    </h4>
                    <p className="text-[#F7F3EC] font-medium">
                      {RESTAURANT_CONFIG.brandName} — {RESTAURANT_CONFIG.subBrand}
                    </p>
                    <p>{RESTAURANT_CONFIG.contact.addressLine1}, {RESTAURANT_CONFIG.contact.suite}</p>
                    <p>{RESTAURANT_CONFIG.contact.cityStateZip}</p>
                  </div>

                  <div className="p-4 bg-[#25201C] border border-[#38302A] rounded-sm space-y-1">
                    <h4 className="text-xs uppercase tracking-wider text-[#B88960] font-semibold">
                      Direct Telephone & Inquiries
                    </h4>
                    <p className="text-base text-[#F7F3EC]">
                      <a href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`} className="hover:text-[#B88960] transition-colors">
                        {RESTAURANT_CONFIG.contact.phoneDisplay}
                      </a>
                    </p>
                    <p className="text-xs text-[#8E867E]">
                      {RESTAURANT_CONFIG.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={RESTAURANT_CONFIG.contact.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    className="px-5 py-2.5 border border-[#38302A] text-[#E8E1D5] hover:text-[#B88960] text-xs uppercase tracking-wider rounded-sm"
                  >
                    Full Contact Page
                  </Link>
                </div>
              </div>

              {/* Right Column: Stylized District Map Graphic */}
              <div className="lg:col-span-6">
                <div className="relative h-[340px] sm:h-[400px] w-full rounded-md overflow-hidden border border-[#38302A] bg-[#25201C] shadow-2xl flex items-center justify-center p-8 text-center">
                  <div className="space-y-4 max-w-sm">
                    <div className="w-12 h-12 rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960] mx-auto">
                      <Compass className="w-6 h-6" />
                    </div>
                    <h4 className="font-editorial text-2xl text-[#F7F3EC]">
                      Interactive Map Component
                    </h4>
                    <p className="text-xs text-[#D1C7B7] leading-relaxed">
                      Custom Google Maps or Mapbox tiles activate automatically once client coordinates and Google Maps API key are provided in configuration.
                    </p>
                    <a
                      href={RESTAURANT_CONFIG.contact.googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#B88960] hover:underline uppercase tracking-wider font-semibold"
                    >
                      <span>Open Location in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        photo={selectedPhoto}
        photos={RESTAURANT_CONFIG.galleryPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}
