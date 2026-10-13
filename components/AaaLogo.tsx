"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface AaaLogoProps {
  lightMode?: boolean;
  className?: string;
}

export function AaaLogo({ lightMode = false, className = "" }: AaaLogoProps) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3.5 group select-none ${className}`}>
      {/* Brand Emblem Shield */}
      <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-[#0d9488] to-[#047857] p-0.5 shadow-md shadow-emerald-950/20 group-hover:scale-105 transition-transform duration-200">
        <div className="w-full h-full rounded-[10px] bg-[#0a192f] flex flex-col items-center justify-center p-1 border border-white/10">
          {/* Triple A stars & lettering */}
          <div className="flex items-center gap-0.5 mb-0.5">
            <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full inline-block animate-pulse" />
            <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full inline-block" />
            <span className="w-1.5 h-1.5 bg-[#f59e0b] rounded-full inline-block animate-pulse" />
          </div>
          <span className="font-extrabold text-[13px] tracking-wider text-white leading-none">
            AAA
          </span>
          <span className="text-[7px] font-bold tracking-widest text-[#14b8a6] uppercase mt-0.5">
            SAFETY
          </span>
        </div>
      </div>

      {/* Typography & Subtitle */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span
            className={`font-black tracking-tight text-[17px] sm:text-[19px] leading-tight ${
              lightMode ? "text-white" : "text-[#0a192f]"
            }`}
          >
            AAA FOOD SAFETY
          </span>
          <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
            SERVSAFE®
          </span>
        </div>
        <span
          className={`text-[11px] font-medium tracking-wide ${
            lightMode ? "text-slate-300" : "text-slate-500"
          }`}
        >
          CERTIFICATION & TRAINING • 40+ YRS EXPERIENCE
        </span>
      </div>
    </Link>
  );
}
