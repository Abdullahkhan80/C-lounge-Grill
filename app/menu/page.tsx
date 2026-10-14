"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Search, 
  Sparkles, 
  Clock, 
  Wine, 
  Coffee, 
  UtensilsCrossed, 
  Beer, 
  Flame, 
  ExternalLink,
  ChevronDown,
  Info,
  Phone
} from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { StClairNavbar } from "@/components/StClairNavbar";
import { StClairFooter } from "@/components/StClairFooter";
import { ReservationModal } from "@/components/ReservationModal";
import { ImageLightboxModal } from "@/components/ImageLightboxModal";
import { MobileReserveBar } from "@/components/MobileReserveBar";
import { 
  ST_CLAIR_DATA, 
  MENU_CATEGORIES, 
  FULL_MENU, 
  MenuItem, 
  GalleryPhoto 
} from "@/data/stClairData";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("dinner");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [reservationOpen, setReservationOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Group items by subcategory for the active tab
  const categoryItems = useMemo(() => {
    const items = FULL_MENU[activeCategory] || [];
    if (!searchQuery.trim()) return items;

    const q = searchQuery.toLowerCase();
    return items.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  // Grouped by sub-sections
  const groupedSections = useMemo(() => {
    const groups: { [subCat: string]: MenuItem[] } = {};
    categoryItems.forEach((item) => {
      const sub = item.category || "Selections";
      if (!groups[sub]) groups[sub] = [];
      groups[sub].push(item);
    });
    return groups;
  }, [categoryItems]);

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-[#f4efe6] selection:bg-[#c5a059] selection:text-black pb-16 sm:pb-0">
      <StClairNavbar onOpenReservation={() => setReservationOpen(true)} />

      {/* Menu Header */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 border-b border-[#2a2724] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stclair/scallops.jpg"
            alt="The St. Clair Fine Dining Cuisine"
            fill
            className="object-cover opacity-20 filter brightness-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0c]/90 via-[#0e0d0c]/95 to-[#0e0d0c]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1e1c19] border border-[#c5a059]/40 text-[#c5a059] text-xs font-medium uppercase tracking-widest mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5" />
            Seasonal Scratch Kitchen
          </div>
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#f4efe6] tracking-tight leading-tight">
            Our Menus
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#a89f91] max-w-2xl mx-auto font-light leading-relaxed">
            Fresh Southern ingredients, Certified Angus Beef steaks, pan-seared coastal seafood, and hand-shaken craft cocktails in Pell City, Alabama.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setReservationOpen(true)}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-[#c5a059]/10 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve A Table on Resy</span>
            </motion.button>
            <a
              href="tel:16596584271"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1c1a17] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span>Takeout: (659) 658-4271</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Category Tabs & Search Bar */}
      <section className="sticky top-[58px] sm:top-[73px] z-30 bg-[#12100e]/95 backdrop-blur-md border-b border-[#26231f] py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar">
              {MENU_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSearchQuery("");
                    }}
                    className={`relative whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 tracking-wide cursor-pointer ${
                      isActive
                        ? "text-[#0e0d0c] font-bold"
                        : "text-[#b5ab9d] hover:text-[#f4efe6] hover:bg-[#25221d] border border-[#2f2b26]"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] rounded-full shadow-md shadow-[#c5a059]/20"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative shrink-0 w-full md:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#7d7568]" />
              <input
                type="text"
                placeholder="Search dish or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#181614] border border-[#332e27] rounded-full pl-9 pr-4 py-2 text-xs text-[#f4efe6] placeholder-[#7d7568] focus:outline-none focus:border-[#c5a059] transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Information Ribbon */}
      <section className="bg-[#171512] border-b border-[#24211d] py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#b5ab9d]">
          {activeCategory === "dinner" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Dinner Service:</strong> Mon–Wed 11am–8pm | Thu–Sat 11am–9pm (Dinner menu all day Saturday) | Sun 3pm–8pm
              </span>
            </div>
          )}
          {activeCategory === "brunch" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Sunday Brunch:</strong> Every Sunday 11:00 AM – 3:00 PM • First-Come, First-Served Seating
              </span>
            </div>
          )}
          {activeCategory === "lunch" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Lunch Service:</strong> Monday through Friday starting at 11:00 AM in The Tavern & Dining Room
              </span>
            </div>
          )}
          {activeCategory === "happy-hour" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Happy Hour:</strong> Monday – Friday 3:00 PM – 6:00 PM • Exclusive drink & appetizer specials
              </span>
            </div>
          )}
          {activeCategory === "cocktails" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Tavern Bar Program:</strong> Handcrafted classic cocktails, seasonal infusions & premium bourbon collection
              </span>
            </div>
          )}
          {activeCategory === "beer-wine" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Sommelier Selection:</strong> 30 wines by the glass & over 50 cellar bottles + craft Alabama beers on tap
              </span>
            </div>
          )}
          {activeCategory === "desserts" && (
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c5a059] shrink-0" />
              <span>
                <strong>Scratch Pastry:</strong> Housemade Southern classics baked fresh in our Pell City kitchen
              </span>
            </div>
          )}

          <div className="text-xs text-[#8c8273]">
            {categoryItems.length} {categoryItems.length === 1 ? "Item" : "Items"} Listed
          </div>
        </div>
      </section>

      {/* Menu Body */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {categoryItems.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-20 bg-[#141210] rounded-2xl border border-[#2e2a25]"
            >
              <p className="text-lg text-[#a89f91] font-serif">No menu items matched your search &quot;{searchQuery}&quot;.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 px-5 py-2 rounded bg-[#c5a059] text-[#0e0d0c] text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {Object.entries(groupedSections).map(([subCategory, items]) => (
                <div key={subCategory} className="space-y-6 sm:space-y-8">
                  {/* Subcategory title */}
                  <div className="border-b border-[#2d2924] pb-3 sm:pb-4 flex items-baseline justify-between">
                    <h2 className="font-editorial text-2xl sm:text-3xl text-[#f4efe6] font-normal tracking-wide">
                      {subCategory}
                    </h2>
                    <span className="text-xs text-[#c5a059] uppercase tracking-widest font-mono">
                      {items.length} {items.length === 1 ? "Selection" : "Selections"}
                    </span>
                  </div>

                  {/* Responsive Grid of Dishes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {items.map((dish) => (
                      <motion.div
                        key={dish.id}
                        variants={fadeInUp}
                        whileHover={{ y: -2 }}
                        className="group flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 bg-[#141210] hover:bg-[#1a1715] border border-[#26231e] hover:border-[#c5a059]/40 shadow-sm"
                      >
                        <div className="flex flex-col xs:flex-row gap-4">
                          {dish.image && (
                            <div 
                              onClick={() => setSelectedPhoto({ id: dish.id, src: dish.image!, title: dish.name, category: "food" })}
                              className="relative w-full xs:w-28 sm:w-32 h-44 xs:h-28 sm:h-32 rounded-xl overflow-hidden shrink-0 border border-[#38332c] cursor-pointer group/img shadow-md"
                            >
                              <Image
                                src={dish.image}
                                alt={dish.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/img:scale-108"
                              />
                              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
                              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/80 text-[10px] text-[#c5a059] font-medium xs:hidden">
                                Tap to view photo
                              </div>
                            </div>
                          )}

                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-[#3d372e] pb-1.5">
                                <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#f4efe6] group-hover:text-[#c5a059] transition-colors leading-snug">
                                  {dish.name}
                                </h3>
                                <span className="font-editorial text-lg sm:text-xl font-bold text-[#c5a059] shrink-0">
                                  {dish.price}
                                </span>
                              </div>

                              <p className="mt-2 text-xs sm:text-sm text-[#b0a698] leading-relaxed font-light">
                                {dish.description}
                              </p>
                            </div>

                            {dish.tag && (
                              <div className="mt-3">
                                <span className="inline-block px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#2a2620] text-[#c5a059] border border-[#c5a059]/30">
                                  {dish.tag}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Consumer advisory & culinary note */}
        <div className="mt-16 sm:mt-20 p-5 sm:p-6 rounded-2xl bg-[#141210] border border-[#2b2722] text-xs text-[#8c8273] space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 text-[#c5a059] font-medium uppercase tracking-wider text-[11px]">
            <Info className="w-4 h-4 shrink-0" />
            Kitchen Notes & Dietary Accommodations
          </div>
          <p>
            * Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness, especially if you have certain medical conditions.
          </p>
          <p>
            Please alert your server to any food allergies or dietary preferences prior to ordering. Our culinary team is pleased to accommodate gluten-sensitive and vegetarian requests whenever possible.
          </p>
          <p>
            Saturday service features our full dinner menu all day. For parties of 8 or more, an 18% gratuity may be added.
          </p>
        </div>
      </section>

      {/* Floating CTA footer banner */}
      <section className="bg-gradient-to-r from-[#171512] via-[#201d19] to-[#171512] border-t border-[#2a2622] py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="font-editorial text-2xl sm:text-4xl text-[#f4efe6] font-bold">
            Join Us for Dinner Tonight in Pell City
          </h3>
          <p className="text-xs sm:text-sm text-[#a89f91] max-w-xl mx-auto">
            Reservations are available for The St. Clair Dining Room via Resy. The Tavern welcomes walk-ins 7 days a week.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setReservationOpen(true)}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-[#dfbe7d] via-[#c5a059] to-[#a07f3d] text-[#0e0d0c] font-bold text-xs sm:text-sm tracking-wide uppercase hover:brightness-110 transition-all cursor-pointer shadow-lg"
            >
              Reserve on Resy
            </motion.button>
            <Link
              href="/experiences"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#131110] text-[#f4efe6] font-medium text-xs sm:text-sm tracking-wide uppercase border border-[#38332c] hover:border-[#c5a059]/60 transition-all text-center"
            >
              Compare Dining Experiences
            </Link>
          </div>
        </div>
      </section>

      <StClairFooter onOpenReservation={() => setReservationOpen(true)} />

      {/* Mobile Sticky Booking Bar */}
      <MobileReserveBar onOpenReservation={() => setReservationOpen(true)} />

      <ReservationModal
        isOpen={reservationOpen}
        onClose={() => setReservationOpen(false)}
      />

      {selectedPhoto && (
        <ImageLightboxModal
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}
