"use client";

import { Sparkles, Heart, Utensils, Award, Users } from "lucide-react";
import { ACCOLADES, GOODWILL_DATA } from "@/data/restaurantData";

export default function Story() {
  const stats = [
    {
      value: "One",
      sub: "Michelin Star",
      label: "Awarded annually since the DC Guide’s inaugural edition",
      icon: Award,
    },
    {
      value: "2013",
      sub: "Established",
      label: "Over a decade of warm memories & celebrations on 8th St SE",
      icon: Utensils,
    },
    {
      value: GOODWILL_DATA.mealsDonated,
      sub: "Meals Donated",
      label: "A meal funded for every guest through hunger relief programs",
      icon: Heart,
    },
    {
      value: "100%",
      sub: "Scratch & Hearth",
      label: "Potato bread baked fresh every hour; local farm partnerships",
      icon: Sparkles,
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-32 bg-[#0B0A09] relative overflow-hidden">
      {/* Background Subtle Accent Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C0635A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-px bg-[#C0635A]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#C0635A] font-medium">
            Our Philosophy & Story
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#FBF9F5] font-normal leading-[1.12]">
              Unpretentious Elegance. <br />
              <span className="italic text-[#E8CA72]">Culinary Joy Without Pretension.</span>
            </h2>

            <div className="space-y-4 text-[#DCD6CB] text-base md:text-lg font-light leading-relaxed">
              <p>
                When Chef Aaron Silverman unlocked the doors of a vintage 1890s townhouse on
                Barracks Row in October 2013, the concept was unapologetically simple:
                create a restaurant that feels like the greatest dinner party you’ve ever
                attended at an eccentric, deeply generous friend’s home.
              </p>
              <p>
                No stifling dress codes. No whispered dining rooms. Instead, an energetic
                soundtrack of classic vinyl, flickering candlelight dancing across exposed
                antique brick, and a team driven by an obsession with thoughtful hospitality.
              </p>
              <p>
                Over ten years later—honored with One Michelin Star and Bon Appétit’s Best
                New Restaurant in America—our North Star remains unchanged: making people
                genuinely happy through innovative, flavor-drenched dishes and memories that
                linger long after the final glass of Champagne.
              </p>
            </div>

            {/* Chef Quote Card */}
            <div className="p-6 rounded-2xl bg-[#141210] border border-white/10 relative mt-8">
              <span className="absolute -top-3 left-6 px-3 py-0.5 bg-[#C0635A] text-white text-[10px] uppercase tracking-widest font-semibold rounded-full">
                Chef Aaron Silverman
              </span>
              <p className="font-editorial italic text-lg md:text-xl text-[#FBF9F5] leading-snug mb-3">
                “Food is the catalyst. But what people remember for years is how you made
                them feel. We built Rose’s to be an everyday sanctuary of warmth, laughter,
                and generosity.”
              </p>
              <div className="text-xs text-stone-400">
                Founding Chef & Owner, Rose’s Luxury / Pineapple and Pearls
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Cozy Townhouse Interior */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=900&q=80"
                  alt="Rose's Luxury Townhouse Dining Room"
                  className="w-full h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-stone-200">
                  <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium mb-1">
                    The Townhouse Parlor
                  </p>
                  <p className="text-sm font-light text-stone-300">
                    Candlelit banquettes and open kitchen hearth on 8th Street SE.
                  </p>
                </div>
              </div>

              {/* Floating Inset Card: Signature Dish */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-[#161413]/95 backdrop-blur-md border border-white/15 p-4 rounded-xl shadow-2xl max-w-xs hidden sm:flex items-center space-x-3.5">
                <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 border border-[#D4AF37]/30">
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80"
                    alt="Lychee Salad Signature"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#C0635A] font-semibold">
                    The Iconic Favorite
                  </span>
                  <h4 className="text-xs font-medium text-stone-100">
                    Pork Sausage & Lychee Salad
                  </h4>
                  <p className="text-[11px] text-stone-400">
                    On the menu since opening night in 2013.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats Counter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141210]/60 border border-white/[0.07] hover:border-[#D4AF37]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#E8CA72] mb-4 group-hover:bg-[#D4AF37]/15 group-hover:text-[#D4AF37] transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-baseline space-x-2 mb-1">
                  <span className="font-editorial text-3xl lg:text-4xl text-[#FBF9F5] font-normal">
                    {item.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">
                    {item.sub}
                  </span>
                </div>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Accolade Quote Ticker */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCOLADES.map((accolade, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between"
            >
              <p className="font-editorial italic text-stone-300 text-sm md:text-base leading-relaxed mb-4">
                “{accolade.quote}”
              </p>
              <div>
                <p className="text-xs font-medium text-[#E8CA72]">{accolade.award}</p>
                <p className="text-[11px] text-stone-500">{accolade.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
