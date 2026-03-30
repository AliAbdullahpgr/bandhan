"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { title: "Personally Handled", desc: "We do all the matchmaking work — you just share your preferences and we take it from there." },
  { title: "Family-First Approach", desc: "Both families are involved from the start, ensuring trust and transparency at every step." },
  { title: "Complete Privacy", desc: "Your information is never shared publicly. We only connect you with vetted, compatible families." },
  { title: "Experienced Team", desc: "Years of experience in the Karachi matchmaking community with deep family networks." },
  { title: "End-to-End Service", desc: "From initial consultation to family introductions, we handle the entire process for you." },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-4">
              Key Features
            </h2>
            <p className="text-text-dark/50 mb-8">
              Why families across Karachi trust CEO Rabab Ali at Bandhan with their most important decision.
            </p>
            <ul className="space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-burgundy flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <span className="font-semibold text-text-dark">{f.title}</span>
                    <p className="text-text-dark/50 text-sm mt-0.5">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact" 
              className="mt-8 inline-block bg-burgundy text-gold-light px-8 py-3 rounded-full font-semibold hover:bg-burgundy-dark transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/muhammad-shah-zeb-ryOiannoQ3g-unsplash.jpg"
              alt="Nikkah nama signing — the blessed moment"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
