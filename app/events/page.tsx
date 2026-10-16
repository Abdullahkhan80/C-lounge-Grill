"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Phone, 
  Wine, 
  PartyPopper,
  ArrowRight
} from "lucide-react";
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { RESTAURANT_CONFIG, EventPackage } from "@/restaurant.config";

export default function EventsPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Private Celebration / Birthday",
    guestCount: "12-24 Guests",
    preferredDate: "",
    spacePreference: "the-cellar-room",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@")) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim() || form.phone.length < 7) {
      errs.phone = "Please provide a valid contact number.";
    }
    if (!form.preferredDate) errs.preferredDate = "Please choose a target date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquirySubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Events Hero */}
        <section className="relative pt-36 sm:pt-44 pb-20 lg:pb-28 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1800&q=80"
              alt={`${RESTAURANT_CONFIG.brandName} Private Events & Celebrations`}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Private Dining & Social Gatherings</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              Host Unforgettable Evenings
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              From intimate cellar dinners to lively terrace receptions and full venue buyouts, our team crafts tailored hospitality for every celebration.
            </p>
          </div>
        </section>

        {/* Event Spaces Section */}
        <section className="py-20 bg-[#1B1714] border-b border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold flex items-center gap-2">
                  <Wine className="w-3.5 h-3.5" />
                  SPACES & CAPACITIES
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#F7F3EC]">
                  Private & Semi-Private Environments
                </h2>
                <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-xl">
                  Demonstration layouts adaptable to your restaurant's physical floor plan and event capabilities.
                </p>
              </div>

              <div className="p-3 bg-[#25201C] border border-[#38302A] rounded text-xs text-[#D1C7B7] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#B88960] shrink-0" />
                <span>Demonstrative Package Offerings</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {RESTAURANT_CONFIG.eventPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="espresso-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#25201C] to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#120F0D]/80 text-[#B88960] rounded border border-[#38302A]">
                      {pkg.capacity}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] text-[#B88960] font-medium italic">
                        {pkg.vibe}
                      </div>
                      <h3 className="font-editorial text-2xl text-[#F7F3EC] group-hover:text-[#B88960] transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-xs text-[#D1C7B7] leading-relaxed pt-1">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#38302A] space-y-2">
                      <span className="text-[10px] uppercase tracking-wider text-[#8E867E] block">
                        Ideal For:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.idealFor.map((item, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-2 py-0.5 rounded bg-[#1B1714] text-[#E8E1D5] border border-[#38302A]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Gathering Inquiry Form */}
        <section className="py-20 lg:py-28 bg-[#120F0D]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B88960] font-semibold">
                EVENT COORDINATION
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#F7F3EC]">
                Inquire About Your Celebration
              </h2>
              <p className="text-xs sm:text-sm text-[#D1C7B7] max-w-xl mx-auto">
                Share your target date and group requirements below. Our private events director will coordinate bespoke menus and room options.
              </p>
            </div>

            <div className="bg-[#1B1714] border border-[#38302A] rounded-md p-6 sm:p-10 shadow-2xl relative">
              {!inquirySubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(555) 000-0000"
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="elena@example.com"
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Celebration Type
                      </label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] transition-colors"
                      >
                        <option value="Private Celebration / Birthday">Private Celebration / Birthday</option>
                        <option value="Executive Dinner / Corporate">Executive Dinner / Corporate</option>
                        <option value="Wedding Rehearsal / Milestone">Wedding Rehearsal / Milestone</option>
                        <option value="Cocktail Reception & Mingling">Cocktail Reception & Mingling</option>
                        <option value="Full Restaurant Buyout">Full Restaurant Buyout</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Target Date *
                      </label>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] transition-colors"
                      />
                      {errors.preferredDate && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                        Estimated Group Size
                      </label>
                      <select
                        value={form.guestCount}
                        onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] transition-colors"
                      >
                        <option value="8-14 Guests">8-14 Guests</option>
                        <option value="15-24 Guests">15-24 Guests (The Cellar Room)</option>
                        <option value="25-50 Guests">25-50 Guests (The Hearth Terrace)</option>
                        <option value="51-120+ Guests">51-120+ Guests (Full Venue Residency)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-2">
                      Event Details & Custom Requests
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Sommelier wine pairing preferences, AV setup, custom menu courses, timing..."
                      className="w-full px-4 py-3 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#8E867E]">
                      * In production, this inquiry dispatches directly to event sales coordinators.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#1B1714] border-t-transparent rounded-full animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Event Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-[#F7F3EC]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#D1C7B7] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#F7F3EC] font-medium">{form.name}</span>. We have received your event inquiry for <span className="text-[#B88960]">{form.eventType}</span> on <span className="text-[#B88960]">{form.preferredDate}</span>.
                  </p>
                  <p className="text-xs text-[#8E867E]">
                    (Sales Demo Mode: Submission data captured cleanly for customer demonstrations).
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="px-6 py-2.5 bg-[#25201C] border border-[#38302A] text-xs uppercase tracking-wider text-[#B88960] rounded-sm"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              )}
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
