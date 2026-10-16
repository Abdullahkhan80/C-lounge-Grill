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
  Tag,
  Coffee
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLoungeNavbar } from "@/components/cLounge/Navbar";
import { CLoungeFooter } from "@/components/cLounge/Footer";
import { ReservationModal } from "@/components/cLounge/ReservationModal";
import { 
  MENU_CATEGORIES, 
  SAMPLE_MENU_ITEMS, 
  MenuItem, 
  C_LOUNGE_INFO 
} from "@/data/cLoungeData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [reservationOpen, setReservationOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return SAMPLE_MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.dietary && item.dietary.some(d => d.toLowerCase().includes(searchQuery.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-[#f5f0e8] overflow-x-hidden selection:bg-[#c9a56a] selection:text-[#101010]">
      <CLoungeNavbar onOpenReservation={() => setReservationOpen(true)} />

      <main className="flex-1">
        {/* Menu Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 lg:pb-20 overflow-hidden bg-[#0d0d0d] border-b border-[#222222]">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1800&q=80"
              alt="Grill cuisine at C Lounge & Grill"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b1b1b] border border-[#c9a56a]/30 text-[#c9a56a] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>C Lounge & Grill · Bronx, NY</span>
            </span>

            <h1 className="font-editorial text-4xl sm:text-6xl text-[#f5f0e8] tracking-tight">
              Culinary & Cocktails
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#a9a39a] leading-relaxed">
              Explore our selection of flame-seared steaks, sharing starters, hearty mains, and artisanal mixology.
            </p>

            {/* Editable Notice for Real Business Transparency */}
            <div className="mt-6 inline-flex items-start gap-2.5 p-3 rounded bg-[#161616] border border-[#2a2a2a] text-left text-xs text-[#a9a39a] max-w-xl">
              <AlertCircle className="w-4 h-4 text-[#c9a56a] shrink-0 mt-0.5" />
              <span>
                <strong>Sample Menu Preview:</strong> Real-world menu items and seasonal pricing are centralized in <code className="text-[#c9a56a]">data/cLoungeData.ts</code>, allowing easy updates by restaurant staff without editing code templates.
              </span>
            </div>
          </div>
        </section>

        {/* Menu Navigation & Search */}
        <section className="sticky top-[69px] z-30 bg-[#101010]/95 backdrop-blur-md border-b border-[#222222] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm shrink-0 transition-colors ${
                    activeCategory === "all"
                      ? "bg-[#c9a56a] text-[#101010]"
                      : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                  }`}
                >
                  All Items
                </button>

                {MENU_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-sm shrink-0 transition-colors ${
                      activeCategory === cat.id
                        ? "bg-[#c9a56a] text-[#101010]"
                        : "bg-[#1b1b1b] text-[#a9a39a] hover:text-[#f5f0e8] border border-[#262626]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-[#736e67] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dishes or drinks..."
                  className="w-full pl-9 pr-4 py-2 bg-[#1b1b1b] border border-[#2a2a2a] focus:border-[#c9a56a] rounded-sm text-xs text-[#f5f0e8] placeholder-[#555] transition-colors"
                />
              </div>

            </div>
          </div>
        </section>

        {/* Menu Items Grid */}
        <section className="py-16 lg:py-24 bg-[#101010]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <UtensilsCrossed className="w-10 h-10 text-[#736e67] mx-auto" />
                <h3 className="font-editorial text-2xl text-[#f5f0e8]">No menu items found</h3>
                <p className="text-xs text-[#a9a39a]">
                  Try clearing your search query or choosing another category.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-4 py-2 bg-[#1b1b1b] text-xs text-[#c9a56a] border border-[#c9a56a]/30 rounded-sm"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="luxury-card rounded-md overflow-hidden flex flex-col group"
                  >
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] to-transparent opacity-60" />
                      
                      {item.isSignature && (
                        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#c9a56a] text-[#101010] rounded-sm shadow">
                          Signature
                        </span>
                      )}

                      <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 bg-[#101010]/80 text-[#c9a56a] rounded-sm border border-[#2a2a2a]">
                        {item.category.replace("-", " ")}
                      </span>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <h3 className="font-editorial text-xl sm:text-2xl text-[#f5f0e8] group-hover:text-[#c9a56a] transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-base font-semibold text-[#c9a56a] shrink-0">
                            {item.price}
                          </span>
                        </div>

                        <p className="text-xs text-[#a9a39a] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#262626] space-y-2">
                        {item.dietary && item.dietary.length > 0 && (
                          <div className="flex flex-wrap gap-1.5">
                            {item.dietary.map((d, i) => (
                              <span
                                key={i}
                                className="text-[10px] px-2 py-0.5 rounded bg-[#161616] text-[#dfbe85] border border-[#2e2e2e]"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        )}

                        {item.pairingNote && (
                          <p className="text-[11px] text-[#736e67] italic">
                            {item.pairingNote}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bottom Call to Reserve */}
            <div className="mt-16 p-8 rounded-md bg-[#161616] border border-[#262626] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-editorial text-2xl text-[#f5f0e8]">
                  Ready to Dine With Us?
                </h4>
                <p className="text-xs text-[#a9a39a]">
                  Reserve a table or lounge booth at 1735 E 172nd St in the Bronx.
                </p>
              </div>

              <button
                onClick={() => setReservationOpen(true)}
                className="px-6 py-3 bg-[#c9a56a] hover:bg-[#dfbe85] text-[#101010] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-all shrink-0"
              >
                Reserve Your Table
              </button>
            </div>
          </div>
        </section>
      </main>

      <CLoungeFooter />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />
    </div>
  );
}
