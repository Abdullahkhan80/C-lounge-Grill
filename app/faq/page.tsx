"use client";

import React, { useState } from "react";
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Phone, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  BookOpen 
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/components/LanguageContext";
import { FAQS_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function FaqPage() {
  const { isSpanish } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categories = ["All", "Certification & Law", "Scheduling & On-Site", "Exams & Results", "Languages", "Booking & Payment"];

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const matchesCat = activeCategory === "All" || faq.category === activeCategory;
    const qText = isSpanish ? faq.qEs : faq.q;
    const aText = isSpanish ? faq.aEs : faq.a;
    const matchesSearch =
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#071526] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#0a1d37] to-[#071526] opacity-90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{isSpanish ? "Centro de Ayuda y Preguntas" : "Help Center & FAQ"}</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish
                ? "Conozca los requisitos legales de California, nuestro formato de clases presenciales y cómo obtener resultados inmediatos el mismo día."
                : "Learn about California health code compliance, examination proctoring, group pricing, and same-day certification."}
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-lg mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={isSpanish ? "Buscar en preguntas frecuentes..." : "Search all questions and topics..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488] backdrop-blur-md"
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs & Content */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#0a192f] text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
                No questions found matching your search. Try another query or call us directly!
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold text-[#0d9488] uppercase tracking-wider block mb-1">
                          {isSpanish ? faq.categoryEs : faq.category}
                        </span>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                          {isSpanish ? faq.qEs : faq.q}
                        </h3>
                      </div>
                      <div
                        className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform ${
                          isOpen ? "rotate-180 bg-teal-50 text-[#0d9488]" : "text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        <p>{isSpanish ? faq.aEs : faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Direct Help Desk Callout */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="text-lg font-bold text-slate-900">
                {isSpanish ? "¿No encuentra la respuesta a su duda?" : "Still have questions about your restaurant?"}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                {isSpanish
                  ? "Hable directamente con Richard o Susana los 7 días de la semana de 9:00 AM a 3:00 PM."
                  : "Call our coordinators directly 7 days a week from 9:00 AM to 3:00 PM."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                className="px-4 py-2 bg-[#0a192f] text-white rounded-xl text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>English: {VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
              </a>
              <a
                href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                className="px-4 py-2 bg-[#0d9488] text-white rounded-xl text-xs font-bold hover:bg-teal-700 transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>Español: {VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
              </a>
            </div>
          </div>
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
