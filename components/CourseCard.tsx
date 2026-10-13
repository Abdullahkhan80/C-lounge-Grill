"use client";

import React from "react";
import { Check, Clock, MapPin, Award, Users, ChevronRight, Phone } from "lucide-react";
import { CourseInfo, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

interface CourseCardProps {
  course: CourseInfo;
  onInquire: (courseId: string) => void;
  featured?: boolean;
}

export function CourseCard({ course, onInquire, featured = false }: CourseCardProps) {
  const { isSpanish } = useLanguage();

  return (
    <div
      className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
        featured
          ? "bg-white border-2 border-[#0d9488] shadow-xl shadow-teal-950/10 ring-4 ring-teal-500/10"
          : "bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300"
      }`}
    >
      {/* Top Badge */}
      {course.badge && (
        <div className="absolute -top-3.5 left-6 z-10">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider shadow-sm ${
              featured
                ? "bg-gradient-to-r from-[#0d9488] to-[#047857] text-white"
                : "bg-[#0a192f] text-amber-300"
            }`}
          >
            <Award className="w-3 h-3" />
            {isSpanish ? course.badgeEs : course.badge}
          </span>
        </div>
      )}

      {/* Card Header & Pricing */}
      <div className="p-6 sm:p-7 pt-8">
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
          {isSpanish ? course.titleEs : course.title}
        </h3>

        {/* Pricing Block */}
        <div className="mt-4 pb-4 border-b border-slate-100 flex items-baseline gap-2">
          <span className="text-4xl font-black text-slate-900 tracking-tight">
            ${course.price}
          </span>
          <span className="text-xs text-slate-500 font-medium leading-tight">
            {isSpanish ? course.priceNoteEs : course.priceNote}
          </span>
        </div>

        {/* Quick Specs */}
        <div className="mt-4 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#0d9488] flex-shrink-0" />
            <span>{isSpanish ? course.durationEs : course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>{isSpanish ? course.formatEs : course.format}</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="font-semibold text-slate-800">
              {isSpanish ? course.validityEs : course.validity}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-xs text-slate-600 leading-relaxed">
          {isSpanish ? course.descriptionEs : course.description}
        </p>

        {/* Highlights List */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
            {isSpanish ? "Lo que incluye este curso:" : "What's Included in This Training:"}
          </span>
          <ul className="space-y-2.5">
            {(isSpanish ? course.highlightsEs : course.highlights).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5" />
                </span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-6 sm:p-7 pt-0 space-y-2.5">
        <button
          onClick={() => onInquire(course.id)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer ${
            featured
              ? "bg-gradient-to-r from-[#0a192f] via-[#0f274a] to-[#0d9488] hover:opacity-95 text-white shadow-teal-950/20"
              : "bg-slate-900 hover:bg-[#0a192f] text-white"
          }`}
        >
          <span>{isSpanish ? "Consultar y Cotizar" : "Inquire & Calculate Quote"}</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
          <span>{isSpanish ? "¿Prefiere hablar hoy?" : "Prefer to call today?"}</span>
          <a
            href={`tel:${isSpanish ? VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw : VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
            className="font-bold text-[#0d9488] hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3 h-3" />
            <span>{isSpanish ? "Llamar a Susana" : "Call Richard"}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
