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
import { RESTAURANT_CONFIG } from "@/restaurant.config";

interface NavbarProps {
  onOpenReservation?: () => void;
}

export function Navbar({ onOpenReservation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/events", label: "Events & Private" },
    { href: "/reservations", label: "Reservations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1B1714]/95 backdrop-blur-md border-b border-[#38302A] py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#120F0D]/90 via-[#120F0D]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Wordmark Brand */}
            <Link href="/" className="group flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl tracking-[0.12em] text-[#F7F3EC] group-hover:text-[#B88960] transition-colors font-medium">
                {RESTAURANT_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B88960] font-light -mt-0.5">
                {RESTAURANT_CONFIG.subBrand}
              </span>
            </Link>

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
                        ? "text-[#B88960]"
                        : "text-[#E8E1D5]/80 hover:text-[#F7F3EC]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B88960]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Phone & Book a Table CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-[#D1C7B7] hover:text-[#B88960] transition-colors"
                title={`Call ${RESTAURANT_CONFIG.brandName}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#B88960]" />
                <span>{RESTAURANT_CONFIG.contact.phoneDisplay}</span>
              </a>

              {onOpenReservation ? (
                <button
                  onClick={onOpenReservation}
                  className="px-5 py-2.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-sm shadow-md hover:shadow-[#B88960]/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Table</span>
                </button>
              ) : (
                <Link
                  href="/reservations"
                  className="px-5 py-2.5 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 rounded-sm shadow-md hover:shadow-[#B88960]/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book a Table</span>
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#F7F3EC] hover:text-[#B88960] transition-colors rounded-sm focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#1B1714]/98 backdrop-blur-xl lg:hidden pt-24 px-6 pb-10 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6">
              <div className="border-b border-[#38302A] pb-4">
                <span className="font-editorial text-2xl text-[#B88960] block tracking-wider">
                  {RESTAURANT_CONFIG.brandName}
                </span>
                <span className="text-xs text-[#D1C7B7] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#B88960]" />
                  {RESTAURANT_CONFIG.contact.addressLine1}, {RESTAURANT_CONFIG.contact.cityStateZip}
                </span>
              </div>

              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`text-sm uppercase tracking-[0.18em] py-2 flex items-center justify-between border-b border-[#25201C] ${
                        isActive ? "text-[#B88960] font-semibold" : "text-[#E8E1D5]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#B88960] opacity-60" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-[#38302A]">
              {onOpenReservation ? (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3.5 bg-[#B88960] text-[#1B1714] text-center text-xs font-semibold uppercase tracking-[0.16em] rounded-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Table</span>
                </button>
              ) : (
                <Link
                  href="/reservations"
                  onClick={() => setMobileOpen(false)}
                  className="w-full py-3.5 bg-[#B88960] text-[#1B1714] text-center text-xs font-semibold uppercase tracking-[0.16em] rounded-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Table</span>
                </Link>
              )}

              <a
                href={`tel:${RESTAURANT_CONFIG.contact.phoneRaw}`}
                className="w-full py-3 border border-[#38302A] text-[#E8E1D5] text-center text-xs uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 hover:border-[#B88960]"
              >
                <Phone className="w-4 h-4 text-[#B88960]" />
                <span>Call {RESTAURANT_CONFIG.contact.phoneDisplay}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
