"use client";

import { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Calendar, Users, Clock, Award, Star } from "lucide-react";
import { RESTAURANT_INFO, TIME_SLOTS } from "@/data/restaurantData";

interface HeroProps {
  onOpenReservationWithDetails: (details: { guests: number; date: string; time: string }) => void;
}

export default function Hero({ onOpenReservationWithDetails }: HeroProps) {
  // Quick bar state
  const [selectedDate, setSelectedDate] = useState("2026-10-15");
  const [todayStr, setTodayStr] = useState("2026-10-15");
  const [selectedGuests, setSelectedGuests] = useState(2);
  const [selectedTime, setSelectedTime] = useState("7:00 PM");

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    setSelectedDate(today);
    setTodayStr(today);
  }, []);

  const handleQuickReserve = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    onOpenReservationWithDetails({
      guests: selectedGuests,
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 md:pt-36 pb-12 overflow-hidden bg-[#0A0908]">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000 ease-out brightness-[0.42] contrast-[1.08]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=2000&q=85')`,
          }}
        />
        {/* Multilayered radial and linear dark gradients for deep candlelit tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-[#0B0A09]/60 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C0635A]/15 via-transparent to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0B0A09] to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="max-w-3xl">
          {/* Recognition Pill */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 mb-6 shadow-xl">
            <span className="flex items-center text-amber-400 text-xs font-medium tracking-widest uppercase">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37] mr-1.5" />
              One Michelin Star
            </span>
            <span className="text-white/30">•</span>
            <span className="text-stone-300 text-xs font-light tracking-wide">
              Capitol Hill, Washington D.C.
            </span>
          </div>

          {/* Editorial Title */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-[#FBF9F5] mb-6">
            A Dinner Party, <br />
            <span className="italic font-light text-rose-gradient">Every Night.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#DCD6CB] font-light leading-relaxed max-w-2xl mb-8">
            Step into our warm, candlelit Capitol Hill townhouse. Here, Michelin-starred
            whimsy, scratch-hearth cookery, and heartfelt dinner-party joy replace the cold
            formalities of classic fine dining.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-5 mb-10">
            <button
              onClick={() =>
                onOpenReservationWithDetails({
                  guests: selectedGuests,
                  date: selectedDate,
                  time: selectedTime,
                })
              }
              id="hero-reserve-btn"
              className="px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#E8CA72] to-[#D4AF37] hover:from-[#E8CA72] hover:to-[#D4AF37] text-[#0B0A09] font-medium tracking-widest text-xs uppercase rounded-full shadow-xl shadow-amber-950/40 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center cursor-pointer group"
            >
              <span>Reserve Your Table</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#menu"
              className="px-8 py-4 bg-white/[0.04] hover:bg-white/[0.09] text-stone-200 hover:text-white border border-white/20 hover:border-[#D4AF37]/50 rounded-full font-light tracking-wider text-xs uppercase backdrop-blur-sm transition-all duration-300 flex items-center justify-center text-center"
            >
              Explore the Menu
            </a>
          </div>

          {/* Accolade Ribbons */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 border-t border-white/10 text-xs text-stone-400">
            <div className="flex items-center space-x-1.5 text-stone-300">
              <Award className="w-3.5 h-3.5 text-[#C0635A]" />
              <span>Bon Appétit: Best New Restaurant</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="flex items-center space-x-1.5 text-stone-300">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Washington Post: ★★★★ (4 Stars)</span>
            </div>
            <span className="text-white/20 hidden sm:inline">•</span>
            <div className="text-stone-400 italic font-editorial">
              {RESTAURANT_INFO.tagline}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Quick Reservation Bar */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 md:px-8 w-full mt-8">
        <form
          onSubmit={handleQuickReserve}
          className="bg-[#141210]/90 backdrop-blur-xl border border-white/15 rounded-2xl md:rounded-full p-3 md:p-2.5 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3"
        >
          {/* Guests */}
          <div className="flex items-center px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
            <Users className="w-4 h-4 text-[#C0635A] mr-3 shrink-0" />
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                Party Size
              </label>
              <select
                aria-label="Select Party Size"
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(Number(e.target.value))}
                className="bg-transparent text-sm text-[#FBF9F5] font-light focus:outline-none cursor-pointer"
              >
                <option value={1} className="bg-[#1C1A18] text-white">1 Guest (Kitchen Bar)</option>
                <option value={2} className="bg-[#1C1A18] text-white">2 Guests (Intimate Table)</option>
                <option value={3} className="bg-[#1C1A18] text-white">3 Guests</option>
                <option value={4} className="bg-[#1C1A18] text-white">4 Guests (Family Style)</option>
                <option value={5} className="bg-[#1C1A18] text-white">5 Guests</option>
                <option value={6} className="bg-[#1C1A18] text-white">6 Guests (Townhouse Banquette)</option>
                <option value={8} className="bg-[#1C1A18] text-white">8+ Guests (Roof Garden)</option>
              </select>
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Date */}
          <div className="flex items-center px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
            <Calendar className="w-4 h-4 text-[#D4AF37] mr-3 shrink-0" />
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                Date
              </label>
              <input
                type="date"
                aria-label="Select Reservation Date"
                value={selectedDate}
                min={todayStr}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-sm text-[#FBF9F5] font-light focus:outline-none cursor-pointer [color-scheme:dark]"
              />
            </div>
          </div>

          <div className="hidden md:block w-px h-8 bg-white/10" />

          {/* Time Slot */}
          <div className="flex items-center px-4 py-2 hover:bg-white/5 rounded-xl md:rounded-full transition-colors flex-1">
            <Clock className="w-4 h-4 text-[#E8CA72] mr-3 shrink-0" />
            <div className="flex flex-col text-left">
              <label className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
                Seating Time
              </label>
              <select
                aria-label="Select Seating Time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="bg-transparent text-sm text-[#FBF9F5] font-light focus:outline-none cursor-pointer"
              >
                {TIME_SLOTS.map((slot) => (
                  <option key={slot.time} value={slot.time} className="bg-[#1C1A18] text-white">
                    {slot.time} ({slot.tag})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="button"
            id="hero-quick-bar-find-table"
            onClick={() => handleQuickReserve()}
            className="px-7 py-3.5 bg-gradient-to-r from-[#C0635A] to-[#D87C73] hover:from-[#D87C73] hover:to-[#C0635A] text-white rounded-xl md:rounded-full text-xs uppercase tracking-widest font-medium shadow-lg hover:shadow-rose-900/30 transition-all cursor-pointer whitespace-nowrap text-center"
          >
            Find Table
          </button>
        </form>
      </div>
    </section>
  );
}
