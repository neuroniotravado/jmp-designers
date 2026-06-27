"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        {/* LOGO */}
        <motion.img
          src="/logo/logo.png"
          alt="JMP Designers"
          className="w-40 mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* TEXTO opcional (leve, premium) */}
        <motion.p
          className="text-gray-400 text-sm mt-4 tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
}
