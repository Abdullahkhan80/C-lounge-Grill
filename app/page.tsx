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
  ExternalLink, 
  ChevronRight, 
  Users, 
  HeartHandshake, 
  Compass, 
  Coffee 
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { StClairNavbar } from "@/components/StClairNavbar";
import { StClairFooter } from "@/components/StClairFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { CateringInquiryModal } from "@/components/CateringInquiryModal";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { MobileReserveBar } from "@/components/MobileReserveBar";
import { ST_CLAIR_DATA, GalleryPhoto } from "@/data/stClairData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 28 },
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

export default function StClairHomePage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [cateringOpen, setCateringOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  // Featured Menu Highlights for Home
  const featuredDishes = [
    {
      title: "14oz Certified Angus NY Strip",
      price: "$48",
      category: "The St. Clair Dinner",
      desc: "Center-cut Certified Angus Beef strip steak char-broiled with roasted garlic compound butter, loaded baked potato & seasonal vegetables.",
      image: "/images/stclair/steak-baked-potato.jpg",
    },
    {
      title: "Pan-Seared Sea Scallops on Grits",
      price: "$34",
      category: "Chef Signature",
      desc: "Jumbo Atlantic sea scallops pan-seared in brown butter over stone-ground creamy cheese grits with charred sweet corn & pancetta relish.",
      image: "/images/stclair/scallops.jpg",
    },
    {
      title: "Exit 158 Smashburger",
      price: "$15",
      category: "Tavern Specialty",
      desc: "Two 4oz smashed Certified Angus Beef patties, sharp cheddar, lettuce, red onion, vine tomato, housemade pickles, spicy aioli on toasted brioche.",
      image: "/images/stclair/burger.jpg",
    },
    {
      title: "Signature Gulf Shrimp & Grits",
      price: "$24",
      category: "Southern Tradition",
      desc: "Wild Gulf shrimp, stone-ground heirloom grits, trinity of peppers and onions, rich Cajun cream reduction.",
      image: "/images/stclair/St-Clair-shrimps-and-grits.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#141312] text-[#faf7f0] pb-16 sm:pb-0">
      {/* 1. Branded Navigation */}
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* 2 - 5. Full-Screen Restaurant Hero Photograph */}
        <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 sm:pt-40 md:pt-44 pb-20 sm:pb-28">
          {/* Hero Photograph with Dark Espresso Vignette */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/stclair/steak-baked-potato.jpg"
              alt="Certified Angus Beef steak at The St. Clair"
              fill
              priority
              className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            />
            {/* Rich cinematic dark overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-black/60" />
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 my-auto"
          >
            {/* Elegant Subtitle */}
            <motion.div variants={fadeInUp} className="inline-flex">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a1917]/90 border border-[#c5a059]/40 backdrop-blur-md shadow-lg shadow-black/50">
                <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
                <span className="text-[11px] sm:text-xs font-sans font-bold uppercase tracking-[0.25em] text-[#dfbe7d]">
                  Pell City, Alabama
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] max-w-4xl mx-auto"
            >
              Casual Dining. <br />
              <span className="italic font-normal text-[#dfbe7d]">Exceptional Food.</span>
            </motion.h1>

            {/* Narrative lead */}
            <motion.p
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light"
            >
              Welcome to The St. Clair and Tavern at The St. Clair. Hand-cut Certified Angus Beef steaks, fresh coastal seafood, weekly chef specials, and warm Southern hospitality under one roof.
            </motion.p>

            {/* Primary and Secondary CTAs */}
            <motion.div
              variants={fadeInUp}
              className="pt-2 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto"
            >
              <Link
                href="/menu"
                className="w-full xs:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 text-[#0d0c0b] font-bold text-xs sm:text-sm tracking-wide shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setReservationOpen(true)}
                className="w-full xs:w-auto px-7 py-3.5 rounded-xl bg-black/40 hover:bg-black/60 text-white font-bold text-xs sm:text-sm tracking-wide border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#c5a059]" />
                <span>Reserve a Table</span>
              </motion.button>
            </motion.div>

            {/* Responsive Highlights Bar */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-6 text-xs text-slate-300"
            >
              <div className="flex items-center justify-center gap-2 py-1 bg-white/[0.02] sm:bg-transparent rounded-lg">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Open 7 Days a Week</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-1 bg-white/[0.02] sm:bg-transparent rounded-lg">
                <Wine className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>30+ Wines by the Glass</span>
              </div>
              <div className="flex items-center justify-center gap-2 py-1 bg-white/[0.02] sm:bg-transparent rounded-lg">
                <Coffee className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Sunday Brunch 11am – 3pm</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 6. Two Distinct Dining Experiences */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-20 sm:py-24 bg-[#141312] border-t border-white/10 relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block">
                Two Distinct Experiences
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Find Your Dining Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                Whether you’re gathering for lively drinks after work or planning an intimate evening celebration, we have a table prepared for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* Experience 1: The Tavern */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1917] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059]/40 transition-all shadow-xl"
              >
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/stclair/burger.jpg"
                    alt="The Tavern casual dining and burger"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#c5a059] border border-white/10">
                    Casual & Lively • Open 7 Days
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                      The Tavern
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      A welcoming, laid-back dining room and full-service bar open seven days a week for lunch, dinner, and Sunday brunch. Enjoy local Alabama draft brews, signature smashburgers, jumbo smoked wings, and handcrafted cocktails.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Seating is first-come, first-served (Walk-ins welcome)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Happy Hour Monday – Friday from 3:00 PM – 6:00 PM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Sunday Brunch with open seating from 11:00 AM – 3:00 PM</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col xs:flex-row xs:items-center justify-between gap-3 border-t border-white/10">
                    <Link
                      href="/menu"
                      className="text-xs font-bold text-[#c5a059] hover:underline flex items-center gap-1"
                    >
                      <span>View Tavern Menu</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-medium">Walk-Ins Welcome Daily</span>
                  </div>
                </div>
              </motion.div>

              {/* Experience 2: The St. Clair Dining Room */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="bg-[#1a1917] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059]/40 transition-all shadow-xl"
              >
                <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                  <Image
                    src="/images/stclair/steak-baked-potato.jpg"
                    alt="The St. Clair elevated steakhouse dining room"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#dfbe7d] border border-white/10">
                    Intimate & Elevated • Wed – Sat Dinner
                  </span>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                      The St. Clair Dining Room
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      A quieter, more intimate setting designed for date nights, milestone celebrations, and refined dining. Enjoy prime Certified Angus Beef steaks, pan-seared scallops, fresh oysters, and over 80 wine selections.
                    </p>
                    <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/5">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Open Wednesday through Saturday for refined dinner service</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Hand-cut Certified Angus Steaks & coastal Gulf seafood</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] shrink-0" />
                        <span>Reservations recommended via Resy (walk-ins also accommodated)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-col xs:flex-row xs:items-center justify-between gap-3 border-t border-white/10">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setReservationOpen(true)}
                      className="px-4 py-2 rounded-lg bg-[#c5a059] text-[#0d0c0b] text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Reserve via Resy</span>
                    </motion.button>
                    <Link
                      href="/experiences"
                      className="text-xs text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 7 & 8. Featured Menu Highlights */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-20 sm:py-24 bg-[#0d0c0b] border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-16">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block mb-2">
                  Culinary Craft
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Featured Menu Highlights
                </h2>
              </div>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a059] hover:underline"
              >
                <span>View Full Menus (Brunch, Lunch & Dinner)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* 4 Featured Dishes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredDishes.map((dish, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#1a1917] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059]/40 transition-all shadow-md"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-bold text-[#c5a059] border border-white/10">
                      {dish.price}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        {dish.category}
                      </span>
                      <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors leading-snug">
                        {dish.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-400 font-light leading-relaxed">
                        {dish.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 10. Sunday Brunch Promotion */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-16 sm:py-20 bg-[#161514] border-t border-b border-white/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
              <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
                <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="/images/stclair/steal-potatoes-and-eggs.jpg"
                    alt="Sunday Brunch Steak and Eggs"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-bold text-[#c5a059] uppercase tracking-wider block">
                      Every Sunday • 11:00 AM – 3:00 PM
                    </span>
                    <span className="font-editorial text-lg sm:text-xl font-bold">
                      Open Seating • No Reservations Required
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-5">
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block">
                  Weekend Tradition
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Sunday Brunch at The St. Clair
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  Join us every Sunday from 11:00 AM to 3:00 PM for our beloved Southern brunch. Indulge in Steak & Eggs, fresh buttermilk biscuits with housemade jam, Gulf shrimp & grits, eggs benedict, and classic brunch cocktails like Mimosas and spicy Bloody Marys.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#1f1d1b] border border-white/10">
                    <span className="font-bold text-white text-xs block">Tavern Steak Bowl</span>
                    <span className="text-[11px] text-slate-400">Smoked beef, potatoes, sunny egg</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1f1d1b] border border-white/10">
                    <span className="font-bold text-white text-xs block">Housemade Biscuits</span>
                    <span className="text-[11px] text-slate-400">Warm biscuits, chef butter & jam</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1f1d1b] border border-white/10">
                    <span className="font-bold text-white text-xs block">Steak & Eggs</span>
                    <span className="text-[11px] text-slate-400">Angus sirloin or NY strip</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <Link
                    href="/menu"
                    className="px-6 py-3 rounded-xl bg-[#c5a059] text-[#0d0c0b] font-bold text-xs hover:brightness-110 transition-all flex items-center gap-1.5"
                  >
                    <span>View Sunday Brunch Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-xs text-slate-400">
                    Followed by Sunday Dinner (3:00 PM – 8:00 PM)
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 9. Meet the Culinary Team */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-20 sm:py-24 bg-[#141312] border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block">
                Hospitality & Craft
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Meet Our Culinary & Service Team
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-light max-w-xl mx-auto leading-relaxed">
                The skilled artisans dedicated to scratch cooking, Southern flavor, and attentive hospitality in Pell City.
              </p>
            </motion.div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {ST_CLAIR_DATA.team.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="bg-[#1a1917] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-[#c5a059]/40 transition-all text-center shadow-lg"
                >
                  <div className="relative h-60 w-full overflow-hidden bg-[#22201e]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1917] via-transparent to-transparent" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h3 className="font-editorial text-lg font-bold text-white group-hover:text-[#c5a059] transition-colors">
                        {member.name}
                      </h3>
                      <span className="text-[11px] font-sans font-semibold text-[#c5a059] block mt-0.5">
                        {member.role}
                      </span>
                      <p className="mt-2.5 text-[11px] text-slate-400 font-light line-clamp-3 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a059] hover:underline"
              >
                <span>Read Full Team Profiles & Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* 11. Private Dining & Catering */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-16 sm:py-20 bg-[#0d0c0b] border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={fadeInUp}
              className="bg-[#1a1917] rounded-3xl border border-white/10 p-6 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 shadow-2xl relative overflow-hidden"
            >
              <div className="space-y-4 max-w-2xl relative z-10">
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block">
                  Events & Gatherings
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                  Make Your Next Gathering Special
                </h2>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  From rehearsal dinners and corporate celebrations to family milestone birthdays and full off-site catering, The St. Clair team crafts customized menus and private dining packages.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 sm:gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5"><span className="text-[#c5a059]">✓</span> Private Room Reservations</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#c5a059]">✓</span> Tailored Multi-Course Menus</span>
                  <span className="flex items-center gap-1.5"><span className="text-[#c5a059]">✓</span> Dedicated Hospitality Staff</span>
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCateringOpen(true)}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 text-[#0d0c0b] font-bold text-xs rounded-xl shadow-lg transition-all text-center cursor-pointer"
                >
                  Plan Your Event / Catering
                </motion.button>
                <Link
                  href="/catering-events"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/15 text-center transition-all"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* 12. Restaurant Gallery */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-20 sm:py-24 bg-[#141312] border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-12 sm:mb-14">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block mb-2">
                  Visual Tour
                </span>
                <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
                  Restaurant & Food Gallery
                </h2>
              </div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#c5a059] hover:underline"
              >
                <span>View Complete 16-Photo Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Gallery Grid (8 featured photos) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {ST_CLAIR_DATA.gallery.slice(0, 8).map((photo) => (
                <motion.div
                  key={photo.id}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActivePhoto(photo)}
                  className="relative h-40 sm:h-56 rounded-xl overflow-hidden border border-white/10 cursor-pointer group shadow-md"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white text-xs font-medium line-clamp-1">
                      {photo.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* 13. Location, Hours, and Directions */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="py-20 sm:py-24 bg-[#0d0c0b]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#c5a059] font-bold block mb-2">
                    Visit Us
                  </span>
                  <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-white">
                    Location & Hours
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Address:</span>
                      <span>{ST_CLAIR_DATA.address.full}</span>
                      <a
                        href="https://maps.google.com/?q=2413+Dr+John+Haynes+Pell+City+AL+35125"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c5a059] hover:underline block text-xs mt-1 font-semibold"
                      >
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block">Telephone:</span>
                      <a href={`tel:${ST_CLAIR_DATA.phoneRaw}`} className="hover:text-[#c5a059]">
                        {ST_CLAIR_DATA.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#c5a059] flex-shrink-0 mt-0.5" />
                    <div className="w-full">
                      <span className="font-bold text-white block mb-2">Weekly Service Hours:</span>
                      <div className="space-y-2 text-xs">
                        {ST_CLAIR_DATA.hours.map((h, i) => (
                          <div key={i} className="flex flex-col xs:flex-row xs:justify-between border-b border-white/5 pb-1 gap-0.5">
                            <span className="text-slate-400">{h.days}:</span>
                            <span className="font-semibold text-white">{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setReservationOpen(true)}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#c5a059] text-[#0d0c0b] font-bold text-xs hover:brightness-110 cursor-pointer shadow-md text-center"
                  >
                    Reserve Table via Resy
                  </motion.button>
                  <a
                    href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/15 text-center"
                  >
                    Call (659) 658-4271
                  </a>
                </div>
              </motion.div>

              {/* Interactive Directions Card */}
              <motion.div
                variants={fadeInUp}
                className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#1a1917] flex items-center justify-center p-6 text-center"
              >
                <div className="space-y-4 max-w-sm">
                  <div className="w-12 h-12 rounded-full bg-[#c5a059]/10 text-[#c5a059] flex items-center justify-center mx-auto border border-[#c5a059]/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-bold text-white">
                      The St. Clair Restaurant & Tavern
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      2413 Dr John Haynes Drive, Pell City, AL 35125
                    </p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=2413+Dr+John+Haynes+Pell+City+AL+35125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-md"
                  >
                    <span>View Interactive Map & Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#c5a059]" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* 14. Elegant Contact Footer */}
      <StClairFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* Mobile Sticky Booking Bar */}
      <MobileReserveBar onOpenReservation={() => setReservationOpen(true)} />

      {/* Modals with Framer Motion */}
      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <CateringInquiryModal
        isOpen={cateringOpen}
        onClose={() => setCateringOpen(false)}
      />

      <ImageLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
      />
    </div>
  );
}
