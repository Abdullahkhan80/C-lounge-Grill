"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  AlertCircle,
  Mail,
  Calendar,
  Compass
} from "lucide-react";
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export default function ContactPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your name.";
    if (!form.email.trim() || !form.email.includes("@")) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Please enter your message.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setApiError(data.error || "Failed to submit message.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setApiError("Network error. Please try again or reach out directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Contact Hero */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location & Inquiries</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              Connect With {RESTAURANT_CONFIG.brandName}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              We welcome table reservations, private event inquiries, and press questions.
            </p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="py-20 lg:py-28 bg-[#1B1714]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Info & Hours (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Location Card */}
                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B88960]" />
                    <span>Restaurant Location</span>
                  </h3>
                  <div>
                    <h4 className="font-editorial text-2xl text-[#F7F3EC]">
                      {RESTAURANT_CONFIG.brandName} — {RESTAURANT_CONFIG.subBrand}
                    </h4>
                    <p className="text-sm text-[#D1C7B7] mt-1">
                      {RESTAURANT_CONFIG.contact.addressLine1}, {RESTAURANT_CONFIG.contact.suite}
                    </p>
                    <p className="text-sm text-[#D1C7B7]">
                      {RESTAURANT_CONFIG.contact.cityStateZip}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={RESTAURANT_CONFIG.contact.googleMapsSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5 shadow"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                      className="px-4 py-2 border border-[#38302A] hover:border-[#B88960] text-[#F7F3EC] hover:text-[#B88960] text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Direct Phone & Email */}
                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-3">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B88960]" />
                    <span>Direct Lines</span>
                  </h4>
                  <p className="font-editorial text-2xl text-[#F7F3EC]">
                    <a href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`} className="hover:text-[#B88960] transition-colors">
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#D1C7B7]">
                    <a href={`mailto:${RESTAURANT_CONFIG.contact.email}`} className="hover:text-[#B88960] transition-colors flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-[#B88960]" />
                      <span>{RESTAURANT_CONFIG.contact.email}</span>
                    </a>
                  </p>
                </div>

                {/* Operating Hours Breakdown */}
                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#B88960]" />
                    <span>Dinner & Lounge Schedule</span>
                  </h4>

                  <div className="space-y-3 text-xs">
                    {RESTAURANT_CONFIG.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-[#38302A] pb-2">
                        <div>
                          <span className="font-medium text-[#F7F3EC] block">{h.days}</span>
                          <span className="text-[11px] text-[#8E867E]">{h.note}</span>
                        </div>
                        <span className="text-[#B88960] font-medium">{h.dinner}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-[#8E867E] italic pt-1">
                    * Schedule can be adjusted by the business owner in <code className="text-[#B88960]">restaurant.config.ts</code>.
                  </p>
                </div>

              </div>

              {/* Right Column: Contact Form & Map Component (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Contact Form */}
                <div className="bg-[#25201C] border border-[#38302A] rounded-md p-6 sm:p-8 shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B88960] to-transparent" />

                  <div className="mb-6">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#D1C7B7] mt-1">
                      Our hospitality team will review your inquiry and respond promptly.
                    </p>
                  </div>

                  {apiError && (
                    <div className="mb-4 p-3 rounded bg-red-900/30 border border-red-500/50 text-xs text-red-300">
                      {apiError}
                    </div>
                  )}

                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="e.g. Julian Hayes"
                            className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                          />
                          {errors.name && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Your Email *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="julian@example.com"
                            className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                          />
                          {errors.email && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                          Subject
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Table Reservation Assistance">Table Reservation Assistance</option>
                          <option value="Private Dining & Events">Private Dining & Events</option>
                          <option value="Wine & Dietary Question">Wine & Dietary Question</option>
                          <option value="Press & Media Inquiries">Press & Media Inquiries</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                          Message *
                        </label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How can our hospitality team assist you?"
                          className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                        />
                        {errors.message && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                        )}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[11px] text-[#8E867E]">
                          * Sales demo form with server validation.
                        </span>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-md flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-[#1B1714] border-t-transparent rounded-full animate-spin" />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-3.5 h-3.5" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-8 space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960]">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="font-editorial text-2xl text-[#F7F3EC]">
                        Inquiry Received
                      </h4>
                      <p className="text-xs text-[#D1C7B7] max-w-sm mx-auto leading-relaxed">
                        Thank you for contacting <span className="text-[#F7F3EC] font-medium">{RESTAURANT_CONFIG.brandName}</span>. Your message has been verified and processed by the demo server.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
                        }}
                        className="px-5 py-2 bg-[#1B1714] border border-[#38302A] text-xs text-[#B88960] rounded-sm"
                      >
                        Send Another Note
                      </button>
                    </div>
                  )}
                </div>

                {/* Map Component Card */}
                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960] mx-auto">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="font-editorial text-xl text-[#F7F3EC]">
                    Interactive Map Integration Point
                  </h4>
                  <p className="text-xs text-[#D1C7B7] max-w-md mx-auto leading-relaxed">
                    Once actual venue coordinates are added to <code className="text-[#B88960]">restaurant.config.ts</code>, this container renders live Google Maps or Mapbox tiles with custom dark/espresso styling.
                  </p>
                  <a
                    href={RESTAURANT_CONFIG.contact.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#B88960] hover:underline uppercase tracking-wider font-semibold pt-1"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

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
