"use client";

import React from "react";
import Image from "next/image";
import { Users, MapPin, CheckCircle2, Calendar, Phone, ArrowRight, Sparkles, Building, Truck } from "lucide-react";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";
import { useLanguage } from "./LanguageContext";

interface GroupTrainingSectionProps {
  onOpenInquiry?: () => void;
}

export function GroupTrainingSection({ onOpenInquiry }: GroupTrainingSectionProps) {
  const { isSpanish } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Composite with authentic classroom & chef photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src="/images/classroom.png"
                  alt="ServSafe classroom instruction in session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/90 text-white font-bold text-[11px] uppercase tracking-wide inline-block mb-1">
                    {isSpanish ? "Instrucción Presencial Activa" : "Interactive In-Person Instruction"}
                  </span>
                  <p className="text-xs font-semibold text-slate-200">
                    {isSpanish
                      ? "Clases amenas y dinámicas enfocadas en que su equipo comprenda y aplique la seguridad alimentaria."
                      : "Engaging classroom atmosphere structured for maximum retention and direct comprehension."}
                  </p>
                </div>
              </div>
            </div>

            {/* Overlapping chef badge card */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200/90 items-center gap-3.5 max-w-xs z-10">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src="/images/chef_smile.png"
                  alt="Professional culinary chef"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-slate-900 leading-tight">
                  {isSpanish ? "Capacitación en su Restaurante" : "At Your Restaurant Kitchen"}
                </div>
                <div className="text-[11px] text-emerald-600 font-bold mt-0.5">
                  {isSpanish ? "Viajamos gratis para 2+ gerentes" : "Free travel for 2+ managers"}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isSpanish ? "Servicio a Domicilio Sin Costo" : "On-Site Private Group Training"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              {isSpanish ? (
                <>
                  Vamos a su Local <span className="text-[#0d9488]">Sin Cargo Alguno</span> para 2 o Más Gerentes
                </>
              ) : (
                <>
                  We Come to Your Location <span className="text-[#0d9488]">Free of Charge</span> for 2 or More Managers
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isSpanish
                ? "No gaste tiempo enviando a su equipo a un centro externo. Llevamos a nuestro instructor certificado, proyectores, manuales y exámenes oficiales directamente a su restaurante o comisariato en cualquier lugar de Los Ángeles, Orange o Ventura."
                : "Save your team the commute. Our certified instructors bring course materials, visual presentations, and official exams directly to your dining room or kitchen anywhere in Los Angeles, Orange, or Ventura Counties."}
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    {isSpanish ? "Tarifa Reducida de $125" : "Special $125 Rate"}
                  </span>
                  <span className="text-slate-500">
                    {isSpanish ? "Para grupos de 5 o más gerentes" : "For groups of 5 or more managers (Save $25/ea)"}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    {isSpanish ? "Disponible 7 Días a la Semana" : "7 Days a Week Flexibility"}
                  </span>
                  <span className="text-slate-500">
                    {isSpanish ? "Acomodamos sus horarios de turno" : "Scheduled around your kitchen prep shifts"}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    {isSpanish ? "En Inglés o Español" : "English & Spanish Instruction"}
                  </span>
                  <span className="text-slate-500">
                    {isSpanish ? "Elija el idioma preferido de su equipo" : "Taught natively in your team's primary language"}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">
                    {isSpanish ? "Cobertura de 3 Condados" : "3-County Coverage"}
                  </span>
                  <span className="text-slate-500">
                    Los Angeles, Orange, and Ventura Counties
                  </span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3 bg-[#0a192f] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{isSpanish ? "Solicitar Capacitación en su Local" : "Request On-Site Training"}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>

              <a
                href={`tel:${isSpanish ? VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw : VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs rounded-xl border border-slate-300 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0d9488]" />
                <span>
                  {isSpanish
                    ? `Llamar a Susana: ${VERIFIED_BUSINESS_INFO.contacts.spanish.phone}`
                    : `Call Richard: ${VERIFIED_BUSINESS_INFO.contacts.english.phone}`}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
