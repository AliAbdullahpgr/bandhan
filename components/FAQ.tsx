"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure the privacy of our families?",
    answer: "We understand that privacy is paramount. Profiles are only shared with matching families after your explicit consent. Your data is kept strictly confidential within our agency.",
  },
  {
    question: "Do you only provide services in Karachi?",
    answer: "While we are based in Karachi, we serve families across all major cities of Pakistan, as well as Overseas Pakistanis seeking matches locally or internationally.",
  },
  {
    question: "How are profiles verified?",
    answer: "Every profile goes through an extensive verification process involving direct phone contact and family background checks by our dedicated matchmaking team.",
  },
  {
    question: "What is the typical time frame to find a match?",
    answer: "Finding the perfect match depends on various factors including your requirements and preferences. However, due to our extensive network, many families find a suitable match within 3 to 6 months.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-burgundy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-dark/60 max-w-2xl mx-auto">
            We understand that finding the right match brings questions. Here are the most common inquiries we receive from families.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gold-light/20 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-cream/20 transition-colors focus:outline-none"
              >
                <span className="font-semibold text-burgundy pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gold" size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-text-dark/70 text-sm leading-relaxed border-t border-ivory/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
