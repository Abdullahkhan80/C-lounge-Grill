"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Building2, 
  Users, 
  Sparkles, 
  FileCheck2,
  ExternalLink
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrustBanner } from "@/components/TrustBanner";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/components/LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function AboutPage() {
  const { isSpanish } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#071526] text-white py-16 sm:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#0a1d37] to-[#071526] opacity-90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>40+ Years of Food Service Excellence</span>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
              {isSpanish ? "Acerca de AAA Food Safety" : "About AAA Food Safety Certification"}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {isSpanish
                ? "Una instalación de capacitación integral dirigida por profesionales dedicados con más de cuatro décadas de experiencia práctica en la industria restaurantera."
                : "A full-service training facility run by professional culinary educators with over 40 years of hands-on experience in the commercial food service industry."}
            </p>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBanner />

        {/* Narrative & History */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visuals */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/classroom.png"
                  alt="Teacher engaging students who raise their hands in classroom"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-44 rounded-xl overflow-hidden shadow border border-slate-200">
                  <Image
                    src="/images/meat_prep.png"
                    alt="Safe commercial culinary meat slicing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-44 rounded-xl overflow-hidden shadow border border-slate-200">
                  <Image
                    src="/images/chef_smile.png"
                    alt="Professional chef inspecting food presentation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story & Compliance */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isSpanish ? "Acreditaciones Oficiales" : "Accreditation & Standards"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                {isSpanish
                  ? "Reconocidos por el Departamento de Salud del Condado de Los Ángeles"
                  : "Officially Listed with the L.A. County Health Department"}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {isSpanish
                  ? "AAA Food Safety Certification es un proveedor preferido listado por el Departamento de Salud del Condado de Los Ángeles. Cumplimos y superamos rigurosamente el Código de Salud y Seguridad de California 113947.3 a través de capacitación certificada por ANSI."
                  : "AAA FOOD SAFETY CERTIFICATION is a premier full-service food safety training facility. We are officially listed with the Los Angeles County Health Department as a Preferred Provider of Food Safety. Our ServSafe courses meet and exceed California Health and Safety Code 113947.3."}
              </p>

              <div className="space-y-3 pt-2">
                {VERIFIED_BUSINESS_INFO.accreditations.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        {isSpanish ? item.titleEs : item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                        {isSpanish ? item.descEs : item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Profiles & Direct Telephone */}
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {isSpanish ? "Nuestros Instructores Principales" : "Meet Our Training Directors"}
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                {isSpanish
                  ? "Instructores certificados que enseñan de forma clara, amena y práctica en su idioma."
                  : "Certified proctors and instructors with real-world culinary operations backgrounds."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Richard */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                      Lead Instructor & Proctor
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">Richard</h3>
                    <p className="text-xs text-slate-500 mt-0.5">English Classes & Scheduling Director</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Specializing in California retail food facility regulations, HACCP systems, and proactive health inspection prep. Oversees classes 7 days a week with same-day grading.
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Direct Hotline:</span>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                    className="font-bold text-sm text-[#0a192f] hover:text-[#0d9488] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
                  </a>
                </div>
              </div>

              {/* Susana */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-teal-600 uppercase tracking-wider block mb-1">
                      Directora de Instrucción en Español
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">Susana</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Spanish Classes & Hispanic Hospitality Lead</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-[#0d9488] flex items-center justify-center font-bold">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated to empowering Spanish-speaking culinary teams and restaurant operators with clear, culturally resonant food safety principles and official Spanish exams.
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Línea Directa:</span>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                    className="font-bold text-sm text-[#0a192f] hover:text-[#0d9488] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Location Details */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mx-auto">
            <Building2 className="w-6 h-6 text-[#0d9488]" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            {VERIFIED_BUSINESS_INFO.address.full}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Open 7 days a week, 9:00 AM – 3:00 PM. Serving all of Los Angeles, Orange, and Ventura Counties with both central classroom and on-site restaurant training.
          </p>
        </section>
      </main>

      <Footer />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultCourseId="servsafe-manager"
      />
    </div>
  );
}
