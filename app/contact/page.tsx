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
  Calendar
} from "lucide-react";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { C_LOUNGE_INFO } from "@/data/cLoungeData";

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
        setApiError(data.error || "Failed to send message.");
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setApiError("A network error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Contact Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <MapPin className="w-3.5 h-3.5" />
              <span>Bronx, New York</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              Connect With C Lounge & Grill
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              We welcome your questions, event inquiries, feedback, and table reservations. Located at 1735 E 172nd St, Bronx, NY 10472.
            </p>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section className="py-20 lg:py-28 bg-[#161616]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Direct Info & Hours (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Verified Address */}
                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-3">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c9a56a]" />
                    <span>Restaurant Location</span>
                  </h3>
                  <div>
                    <h4 className="font-editorial text-2xl text-[#f5f0e8]">
                      C Lounge & Grill
                    </h4>
                    <p className="text-sm text-[#a9a39a] mt-1">
                      1735 E 172nd St, Bronx, NY 10472, United States
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={C_LOUNGE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center gap-1.5 shadow"
                    >
                      <span>Get Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`tel:${C_LOUNGE_INFO.phoneRaw}`}
                      className="px-4 py-2 border border-[#333333] hover:border-[#c9a56a] text-[#f5f0e8] hover:text-[#c9a56a] text-xs uppercase tracking-wider rounded-sm flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>

                {/* Direct Phone */}
                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-2">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c9a56a]" />
                    <span>Direct Contact Number</span>
                  </h4>
                  <p className="font-editorial text-2xl text-[#f5f0e8]">
                    <a href={`tel:${C_LOUNGE_INFO.phoneRaw}`} className="hover:text-[#c9a56a] transition-colors">
                      +1 (646) 785-5832
                    </a>
                  </p>
                  <p className="text-xs text-[#736e67]">
                    Available for reservations, group bookings, and takeout questions.
                  </p>
                </div>

                {/* Opening Hours Component */}
                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-4">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#c9a56a]" />
                    <span>Lounge & Dining Hours</span>
                  </h4>

                  <div className="space-y-3 text-xs">
                    {C_LOUNGE_INFO.hours.map((h, i) => (
                      <div key={i} className="flex justify-between items-baseline border-b border-[#262626] pb-2">
                        <div>
                          <span className="font-medium text-[#f5f0e8] block">{h.days}</span>
                          <span className="text-[11px] text-[#736e67]">{h.service}</span>
                        </div>
                        <span className="text-[#c9a56a] font-medium">{h.hours}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-[#736e67] italic pt-1">
                    * Schedule can be adjusted by the business owner in data configuration.
                  </p>
                </div>

              </div>

              {/* Right Column: Contact Form & Map Embed (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                
                {/* Contact Inquiry Form */}
                <div className="bg-[#1b1b1b] border border-[#2a2a2a] rounded-md p-6 sm:p-8 shadow-2xl relative">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a56a] to-transparent" />

                  <div className="mb-6">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#a9a39a] mt-1">
                      Fill out the form below and we will get back to you promptly.
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
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                          />
                          {errors.name && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Your Email *
                          </label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                          />
                          {errors.email && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                          Subject
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                        >
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Table Reservation Assistance">Table Reservation Assistance</option>
                          <option value="Private Celebration / Lounge Event">Private Celebration / Lounge Event</option>
                          <option value="Menu & Dietary Question">Menu & Dietary Question</option>
                          <option value="Other Feedback">Other Feedback</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                          Message *
                        </label>
                        <textarea
                          rows={4}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="How can we assist you?"
                          className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] placeholder-[#555] transition-colors"
                        />
                        {errors.message && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                        )}
                      </div>

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[11px] text-[#736e67]">
                          * Verified response guaranteed.
                        </span>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-3 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shadow-md flex items-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-3.5 h-3.5 border-2 border-[#101010] border-t-transparent rounded-full animate-spin" />
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
                      <div className="w-14 h-14 mx-auto rounded-full bg-[#c9a56a]/10 border border-[#c9a56a] flex items-center justify-center text-[#c9a56a]">
                        <CheckCircle2 className="w-7 h-7" />
                      </div>
                      <h4 className="font-editorial text-2xl text-[#f5f0e8]">
                        Message Received
                      </h4>
                      <p className="text-xs text-[#a9a39a] max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out, <span className="text-[#f5f0e8] font-medium">{form.name}</span>. Our hospitality team at C Lounge & Grill will get in touch shortly.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", subject: "General Inquiry", message: "" });
                        }}
                        className="px-5 py-2 bg-[#161616] border border-[#2a2a2a] text-xs text-[#c9a56a] rounded-sm"
                      >
                        Send Another Note
                      </button>
                    </div>
                  )}
                </div>

                {/* Embedded Interactive Map Card */}
                <div className="relative h-[340px] w-full rounded-md overflow-hidden border border-[#2a2a2a] shadow-xl">
                  <iframe
                    src={C_LOUNGE_INFO.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(90%)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="C Lounge & Grill Interactive Location Map"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#101010]/95 backdrop-blur-md p-3 rounded border border-[#2a2a2a] text-xs">
                    <span className="font-editorial text-sm text-[#f5f0e8] block">
                      C Lounge & Grill
                    </span>
                    <span className="text-[11px] text-[#a9a39a]">
                      1735 E 172nd St, Bronx, NY 10472
                    </span>
                  </div>
                </div>

              </div>

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
