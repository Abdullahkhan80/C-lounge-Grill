"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  Send, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });
      const data = await res.json();
      if (res.ok) {
        setNewsletterStatus("success");
        setNewsletterMessage(data.message || "Thank you for subscribing to our culinary journal.");
        setNewsletterEmail("");
      } else {
        setNewsletterStatus("error");
        setNewsletterMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setNewsletterStatus("error");
      setNewsletterMessage("Network error. Please try again.");
    }
  };

  return (
    <footer className="bg-[#120F0D] border-t border-[#2A2420] text-[#F7F3EC] pt-16 pb-12 relative overflow-hidden">
      {/* Decorative Top Accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-1 bg-gradient-to-r from-transparent via-[#B88960]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#25201C]">
          
          {/* Column 1: Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-editorial text-2xl sm:text-3xl tracking-[0.14em] text-[#F7F3EC]">
                {RESTAURANT_CONFIG.brandName}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88960] block font-light mt-0.5">
                {RESTAURANT_CONFIG.subBrand}
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#D1C7B7] leading-relaxed max-w-sm">
              {RESTAURANT_CONFIG.positioning}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1B1714] border border-[#38302A] text-xs text-[#D1C7B7]">
                <span className="w-2 h-2 rounded-full bg-[#B88960] animate-pulse" />
                <span className="font-mono text-[11px]">Universal Hospitality Showcase</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#D1C7B7]">
              <li>
                <Link href="/" className="hover:text-[#F7F3EC] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F7F3EC] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-[#F7F3EC] transition-colors">Food & Wine</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#F7F3EC] transition-colors">Gallery</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-[#F7F3EC] transition-colors">Private Events</Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-[#F7F3EC] transition-colors">Reservations</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7F3EC] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>Dinner & Lounge</span>
            </h4>
            <div className="space-y-2.5 text-xs text-[#D1C7B7]">
              {RESTAURANT_CONFIG.hours.map((h, index) => (
                <div key={index} className="border-b border-[#25201C] pb-1.5">
                  <div className="flex justify-between text-[#F7F3EC]/90">
                    <span className="font-medium">{h.days}</span>
                    <span className="text-[#B88960]">{h.dinner}</span>
                  </div>
                  <div className="text-[11px] text-[#8E867E] mt-0.5">{h.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Newsletter & Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B88960] font-semibold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Culinary Dispatch</span>
            </h4>
            <p className="text-xs text-[#D1C7B7] leading-relaxed">
              Receive seasonal menu announcements, wine release invitations, and private dinner invitations.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex items-center gap-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-3 py-2 bg-[#1B1714] border border-[#38302A] focus:border-[#B88960] text-xs text-[#F7F3EC] placeholder-[#665D54] rounded-sm transition-colors"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "loading"}
                  className="px-3 py-2 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold rounded-sm transition-colors shrink-0 flex items-center justify-center"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {newsletterMessage && (
                <p className={`text-[11px] ${newsletterStatus === "success" ? "text-emerald-400" : "text-amber-400"}`}>
                  {newsletterMessage}
                </p>
              )}
            </form>

            <div className="pt-2">
              <Link
                href="/reservations"
                className="w-full inline-flex justify-center items-center gap-2 px-4 py-2 bg-[#1B1714] hover:bg-[#B88960] hover:text-[#1B1714] text-[#B88960] border border-[#B88960]/30 transition-all text-xs uppercase tracking-wider rounded-sm font-semibold"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8E867E] gap-4">
          <p>
            © {currentYear} {RESTAURANT_CONFIG.brandName} — {RESTAURANT_CONFIG.subBrand}. Universal Hospitality Concept Demo.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Designed for Customization</span>
            <Link href="/contact" className="hover:text-[#D1C7B7] transition-colors">
              Client Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
