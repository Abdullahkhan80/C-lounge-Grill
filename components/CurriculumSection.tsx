"use client";

import React from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  UtensilsCrossed, 
  Thermometer, 
  Droplets, 
  PackageCheck, 
  Flame, 
  Lock, 
  AlertTriangle, 
  Workflow, 
  HeartHandshake, 
  Presentation 
} from "lucide-react";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

export function CurriculumSection() {
  const { isSpanish } = useLanguage();

  const iconMap: { [key: string]: React.ReactNode } = {
    importance: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    hygiene: <Droplets className="w-5 h-5 text-blue-600" />,
    prep: <Thermometer className="w-5 h-5 text-amber-600" />,
    "cross-contamination": <UtensilsCrossed className="w-5 h-5 text-rose-600" />,
    cleaning: <Sparkles className="w-5 h-5 text-teal-600" />,
    storage: <PackageCheck className="w-5 h-5 text-indigo-600" />,
    "fat-tom": <Flame className="w-5 h-5 text-orange-600" />,
    alert: <Lock className="w-5 h-5 text-blue-600" />,
    allergens: <AlertTriangle className="w-5 h-5 text-amber-600" />,
    "cross-contact": <UtensilsCrossed className="w-5 h-5 text-purple-600" />,
    haccp: <Workflow className="w-5 h-5 text-emerald-600" />,
    covid: <HeartHandshake className="w-5 h-5 text-teal-600" />,
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Presentation className="w-3.5 h-3.5" />
            <span>{isSpanish ? "Plan de Estudios Integral" : "Comprehensive Curriculum"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isSpanish
              ? "Temas Esenciales del Examen ServSafe"
              : "Core Topics Covered in Every ServSafe Course"}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            {isSpanish
              ? "Impartido a través de presentaciones claras en PowerPoint y DVD, diseñadas para que los conceptos sean fáciles de entender y recordar para aprobar el examen a la primera."
              : "Delivered through engaging, easy-to-understand DVD and PowerPoint visual presentations, structured for maximum retention and same-day first-time pass rates."}
          </p>
        </div>

        {/* 12 Curriculum Topics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {VERIFIED_BUSINESS_INFO.curriculumTopics.map((topic, i) => (
            <div
              key={topic.id}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[topic.id] || <ShieldCheck className="w-5 h-5 text-teal-600" />}
                  </div>
                  <span className="text-[11px] font-black text-slate-300">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0d9488] transition-colors leading-snug">
                  {isSpanish ? topic.titleEs : topic.title}
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {isSpanish ? topic.summaryEs : topic.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <span>{isSpanish ? "Tema de Examen Oficial" : "Official Exam Subject"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
