"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Calendar, 
  Send, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Navigation, 
  Wine, 
  Beer, 
  Mail
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

export default function ContactPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Question",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black pb-16 sm:pb-0">
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/StClair-bldg-scaled.jpg"
            alt="The St. Clair Location"
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
            <MapPin className="w-3.5 h-3.5" />
            Pell City, Alabama
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f4efe6] tracking-tight leading-tight">
            Location <span className="italic font-normal text-[#c5a059]">&</span> Contact
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            Conveniently situated off I-20 at Exit 158 in Pell City. We look forward to welcoming you to The St. Clair.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Details & Form Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Hours, Phone, Address, Resy Button */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-6 sm:space-y-8">
            {/* Quick Address Card */}
            <div className="rounded-3xl bg-[#141210] border border-[#2b2722] p-6 sm:p-8 space-y-5 shadow-xl">
              <h2 className="font-editorial text-2xl font-light text-[#f4efe6] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#c5a059]" />
                Address & Directions
              </h2>
              <div>
                <p className="text-base text-[#f4efe6] font-medium">The St. Clair Restaurant & Tavern</p>
                <p className="text-sm text-[#b5ab9d] mt-1">2413 Dr John Haynes</p>
                <p className="text-sm text-[#b5ab9d]">Pell City, AL 35125</p>
                <p className="text-xs text-[#8c8273] mt-2">Just minutes from Logan Martin Lake</p>
              </div>

              <div className="pt-2 flex flex-col xs:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=2413+Dr+John+Haynes+Pell+City+AL+35125"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 shadow-md"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Directions</span>
                </a>
                <a
                  href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                  className="px-4 py-2.5 rounded-xl bg-[#1e1c19] text-[#f4efe6] font-semibold text-xs uppercase tracking-wider border border-[#38332c] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>(659) 658-4271</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-3xl bg-[#141210] border border-[#2b2722] p-6 sm:p-8 space-y-5 shadow-xl">
              <h2 className="font-editorial text-2xl font-light text-[#f4efe6] flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#c5a059]" />
                Hours of Operation
              </h2>
              <div className="space-y-3 divide-y divide-[#24211d]">
                {ST_CLAIR_DATA.hours.map((h, idx) => (
                  <div key={idx} className={idx === 0 ? "pb-3" : "pt-3 pb-3"}>
                    <div className="flex flex-col xs:flex-row xs:justify-between xs:items-baseline gap-1">
                      <span className="text-xs sm:text-sm text-[#f4efe6] font-medium">{h.days}</span>
                      <span className="text-xs sm:text-sm text-[#c5a059] font-mono font-semibold">{h.time}</span>
                    </div>
                    <p className="text-[11px] text-[#8c8273] mt-0.5">{h.notes}</p>
                  </div>
                ))}
              </div>

              {/* Happy Hour Note */}
              <div className="p-4 rounded-xl bg-[#1c1a17] border border-[#363028]">
                <p className="text-xs uppercase tracking-wider text-[#c5a059] font-bold">Tavern Happy Hour</p>
                <p className="text-xs text-[#b5ab9d] mt-1">Monday – Friday: 3:00 PM – 6:00 PM</p>
              </div>
            </div>

            {/* Reservation Callout */}
            <div className="rounded-3xl bg-[#191613] border border-[#c5a059]/30 p-6 sm:p-8 text-center space-y-4 shadow-xl">
              <h3 className="font-editorial text-xl font-bold text-[#f4efe6]">Reserving A Table</h3>
              <p className="text-xs sm:text-sm text-[#b5ab9d]">
                Reservations are recommended for The St. Clair dining room via Resy. The Tavern is first-come, first-served.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setReservationOpen(true)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Book via Resy</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Embedded Map & Contact Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Embedded Google Map */}
            <div className="rounded-3xl overflow-hidden border border-[#2b2722] bg-[#141210] shadow-2xl">
              <div className="p-4 bg-[#181613] border-b border-[#26231f] flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#c5a059] font-semibold">Interactive Location Map</span>
                <span className="text-xs text-[#8c8273]">Pell City, AL 35125</span>
              </div>
              <div className="relative h-72 sm:h-96 w-full">
                <iframe
                  title="The St. Clair Restaurant Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.689531818784!2d-86.29415892348519!3d33.58742994218041!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x888979b9409b3fa1%3A0x67393d3dca6079c0!2sThe%20St.%20Clair!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Direct Message Form */}
            <div className="rounded-3xl bg-[#141210] border border-[#2b2722] p-6 sm:p-10 shadow-2xl">
              <h2 className="font-editorial text-2xl sm:text-3xl font-light text-[#f4efe6] mb-2">
                Send Us a <span className="italic font-normal text-[#c5a059]">Message</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#a89f91] mb-6 sm:mb-8">
                Questions regarding reservations, private events, or feedback? Send our management team a note below.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mx-auto border border-[#c5a059]/40">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-editorial text-2xl text-[#f4efe6]">Thank You for Reaching Out!</h3>
                  <p className="text-xs sm:text-sm text-[#b5ab9d] max-w-sm mx-auto">
                    We have received your message and will respond as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "General Question", message: "" });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-[#1e1c19] border border-[#38332c] text-xs font-semibold uppercase tracking-wider text-[#c5a059] cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-[#1c1a17] border border-[#36312a] rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1.5 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(659) 000-0000"
                        className="w-full bg-[#1c1a17] border border-[#36312a] rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#1c1a17] border border-[#36312a] rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1.5 font-medium">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#1c1a17] border border-[#36312a] rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#f4efe6] focus:outline-none focus:border-[#c5a059] transition-colors"
                      >
                        <option>General Question</option>
                        <option>Dining Room Reservations</option>
                        <option>Private Dining & Catering</option>
                        <option>Menu / Dietary Inquiry</option>
                        <option>Guest Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full bg-[#1c1a17] border border-[#36312a] rounded-lg px-4 py-2.5 text-xs sm:text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 text-[#0e0d0c] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#c5a059]/10 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Note to The St. Clair</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </motion.section>

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
