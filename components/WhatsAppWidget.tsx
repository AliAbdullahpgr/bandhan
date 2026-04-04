"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/923340920077"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20 
      }}
    >
      <MessageCircle size={28} />
      {/* Optional: Add a subtle ping animation to grab attention */}
      <span className="absolute flex h-full w-full rounded-full bg-green-400 opacity-20 animate-ping"></span>
    </motion.a>
  );
}
