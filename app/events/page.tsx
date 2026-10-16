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
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { SAMPLE_EVENTS, C_LOUNGE_INFO } from "@/data/cLoungeData";

export default function EventsPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "Birthday Celebration",
    guestCount: "15-25 Guests",
    preferredDate: "",
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
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Events Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-20 lg:pb-28 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1800&q=80"
              alt="Lounge celebrations and events at C Lounge & Grill"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <PartyPopper className="w-3.5 h-3.5" />
              <span>Events & Celebrations</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              Gather & Celebrate <br className="hidden sm:inline" />
              <span className="text-[#c9a56a] italic font-light">at C Lounge & Grill</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              From lively birthday milestones and VIP lounge booths to private social gatherings, C Lounge & Grill offers the ideal backdrop for memorable nights in the Bronx.
            </p>
          </div>
        </section>

        {/* Upcoming Events Section (Sample Preview Format) */}
        <section className="py-20 bg-[#161616] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  LOUNGE CALENDAR
                </span>
                <h2 className="font-editorial text-3xl sm:text-4xl text-[#f5f0e8]">
                  Upcoming Evenings & Theme Nights
                </h2>
                <p className="text-xs sm:text-sm text-[#a9a39a] max-w-xl">
                  Sample calendar structure for upcoming events and music sessions. All entries are customizable by management in <code className="text-[#c9a56a]">data/cLoungeData.ts</code>.
                </p>
              </div>

              <div className="p-3 bg-[#1b1b1b] border border-[#2a2a2a] rounded text-xs text-[#a9a39a] flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-[#c9a56a] shrink-0" />
                <span>Verified Owner-Editable Event Slots</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SAMPLE_EVENTS.map((evt) => (
                <div
                  key={evt.id}
                  className="luxury-card rounded-md overflow-hidden flex flex-col group"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={evt.image}
                      alt={evt.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#101010]/80 text-[#c9a56a] rounded border border-[#2a2a2a]">
                      {evt.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[11px] uppercase tracking-wider text-[#c9a56a] font-medium flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{evt.date} · {evt.time}</span>
                      </div>
                      <h3 className="font-editorial text-2xl text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                        {evt.title}
                      </h3>
                      <p className="text-xs text-[#dfbe85] font-medium">
                        {evt.subtitle}
                      </p>
                      <p className="text-xs text-[#a9a39a] leading-relaxed pt-1">
                        {evt.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#262626] flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-wider text-[#736e67]">
                        Preview Structure
                      </span>
                      <button
                        onClick={() => setReservationOpen(true)}
                        className="text-xs uppercase tracking-wider text-[#c9a56a] hover:underline font-semibold"
                      >
                        Reserve Table
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Private Gathering & Celebration Inquiry Form */}
        <section className="py-20 lg:py-28 bg-[#101010]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a56a] font-semibold">
                HOST WITH US
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#f5f0e8]">
                Private Celebrations & Group Bookings
              </h2>
              <p className="text-xs sm:text-sm text-[#a9a39a] max-w-xl mx-auto">
                Planning a birthday milestone, anniversary, holiday party, or corporate outing? Submit an inquiry and our event manager will coordinate table arrangements and customized dining options.
              </p>
            </div>

            <div className="bg-[#161616] border border-[#262626] rounded-md p-6 sm:p-10 shadow-2xl relative">
              {!inquirySubmitted ? (
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Jessica Ortiz"
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(646) 000-0000"
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jessica@example.com"
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Celebration Type
                      </label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] transition-colors"
                      >
                        <option value="Birthday Celebration">Birthday Celebration</option>
                        <option value="Lounge Booth VIP Party">Lounge Booth VIP Party</option>
                        <option value="Anniversary / Romance">Anniversary / Romance</option>
                        <option value="Corporate / Team Dinner">Corporate / Team Dinner</option>
                        <option value="Private Lounge Buyout">Private Lounge Buyout</option>
                        <option value="Other Social Gathering">Other Social Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Target Date *
                      </label>
                      <input
                        type="date"
                        value={form.preferredDate}
                        onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] transition-colors"
                      />
                      {errors.preferredDate && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                        Estimated Group Size
                      </label>
                      <select
                        value={form.guestCount}
                        onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
                        className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] transition-colors"
                      >
                        <option value="6-10 Guests">6-10 Guests</option>
                        <option value="11-20 Guests">11-20 Guests</option>
                        <option value="21-35 Guests">21-35 Guests</option>
                        <option value="36-50+ Guests">36-50+ Guests (Full Lounge Inquiries)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-2">
                      Event Details & Custom Requests
                    </label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Special music requests, bottle service, custom food platters, cake cutting, or timing..."
                      className="w-full px-4 py-3 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-[#736e67]">
                      * Event requests are reviewed directly by our hospitality team.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#101010] border-t-transparent rounded-full animate-spin" />
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
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#c9a56a]/10 border border-[#c9a56a] flex items-center justify-center text-[#c9a56a]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-[#f5f0e8]">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-[#a9a39a] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#f5f0e8] font-medium">{form.name}</span>! We have received your event inquiry for <span className="text-[#c9a56a]">{form.eventType}</span> on <span className="text-[#c9a56a]">{form.preferredDate}</span>.
                  </p>
                  <p className="text-xs text-[#736e67]">
                    (Demo Mode: Inquiry logging ready for backend webhook or email notification integration).
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setInquirySubmitted(false)}
                      className="px-6 py-2.5 bg-[#1b1b1b] border border-[#2a2a2a] text-xs uppercase tracking-wider text-[#c9a56a] rounded-sm"
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

      <CLoungeFooter />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
