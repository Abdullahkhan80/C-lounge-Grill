"use client";

import React, { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  AlertCircle, 
  ExternalLink, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/components/LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function ContactPage() {
  const { isSpanish } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="bg-[#071526] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#0a1d37] to-[#071526] opacity-90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Phone className="w-3.5 h-3.5" />
              <span>{isSpanish ? "Atención y Reservas 7 Días" : "7 Days a Week Scheduling"}</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {isSpanish ? "Contacto y Programación de Clases" : "Contact & Class Scheduling"}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish
                ? "Comuníquese directamente con nuestros coordinadores para programar clases presenciales en Los Ángeles o solicitar capacitación en su restaurante."
                : "Connect directly with our coordinators to schedule in-person classes at our Los Angeles center or book private on-site training."}
            </p>
          </div>
        </section>

        {/* Verification Callout Banner at top of Contact page */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
          <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 sm:p-5 shadow-lg flex items-start gap-3.5 text-xs text-amber-950">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-black uppercase tracking-wider block text-amber-900">
                {isSpanish ? "Aviso de Verificación de Contacto" : "Official Contact & Directory Verification Notice"}
              </span>
              <p className="leading-relaxed">
                {isSpanish
                  ? "Para atención en español, el número verificado de Susana es (818) 422-8854. El registro secundario (818) 422-8834 figura en el pie de página de registros anteriores; si alguna llamada no entra, pruebe ambas líneas. Para inglés, llame a Richard al (818) 339-3477."
                  : "For Spanish classes, Susana's primary active phone is (818) 422-8854. An alternate number (818) 422-8834 appears in archived records; both are maintained for client verification. For English classes, call Richard at (818) 339-3477."}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* English Director */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-600 block mb-0.5">
                  English Inquiries
                </span>
                <h3 className="text-xl font-black text-slate-900">Richard</h3>
                <p className="text-xs text-slate-500">Lead Instructor & Proctor</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                  className="font-black text-base text-slate-900 hover:text-[#0d9488] flex items-center gap-2"
                >
                  <span>{VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
                </a>
                <span className="text-[11px] text-slate-400 block mt-1">Available 7 days a week, 9am - 3pm</span>
              </div>
            </div>

            {/* Spanish Director */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#0d9488] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-600 block mb-0.5">
                  Consultas en Español
                </span>
                <h3 className="text-xl font-black text-slate-900">Susana</h3>
                <p className="text-xs text-slate-500">Instructora en Español</p>
              </div>
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                  className="font-black text-base text-slate-900 hover:text-[#0d9488] flex items-center gap-2"
                >
                  <span>{VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
                </a>
                <span className="text-[11px] text-slate-400 block">Alt: (818) 422-8834</span>
              </div>
            </div>

            {/* Training Center Office */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 block mb-0.5">
                  Classroom Facility
                </span>
                <h3 className="text-base font-bold text-slate-900">Los Angeles Center</h3>
                <p className="text-xs text-slate-500">{VERIFIED_BUSINESS_INFO.address.full}</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href={`mailto:${VERIFIED_BUSINESS_INFO.contacts.email}`}
                  className="text-xs font-semibold text-[#0d9488] hover:underline block"
                >
                  {VERIFIED_BUSINESS_INFO.contacts.email}
                </a>
                <span className="text-[11px] text-slate-400 block mt-1">Open 7 Days • 9:00 AM – 3:00 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Contact & Quote Form */}
        <ContactForm />

        {/* Service Areas */}
        <ServiceAreaSection />
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
