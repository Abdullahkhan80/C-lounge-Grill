"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Calendar, Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ST_CLAIR_DATA } from "@/data/stClairData";

interface StClairNavbarProps {
  onOpenReservation?: () => void;
}

export function StClairNavbar({ onOpenReservation }: StClairNavbarProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/experiences", label: "Dining Experiences" },
    { href: "/menu", label: "Menus" },
    { href: "/team", label: "Our Team" },
    { href: "/gallery", label: "Gallery" },
    { href: "/catering-events", label: "Catering & Events" },
    { href: "/contact", label: "Contact & Hours" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Utility Bar (Subtle & Mobile Responsive) */}
      <div
        className={`w-full text-[11px] font-medium tracking-wide border-b transition-all duration-300 ${
          isScrolled
            ? "bg-[#0d0c0b]/95 border-white/5 py-1.5 text-slate-300"
            : "bg-[#0d0c0b]/60 backdrop-blur-sm border-white/10 py-1.5 sm:py-2 text-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between text-[10px] sm:text-[11px]">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#c5a059] shrink-0 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse inline-block" />
              Pell City, AL
            </span>
            <span className="text-slate-500 hidden sm:inline-block">•</span>
            <span className="text-slate-300 truncate hidden xs:inline-block sm:inline-block">
              Walk-Ins Welcome at The Tavern
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a
              href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
              className="inline-flex items-center gap-1 hover:text-[#c5a059] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#c5a059]" />
              <span className="font-semibold">{ST_CLAIR_DATA.phone}</span>
            </a>
            <span className="text-slate-500 hidden md:inline-block">|</span>
            <span className="text-[#c5a059] font-medium hidden md:inline-block">
              Open 7 Days a Week
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#141312]/95 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3 shadow-xl shadow-black/40"
            : "bg-[#0d0c0b]/80 backdrop-blur-md border-b border-white/10 py-3 sm:py-4 shadow-lg shadow-black/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group select-none">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#c5a059]/40 bg-[#1a1816] flex items-center justify-center p-1.5 shadow-md group-hover:border-[#c5a059] transition-colors"
            >
              <span className="font-editorial text-base sm:text-xl font-bold text-[#c5a059] leading-none">
                SC
              </span>
            </motion.div>

            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-2xl font-bold tracking-wide text-white leading-tight group-hover:text-[#c5a059] transition-colors">
                The St. Clair
              </span>
              <span className="text-[8px] sm:text-[10px] font-sans uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[#c5a059] font-semibold -mt-0.5">
                Restaurant & Tavern
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[13px] font-medium tracking-wide transition-colors relative py-1 ${
                    isActive
                      ? "text-[#c5a059] font-semibold"
                      : "text-slate-200 hover:text-[#c5a059]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/menu"
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/5 rounded-lg border border-white/15 transition-all"
            >
              Explore Menu
            </Link>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenReservation}
              className="px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-[#0d0c0b] bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] hover:brightness-110 rounded-lg shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0d0c0b]" />
              <span>Reserve a Table</span>
            </motion.button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={onOpenReservation}
              className="px-2.5 py-1.5 sm:px-3 text-[11px] sm:text-xs font-bold text-[#0d0c0b] bg-gradient-to-r from-[#dfbe7d] to-[#c5a059] rounded-lg shadow-sm"
            >
              Reserve
            </motion.button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-1.5 text-white hover:text-[#c5a059] focus:outline-none rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer with Framer Motion */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="lg:hidden overflow-hidden bg-[#141312]/98 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl"
            >
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.035 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`px-3 py-2.5 rounded-lg text-sm flex items-center justify-between transition-colors ${
                          isActive
                            ? "bg-[#22201e] text-[#c5a059] font-bold border-l-2 border-[#c5a059]"
                            : "text-slate-200 hover:bg-white/5"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#c5a059]" : "opacity-40"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenReservation?.();
                  }}
                  className="w-full py-3 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0d0c0b] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table via Resy</span>
                </motion.button>

                <a
                  href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  <span>Call {ST_CLAIR_DATA.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
