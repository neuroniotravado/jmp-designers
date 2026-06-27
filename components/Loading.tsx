"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">

      {/* brilho de fundo */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      <div className="relative text-center">

        {/* LOGO */}
        <motion.img
          src="/logo/logo.png"
          alt="JMP Designers"
          className="w-72 md:w-[420px] mx-auto select-none"
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
        />

        {/* LINHA */}
        <motion.div
          className="h-px bg-white/40 mx-auto mt-8"
          initial={{ width: 0 }}
          animate={{ width: 180 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        />

        {/* TEXTO */}
        <motion.p
          className="mt-6 text-white/60 uppercase tracking-[0.45em] text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
          }}
        >
          Arquitetura • Interiores
        </motion.p>

        {/* BARRA */}
        <div className="w-56 h-[2px] bg-white/10 rounded-full mx-auto mt-12 overflow-hidden">

          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />

        </div>

      </div>

    </div>
  );
}
