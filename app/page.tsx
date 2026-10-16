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
  Music,
  ExternalLink,
  ShieldCheck,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { ImageLightboxModal } from "@/components/cLounge/ImageLightboxModal";
import { 
  C_LOUNGE_INFO, 
  EXPERIENCES, 
  SAMPLE_MENU_ITEMS, 
  GALLERY_PHOTOS, 
  SAMPLE_EVENTS,
  GalleryPhoto 
} from "@/data/cLoungeData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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

export default function HomePage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Featured menu items for homepage preview
  const previewDishes = SAMPLE_MENU_ITEMS.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      {/* 1. Navigation */}
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* =========================================================================
            2. HERO SECTION — Inspired by Savoire & Agency Luxury Editorial Layout
            ========================================================================= */}
        <section className="relative pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
          {/* Subtle background ambient gradients */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c9a56a]/5 blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Top Editorial Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-12 border-b border-[#222222]">
              {/* Left Column: Eyebrow + Huge Heading */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="lg:col-span-7 space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#1b1b1b] border border-[#2a2a2a] text-[11px] uppercase tracking-[0.22em] text-[#c9a56a] font-medium">
                  <MapPin className="w-3 h-3 text-[#c9a56a]" />
                  <span>1735 E 172nd St · Bronx, New York</span>
                </div>
                
                <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#f5f0e8] leading-[1.08]">
                  Good Food. <br />
                  <span className="italic font-light text-[#c9a56a]">Great Vibes.</span> <br />
                  Unforgettable Nights.
                </h1>
              </motion.div>

              {/* Right Column: Narrative + Badges + Reserve CTA */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="lg:col-span-5 space-y-6 lg:pl-4"
              >
                <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                  Discover dining, drinks, and an inviting lounge experience in the heart of the Bronx. Savor flame-grilled specialties, handcrafted cocktails, and celebratory evenings surrounded by warm hospitality.
                </p>

                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <div className="border-l-2 border-[#c9a56a] pl-3">
                    <span className="block font-editorial text-2xl text-[#f5f0e8]">10472</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#a9a39a]">Bronx Destination</span>
                  </div>
                  <div className="border-l-2 border-[#c9a56a]/40 pl-3">
                    <span className="block font-editorial text-2xl text-[#f5f0e8]">Grill & Lounge</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#a9a39a]">Full Experience</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    onClick={() => setReservationOpen(true)}
                    className="px-7 py-3.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm shadow-xl hover:shadow-[#c9a56a]/20 flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Your Table</span>
                  </button>

                  <Link
                    href="/menu"
                    className="px-6 py-3.5 border border-[#333333] hover:border-[#c9a56a] text-[#f5f0e8] hover:text-[#c9a56a] text-xs uppercase tracking-[0.16em] transition-all rounded-sm flex items-center gap-2"
                  >
                    <span>Explore Our Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Bottom Cinematic Card with Overlaid Badges & Connectors */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 relative rounded-md overflow-hidden border border-[#262626] shadow-2xl group"
            >
              <div className="relative h-[340px] sm:h-[480px] lg:h-[580px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85"
                  alt="Atmospheric candlelit dining and lounge setting at C Lounge & Grill"
                  fill
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#101010]/80 via-transparent to-[#101010]/60" />

                {/* Overlaid Micro Badges with Lines (Matching Screenshot Aesthetic) */}
                <div className="absolute top-8 left-8 hidden sm:flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#c9a56a]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#f5f0e8] font-semibold bg-[#101010]/80 px-3 py-1 rounded backdrop-blur-sm border border-[#2a2a2a]">
                    Warm Hospitality
                  </span>
                </div>

                <div className="absolute top-1/2 right-8 hidden md:flex items-center gap-3">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#f5f0e8] font-semibold bg-[#101010]/80 px-3 py-1 rounded backdrop-blur-sm border border-[#2a2a2a]">
                    Exquisite Cuisines
                  </span>
                  <div className="w-8 h-[1px] bg-[#c9a56a]" />
                </div>

                <div className="absolute bottom-10 left-8 sm:left-12 max-w-lg">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-medium flex items-center gap-1.5 mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Lounge & Dining Sanctuary</span>
                  </span>
                  <p className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8]">
                    Flame-Broiled Steaks, Craft Libations & Modern Social Energy
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =========================================================================
            3. WELCOME SECTION — Asymmetrical Editorial Story Block
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#161616] border-y border-[#222222] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Asymmetrical Photo Duo */}
              <div className="lg:col-span-6 relative">
                <div className="relative h-[380px] sm:h-[460px] w-full rounded overflow-hidden border border-[#2a2a2a] shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80"
                    alt="Flame grilled steak cuisine at C Lounge & Grill"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/70 via-transparent to-transparent" />
                </div>

                {/* Overlapping secondary image */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 h-56 sm:h-72 rounded overflow-hidden border-2 border-[#161616] shadow-2xl hidden xs:block">
                  <Image
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80"
                    alt="Handcrafted cocktail creation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Story Copy */}
              <div className="lg:col-span-6 space-y-6 lg:pl-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" />
                    WELCOME TO C LOUNGE & GRILL
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8] mt-2 leading-tight">
                    Where Great Food Meets Great Atmosphere
                  </h2>
                </div>

                <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                  Located at 1735 E 172nd Street in the Bronx, C Lounge & Grill was envisioned as an elevated neighborhood haven. We bring together the bold warmth of flame-broiled grill cuisine, creative handcrafted mixology, and an intimate lounge atmosphere.
                </p>

                <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                  Whether you are planning a relaxed dinner with family, an intimate date night over candlelit cocktails, or a lively weekend gathering with close friends, our doors are open with genuine New York hospitality.
                </p>

                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c9a56a] hover:text-[#dfbe85] font-semibold group"
                  >
                    <span>Discover Our Story</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            4. EXPERIENCE SECTION — 3 Signature Experiences
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#101010]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold">
                THE TRIPLE ESSENCE
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                Curated For Every Occasion
              </h2>
              <p className="text-xs sm:text-sm text-[#a9a39a]">
                Three interconnected dimensions blending dinner, drinks, and nightlife under one roof.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.id}
                  className="luxury-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/40 to-transparent" />
                    <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 bg-[#101010]/80 rounded border border-[#2a2a2a] text-[#c9a56a]">
                      {exp.eyebrow}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <h3 className="font-editorial text-2xl text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#a9a39a] leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>

                    <ul className="pt-2 border-t border-[#262626] space-y-2 text-xs text-[#a9a39a]">
                      {exp.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a56a]" />
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
            5. SIGNATURE MENU PREVIEW — Clean Editable Preview Structure
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#161616] border-y border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  CULINARY & COCKTAIL PREVIEW
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                  Savor Our Favorites
                </h2>
                <p className="text-xs sm:text-sm text-[#a9a39a] max-w-lg">
                  A preview of our kitchen offerings, from flame-grilled specialties to signature libations. (Owner editable data structure).
                </p>
              </div>

              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1b1b1b] hover:bg-[#c9a56a] text-[#c9a56a] hover:text-[#101010] border border-[#c9a56a]/30 transition-all text-xs uppercase tracking-[0.16em] font-semibold rounded-sm self-start md:self-auto"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {previewDishes.map((item) => (
                <div
                  key={item.id}
                  className="luxury-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent opacity-60" />
                    {item.isSignature && (
                      <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#c9a56a] text-[#101010] rounded-sm shadow">
                        Highlight
                      </span>
                    )}
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <h4 className="font-editorial text-lg text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-sm font-semibold text-[#c9a56a]">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#a9a39a] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {item.pairingNote && (
                      <p className="text-[11px] text-[#736e67] italic pt-2 border-t border-[#262626]">
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
            6. AMBIENCE SECTION — Dramatic Image-Led Storytelling
            ========================================================================= */}
        <section className="relative py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=85"
              alt="Lounge ambience at C Lounge & Grill"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/85 to-[#101010]/70" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                <Music className="w-3.5 h-3.5" />
                NIGHTLIFE & SOCIAL REFINEMENT
              </span>

              <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#f5f0e8] leading-[1.15]">
                More Than Dining. <br />
                <span className="text-[#c9a56a] italic font-light">It’s an Experience.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#a9a39a] leading-relaxed">
                As the daylight fades into twilight over the Bronx, C Lounge & Grill transitions into an energetic, candlelit escape. Soft golden lighting illuminates the room, clinking glasses punctuate melodic soundtracks, and laughter fills our booths.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#262626]">
                <div>
                  <h4 className="font-editorial text-xl text-[#f5f0e8]">Curated Sounds</h4>
                  <p className="text-xs text-[#a9a39a] mt-1">
                    Carefully programmed music complementing dinner conversation and late-night lounge energy.
                  </p>
                </div>
                <div>
                  <h4 className="font-editorial text-xl text-[#f5f0e8]">Celebration Space</h4>
                  <p className="text-xs text-[#a9a39a] mt-1">
                    Spacious seating and hospitality dedicated to birthdays, toasts, and social evenings.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setReservationOpen(true)}
                  className="px-6 py-3.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-xl"
                >
                  Reserve an Evening
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. EVENTS PREVIEW — Editable Sample Cards (Clearly Marked)
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#161616] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  SPECIAL OCCASIONS & EVENINGS
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                  Upcoming Evenings
                </h2>
                <p className="text-xs sm:text-sm text-[#a9a39a] max-w-md">
                  Preview of recurring lounge programming and private booking capabilities. (Sample customizable slots).
                </p>
              </div>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c9a56a] hover:text-[#dfbe85] font-semibold"
              >
                <span>Explore Events & Inquiries</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SAMPLE_EVENTS.map((evt) => (
                <div
                  key={evt.id}
                  className="luxury-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 bg-[#101010]/80 text-[#c9a56a] rounded-sm border border-[#2a2a2a]">
                      {evt.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider text-[#c9a56a] font-medium flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>{evt.date} · {evt.time}</span>
                      </div>
                      <h4 className="font-editorial text-xl text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-[#a9a39a] leading-relaxed">
                        {evt.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#262626] flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#736e67]">
                        Sample Preview Format
                      </span>
                      <Link
                        href="/events"
                        className="text-xs text-[#c9a56a] hover:underline flex items-center gap-1"
                      >
                        <span>Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. GALLERY PREVIEW — Editorial Image Grid with Lightbox
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#101010]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold">
                  MOMENTS & ATMOSPHERE
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                  A Glimpse Inside C Lounge
                </h2>
                <p className="text-xs sm:text-sm text-[#a9a39a]">
                  Click any photo to view in high resolution.
                </p>
              </div>

              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c9a56a] hover:text-[#dfbe85] font-semibold"
              >
                <span>View Complete Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {GALLERY_PHOTOS.slice(0, 4).map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative h-64 sm:h-80 rounded overflow-hidden cursor-pointer group border border-[#222222]"
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#101010]/30 group-hover:bg-[#101010]/10 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <span className="text-[10px] uppercase tracking-wider text-[#c9a56a]">
                      {photo.category}
                    </span>
                    <p className="text-xs font-medium text-[#f5f0e8] line-clamp-1">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            9. VISIT US SECTION — Accurate Bronx Business Info & Map
            ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#161616] border-t border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Address, Phone, CTAs */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5" />
                    VISIT C LOUNGE & GRILL
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8] mt-2">
                    In the Heart of the Bronx
                  </h2>
                </div>

                <div className="space-y-4 text-sm text-[#a9a39a]">
                  <div className="p-4 bg-[#1b1b1b] border border-[#2a2a2a] rounded-sm space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#c9a56a] font-semibold">
                      Location & Address
                    </h4>
                    <p className="text-[#f5f0e8] font-medium text-base">
                      C Lounge & Grill
                    </p>
                    <p>1735 E 172nd St, Bronx, NY 10472, United States</p>
                  </div>

                  <div className="p-4 bg-[#1b1b1b] border border-[#2a2a2a] rounded-sm space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-[#c9a56a] font-semibold">
                      Direct Telephone
                    </h4>
                    <p className="text-base text-[#f5f0e8]">
                      <a href={`tel:${C_LOUNGE_INFO.phoneRaw}`} className="hover:text-[#c9a56a] transition-colors">
                        +1 (646) 785-5832
                      </a>
                    </p>
                    <p className="text-xs text-[#736e67]">
                      For reservations, private lounge celebrations, or takeout inquiries.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={C_LOUNGE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.15em] rounded-sm flex items-center gap-2 shadow"
                  >
                    <span>Get Directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={`tel:${C_LOUNGE_INFO.phoneRaw}`}
                    className="px-5 py-3 border border-[#333333] hover:border-[#c9a56a] text-[#f5f0e8] hover:text-[#c9a56a] text-xs uppercase tracking-[0.15em] rounded-sm flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Us</span>
                  </a>

                  <Link
                    href="/contact"
                    className="px-5 py-3 bg-[#1b1b1b] hover:bg-[#252525] text-[#a9a39a] hover:text-[#f5f0e8] text-xs uppercase tracking-[0.15em] rounded-sm"
                  >
                    Contact Page
                  </Link>
                </div>
              </div>

              {/* Right Column: Google Maps Embed Card */}
              <div className="lg:col-span-7">
                <div className="relative h-[380px] sm:h-[450px] w-full rounded-md overflow-hidden border border-[#2a2a2a] shadow-2xl">
                  <iframe
                    src={C_LOUNGE_INFO.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="C Lounge & Grill Google Map"
                  />
                  {/* Subtle Floating Location Badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#101010]/95 backdrop-blur-md p-3.5 rounded border border-[#2a2a2a] shadow-xl text-xs space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#c9a56a] font-semibold block">
                      C Lounge & Grill
                    </span>
                    <p className="text-[#f5f0e8]">1735 E 172nd St, Bronx, NY 10472</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <CLoungeFooter />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {/* Image Lightbox */}
      <ImageLightboxModal
        photo={selectedPhoto}
        photos={GALLERY_PHOTOS}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />
    </div>
  );
}
