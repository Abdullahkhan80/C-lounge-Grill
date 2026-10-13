"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Users, 
  HelpCircle, 
  Phone, 
  FileText, 
  ChevronRight,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CourseCard } from "@/components/CourseCard";
import { CurriculumSection } from "@/components/CurriculumSection";
import { InquiryModal } from "@/components/InquiryModal";
import { useLanguage } from "@/components/LanguageContext";
import { COURSES_DATA, VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export default function CoursesPage() {
  const { isSpanish } = useLanguage();
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("servsafe-manager");

  const openInquiry = (id: string = "servsafe-manager") => {
    setSelectedCourse(id);
    setInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-[#0f172a]">
      <Navbar onOpenInquiry={openInquiry} />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="bg-[#071526] text-white py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#071526] via-[#0a1d37] to-[#071526] opacity-90" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{isSpanish ? "Catálogo Oficial de Cursos" : "Official Course Offerings"}</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              {isSpanish
                ? "Cursos y Tarifas de Certificación ServSafe"
                : "ServSafe Certification Courses & Pricing"}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {isSpanish
                ? "Capacitación presencial completa y exámenes oficiales autorizados. Conozca sus resultados inmediatamente el mismo día."
                : "State-mandated in-person instruction and authorized proctored examinations. Walk away with immediate same-day test results."}
            </p>
          </div>
        </section>

        {/* 3 Main Courses */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CourseCard
              course={COURSES_DATA[0]}
              onInquire={openInquiry}
              featured={false}
            />
            <CourseCard
              course={COURSES_DATA[1]}
              onInquire={openInquiry}
              featured={true}
            />
            <CourseCard
              course={COURSES_DATA[2]}
              onInquire={openInquiry}
              featured={false}
            />
          </div>
        </section>

        {/* Comparison Table: Manager vs Handler */}
        <section className="py-16 bg-white border-t border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {isSpanish
                  ? "¿Cuál Certificación Requiere su Personal?"
                  : "Which Certification Does Your Staff Require?"}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                {isSpanish
                  ? "Comparativa entre la Certificación de Gerente y la Tarjeta de Manipulador según la ley de California."
                  : "A side-by-side comparison under California Health & Safety Code requirements."}
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-4 sm:p-5">Feature / Requirement</th>
                    <th className="p-4 sm:p-5 text-[#0a192f] font-black bg-teal-50/50">
                      ServSafe Food Protection Manager ($150)
                    </th>
                    <th className="p-4 sm:p-5 text-slate-800">
                      ServSafe Food Handler ($49)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Legal Mandate (California)</td>
                    <td className="p-4 bg-teal-50/20 font-semibold text-teal-900">
                      CA Health & Safety Code 113947.3 (At least 1 per facility)
                    </td>
                    <td className="p-4">
                      Mandatory for all food employees handling non-prepackaged food
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Validity Period</td>
                    <td className="p-4 bg-teal-50/20 font-bold text-emerald-700">
                      5 Years Nationwide
                    </td>
                    <td className="p-4">
                      3 Years (California)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Accreditation Level</td>
                    <td className="p-4 bg-teal-50/20 font-semibold text-slate-800">
                      ANSI / CFP National Accreditation Board
                    </td>
                    <td className="p-4">
                      State-approved Food Handler Program
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Who Must Take It</td>
                    <td className="p-4 bg-teal-50/20 text-slate-700">
                      Owners, General Managers, Kitchen Managers, Executive Chefs
                    </td>
                    <td className="p-4">
                      Line cooks, prep cooks, dishwashers, servers, bartenders
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Exam Results Timing</td>
                    <td className="p-4 bg-teal-50/20 font-black text-[#0d9488]">
                      IMMEDIATE (Same-Day Grading)
                    </td>
                    <td className="p-4 font-black text-[#0d9488]">
                      IMMEDIATE (Same-Day Grading)
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-slate-900">Pricing / Rates</td>
                    <td className="p-4 bg-teal-50/20 font-black text-slate-900">
                      $150 individual ($125 for 5+ managers)
                    </td>
                    <td className="p-4 font-black text-slate-900">
                      $49 per person (5-person minimum)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Exam Day Checklist */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <FileText className="w-5 h-5 text-teal-600" />
              <h3 className="text-xl font-black text-slate-900">
                {isSpanish ? "Requisitos para el Día del Examen" : "Exam Day Requirements & Checklist"}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              {isSpanish
                ? "Por regulaciones oficiales de supervisión de ServSafe y ANSI, cada candidato debe presentar lo siguiente:"
                : "Per official ServSafe and ANSI proctoring guidelines, every test examinee must bring:"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="font-black text-slate-900 block mb-1">1. Government Photo ID</span>
                <span className="text-slate-500">
                  Valid Driver's License, State ID card, Passport, or Military ID.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="font-black text-slate-900 block mb-1">2. Pencils & Notepad</span>
                <span className="text-slate-500">
                  No. 2 pencils for bubble sheet marking and note-taking during lecture.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <span className="font-black text-slate-900 block mb-1">3. Prompt Attendance</span>
                <span className="text-slate-500">
                  Arrive at 8:45 AM for 9:00 AM class start. Full participation required.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 12-Topic Curriculum */}
        <CurriculumSection />

        {/* Bottom CTA Banner */}
        <section className="py-16 bg-[#0a192f] text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-black">
              {isSpanish ? "¿Listo para Reservar su Clase?" : "Ready to Enroll in an Upcoming Class?"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              {isSpanish
                ? "Llámenos hoy o complete el formulario de cotización. Clases presenciales los 7 días de la semana."
                : "Call us today or submit an inquiry to schedule your in-person session. Open 7 days a week."}
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openInquiry("servsafe-manager")}
                className="px-6 py-3 bg-[#0d9488] hover:bg-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                {isSpanish ? "Iniciar Consulta" : "Request Class Enrollment"}
              </button>
              <a
                href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-bold text-xs rounded-xl border border-white/20 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Richard: {VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        defaultCourseId={selectedCourse}
      />
    </div>
  );
}
