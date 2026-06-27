"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="w-full flex justify-center py-10 md:py-14">
      <motion.img
        src="/logo/logo.png"
        alt="JMP Designers"
        className="w-[240px] md:w-[420px] lg:w-[560px] select-none"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />
    </header>
  );
}

