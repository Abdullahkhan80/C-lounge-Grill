"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  UtensilsCrossed, 
  Wine, 
  Sparkles, 
  Calendar, 
  Flame, 
  Search, 
  AlertCircle,
  Tag
} from "lucide-react";
import { DemoBanner } from "@/components/velora/DemoBanner";
import { AnnouncementBar } from "@/components/velora/AnnouncementBar";
import { Navbar } from "@/components/velora/Navbar";
import { Footer } from "@/components/velora/Footer";
import { ReservationModal } from "@/components/velora/ReservationModal";
import { RESTAURANT_CONFIG, MenuItem } from "@/restaurant.config";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [reservationOpen, setReservationOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return RESTAURANT_CONFIG.menuItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.dietary && item.dietary.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#1B1714] text-[#F7F3EC] overflow-x-hidden selection:bg-[#B88960] selection:text-[#1B1714]">
      <DemoBanner />
      <AnnouncementBar />
      <Navbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Menu Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#120F0D] border-b border-[#38302A]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
              alt={`${RESTAURANT_CONFIG.brandName} Hearth Cuisine`}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25201C] border border-[#B88960]/30 text-[#B88960] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Hearth, Pan & Glass</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#F7F3EC] tracking-tight">
              Culinary & Cocktails
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#D1C7B7] leading-relaxed">
              Explore our selection of hearth-roasted cuts, fresh crudo, and botanical libations.
            </p>

            {/* Editable Configuration Notice */}
            <div className="mt-6 inline-flex items-start gap-2.5 p-3 rounded bg-[#25201C] border border-[#38302A] text-left text-xs text-[#D1C7B7] max-w-xl">
              <AlertCircle className="w-4 h-4 text-[#B88960] shrink-0 mt-0.5" />
              <span>
                <strong>Client Customization:</strong> All categories, dish titles, prices, descriptions, and dietary tags are configured cleanly in <code className="text-[#B88960] font-mono">restaurant.config.ts</code> without modifying code components.
              </span>
            </div>
          </div>
        </section>

        {/* Menu Navigation & Search (Sticky Bar) */}
        <section className="sticky top-[69px] z-20 bg-[#1B1714]/95 backdrop-blur-md border-b border-[#38302A] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm shrink-0 transition-colors ${
                    activeCategory === "all"
                      ? "bg-[#B88960] text-[#1B1714]"
                      : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                  }`}
                >
                  All Offerings
                </button>

                {RESTAURANT_CONFIG.menuCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm shrink-0 transition-colors ${
                      activeCategory === cat.id
                        ? "bg-[#B88960] text-[#1B1714]"
                        : "bg-[#25201C] text-[#D1C7B7] hover:text-[#F7F3EC] border border-[#38302A]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#8E867E] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes or dietary..."
                  className="w-full pl-9 pr-4 py-2 bg-[#25201C] border border-[#38302A] focus:border-[#B88960] rounded-sm text-xs text-[#F7F3EC] placeholder-[#665D54] transition-colors"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16 lg:py-24 bg-[#1B1714]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <UtensilsCrossed className="w-10 h-10 text-[#8E867E] mx-auto" />
                <h3 className="font-editorial text-2xl text-[#F7F3EC]">No items found</h3>
                <p className="text-xs text-[#D1C7B7]">
                  Try clearing your search query or selecting a different category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-[#25201C] text-xs text-[#B88960] border border-[#B88960]/30 rounded-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="espresso-card rounded-md overflow-hidden flex flex-col group"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#25201C] to-transparent opacity-60" />
                      
                      {item.isFeatured && (
                        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#B88960] text-[#1B1714] rounded-sm shadow">
                          Signature
                        </span>
                      )}

                      <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 bg-[#120F0D]/80 text-[#B88960] rounded-sm border border-[#38302A]">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <h3 className="font-editorial text-xl sm:text-2xl text-[#F7F3EC] group-hover:text-[#B88960] transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <span className="text-base font-semibold text-[#B88960] shrink-0">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#D1C7B7] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#38302A] space-y-2">
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.dietary.map((d, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded bg-[#1B1714] text-[#E8E1D5] border border-[#38302A]"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        )}

                        {item.pairingNote && (
                          <p className="text-[11px] text-[#8E867E] italic">
                            {item.pairingNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Reservation Callout */}
            <div className="mt-16 p-8 rounded-md bg-[#25201C] border border-[#38302A] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-editorial text-2xl text-[#F7F3EC]">
                  Experience These Plates in Person
                </h4>
                <p className="text-xs text-[#D1C7B7]">
                  Reserve a table in the hearth room or join us for cocktails in the social lounge.
                </p>
              </div>

              <button
                onClick={() => setReservationOpen(true)}
                className="px-6 py-3 bg-[#B88960] hover:bg-[#CBA079] text-[#1B1714] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shrink-0"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
