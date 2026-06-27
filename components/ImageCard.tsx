"use client";

import { motion } from "framer-motion";

export default function ImageCard({ src, index, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className="relative cursor-pointer overflow-hidden rounded-xl group"
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute bottom-2 left-2 text-white text-sm bg-black/50 px-2 py-1 rounded">
        {index}
      </div>
    </motion.div>
  );
}
