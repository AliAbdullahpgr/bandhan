"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-cream/30 to-ivory overflow-hidden">
      {/* Decorative florals */}
      <FloralTopLeft />
      <FloralTopRight />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-gold font-medium text-sm tracking-wide mb-4 uppercase">
              Marriage is a Sunnah of Rasulullah s.a.w.
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy leading-tight mb-6">
              Find Your Perfect
              <br />
              <span className="text-burgundy">Life Partner</span>
            </h1>
            <p className="text-text-dark/60 text-lg max-w-xl mb-4">
              <strong className="text-text-dark/80">Bandhan International Marriage Bureau</strong> — a simple &amp; secure
              matrimonial service by CEO Rabab Ali. We handle everything for you, from
              finding the right match to coordinating between families.
            </p>
            <p className="text-text-dark/50 text-sm mb-10">
              Based in Karachi &middot; Serving families across Pakistan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#8a1e3e", borderColor: "#8a1e3e", color: "#f4d2de" }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="bg-burgundy text-gold-light px-8 py-3.5 rounded-full font-semibold transition-colors text-lg inline-block text-center"
              >
                Get Started
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#a6254a", color: "#ffffff" }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="border-2 border-burgundy text-burgundy px-8 py-3.5 rounded-full font-semibold transition-colors text-lg inline-block text-center"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:flex justify-end"
          >
            <div className="relative w-full max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/talha-hadi-IGXoW3TU038-unsplash.jpg"
                alt="Happy couple matched by Bandhan"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/20 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                <svg className="w-5 h-5 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-burgundy text-sm">1,190+</p>
                <p className="text-text-dark/50 text-xs">Successful Matches</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloralTopLeft() {
  return (
    <svg className="absolute top-0 left-0 w-48 h-48 opacity-40" viewBox="0 0 200 200" fill="none">
      <circle cx="30" cy="30" r="20" fill="#F4D2DE" />
      <circle cx="60" cy="20" r="12" fill="#D4A843" opacity="0.5" />
      <circle cx="15" cy="60" r="8" fill="#C0396B" opacity="0.3" />
      <ellipse cx="80" cy="50" rx="15" ry="8" fill="#F4D2DE" opacity="0.6" transform="rotate(-30 80 50)" />
    </svg>
  );
}

function FloralTopRight() {
  return (
    <svg className="absolute top-0 right-0 w-56 h-56 opacity-40" viewBox="0 0 200 200" fill="none">
      <circle cx="170" cy="30" r="25" fill="#F4D2DE" />
      <circle cx="140" cy="15" r="10" fill="#D4A843" opacity="0.4" />
      <circle cx="185" cy="70" r="12" fill="#C0396B" opacity="0.2" />
      <circle cx="130" cy="80" r="6" fill="#D4A843" opacity="0.3" />
    </svg>
  );
}
