"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Settings2, X, ArrowRight } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!RESTAURANT_CONFIG.isDemo || !isVisible) return null;

  return (
    <div className="relative z-50 bg-[#25201C] border-b border-[#38302A] text-xs text-[#E8E1D5] py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#414B39] text-[#F7F3EC] text-[10px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3 h-3 text-[#B88960]" />
            Universal Sales Demo
          </span>
          <span className="text-[11px] text-[#D1C7B7]">
            <strong>VELORA</strong> is fully customizable for your restaurant via <code className="text-[#B88960] font-mono">restaurant.config.ts</code>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href="/reservations"
            className="text-[#B88960] hover:text-[#CBA079] font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>Test Demo Booking Flow</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="text-[#8E867E] hover:text-[#F7F3EC] p-0.5 rounded transition-colors"
            title="Dismiss demo banner"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
