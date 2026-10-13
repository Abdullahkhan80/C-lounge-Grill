"use client";

import { useState } from "react";
import { ArrowUp, Check, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070606] text-[#DCD6CB] border-t border-white/10 pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Newsletter & Club Invite Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141210] via-[#161413] to-[#141210] border border-white/10 mb-16 shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-medium">
              Join The Capitol Hill Guestbook
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl text-[#FBF9F5]">
              Be the First to Taste New Seasons
            </h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Receive private invitations to seasonal tasting releases, winemaker cellar
              dinners, and priority booking windows for the Roof Garden.
            </p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="subscribed"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 rounded-full bg-[#1C2E20] border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center justify-center space-x-2 max-w-md mx-auto"
                >
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Thank you. You’ve been added to our private guest list.</span>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2"
                >
                  <div className="relative w-full">
                    <Mail className="w-4 h-4 text-stone-500 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      required
                      className="w-full pl-11 pr-4 py-3.5 rounded-full bg-black/60 border border-white/15 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E8CA72] text-[#0B0A09] text-xs uppercase tracking-widest font-semibold hover:shadow-lg transition-all cursor-pointer whitespace-nowrap"
                  >
                    Join
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Sister Restaurants Section */}
        <div className="py-10 border-y border-white/10 mb-12">
          <div className="text-center mb-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-500">
              The Aaron Silverman Family of Hospitality
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Rose's Luxury */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-[#D4AF37]/20 shadow-lg"
            >
              <h4 className="font-editorial text-xl text-white">Rose’s Luxury</h4>
              <p className="text-xs text-[#E8CA72] font-medium mt-0.5">One Michelin Star</p>
              <p className="text-[11px] text-stone-400 font-light mt-1">
                Warm dinner-party dining & Roof Garden atrium.
              </p>
            </motion.div>

            {/* Pineapple and Pearls */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(216, 124, 115, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all shadow-lg"
            >
              <h4 className="font-editorial text-xl text-white">Pineapple and Pearls</h4>
              <p className="text-xs text-[#D87C73] font-medium mt-0.5">Two Michelin Stars</p>
              <p className="text-[11px] text-stone-400 font-light mt-1">
                Grand dining extravaganza & caviar salon next door.
              </p>
            </motion.div>

            {/* Little Pearl */}
            <motion.div
              whileHover={{ y: -4, borderColor: "rgba(232, 202, 114, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all shadow-lg"
            >
              <h4 className="font-editorial text-xl text-white">Little Pearl</h4>
              <p className="text-xs text-[#E8CA72] font-medium mt-0.5">One Michelin Star</p>
              <p className="text-[11px] text-stone-400 font-light mt-1">
                Playful glass-conservatory dining at the Naval Hospital.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-stone-500 font-light">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-6 text-center sm:text-left gap-2 sm:gap-0">
            <span className="text-stone-300">© 2013–2026 Rose’s Luxury LLC</span>
            <span>717 8th St SE, Washington, DC 20003</span>
            <span>(202) 742-3570</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#visit" className="hover:text-stone-300 transition-colors">Accessibility Statement</a>
            <span>•</span>
            <a href="#visit" className="hover:text-stone-300 transition-colors">Privacy</a>
            <span>•</span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 hover:text-[#E8CA72] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

