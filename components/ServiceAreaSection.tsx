"use client";

import React from "react";
import { MapPin, Navigation, Building2, Check, ArrowRight } from "lucide-react";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

export function ServiceAreaSection() {
  const { isSpanish } = useLanguage();

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5 text-blue-600" />
            <span>{isSpanish ? "Áreas de Servicio y Cobertura" : "Service Areas & Coverage"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isSpanish
              ? "Servicio en Todo el Sur de California"
              : "Serving Southern California Restaurants & Hospitality"}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isSpanish
              ? "Brindamos capacitación presencial en nuestras aulas centrales de Los Ángeles y viajamos sin costo a su restaurante en los condados de Los Ángeles, Orange y Ventura."
              : "We provide central classroom instruction in Los Angeles and travel directly to client locations across Los Angeles, Orange, and Ventura Counties."}
          </p>
        </div>

        {/* 3 County Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_BUSINESS_INFO.serviceCounties.map((county, idx) => (
            <div
              key={county.name}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-[#0d9488] shadow-sm">
                  <MapPin className="w-5 h-5 text-[#0d9488]" />
                </div>

                <h3 className="text-xl font-black text-slate-900">
                  {isSpanish ? county.nameEs : county.name}
                </h3>
                <p className="text-xs font-bold text-[#0d9488] mt-1">
                  {isSpanish ? county.taglineEs : county.tagline}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    {isSpanish ? "Ciudades Atendidas Frecuentemente:" : "Key Municipalities Served:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {county.popularAreas.map((city) => (
                      <span
                        key={city}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-[11px] font-medium"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-semibold text-slate-600">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>
                  {isSpanish ? "Servicio en local sin costo de viaje" : "On-site dispatch with zero travel fee"}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Central Training Facility Spotlight Banner */}
        <div className="mt-10 rounded-2xl bg-[#0a192f] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                {isSpanish ? "Centro Principal de Clases" : "Central Los Angeles Training Center"}
              </span>
              <h4 className="text-lg font-bold text-white">
                {VERIFIED_BUSINESS_INFO.address.full}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {isSpanish
                  ? "Clases y exámenes presenciales los 7 días de la semana (9:00 AM – 3:00 PM). Estacionamiento y acceso convenientes."
                  : "In-person classes and exams held 7 days a week (9:00 AM – 3:00 PM). Convenient parking and central transit access."}
              </p>
            </div>
          </div>

          <a
            href="https://maps.google.com/?q=3171+Los+Feliz+Blvd+suite+314+Los+Angeles+90039"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors flex items-center gap-2"
          >
            <span>{isSpanish ? "Ver en Google Maps" : "View on Google Maps"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
