"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  Wine, 
  Flame,
  ArrowRight
} from "lucide-react";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { 
  C_LOUNGE_INFO, 
  SEATING_OPTIONS, 
  PARTY_SIZES, 
  TIME_SLOTS 
} from "@/data/cLoungeData";

export default function ReservationsPage() {
  const [today, setToday] = useState("2026-10-16");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "2026-10-16",
    time: "7:00 PM",
    partySize: "2 Guests",
    seatingArea: "dining",
    specialRequests: "",
  });

  React.useEffect(() => {
    const currentToday = new Date().toISOString().split("T")[0];
    setToday(currentToday);
    setFormData((prev) => ({ ...prev, date: currentToday }));
  }, []);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = "Please provide a valid phone number.";
    }
    if (!formData.date) errs.date = "Please select a date.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        setApiError(result.error || "Failed to process reservation request.");
      } else {
        setSuccessData(result.data);
      }
    } catch (err) {
      setApiError("A network error occurred. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSuccessData(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: today,
      time: "7:00 PM",
      partySize: "2 Guests",
      seatingArea: "dining",
      specialRequests: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar />

      <main className="flex-1">
        {/* Reservations Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-24 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
              alt="Dining room table setting at C Lounge & Grill"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Table Reservations</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              Reserve Your Table
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              Experience the best of dining, grill favorites, and lounge atmosphere in the heart of the Bronx.
            </p>
          </div>
        </section>

        {/* Reservation Form & Info Section */}
        <section className="py-20 lg:py-28 bg-[#161616]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Form (7 cols) */}
              <div className="lg:col-span-7 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md p-6 sm:p-8 shadow-2xl relative">
                {/* Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#c9a56a] to-transparent" />

                {!successData ? (
                  <div>
                    <div className="mb-6">
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#f5f0e8]">
                        Table Request
                      </h2>
                      <p className="text-xs text-[#a9a39a] mt-1">
                        Select your preferred date, time, and party size.
                      </p>

                      {/* Demo Mode Notice */}
                      <div className="mt-4 p-3 rounded bg-[#1f1a12] border border-[#c9a56a]/30 flex items-start gap-2.5 text-xs text-[#dfbe85]">
                        <AlertCircle className="w-4 h-4 text-[#c9a56a] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold">Demo Mode Notice:</strong>
                          <span>
                            Reservations submitted here are captured as booking requests for owner review. A confirmation call/email will be provided once availability is checked.
                          </span>
                        </div>
                      </div>
                    </div>

                    {apiError && (
                      <div className="mb-4 p-3 rounded bg-red-900/30 border border-red-500/50 text-xs text-red-300">
                        {apiError}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. David Bennett"
                            className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                          />
                          {errors.fullName && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(646) 000-0000"
                            className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                          />
                          {errors.phone && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="david@example.com"
                          className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-sm text-[#f5f0e8] placeholder-[#555] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Date *
                          </label>
                          <input
                            type="date"
                            min={today}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-3 py-2 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Time *
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full px-3 py-2 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                          >
                            {TIME_SLOTS.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                            Guests *
                          </label>
                          <select
                            value={formData.partySize}
                            onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                            className="w-full px-3 py-2 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                          >
                            {PARTY_SIZES.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                          Seating Preference
                        </label>
                        <select
                          value={formData.seatingArea}
                          onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] transition-colors"
                        >
                          {SEATING_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#a9a39a] font-medium mb-1.5">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Dietary preferences, milestone celebration, anniversary, etc."
                          className="w-full px-3.5 py-2 bg-[#161616] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] placeholder-[#555] transition-colors"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-[#101010] border-t-transparent rounded-full animate-spin" />
                              <span>Submitting Request...</span>
                            </>
                          ) : (
                            <>
                              <Calendar className="w-4 h-4" />
                              <span>Submit Reservation Request</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#c9a56a]/10 border border-[#c9a56a] flex items-center justify-center text-[#c9a56a]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-editorial text-3xl text-[#f5f0e8]">
                      Request Received
                    </h3>

                    <p className="text-sm text-[#a9a39a] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#f5f0e8] font-medium">{successData.fullName}</span>. Your reservation request for <span className="text-[#c9a56a]">{successData.partySize}</span> on <span className="text-[#c9a56a]">{successData.date} at {successData.time}</span> has been securely recorded.
                    </p>

                    <div className="p-4 bg-[#161616] border border-[#2a2a2a] rounded text-left text-xs space-y-2 max-w-md mx-auto text-[#a9a39a]">
                      <div className="flex justify-between">
                        <span>Restaurant:</span>
                        <span className="text-[#f5f0e8]">C Lounge & Grill (Bronx, NY)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="text-[#f5f0e8]">{successData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-amber-400 font-medium">Pending Manager Confirmation</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#736e67]">
                      * In production, this integrates with email notifications or your booking management system.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 bg-[#c9a56a] text-[#101010] text-xs font-semibold uppercase tracking-wider rounded-sm"
                      >
                        Submit Another Reservation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Policies & Quick Contact (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-4">
                  <h3 className="font-editorial text-2xl text-[#f5f0e8]">
                    Dining & Lounge Guidelines
                  </h3>

                  <ul className="space-y-3 text-xs text-[#a9a39a] leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a56a] shrink-0 mt-1.5" />
                      <span>
                        <strong>Arrival Time:</strong> We hold tables for 15 minutes past your reserved time before releasing them to walk-in guests.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a56a] shrink-0 mt-1.5" />
                      <span>
                        <strong>Large Parties:</strong> Groups of 7 or more are encouraged to submit inquiries through our <Link href="/events" className="text-[#c9a56a] hover:underline">Events page</Link> for optimal booth coordination.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a56a] shrink-0 mt-1.5" />
                      <span>
                        <strong>Dress Code:</strong> Upscale casual. We invite guests to dress for a stylish evening out in the Bronx.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#c9a56a] font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c9a56a]" />
                    <span>Prefer to Call?</span>
                  </h4>
                  <p className="text-xs text-[#a9a39a] leading-relaxed">
                    For same-day availability or urgent table inquiries, give our host team a direct call:
                  </p>
                  <p className="text-lg font-editorial text-[#f5f0e8]">
                    <a href={`tel:${C_LOUNGE_INFO.phoneRaw}`} className="hover:text-[#c9a56a] transition-colors">
                      +1 (646) 785-5832
                    </a>
                  </p>
                </div>

                <div className="p-6 bg-[#1b1b1b] border border-[#2a2a2a] rounded-md space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#c9a56a] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c9a56a]" />
                    <span>Location</span>
                  </h4>
                  <p className="text-xs text-[#f5f0e8]">
                    1735 E 172nd St, Bronx, NY 10472
                  </p>
                  <p className="text-xs text-[#736e67]">
                    Street parking and nearby transit available.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <CLoungeFooter />
    </div>
  );
}
