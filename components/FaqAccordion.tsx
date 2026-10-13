"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, Search } from "lucide-react";
import { FAQS_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

export function FaqAccordion() {
  const { isSpanish } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const qText = isSpanish ? faq.qEs : faq.q;
    const aText = isSpanish ? faq.aEs : faq.a;
    return (
      qText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      aText.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isSpanish
              ? "Todo lo que Necesita Saber sobre la Certificación"
              : "Everything You Need to Know About Certification"}
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-xl mx-auto">
            {isSpanish
              ? "Respuestas a las dudas más comunes sobre la ley de California, exámenes en el lugar y tarifas para grupos."
              : "Answers to common questions about California food code compliance, same-day testing, and group rates."}
          </p>

          {/* Quick Search Bar */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isSpanish ? "Buscar pregunta..." : "Search questions..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs focus:border-[#0d9488] focus:ring-1 focus:ring-[#0d9488] shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200/90 shadow-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {isSpanish ? faq.qEs : faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-teal-50 text-[#0d9488]" : "text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <p>{isSpanish ? faq.aEs : faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {isSpanish ? "¿Tiene otra pregunta sobre su situación?" : "Have a specific question about your restaurant?"}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {isSpanish
                ? "Llámenos hoy mismo para hablar con nuestros instructores certificados."
                : "Speak directly with our instructors Richard (English) or Susana (Spanish)."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
              className="px-3.5 py-2 rounded-lg bg-[#0a192f] text-white text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>English: {VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
            </a>
            <a
              href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
              className="px-3.5 py-2 rounded-lg bg-[#0d9488] text-white text-xs font-bold hover:bg-teal-700 transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Español: {VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
