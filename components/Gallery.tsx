"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageCard from "./ImageCard";
import Modal from "./Modal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Gallery({ images }: any) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <>
      <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
  initial="hidden"
  animate="show"
  variants={container}
>
        {images.map((img: string, i: number) => (
          <motion.div key={i} variants={item}>
            <ImageCard
              src={img}
              index={i + 1}
              onClick={() => setSelected(img)}
            />
          </motion.div>
        ))}
      </motion.div>

      <Modal src={selected} onClose={() => setSelected(null)} />
    </>
  );
}
