"use client";

import { useState, useEffect } from "react";
import { Sparkles, Phone, MapPin, Menu as MenuIcon, X, Calendar, Wine, Heart } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

interface HeaderProps {
  onOpenReservation: () => void;
}

export default function Header({ onOpenReservation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Menu", href: "#menu" },
    { name: "The Experience", href: "#philosophy" },
    { name: "The Roof Garden", href: "#events" },
    { name: "Goodwill", href: "#goodwill" },
    { name: "Hours & Visit", href: "#visit" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Micro-Bar */}
      <div className="bg-[#080706] border-b border-white/[0.06] text-xs text-[#DCD6CB] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wide font-light">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-[#E8CA72] font-medium tracking-wider">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#D4AF37]" />
              {RESTAURANT_INFO.michelinRating} (2017 – 2024)
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center text-stone-400 hover:text-stone-200 transition-colors">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#C0635A]" />
              {RESTAURANT_INFO.neighborhood}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-stone-400">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center hover:text-[#E8CA72] transition-colors"
            >
              <Phone className="w-3 h-3 mr-1.5 text-stone-500" />
              {RESTAURANT_INFO.phone}
            </a>
            <span className="text-white/20">•</span>
            <span className="text-[#C0635A] font-normal italic font-editorial">
              {RESTAURANT_INFO.tagline}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 px-4 md:px-8 ${
          isScrolled
            ? "bg-[#0E0D0C]/90 backdrop-blur-md py-3.5 border-b border-white/[0.08] shadow-2xl"
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Rose Insignia */}
          <a href="#" className="group flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-full border border-[#D4AF37]/40 bg-[#161413] flex items-center justify-center group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300 shadow-sm">
              {/* Stylized Rose Blossom SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 text-[#C0635A] group-hover:text-[#E8CA72] transition-colors duration-300"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21a9 9 0 0 0 9-9c0-3.5-2-6-5-7-2-1-4 0-5 2-1-2-3-3-5-2-3 1-5 3.5-5 7a9 9 0 0 0 9 9z" />
                <path d="M12 12c-1.5-1.5-2.5-1-3 0s1.5 2.5 3 2.5 3-1.5 3-2.5-1.5-1.5-3 0z" />
                <path d="M12 14.5v6.5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-2xl md:text-3xl tracking-wider text-[#FBF9F5] group-hover:text-[#E8CA72] transition-colors">
                Rose’s Luxury
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4AF37]/80 -mt-1 font-sans">
                Capitol Hill • Washington D.C.
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-light tracking-wider text-stone-300 hover:text-[#E8CA72] transition-colors duration-200 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C0635A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenReservation}
              id="header-book-table-btn"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-[#0B0A09] bg-gradient-to-r from-[#D4AF37] via-[#E8CA72] to-[#D4AF37] hover:from-[#E8CA72] hover:to-[#D4AF37] rounded-full shadow-lg shadow-amber-950/40 hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2 text-[#0B0A09]" />
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenReservation}
              className="sm:hidden px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#0B0A09] bg-[#E8CA72] rounded-full"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-6 pt-3 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-4 px-2">
              <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-amber-300/90">
                <span>⭐ One Michelin Star (Capitol Hill)</span>
                <span className="text-stone-400">(202) 742-3570</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-light text-stone-200 hover:text-[#E8CA72] transition-colors py-1 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-stone-600 text-xs">→</span>
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-[#0B0A09] bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] rounded-full shadow-lg"
                >
                  Reserve a Table Tonight
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
