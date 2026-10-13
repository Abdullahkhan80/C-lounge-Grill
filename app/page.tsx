"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Phone, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award, 
  MapPin, 
  Sparkles, 
  Users, 
  GraduationCap, 
  FileCheck, 
  Building2,
  ChevronRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TrustBanner } from "@/components/TrustBanner";
import { CourseCard } from "@/components/CourseCard";
import { CurriculumSection } from "@/components/CurriculumSection";
import { GroupTrainingSection } from "@/components/GroupTrainingSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/components/LanguageContext";
import { COURSES_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function HomePage() {
  const { isSpanish } = useLanguage();
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<string>("servsafe-manager");

  const handleOpenInquiry = (courseId: string = "servsafe-manager") => {
    setSelectedCourseId(courseId);
    setInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      {/* 1. Sticky Branded Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      <main className="flex-1">
        {/* 2 - 5. Hero Section */}
        <section className="relative bg-[#071526] text-white pt-16 pb-28 sm:pt-20 sm:pb-36 overflow-hidden">
          {/* Subtle Image Background with Dual Dark Gradients */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/images/hero-kitchen.jpg"
              alt="Professional culinary kitchen food safety instruction"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#071526] via-[#071526]/90 to-[#0a1d37]/80" />
          <div className="absolute inset-0 z-0 bg-radial-at-c from-teal-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headlines & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                {/* Official Certification Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-200 backdrop-blur-sm shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-amber-300 font-bold">SERVSAFE®</span>
                  <span>•</span>
                  <span>{isSpanish ? "Acreditado por ANSI • Código CA 113947.3" : "ANSI Accredited • CA Code 113947.3"}</span>
                </div>

                {/* Hero Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                  {isSpanish ? (
                    <>
                      Obtenga su Certificación con <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Total Confianza</span>
                    </>
                  ) : (
                    <>
                      Get Food Safety Certified with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Confidence</span>
                    </>
                  )}
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  {isSpanish
                    ? "Más de 40 años de experiencia en la industria gastronómica. Clases presenciales dinámicas los 7 días de la semana con resultados inmediatos el mismo día en inglés y español. Viajamos gratis a su restaurante para 2 o más gerentes."
                    : "Over 40 years of industry experience. Dedicated in-person instruction taught 7 days a week with immediate same-day examination results in English and Spanish. We travel directly to your facility free of charge for 2 or more managers."}
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#courses-section"
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0d9488] to-[#059669] hover:from-[#0f766e] hover:to-[#047857] text-white font-extrabold text-sm shadow-lg shadow-teal-950/30 transition-all flex items-center gap-2 group cursor-pointer"
                  >
                    <span>{isSpanish ? "Explorar Cursos" : "Explore Classes"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={`tel:${isSpanish ? VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw : VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                    className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-sm border border-white/20 backdrop-blur-sm transition-all flex items-center gap-2.5"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>{isSpanish ? "Llamar para Agendar" : "Call to Schedule"}</span>
                  </a>
                </div>

                {/* Quick Trust Badges Under Hero */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isSpanish ? "Resultados Inmediatos" : "Immediate Same-Day Results"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isSpanish ? "Abierto 7 Días a la Semana" : "Open 7 Days a Week"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isSpanish ? "Proveedor Preferido Dpto. Salud LA" : "LA County Health Dept. Preferred"}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Rate Card / Live Spotlight Card */}
              <div className="lg:col-span-5">
                <div className="bg-white/95 text-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl border border-white/40 backdrop-blur-md space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        {isSpanish ? "Tarifas Oficiales Verificadas" : "Verified Official Rates"}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      ServSafe® ANSI
                    </span>
                  </div>

                  {/* 3 Quick Rate Rows */}
                  <div className="space-y-2.5 text-xs">
                    {/* Row 1 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                      <div>
                        <div className="font-bold text-slate-900">ServSafe Manager Class & Exam</div>
                        <div className="text-[11px] text-slate-500">In-Person • 5-Year Certification</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-slate-900">$150</span>
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="p-3 rounded-xl bg-teal-50/60 border border-teal-200/80 flex items-center justify-between hover:bg-teal-50 transition-colors">
                      <div>
                        <div className="font-bold text-teal-950 flex items-center gap-1.5">
                          <span>Group Manager Training</span>
                          <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-teal-600 text-white uppercase">
                            Best Value
                          </span>
                        </div>
                        <div className="text-[11px] text-teal-700">5+ Managers • We Come To You Free</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-teal-800">$125</span>
                        <span className="text-[10px] text-slate-500 block">/manager</span>
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                      <div>
                        <div className="font-bold text-slate-900">Food Handler Certification</div>
                        <div className="text-[11px] text-slate-500">In-Person Class & Exam • 5 Person Min</div>
                      </div>
                      <div className="text-right">
                        <span className="text-xl font-black text-slate-900">$49</span>
                        <span className="text-[10px] text-slate-500 block">/person</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Action Button */}
                  <button
                    onClick={() => handleOpenInquiry("servsafe-manager")}
                    className="w-full py-3 bg-[#0a192f] hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-emerald-400" />
                    <span>{isSpanish ? "Calcular Cotización de Clase" : "Calculate Class Quote & Inquire"}</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center leading-tight">
                    {isSpanish
                      ? "Sin pagos en línea requeridos. Confirmamos fechas por teléfono directamente."
                      : "No online payment required. Classes scheduled & confirmed directly by phone."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Trust Section Featuring 40+ Years Experience */}
        <TrustBanner />

        {/* 7. Course Cards Section */}
        <section id="courses-section" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Award className="w-3.5 h-3.5 text-teal-600" />
                <span>{isSpanish ? "Programas de Certificación" : "Certification Programs"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                {isSpanish
                  ? "Cursos Presenciales con Resultados Inmediatos"
                  : "In-Person Courses with Immediate Results"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {isSpanish
                  ? "Seleccione la certificación requerida por la ley de California para su establecimiento de alimentos. Todos los cursos incluyen instrucción profesional y examen oficial."
                  : "Select the California state-mandated food safety certification for your establishment. All courses include expert in-person instruction and the official proctored examination."}
              </p>
            </div>

            {/* 3 Main Course Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              <CourseCard
                course={COURSES_DATA[0]}
                onInquire={handleOpenInquiry}
                featured={false}
              />
              <CourseCard
                course={COURSES_DATA[1]}
                onInquire={handleOpenInquiry}
                featured={true}
              />
              <CourseCard
                course={COURSES_DATA[2]}
                onInquire={handleOpenInquiry}
                featured={false}
              />
            </div>
          </div>
        </section>

        {/* 8. English & Spanish Training Section */}
        <section className="py-16 bg-[#0a192f] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span>{isSpanish ? "Instrucción Bilingüe de Primera Calidad" : "Bilingual Premier Instruction"}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {isSpanish
                    ? "Clases y Exámenes Disponibles en Inglés y Español"
                    : "Classes and Proctored Exams Available in English and Spanish"}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {isSpanish
                    ? "Nos aseguramos de que todo su equipo comprenda las normas sanitarias en su idioma materno para garantizar altos índices de aprobación y una cultura de seguridad en su cocina."
                    : "We believe true food safety comprehension begins with clear communication. Our instructors deliver courses natively in English and Spanish with dedicated materials and exams."}
                </p>
              </div>

              {/* Direct Calling Columns */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-amber-400 block">English Coordinator</span>
                    <span className="font-extrabold text-white text-sm">Richard</span>
                  </div>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                    className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-lg text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
                  </a>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-emerald-400 block">Coordinadora en Español</span>
                    <span className="font-extrabold text-white text-sm">Susana</span>
                  </div>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black rounded-lg text-xs transition-colors inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. How the Certification Process Works */}
        <section className="py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>{isSpanish ? "Paso a Paso" : "Step-by-Step Process"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {isSpanish
                  ? "¿Cómo Funciona el Proceso de Certificación?"
                  : "How the Food Safety Certification Process Works"}
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {isSpanish
                  ? "Un camino directo, presencial y sin complicaciones desde su llamada inicial hasta tener su certificado oficial en mano el mismo día."
                  : "A seamless, transparent pathway from your initial phone inquiry to walking away certified on examination day."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-slate-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0a192f] text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  1
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {isSpanish ? "1. Coordine su Clase" : "1. Schedule Your Date"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isSpanish
                    ? "Llámenos al (818) 339-3477 (inglés) o (818) 422-8854 (español) para seleccionar la fecha que mejor se adapte a su turno de cocina. Estamos disponibles los 7 días de la semana."
                    : "Call Richard or Susana to pick any day of the week (open 7 days). Choose our Los Angeles classroom or request on-site dispatch to your kitchen."}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-slate-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#0d9488] text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  2
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {isSpanish ? "2. Instrucción Presencial" : "2. In-Person Instruction"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isSpanish
                    ? "Asista a una clase interactiva con presentaciones claras en DVD y PowerPoint cubriendo FAT TOM, alérgenos, temperaturas de cocción y HACCP."
                    : "Experience clear visual DVD and PowerPoint presentations that break down complex food codes into memorable, practical kitchen routines."}
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-slate-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  3
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {isSpanish ? "3. Examen Supervisado" : "3. Proctored Exam"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isSpanish
                    ? "Presente el examen oficial de ServSafe bajo la supervisión de nuestros examinadores certificados, en un entorno enfocado y profesional."
                    : "Take the official ServSafe exam with our certified proctors right after class while the review material is fresh in your mind."}
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-slate-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                  4
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {isSpanish ? "4. Resultados el Mismo Día" : "4. Immediate Results"}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {isSpanish
                    ? "Reciba sus resultados inmediatamente al finalizar el examen. Conozca su resultado el mismo día y obtenga su certificación oficial de 5 años."
                    : "Receive your test outcome immediately before leaving. Walk away with verified pass documentation valid for 5 years across California."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 10. On-Site Group Training Section */}
        <GroupTrainingSection onOpenInquiry={() => handleOpenInquiry("group-manager")} />

        {/* Comprehensive Curriculum Breakdown */}
        <CurriculumSection />

        {/* 11. Service Areas: Los Angeles, Orange, and Ventura Counties */}
        <ServiceAreaSection />

        {/* 12. FAQ Accordion */}
        <FaqAccordion />

        {/* 13. Contact & Class Inquiry Form */}
        <ContactForm />
      </main>

      {/* 14. Professional Footer */}
      <Footer />

      {/* Global Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultCourseId={selectedCourseId}
      />
    </div>
  );
}
