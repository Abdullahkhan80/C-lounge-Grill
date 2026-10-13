"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Users, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Sparkles, 
  Building, 
  Truck, 
  DollarSign, 
  ArrowRight 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { useLanguage } from "@/components/LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function GroupTrainingPage() {
  const { isSpanish } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [attendees, setAttendees] = useState(5);
  const [courseType, setCourseType] = useState<"manager" | "handler">("manager");

  const ratePerPerson = courseType === "manager" ? (attendees >= 5 ? 125 : 150) : 49;
  const totalCost = ratePerPerson * attendees;
  const standardCost = courseType === "manager" ? 150 * attendees : 49 * attendees;
  const savings = standardCost - totalCost;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#071526] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#0a1d37] to-[#071526] opacity-90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
                <Truck className="w-3.5 h-3.5" />
                <span>{isSpanish ? "Servicio a Domicilio Sin Costo de Viaje" : "Free Travel to Your Location"}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {isSpanish ? (
                  <>
                    Vamos a su Restaurante <span className="text-[#0d9488]">Sin Cargo</span> para 2+ Gerentes
                  </>
                ) : (
                  <>
                    We Come to Your Location <span className="text-[#0d9488]">Free of Charge</span> for 2+ Managers
                  </>
                )}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                {isSpanish
                  ? "Capacitación privada presencial de ServSafe directamente en su restaurante, hotel o cocina comercial en los condados de Los Ángeles, Orange y Ventura. Tarifa especial de $125 por gerente para 5 o más participantes."
                  : "Private in-person ServSafe training directly inside your restaurant kitchen, banquet hall, or corporate office anywhere in Los Angeles, Orange, and Ventura Counties. Reduced $125 rate for 5+ managers."}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setInquiryOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0d9488] to-[#059669] hover:from-[#0f766e] text-white font-extrabold text-xs shadow-lg transition-all"
                >
                  {isSpanish ? "Solicitar Capacitación Grupal" : "Request Group Training Quote"}
                </button>
                <a
                  href={`tel:${isSpanish ? VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw : VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs border border-white/20 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>
                    {isSpanish
                      ? `Llamar a Susana: ${VERIFIED_BUSINESS_INFO.contacts.spanish.phone}`
                      : `Call Richard: ${VERIFIED_BUSINESS_INFO.contacts.english.phone}`}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Live Interactive Group Quote Calculator */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                  {isSpanish ? "Calculadora Instantánea para Equipos" : "Team Rate Estimator"}
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {isSpanish ? "Estime el Costo de su Capacitación Grupal" : "Calculate Your Group Training Investment"}
                </h3>
              </div>
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setCourseType("manager")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    courseType === "manager"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Food Manager
                </button>
                <button
                  onClick={() => setCourseType("handler")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    courseType === "handler"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Food Handler ($49)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 items-center">
              {/* Attendees Slider / Counter */}
              <div className="md:col-span-7 space-y-4">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  {isSpanish ? "Número de Empleados a Certificar" : "Number of Team Members to Certify"}
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min={courseType === "manager" ? 2 : 5}
                    max={30}
                    value={attendees}
                    onChange={(e) => setAttendees(Number(e.target.value))}
                    className="w-full accent-[#0d9488]"
                  />
                  <div className="w-14 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-black text-lg text-slate-900 flex-shrink-0 border border-slate-200">
                    {attendees}
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-1">
                  <p>
                    • {courseType === "manager"
                      ? (attendees >= 5
                          ? "✓ You qualify for the discounted $125/manager group rate!"
                          : "Groups of 5+ managers unlock $125/person (Save $25/each).")
                      : "• Flat rate of $49 per food handler with in-person instruction."}
                  </p>
                  <p>• ✓ Free travel to your location anywhere in Los Angeles, Orange, and Ventura Counties.</p>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  {isSpanish ? "Inversión Estimada" : "Estimated Total Investment"}
                </span>
                <div className="text-4xl font-black text-[#0a192f]">
                  ${totalCost.toLocaleString()} USD
                </div>
                <div className="text-xs text-emerald-700 font-bold">
                  ${ratePerPerson} per person • All materials & exam included
                </div>

                {savings > 0 && (
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-lg text-xs font-bold inline-block">
                    Total Group Savings: ${savings} USD
                  </div>
                )}

                <button
                  onClick={() => setInquiryOpen(true)}
                  className="w-full mt-3 py-3 bg-[#0a192f] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                >
                  {isSpanish ? "Reservar Esta Fecha Grupal" : "Lock In This Group Rate"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {isSpanish ? "¿Por Qué Elegir Capacitación en su Local?" : "Why Restaurant Groups Choose On-Site Training"}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {isSpanish
                ? "Diseñado específicamente para minimizar interrupciones en su cocina y asegurar el 100% de cumplimiento sanitario."
                : "Tailored to prevent kitchen disruption and certify your culinary leadership on your terms."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Zero Travel Costs</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When you have 2 or more managers, our certified instructor travels to your facility free of charge. No mileage fees or travel surcharges across LA, Orange, or Ventura Counties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Flexible 7-Day Timing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We accommodate prep shifts, dark kitchen hours, and restaurant closing days. Hold class on Monday morning or Sunday afternoon at whatever hours fit your kitchen flow best.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Bilingual Team Instruction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Have your culinary team taught comfortably in English or Spanish. Susana leads Spanish sessions with culturally adapted instructional techniques that guarantee understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Coverage section */}
        <ServiceAreaSection />
      </main>

      <Footer />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultCourseId="group-manager"
      />
    </div>
  );
}
