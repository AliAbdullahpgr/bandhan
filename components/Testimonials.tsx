"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ahmed & Fatima",
    location: "Karachi",
    quote:
      "Bandhan helped us find each other when our families were looking for the right match. The process was smooth, respectful, and truly Islamic in spirit.",
    year: "2024",
  },
  {
    name: "Hassan & Ayesha",
    location: "Lahore",
    quote:
      "We are grateful to Bandhan Rubab Ali for connecting our families. The team was very supportive and made the entire process comfortable for both sides.",
    year: "2024",
  },
  {
    name: "Bilal & Sana",
    location: "Islamabad",
    quote:
      "What I loved about Bandhan was the privacy and family-first approach. Our parents were involved from day one, and it made everything so much easier.",
    year: "2023",
  },
  {
    name: "Usman & Mariam",
    location: "Karachi",
    quote:
      "After trying many platforms, Bandhan stood out because of their personal attention and verified profiles. We found our perfect match within weeks!",
    year: "2023",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds autoplay

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-3">
          Success Stories
        </h2>
        <p className="text-text-dark/50 mb-14 max-w-md mx-auto">
          Hear from the families who found their perfect match through Bandhan.
        </p>

        {/* Cards container - Note we use a container because grid won't animate as easily */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileHover={{ scale: active === i ? 1 : 1.02 }}
              animate={{ 
                opacity: active === i ? 1 : 0.6,
                borderColor: active === i ? "#a6254a" : "transparent",
                backgroundColor: active === i ? "rgba(244, 210, 222, 0.2)" : "#fdfbf7",
                boxShadow: active === i ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none"
              }}
              transition={{ duration: 0.3 }}
              className="text-left p-6 rounded-2xl border-2 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-ivory flex items-center justify-center">
                  <svg className="w-5 h-5 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-text-dark text-sm">{t.name}</p>
                  <p className="text-xs text-text-dark/40">
                    {t.location} &middot; {t.year}
                  </p>
                </div>
              </div>
              <p className="text-text-dark/60 text-sm leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.button>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative w-3 h-3 rounded-full flex items-center justify-center transition-colors focus:outline-none"
            >
              <motion.div
                animate={{
                  scale: active === i ? 1.2 : 0.8,
                  backgroundColor: active === i ? "#a6254a" : "#f4d2de"
                }}
                className="w-full h-full rounded-full"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
