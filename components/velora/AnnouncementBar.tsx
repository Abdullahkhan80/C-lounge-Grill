"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { RESTAURANT_CONFIG } from "@/restaurant.config";

export function AnnouncementBar() {
  const { announcement } = RESTAURANT_CONFIG;
  if (!announcement.enabled) return null;

  return (
    <div className="bg-[#120F0D] border-b border-[#2A2420] text-[#D1C7B7] py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
        <Flame className="w-3.5 h-3.5 text-[#B88960] shrink-0" />
        <span className="font-light tracking-wide">{announcement.text}</span>
        {announcement.linkHref && (
          <Link
            href={announcement.linkHref}
            className="text-[#B88960] hover:text-[#CBA079] font-medium tracking-wider uppercase text-[11px] inline-flex items-center gap-1 transition-colors ml-1"
          >
            <span>{announcement.linkText}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
