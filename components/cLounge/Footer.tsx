"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  Clock, 
  Calendar,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { C_LOUNGE_INFO } from "@/data/cLoungeData";

export function CLoungeFooter() {
  const [currentYear, setCurrentYear] = React.useState(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#0c0c0c] border-t border-[#222222] text-[#f5f0e8] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Gold Glow subtle accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#c9a56a]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#1f1f1f]">
          
          {/* Column 1: Brand & Concept (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-editorial text-2xl sm:text-3xl tracking-wider text-[#f5f0e8]">
                C LOUNGE <span className="text-[#c9a56a] font-normal">&</span> GRILL
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#a9a39a] block mt-0.5 font-medium">
                Bronx · New York
              </span>
            </Link>

            <p className="text-sm text-[#a9a39a] leading-relaxed max-w-sm">
              Discover dining, drinks, and an inviting lounge experience in the heart of the Bronx. Flame-grilled specialties, handcrafted cocktails, and unforgettable evenings.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1b1b1b] border border-[#2a2a2a] text-xs text-[#a9a39a]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Real Establishment · Bronx, NY 10472</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#a9a39a]">
              <li>
                <Link href="/" className="hover:text-[#f5f0e8] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#f5f0e8] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#f5f0e8] transition-colors">Food & Cocktails</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#f5f0e8] transition-colors">Atmosphere Gallery</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#f5f0e8] transition-colors">Events & Gatherings</Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-[#f5f0e8] transition-colors">Book a Table</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#f5f0e8] transition-colors">Location & Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours (Sample schedule clearly designated) (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Lounge & Dining Hours</span>
            </h4>
            <div className="space-y-2.5 text-xs text-[#a9a39a]">
              {C_LOUNGE_INFO.hours.map((item, index) => (
                <div key={index} className="border-b border-[#1b1b1b] pb-1.5">
                  <div className="flex justify-between text-[#f5f0e8]/90">
                    <span className="font-medium">{item.days}</span>
                    <span className="text-[#c9a56a]">{item.hours}</span>
                  </div>
                  <div className="text-[11px] text-[#736e67] mt-0.5">{item.service}</div>
                </div>
              ))}
              <p className="text-[10px] text-[#736e67] italic pt-1">
                * Schedule is customizable by restaurant management.
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Directions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#c9a56a] font-semibold">
              Visit Us in the Bronx
            </h4>
            <div className="space-y-3 text-xs text-[#a9a39a]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c9a56a] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#f5f0e8]">1735 E 172nd St</p>
                  <p>Bronx, NY 10472, United States</p>
                  <a
                    href={C_LOUNGE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#c9a56a] hover:underline mt-1"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#c9a56a] shrink-0" />
                <a
                  href={`tel:${C_LOUNGE_INFO.phoneRaw}`}
                  className="text-[#f5f0e8] hover:text-[#c9a56a] transition-colors"
                >
                  +1 (646) 785-5832
                </a>
              </div>

              <div className="pt-3">
                <Link
                  href="/reservations"
                  className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 bg-[#1b1b1b] hover:bg-[#c9a56a] hover:text-[#101010] text-[#c9a56a] border border-[#c9a56a]/30 transition-all text-xs uppercase tracking-wider rounded-sm font-semibold"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve a Table</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736e67] gap-4">
          <p>
            © {currentYear} C Lounge & Grill. All rights reserved. 1735 E 172nd St, Bronx, NY 10472.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px]">Designed with Modern Hospitality Standards</span>
            <Link href="/contact" className="hover:text-[#a9a39a] transition-colors">
              Contact & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
