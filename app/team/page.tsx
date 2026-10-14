"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  HeartHandshake, 
  UtensilsCrossed, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  Award, 
  Compass, 
  Quote
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

export default function TeamPage() {
  const [reservationOpen, setReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black pb-16 sm:pb-0">
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/StClair-bldg-scaled.jpg"
            alt="The St. Clair Building in Pell City"
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
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c19] border border-[#c5a059]/40 text-[#c5a059] text-xs font-medium uppercase tracking-widest mb-4 shadow-md">
            <HeartHandshake className="w-3.5 h-3.5" />
            Culinary Craft & Southern Hospitality
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f4efe6] tracking-tight leading-tight">
            Meet Our Team
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            The talented hands, passionate chefs, and warm hosts who bring exceptional food and memorable moments to Pell City every day.
          </motion.p>
        </motion.div>
      </section>

      {/* Leadership & Culinary Profiles */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">Hospitality & Kitchen Leadership</p>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4efe6]">
            Dedication to <span className="italic font-normal text-[#c5a059]">Excellence</span>
          </h2>
          <p className="mt-3 text-xs sm:text-base text-[#a89f91]">
            From our front door to our sauté line, every team member shares a common commitment to craft scratch cooking and personalized guest care.
          </p>
        </motion.div>

        {/* Primary Leader Cards (Jennifer & Sean) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {ST_CLAIR_DATA.team.slice(0, 2).map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-[#141210] border border-[#2b2722] hover:border-[#c5a059]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start shadow-xl"
            >
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-xl overflow-hidden shrink-0 border border-[#38332c] group-hover:border-[#c5a059]/60 transition-colors shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-2.5">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#f4efe6] group-hover:text-[#c5a059] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mt-1">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed font-light">
                  {member.bio}
                </p>
                <div className="pt-2 text-xs text-[#8c8273] flex items-center justify-center sm:justify-start gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>The St. Clair Leadership Team</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sous Chefs Grid (Daly, Jeremy, Jon) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {ST_CLAIR_DATA.team.slice(2).map((member, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-[#141210] border border-[#2b2722] hover:border-[#c5a059]/40 p-6 transition-all duration-300 flex flex-col items-center text-center space-y-4 shadow-lg"
            >
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#38332c] group-hover:border-[#c5a059]/60 transition-colors shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="font-editorial text-xl font-bold text-[#f4efe6] group-hover:text-[#c5a059] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#c5a059] font-semibold mt-0.5">
                  {member.role}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#a89f91] leading-relaxed font-light">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* History & Heritage Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-20 bg-[#12100e] border-y border-[#26231f]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-[420px] rounded-2xl overflow-hidden border border-[#2e2a25] shadow-2xl">
                <Image
                  src="/images/stclair/StClair-bldg-scaled.jpg"
                  alt="Historic St. Clair Building in Pell City"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0c] via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 rounded-xl bg-[#141210]/90 backdrop-blur-md border border-[#2e2a25]">
                  <p className="text-xs uppercase tracking-wider text-[#c5a059] font-medium">Pell City, Alabama</p>
                  <p className="font-editorial text-sm sm:text-base text-[#f4efe6]">2413 Dr John Haynes Drive</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a059]/10 border border-[#c5a059]/30 text-[#c5a059] text-xs font-medium uppercase tracking-widest">
                <Compass className="w-3.5 h-3.5" />
                Our Story & Heritage
              </div>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-light text-[#f4efe6] leading-tight">
                Honoring Major General <br />
                <span className="italic font-normal text-[#c5a059]">Arthur St. Clair</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed font-light">
                Named after the Revolutionary War hero and President of the Continental Congress for whom St. Clair County is named, our establishment is grounded in pride for our Alabama community.
              </p>
              <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed font-light">
                We believe exceptional dining doesn’t require pretense. By marrying authentic Southern recipes—like slow-simmered onion jam, stone-ground grits, and skillet buttermilk biscuits—with prime Certified Angus Beef steaks, cold coastal oysters, and an expansive cellar of over 50 wines, we created a place where everyone in Pell City feels at home.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#2a2622]">
                <div>
                  <p className="font-editorial text-2xl sm:text-3xl text-[#c5a059] font-bold">30+</p>
                  <p className="text-[10px] sm:text-xs text-[#8c8273] uppercase tracking-wider mt-1">Wines by Glass</p>
                </div>
                <div>
                  <p className="font-editorial text-2xl sm:text-3xl text-[#c5a059] font-bold">50+</p>
                  <p className="text-[10px] sm:text-xs text-[#8c8273] uppercase tracking-wider mt-1">Cellar Bottles</p>
                </div>
                <div>
                  <p className="font-editorial text-2xl sm:text-3xl text-[#c5a059] font-bold">7 Days</p>
                  <p className="text-[10px] sm:text-xs text-[#8c8273] uppercase tracking-wider mt-1">Tavern Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Hospitality Philosophy */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-[#c5a059]/40 mx-auto" />
        <blockquote className="font-editorial text-xl sm:text-3xl md:text-4xl text-[#f4efe6] font-light leading-snug">
          &ldquo;Our vision is simple: casual comfort and exceptional food. Whether celebrating an anniversary in our dining room or catching up with a friend over wings at the bar, you are treated like family.&rdquo;
        </blockquote>
        <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium">
          The St. Clair Culinary & Hospitality Team
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setReservationOpen(true)}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Calendar className="w-4 h-4" />
            <span>Reserve via Resy</span>
          </motion.button>
          <Link
            href="/menu"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1c1a17] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
          >
            <span>Explore Menus</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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
