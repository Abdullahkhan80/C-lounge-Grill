"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu as MenuIcon, 
  X, 
  Phone, 
  MapPin, 
  Calendar, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { C_LOUNGE_INFO } from "@/data/cLoungeData";

interface NavbarProps {
  onOpenReservation?: () => void;
}

export function CLoungeNavbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events" },
    { href: "/reservations", label: "Reservations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#101010]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#101010]/90 via-[#101010]/50 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark & Location Pill */}
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex flex-col">
                <span className="font-editorial text-2xl sm:text-3xl tracking-wider text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                  C LOUNGE <span className="text-[#c9a56a] font-normal">&</span> GRILL
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#a9a39a] -mt-1 font-medium">
                  Bronx · New York
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 ${
                      isActive
                        ? "text-[#c9a56a]"
                        : "text-[#f5f0e8]/80 hover:text-[#f5f0e8]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c9a56a]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Call & Reserve CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${C_LOUNGE_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-[#a9a39a] hover:text-[#c9a56a] transition-colors"
                title="Call C Lounge & Grill"
              >
                <Phone className="w-3.5 h-3.5 text-[#c9a56a]" />
                <span>+1 (646) 785-5832</span>
              </a>

              {onOpenReservation ? (
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-2.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 rounded-sm shadow-md hover:shadow-[#c9a56a]/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              ) : (
                <Link
                  href="/reservations"
                  className="px-5 py-2.5 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 rounded-sm shadow-md hover:shadow-[#c9a56a]/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f5f0e8] hover:text-[#c9a56a] transition-colors rounded-sm focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#101010]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-12 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <span className="font-editorial text-2xl text-[#c9a56a] block">
                  C Lounge & Grill
                </span>
                <span className="text-xs text-[#a9a39a] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#c9a56a]" />
                  1735 E 172nd St, Bronx, NY 10472
                </span>
              </div>

              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base uppercase tracking-[0.18em] py-2 flex items-center justify-between border-b border-[#1b1b1b] ${
                        isActive ? "text-[#c9a56a] font-semibold" : "text-[#f5f0e8]/90"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#c9a56a] opacity-60" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#262626]">
              {onOpenReservation ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 bg-[#c9a56a] text-[#101010] text-center text-sm font-semibold uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>
              ) : (
                <Link
                  href="/reservations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 bg-[#c9a56a] text-[#101010] text-center text-sm font-semibold uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </Link>
              )}

              <a
                href={`tel:${C_LOUNGE_INFO.phoneRaw}`}
                className="w-full py-3 border border-[#262626] text-[#f5f0e8] text-center text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 hover:border-[#c9a56a]"
              >
                <Phone className="w-4 h-4 text-[#c9a56a]" />
                <span>Call +1 (646) 785-5832</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
