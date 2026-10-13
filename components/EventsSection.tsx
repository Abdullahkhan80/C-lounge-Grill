"use client";

import { useState } from "react";
import { Users, Sparkles, CheckCircle2, Calendar, ArrowRight, GlassWater } from "lucide-react";
import { SPACE_OPTIONS, SpaceOption } from "@/data/restaurantData";

interface EventsSectionProps {
  onOpenEventInquiry: (spaceTitle?: string) => void;
}

export default function EventsSection({ onOpenEventInquiry }: EventsSectionProps) {
  const [selectedSpaceId, setSelectedSpaceId] = useState<string>("roof-garden");

  const currentSpace = SPACE_OPTIONS.find((s) => s.id === selectedSpaceId) || SPACE_OPTIONS[0];

  return (
    <section id="events" className="py-24 md:py-32 bg-[#0B0A09] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-px bg-[#C0635A]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#C0635A] font-medium">
              Private Dining & Celebrations
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal leading-tight">
            The Roof Garden & <br />
            <span className="italic text-[#E8CA72]">Townhouse Buyouts</span>
          </h2>
          <p className="text-stone-300 font-light text-base md:text-lg mt-4 leading-relaxed">
            Host your wedding celebration, milestone birthday, or private culinary gathering
            inside one of Washington’s most enchanting, light-filled architectural spaces.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {SPACE_OPTIONS.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`p-5 rounded-2xl text-left transition-all border cursor-pointer ${
                  isSelected
                    ? "bg-[#181614] border-[#D4AF37] shadow-xl"
                    : "bg-[#121110] border-white/5 hover:border-white/15 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs uppercase tracking-wider font-semibold ${isSelected ? "text-[#E8CA72]" : "text-stone-400"}`}>
                    {space.capacity}
                  </span>
                  {isSelected && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                </div>
                <h3 className="font-editorial text-xl text-white">
                  {space.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Space Detail Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#141210] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Photo Visual */}
          <div className="lg:col-span-7 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] relative group">
              <img
                src={currentSpace.image}
                alt={currentSpace.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E8CA72] text-[11px] uppercase tracking-wider font-medium border border-white/10">
                  {currentSpace.vibe}
                </span>
              </div>
            </div>
          </div>

          {/* Details & Inquiries */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 text-stone-400 text-xs mb-2">
                <Users className="w-3.5 h-3.5 text-[#C0635A]" />
                <span>{currentSpace.capacity}</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#FBF9F5] mb-4">
                {currentSpace.title}
              </h3>
              <p className="text-stone-300 font-light text-sm sm:text-base leading-relaxed mb-6">
                {currentSpace.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {currentSpace.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs sm:text-sm text-stone-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquire CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenEventInquiry(currentSpace.title)}
                id="inquire-events-btn"
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#C0635A] to-[#D87C73] hover:from-[#D87C73] hover:to-[#C0635A] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-rose-950/40 hover:shadow-rose-900/60 transition-all cursor-pointer"
              >
                <GlassWater className="w-4 h-4" />
                <span>Inquire for {currentSpace.title}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              <p className="text-center text-[11px] text-stone-500 mt-2.5">
                Our private dining director responds to all inquiries within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
