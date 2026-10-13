"use client";

import { MapPin, Clock, Train, Car, Shirt, Wine, ExternalLink } from "lucide-react";
import { RESTAURANT_INFO } from "@/data/restaurantData";

export default function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Rose's Luxury 717 8th St SE, Washington, DC 20003"
  )}`;

  return (
    <section id="visit" className="py-24 md:py-32 bg-[#0B0A09] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
              Plan Your Visit
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal">
            Hours & Capitol Hill Location
          </h2>
          <p className="text-stone-300 font-light text-base md:text-lg mt-3">
            Nestled along historic Barracks Row, just steps from the Eastern Market Metro station.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Hours & Essential Details */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {/* Dining Hours Card */}
            <div className="p-8 rounded-3xl bg-[#141210] border border-white/10 shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#E8CA72]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-editorial text-2xl text-white">Dinner Seatings</h3>
                  <p className="text-xs text-stone-400">Reservations recommended; bar walk-ins welcomed</p>
                </div>
              </div>

              <div className="space-y-4">
                {RESTAURANT_INFO.hours.map((schedule, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/5 gap-1"
                  >
                    <div>
                      <span className="text-stone-200 text-sm font-medium">{schedule.days}</span>
                      <p className="text-[11px] text-stone-500">{schedule.notes}</p>
                    </div>
                    <span className="font-editorial text-lg text-[#E8CA72]">{schedule.seatings}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Notes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Dress Code */}
              <div className="p-6 rounded-2xl bg-[#121110] border border-white/5">
                <div className="flex items-center space-x-2 text-[#C0635A] mb-2 text-xs uppercase tracking-wider font-semibold">
                  <Shirt className="w-4 h-4" />
                  <span>Dress Code</span>
                </div>
                <p className="text-stone-300 text-sm font-light">
                  {RESTAURANT_INFO.dressCode}
                </p>
              </div>

              {/* Corkage */}
              <div className="p-6 rounded-2xl bg-[#121110] border border-white/5">
                <div className="flex items-center space-x-2 text-[#D4AF37] mb-2 text-xs uppercase tracking-wider font-semibold">
                  <Wine className="w-4 h-4" />
                  <span>Cellar & Corkage</span>
                </div>
                <p className="text-stone-300 text-sm font-light">
                  {RESTAURANT_INFO.corkageFee}
                </p>
              </div>
            </div>

            {/* Neighborhood Transit Card */}
            <div className="p-6 rounded-2xl bg-[#121110] border border-white/5 space-y-3">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-stone-300">
                <Train className="w-4 h-4 text-[#C0635A]" />
                <span>Metro & Transit</span>
              </div>
              <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed">
                Take the <strong>Orange, Blue, or Silver Line</strong> to <strong>Eastern Market Station</strong>.
                Exit toward Pennsylvania Ave SE, walk two blocks south down 8th Street SE (Barracks Row).
              </p>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Card */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="h-full rounded-3xl overflow-hidden bg-[#141210] border border-white/10 shadow-xl flex flex-col justify-between relative group p-6 sm:p-8">
              {/* Map Canvas Visual Placeholder with Ambient Capitol Hill styling */}
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden relative border border-white/10 bg-[#1A1816]">
                <img
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80"
                  alt="Washington DC Map Landscape"
                  className="w-full h-full object-cover opacity-35 filter grayscale contrast-125"
                />
                
                {/* Visual Pin Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#C0635A]/30 animate-ping absolute" />
                    <div className="w-10 h-10 rounded-full bg-[#C0635A] text-white flex items-center justify-center shadow-xl border-2 border-white z-10">
                      <MapPin className="w-5 h-5 fill-white" />
                    </div>
                  </div>
                  <div className="mt-3 px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-[#D4AF37]/50 text-center shadow-2xl">
                    <p className="text-xs font-editorial text-[#FBF9F5]">Rose’s Luxury</p>
                    <p className="text-[10px] text-[#E8CA72] tracking-wider uppercase">717 8th Street SE</p>
                  </div>
                </div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-black/75 text-[10px] uppercase tracking-wider text-stone-300 border border-white/10">
                  Barracks Row Historic District
                </div>
              </div>

              {/* Address details & CTA */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-editorial text-2xl text-white">Rose’s Luxury</h4>
                  <p className="text-stone-300 text-sm font-light">{RESTAURANT_INFO.address}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{RESTAURANT_INFO.neighborhood}</p>
                </div>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs uppercase tracking-widest text-white transition-all cursor-pointer whitespace-nowrap group"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-2 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
