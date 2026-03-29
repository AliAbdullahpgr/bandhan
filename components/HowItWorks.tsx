"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Reach out to Bandhan Rubab Ali via phone, WhatsApp, or our contact form to share your requirements.",
    color: "bg-burgundy",
  },
  {
    num: "02",
    title: "We Shortlist Matches",
    desc: "Our experienced team personally reviews and shortlists compatible families based on your preferences.",
    color: "bg-gold",
  },
  {
    num: "03",
    title: "Family Introduction",
    desc: "We coordinate meetings between both families in a respectful, comfortable setting.",
    color: "bg-burgundy",
  },
  {
    num: "04",
    title: "Nikkah Mubarak",
    desc: "Once both families are happy, we help facilitate the process all the way to a blessed union.",
    color: "bg-gold",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-3">
            How Bandhan Works
          </h2>
          <p className="text-text-dark/50 mb-14 max-w-lg mx-auto">
            A simple 4-step process — we handle everything so you don&apos;t have to.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              key={step.num}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <span
                className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${step.color} text-white font-bold text-sm mb-5`}
              >
                {step.num}
              </span>
              <h3 className="font-heading text-xl font-bold text-text-dark mb-2">
                {step.title}
              </h3>
              <p className="text-text-dark/50 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
