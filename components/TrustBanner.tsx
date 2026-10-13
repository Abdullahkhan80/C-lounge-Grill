"use client";

import React from "react";
import { ShieldCheck, Award, CheckCircle2, Clock, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export function TrustBanner() {
  const { isSpanish } = useLanguage();

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {/* Item 1: 40+ Years Experience */}
          <div className="flex items-start gap-4 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-500/20">
              <Award className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900">40+ Years</span>
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                  {isSpanish ? "Experiencia" : "Established"}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isSpanish
                  ? "Cuatro décadas de experiencia directa en la industria restaurantera y de alimentos."
                  : "Over four decades of dedicated food service industry expertise and leadership."}
              </p>
            </div>
          </div>

          {/* Item 2: ANSI Accredited */}
          <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-[#0d9488] flex items-center justify-center flex-shrink-0 border border-teal-500/20">
              <ShieldCheck className="w-6 h-6 text-[#0d9488]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900">ANSI / CFP</span>
                <span className="text-[10px] font-bold uppercase bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded">
                  {isSpanish ? "Nacional" : "Accredited"}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isSpanish
                  ? "Cumple y supera los requisitos del Código de Salud de California 113947.3."
                  : "Fully meets and exceeds California Health and Safety Code Section 113947.3."}
              </p>
            </div>
          </div>

          {/* Item 3: LA County Preferred Provider */}
          <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black text-slate-900 leading-tight">L.A. County</span>
                <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded">
                  Preferred
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isSpanish
                  ? "Reconocido como Proveedor Preferido por el Departamento de Salud de Los Ángeles."
                  : "Officially recognized by the L.A. County Health Department as a Preferred Provider."}
              </p>
            </div>
          </div>

          {/* Item 4: Immediate Results */}
          <div className="flex items-start gap-4 pt-4 sm:pt-0 lg:pl-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
              <Clock className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-slate-900">Immediate</span>
                <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  Same-Day
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {isSpanish
                  ? "Exámenes calificados en el lugar. Reciba sus resultados inmediatamente el mismo día."
                  : "On-site proctoring with immediate grading. No waiting weeks for exam results."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
