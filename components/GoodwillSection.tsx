"use client";

import { Heart, Globe2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { GOODWILL_DATA } from "@/data/restaurantData";

export default function GoodwillSection() {
  return (
    <section id="goodwill" className="py-24 md:py-32 bg-[#0E0D0C] relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <motion.div
        animate={{ opacity: [0.08, 0.16, 0.08] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C0635A]/20 via-transparent to-transparent pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-[#161413] via-[#121110] to-[#1A1816] border border-white/10 shadow-2xl relative"
        >
          {/* Top Label */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#C0635A]/15 border border-[#C0635A]/30 text-[#D87C73] text-xs uppercase tracking-widest font-medium mb-6">
            <motion.div
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 fill-[#C0635A] text-[#C0635A]" />
            </motion.div>
            <span>The Goodwill Initiative • Since 2013</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-editorial text-3xl sm:text-5xl text-[#FBF9F5] font-normal leading-tight">
                One Guest at Our Table. <br />
                <span className="italic text-[#E8CA72]">One Meal for a Child in Need.</span>
              </h2>

              <p className="text-stone-300 font-light text-base sm:text-lg leading-relaxed">
                Hospitality should never stop at our front door on 8th Street. Since the very
                first evening we opened in 2013, Rose’s Luxury has proudly partnered with hunger
                relief organizations including <strong className="text-white font-medium">DC Central Kitchen</strong> and the <strong className="text-white font-medium">World Food Program</strong>.
              </p>

              <p className="text-stone-400 font-light text-sm sm:text-base leading-relaxed">
                For every single diner who enjoys a meal with us, we directly fund a healthy,
                nutritious meal for a child facing food insecurity. To date, our guests have
                helped provide over 148,000 warm meals.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-300">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                  <span>100% Transparent Non-Profit Matching</span>
                </span>
                <span className="text-white/20 hidden sm:inline">•</span>
                <span className="flex items-center space-x-1.5">
                  <Globe2 className="w-4 h-4 text-[#C0635A]" />
                  <span>Local Washington D.C. Community Impact</span>
                </span>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ y: -5, borderColor: "rgba(192, 99, 90, 0.4)" }}
                transition={{ duration: 0.25 }}
                className="p-8 rounded-2xl bg-[#0B0A09]/80 border border-white/10 text-center relative overflow-hidden group shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C0635A]/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-[11px] uppercase tracking-widest text-stone-400 font-medium block mb-2">
                  Total Cumulative Impact
                </span>
                <div className="font-editorial text-5xl sm:text-6xl text-[#FBF9F5] font-normal mb-2 text-rose-gradient">
                  {GOODWILL_DATA.mealsDonated}
                </div>
                <p className="text-sm text-[#E8CA72] font-medium tracking-wide mb-6">
                  Nutritious Meals Donated & Counting
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-stone-300 font-light text-left leading-relaxed">
                  “When you join us for dinner at Rose’s, you aren’t simply having dinner—you are feeding a neighbor.”
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

