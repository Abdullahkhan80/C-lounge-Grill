"use client";

import React, { useState, useEffect } from "react";
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
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export default function ReservationsPage() {
  const [today, setToday] = useState("2026-10-16");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "2026-10-16",
    time: "7:00 PM",
    partySize: "2 Guests",
    seatingArea: "main-hearth",
    specialRequests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<any | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    const currentToday = new Date().toISOString().split("T")[0];
    setToday(currentToday);
    setFormData((prev) => ({ ...prev, date: currentToday }));
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = "Please enter your full name.";
    if (!formData.email.trim() || !formData.email.includes("@")) {
      errs.email = "Please provide a valid email address.";
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = "Please provide a valid contact number.";
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
    } catch {
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
      seatingArea: "main-hearth",
      specialRequests: "",
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Reservations Hero */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-24 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1800&q=80"
              alt={`${RESTAURANT_CONFIG.brandName} Table Reservations`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Table Reservations</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              Reserve Your Experience
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              Join us around the wood-fired hearth or in the social lounge. For parties larger than 8, please explore our private events suite.
            </p>
          </div>
        </section>

        {/* Reservation Form & Policies Section */}
        <section className="py-20 lg:py-28 bg-[#1B1714]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Form Card (7 cols) */}
              <div className="lg:col-span-7 bg-[#25201C] border border-[#38302A] rounded-md p-6 sm:p-8 shadow-2xl relative">
                {/* Accent Top Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#B88960] to-transparent" />

                {!successData ? (
                  <div>
                    <div className="mb-6">
                      <h2 className="font-editorial text-2xl sm:text-3xl text-[#F7F3EC]">
                        Table Request
                      </h2>
                      <p className="text-xs text-[#D1C7B7] mt-1">
                        Select your preferred date, time, and party size.
                      </p>

                      {/* Demo Mode Notice */}
                      <div className="mt-4 p-3 rounded bg-[#1B1714] border border-[#B88960]/30 flex items-start gap-2.5 text-xs text-[#E8E1D5]">
                        <AlertCircle className="w-4 h-4 text-[#B88960] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block font-semibold">Sales Demo Functionality:</strong>
                          <span>
                            This reservation form demonstrates live client-side and server-side validation. In production, this can connect directly to OpenTable, Resy, SevenRooms, or email/SMS alerts.
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
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Julian Hayes"
                            className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                          />
                          {errors.fullName && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 000-0000"
                            className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                          />
                          {errors.phone && (
                            <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="julian@example.com"
                          className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-sm text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Date *
                          </label>
                          <input
                            type="date"
                            min={today}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full px-3 py-2 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Time *
                          </label>
                          <select
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full px-3 py-2 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                          >
                            {RESTAURANT_CONFIG.timeSlots.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                            Guests *
                          </label>
                          <select
                            value={formData.partySize}
                            onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                            className="w-full px-3 py-2 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                          >
                            {RESTAURANT_CONFIG.partySizes.map((s) => (
                              <option key={s} value={s}>{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                          Seating Preference
                        </label>
                        <select
                          value={formData.seatingArea}
                          onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] transition-colors"
                        >
                          {RESTAURANT_CONFIG.seatingOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#D1C7B7] font-medium mb-1.5">
                          Special Requests & Notes (Optional)
                        </label>
                        <textarea
                          rows={2}
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Dietary preferences, celebratory toast, booth preference..."
                          className="w-full px-3.5 py-2 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-3.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-[#1B1714] border-t-transparent rounded-full animate-spin" />
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
                    <div className="w-16 h-16 mx-auto rounded-full bg-[#B88960]/10 border border-[#B88960] flex items-center justify-center text-[#B88960]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-editorial text-3xl text-[#F7F3EC]">
                      Request Received
                    </h3>

                    <p className="text-sm text-[#D1C7B7] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-[#F7F3EC] font-medium">{successData.fullName}</span>. Your reservation request for <span className="text-[#B88960]">{successData.partySize}</span> on <span className="text-[#B88960]">{successData.date} at {successData.time}</span> has been securely validated and recorded.
                    </p>

                    <div className="p-4 bg-[#1B1714] border border-[#38302A] rounded text-left text-xs space-y-2 max-w-md mx-auto text-[#D1C7B7]">
                      <div className="flex justify-between">
                        <span>Venue:</span>
                        <span className="text-[#F7F3EC]">{RESTAURANT_CONFIG.brandName} — {RESTAURANT_CONFIG.subBrand}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Contact:</span>
                        <span className="text-[#F7F3EC]">{successData.phone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Status:</span>
                        <span className="text-[#B88960] font-medium">Demo Validation Complete</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={resetForm}
                        className="px-6 py-2.5 bg-[#B88960] text-[#1B1714] text-xs font-semibold uppercase tracking-wider rounded-sm"
                      >
                        Submit Another Reservation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Policies & Trust Microcopy (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-4">
                  <h3 className="font-editorial text-2xl text-[#F7F3EC]">
                    Dining Guidelines & Grace Period
                  </h3>

                  <ul className="space-y-3 text-xs text-[#D1C7B7] leading-relaxed">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88960] shrink-0 mt-1.5" />
                      <span>
                        <strong>Grace Period:</strong> We hold tables for 15 minutes past your reserved time before releasing them to walk-in guests.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88960] shrink-0 mt-1.5" />
                      <span>
                        <strong>Group Bookings:</strong> Parties of 8 or more are encouraged to view our <Link href="/events" className="text-[#B88960] hover:underline">Events page</Link> to ensure optimal seating and tailored family-style menus.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88960] shrink-0 mt-1.5" />
                      <span>
                        <strong>Dress Atmosphere:</strong> Relaxed upscale. We encourage guests to dress comfortably for an evening out.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-3">
                  <h4 className="text-xs uppercase tracking-wider text-[#B88960] font-semibold flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#B88960]" />
                    <span>Prefer Direct Contact?</span>
                  </h4>
                  <p className="text-xs text-[#D1C7B7] leading-relaxed">
                    For same-day availability or immediate table questions, speak with our host team:
                  </p>
                  <p className="text-lg font-editorial text-[#F7F3EC]">
                    <a href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`} className="hover:text-[#B88960] transition-colors">
                      {RESTAURANT_CONFIG.contact.phoneDisplay}
                    </a>
                  </p>
                </div>

                <div className="p-6 bg-[#25201C] border border-[#38302A] rounded-md space-y-2">
                  <h4 className="text-xs uppercase tracking-wider text-[#B88960] font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#B88960]" />
                    <span>Location</span>
                  </h4>
                  <p className="text-xs text-[#F7F3EC]">
                    {RESTAURANT_CONFIG.contact.addressLine1}, {RESTAURANT_CONFIG.contact.cityStateZip}
                  </p>
                  <p className="text-xs text-[#8E867E]">
                    Valet and street parking options available nearby.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
