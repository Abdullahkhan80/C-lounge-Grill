"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Calendar, ExternalLink, Mail, UtensilsCrossed, Wine } from "lucide-react";
import { ST_CLAIR_DATA } from "@/data/stClairData";

interface StClairFooterProps {
  onOpenReservation?: () => void;
}

export function StClairFooter({ onOpenReservation }: StClairFooterProps) {
  return (
    <footer className="bg-[#0d0c0b] text-[#faf7f0] border-t border-white/10 pt-14 sm:pt-16 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#c5a059]/50 bg-[#1a1816] flex items-center justify-center p-1.5">
                <span className="font-editorial text-xl font-bold text-[#c5a059]">SC</span>
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-bold tracking-wide text-white">
                  The St. Clair
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a059] block font-semibold">
                  Restaurant & Tavern
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Where casual dining meets upscale food and welcoming Southern hospitality in Pell City, Alabama. Hand-cut steaks, coastal seafood, craft cocktails, and over 80 wine selections.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>The Tavern • Open 7 Days (Walk-Ins Welcome)</span>
              </div>
              <div className="flex items-center gap-2">
                <Wine className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>The St. Clair Dining Room • Wed – Sat Dinner</span>
              </div>
            </div>
          </div>

          {/* Col 2: Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c5a059]">
              Hours of Operation
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div>
                <span className="font-semibold text-white block">Monday – Wednesday</span>
                <span className="text-slate-400">11:00 AM – 8:00 PM</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Thursday – Saturday</span>
                <span className="text-slate-400">11:00 AM – 9:00 PM (Dinner all day Sat)</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Sunday Brunch</span>
                <span className="text-slate-400">11:00 AM – 3:00 PM (Open Seating)</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Sunday Dinner</span>
                <span className="text-slate-400">3:00 PM – 8:00 PM</span>
              </div>
              <div className="pt-1 text-[11px] text-[#c5a059] font-medium">
                Happy Hour: 3:00 PM – 6:00 PM Mon – Fri
              </div>
            </div>
          </div>

          {/* Col 3: Location & Reservations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c5a059]">
              Visit & Reserve
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">The St. Clair & Tavern</span>
                  <span className="text-slate-400">{ST_CLAIR_DATA.address.full}</span>
                  <a
                    href="https://maps.google.com/?q=2413+Dr+John+Haynes+Pell+City+AL+35125"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c5a059] hover:underline block text-[11px] mt-0.5 font-medium"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c5a059] flex-shrink-0" />
                <a
                  href={`tel:${ST_CLAIR_DATA.phoneRaw}`}
                  className="font-semibold text-white hover:text-[#c5a059] transition-colors"
                >
                  {ST_CLAIR_DATA.phone}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={ST_CLAIR_DATA.resyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#c5a059] text-[#0d0c0b] text-xs font-bold hover:brightness-110 transition-all shadow-md"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table on Resy</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Links & Events */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c5a059]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/experiences" className="hover:text-white transition-colors">
                  Dining Experiences (Dining Room vs Tavern)
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-white transition-colors">
                  Brunch, Lunch & Dinner Menus
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Meet the Culinary & Service Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Food & Atmosphere Gallery
                </Link>
              </li>
              <li>
                <Link href="/catering-events" className="hover:text-white transition-colors">
                  Private Dining, Parties & Catering
                </Link>
              </li>
              <li>
                <a
                  href={ST_CLAIR_DATA.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-[#c5a059]"
                >
                  <span>Weekly Specials on Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 The St. Clair Restaurant & Tavern. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-400">
            Pell City, Alabama • Casual Dining. Exceptional Food.
          </p>
        </div>
      </div>
    </footer>
  );
}
