"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Users, 
  Calendar, 
  Check, 
  Wine, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { StClairNavbar } from "@/components/StClairNavbar";
import { StClairFooter } from "@/components/StClairFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { CateringInquiryModal } from "@/components/CateringInquiryModal";
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

export default function CateringEventsPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [cateringModalOpen, setCateringModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Private Dining / Celebration",
    date: "",
    guestCount: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/steak-baked-potato.jpg"
            alt="Private Dining and Catering at The St. Clair"
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
            <Users className="w-3.5 h-3.5" />
            Celebrations & Gatherings
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#f4efe6] tracking-tight leading-tight">
            Private Dining <span className="italic font-normal text-[#c5a059]">&</span> Catering
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            Elevate your special event with chef-crafted Southern cuisine, bespoke menus, and genuine hospitality in Pell City and around Logan Martin Lake.
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href="#inquiry-form"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/10"
            >
              <span>Submit Event Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1c1a17] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Call (659) 658-4271</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={staggerContainer}
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Service 1: Private Dining Room */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-[#141210] border border-[#2b2722] overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src="/images/stclair/StClair-bldg-scaled.jpg"
                alt="The St. Clair Private Dining Room"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0e0d0c]/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
                On-Site Intimate Gatherings
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-5 sm:space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-light text-[#f4efe6]">
                Private Dining at <span className="italic font-normal text-[#c5a059]">The St. Clair</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed font-light">
                Host your rehearsal dinner, birthday celebration, retirement party, or business banquet in our elegant dining room. Our culinary team designs custom multi-course dinners paired with selections from our sommelier-curated wine cellar.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Accommodations for groups of 12 to 50+ guests",
                  "Dedicated private servers and sommelier beverage service",
                  "Customized prefix menu selections featuring Certified Angus Steaks & Scallops",
                  "Audio-visual accommodations available upon request",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a059]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#ddd5c7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Service 2: Off-Site Catering */}
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl bg-[#141210] border border-[#2b2722] overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div className="relative h-60 sm:h-72 w-full">
              <Image
                src="/images/stclair/scallops.jpg"
                alt="Off-site Chef Catering"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-[#141210]/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0e0d0c]/80 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-xs font-semibold uppercase tracking-wider">
                Off-Site Catering
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-5 sm:space-y-6">
              <h2 className="font-editorial text-2xl sm:text-3xl font-light text-[#f4efe6]">
                Full-Service <span className="italic font-normal text-[#c5a059]">Catering</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#b5ab9d] leading-relaxed font-light">
                Bring The St. Clair kitchen to your lake house on Logan Martin, wedding venue, office, or private estate. From Southern buffet stations to elegant plated dinners, we handle delivery, setup, and service.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Lakefront delivery & setup across Logan Martin Lake & Pell City",
                  "Hors d'oeuvres stations: Smoked Wings, Fried Green Tomatoes, Gulf Oysters",
                  "Plated or buffet service for weddings, corporate luncheons & tailgates",
                  "Professional service staff & licensed bartenders available",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#c5a059]/20 flex items-center justify-center shrink-0 mt-0.5 text-[#c5a059]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#ddd5c7]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-16 sm:py-20 bg-[#12100e] border-y border-[#26231f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#161412] border border-[#2e2a25] p-6 sm:p-12 shadow-2xl"
          >
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <p className="text-xs uppercase tracking-widest text-[#c5a059] font-medium mb-2">Start Planning Today</p>
              <h2 className="font-editorial text-2xl sm:text-4xl font-light text-[#f4efe6]">
                Catering & Event Inquiry
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-[#a89f91]">
                Complete this form and our event coordinator will contact you within 24 hours to review menu options, availability, and pricing.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center mx-auto border border-[#c5a059]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-2xl text-[#f4efe6]">Inquiry Received!</h3>
                <p className="text-sm text-[#b5ab9d] max-w-md mx-auto">
                  Thank you, {formData.name || "guest"}. A member of The St. Clair hospitality team will reach out to you shortly at {formData.phone || formData.email} to confirm details.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        eventType: "Private Dining / Celebration",
                        date: "",
                        guestCount: "",
                        notes: "",
                      });
                    }}
                    className="px-6 py-2.5 rounded bg-[#1f1d19] border border-[#38332c] text-xs font-semibold uppercase tracking-wider text-[#c5a059] cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(205) 555-0123"
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:border-[#c5a059] transition-colors"
                    >
                      <option>Private Dining / Celebration</option>
                      <option>Rehearsal Dinner / Wedding</option>
                      <option>Corporate Dinner / Luncheon</option>
                      <option>Off-Site Lakefront Catering</option>
                      <option>Sunday Brunch Private Gathering</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Estimated Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                      Estimated Guest Count
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 25"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#b5ab9d] mb-2 font-medium">
                    Additional Details & Menu Preferences
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about your event, dietary restrictions, preferred dishes (e.g. Steaks, Scallops, Hors D'oeuvres), or setup requirements..."
                    className="w-full bg-[#1e1c19] border border-[#36312a] rounded-lg px-4 py-3 text-sm text-[#f4efe6] placeholder-[#6d665b] focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 text-[#0e0d0c] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#c5a059]/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Event Request</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Direct contact footer strip */}
      <section className="py-12 sm:py-16 bg-[#161412] text-center px-4">
        <p className="text-xs uppercase tracking-widest text-[#c5a059] mb-2">Prefer to speak directly?</p>
        <p className="font-editorial text-xl sm:text-2xl text-[#f4efe6]">Call Our Management Team at (659) 658-4271</p>
        <p className="text-xs sm:text-sm text-[#a89f91] mt-1.5">2413 Dr John Haynes, Pell City, AL 35125</p>
      </section>

      <StClairFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* Mobile Sticky Booking Bar */}
      <MobileReserveBar onOpenReservation={() => setReservationOpen(true)} />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      <CateringInquiryModal
        isOpen={cateringModalOpen}
        onClose={() => setCateringModalOpen(false)}
      />
    </div>
  );
}
