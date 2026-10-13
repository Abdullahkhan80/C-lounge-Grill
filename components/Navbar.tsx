"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Globe, Menu, X, ShieldCheck, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { AaaLogo } from "./AaaLogo";
import { useLanguage } from "./LanguageContext";
import { VERIFIED_BUSINESS_INFO } from "@/data/foodSafetyData";

interface NavbarProps {
  onOpenInquiry?: (defaultCourse?: string) => void;
}

export function Navbar({ onOpenInquiry }: NavbarProps) {
  const pathname = usePathname();
  const { lang, setLang, isSpanish } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", labelEs: "Inicio" },
    { href: "/courses", label: "Courses & Pricing", labelEs: "Cursos y Precios" },
    { href: "/group-training", label: "On-Site Training", labelEs: "Capacitación en su Local" },
    { href: "/about", label: "About Us", labelEs: "Nosotros" },
    { href: "/faq", label: "FAQ", labelEs: "Preguntas" },
    { href: "/contact", label: "Contact", labelEs: "Contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Hotline & Announcement Bar */}
      <div className="bg-[#0a192f] text-white text-xs border-b border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          {/* Direct Phone Numbers for English & Spanish */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              {isSpanish ? "Clases 7 Días a la Semana" : "Classes 7 Days a Week"}
            </span>

            {/* English Hotline */}
            <a
              href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors group font-medium"
              title="Call Richard for English classes"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>
                <strong className="text-amber-400 font-bold">English:</strong> {VERIFIED_BUSINESS_INFO.contacts.english.phone} ({VERIFIED_BUSINESS_INFO.contacts.english.name})
              </span>
            </a>

            {/* Spanish Hotline */}
            <a
              href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors group font-medium"
              title="Call Susana for Spanish classes"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>
                <strong className="text-emerald-400 font-bold">Español:</strong> {VERIFIED_BUSINESS_INFO.contacts.spanish.phone} ({VERIFIED_BUSINESS_INFO.contacts.spanish.name})
              </span>
            </a>
          </div>

          {/* Value prop & Language toggle */}
          <div className="flex items-center justify-between md:justify-end gap-3 text-slate-300">
            <span className="hidden lg:inline-flex items-center gap-1 text-[11px] text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/10">
              <MapPin className="w-3 h-3 text-emerald-400" />
              {isSpanish ? "Viajamos gratis para 2+ gerentes (LA, OC, Ventura)" : "We come to you free for 2+ managers (LA, Orange, Ventura)"}
            </span>

            {/* Language Switcher */}
            <div className="inline-flex items-center bg-slate-800/90 rounded-lg p-0.5 border border-white/15">
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  lang === "en"
                    ? "bg-[#0d9488] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                  lang === "es"
                    ? "bg-[#0d9488] text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled
            ? "border-slate-200 shadow-md py-2.5"
            : "border-slate-200/80 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <AaaLogo />

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[14px] font-semibold tracking-tight transition-colors py-1 relative ${
                    isActive
                      ? "text-[#0d9488]"
                      : "text-slate-700 hover:text-[#0a192f]"
                  }`}
                >
                  {isSpanish ? link.labelEs : link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0d9488] rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${isSpanish ? VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw : VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0d9488]" />
              <span>{isSpanish ? "Llamar ahora" : "Call to Schedule"}</span>
            </a>

            <button
              onClick={() => onOpenInquiry?.()}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#0a192f] via-[#0f274a] to-[#0d9488] hover:opacity-95 rounded-lg shadow-sm shadow-navy-950/20 transition-all hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-300" />
              <span>{isSpanish ? "Inscribirse / Cotizar" : "Inquire / Book Class"}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry?.()}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-[#0a192f] rounded-lg"
            >
              {isSpanish ? "Inscribirse" : "Inquire"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    pathname === link.href
                      ? "bg-emerald-50 text-[#0d9488]"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{isSpanish ? link.labelEs : link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </Link>
              ))}
            </div>

            {/* Mobile Hotlines */}
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 mt-2">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {isSpanish ? "Líneas de Atención Telefónica" : "Direct Phone Hotlines"}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.english.phoneRaw}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-500" />
                  <span>English: {VERIFIED_BUSINESS_INFO.contacts.english.phone}</span>
                </a>
                <a
                  href={`tel:${VERIFIED_BUSINESS_INFO.contacts.spanish.phoneRaw}`}
                  className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Español: {VERIFIED_BUSINESS_INFO.contacts.spanish.phone}</span>
                </a>
              </div>
            </div>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry?.();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-[#0a192f] rounded-xl shadow-md"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>{isSpanish ? "Iniciar Consulta de Clase" : "Start Class Inquiry"}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
