"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import { AaaLogo } from "./AaaLogo";
import { useLanguage } from "./LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

export function Footer() {
  const { isSpanish } = useLanguage();

  return (
    <footer className="bg-[#071526] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Credentials */}
          <div className="space-y-4">
            <AaaLogo lightMode={true} />
            <p className="text-xs text-slate-400 leading-relaxed">
              {isSpanish
                ? "Centro de capacitación líder con más de 40 años de experiencia en la industria gastronómica. Clases presenciales de ServSafe los 7 días de la semana con resultados inmediatos el mismo día."
                : "Full-service food safety training facility with over 40 years of industry experience. ServSafe in-person instruction 7 days a week with immediate same-day examination results."}
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isSpanish ? "Acreditado a nivel nacional por ANSI" : "ANSI National Accreditation Board Accredited"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isSpanish ? "Proveedor Preferido del Dpto. de Salud de L.A." : "L.A. County Health Dept. Preferred Provider"}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{isSpanish ? "Cumple Código de California 113947.3" : "Complies with CA Health & Safety Code 113947.3"}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Course Offerings */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isSpanish ? "Cursos y Tarifas" : "Courses & Pricing"}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/courses" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>ServSafe Food Protection Manager</span>
                  <span className="text-amber-400 font-bold">$150</span>
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Group Manager Training (5+ Mgrs)</span>
                  <span className="text-emerald-400 font-bold">$125/ea</span>
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>ServSafe Food Handler (5+ Person Min)</span>
                  <span className="text-slate-300 font-bold">$49/ea</span>
                </Link>
              </li>
              <li className="pt-2 text-slate-400 border-t border-slate-800">
                <Link href="/group-training" className="text-emerald-400 hover:text-emerald-300 font-semibold block">
                  {isSpanish ? "→ Viajamos a su local sin costo (2+ gerentes)" : "→ We come to your location free (2+ managers)"}
                </Link>
              </li>
              <li className="text-slate-400">
                <span className="text-slate-400 block">
                  {isSpanish ? "Clases disponibles en inglés y español" : "Classes available in English & Spanish"}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isSpanish ? "Contacto Directo" : "Direct Contacts"}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                  {isSpanish ? "Coordinación en Inglés" : "English Inquiries & Scheduling"}
                </span>
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                  className="font-bold text-slate-200 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{VERIFIED_BUSINESS_INFO.contacts.english.phone} ({VERIFIED_BUSINESS_INFO.contacts.english.name})</span>
                </a>
              </div>

              <div className="p-2.5 bg-slate-900/80 rounded-lg border border-slate-800">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">
                  {isSpanish ? "Coordinación en Español" : "Spanish Inquiries & Scheduling"}
                </span>
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                  className="font-bold text-slate-200 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{VERIFIED_BUSINESS_INFO.contacts.spanish.phone} ({VERIFIED_BUSINESS_INFO.contacts.spanish.name})</span>
                </a>
                
                {/* Verified conflict notice */}
                <div className="mt-1.5 pt-1.5 border-t border-slate-800 text-[10px] text-amber-300/90 flex items-start gap-1">
                  <AlertCircle className="w-3 h-3 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    {isSpanish
                      ? "Verificación: número alternativo en directorio: (818) 422-8834."
                      : "Verification note: alternate number in website records is (818) 422-8834."}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${VERIFIED_BUSINESS_INFO.contacts.email}`} className="hover:text-white underline">
                  {VERIFIED_BUSINESS_INFO.contacts.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Location & Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {isSpanish ? "Ubicación y Horario" : "Location & Hours"}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Los Angeles Training Center</span>
                  <span>{VERIFIED_BUSINESS_INFO.address.full}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">
                    {isSpanish ? "Abierto 7 Días a la Semana" : "Open 7 Days a Week"}
                  </span>
                  <span>9:00 AM – 3:00 PM (Classroom & On-Site)</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                  {isSpanish ? "Condados de Cobertura:" : "Service Coverage:"}
                </span>
                <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] mr-1 mb-1">
                  Los Angeles County
                </span>
                <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] mr-1 mb-1">
                  Orange County
                </span>
                <span className="inline-block px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px]">
                  Ventura County
                </span>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href={VERIFIED_BUSINESS_INFO.contacts.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] inline-flex items-center gap-1 transition-colors"
                >
                  Facebook <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={VERIFIED_BUSINESS_INFO.contacts.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] inline-flex items-center gap-1 transition-colors"
                >
                  Yelp <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Verification Notice */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400 border-b border-slate-800/80 space-y-2">
          <p>
            <strong className="text-slate-300">Class Scheduling & Dispatch Notice:</strong> All course enrollments, dates, and private on-site instructor dispatch are confirmed directly through telephone contact with Richard (English) or Susana (Spanish). In compliance with our transparent operating policy, this concept website facilitates direct inquiries and quotes; no unintegrated online payments are taken.
          </p>
          <p>
            ServSafe® is a registered trademark of the National Restaurant Association Educational Foundation. AAA Food Safety Certification is an authorized instructor and proctor provider complying with ANSI / CFP national standards and California Health and Safety Code 113947.3.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 AAA SAFE FOODS.COM — All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link href="/group-training" className="hover:text-white transition-colors">Group Training</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
