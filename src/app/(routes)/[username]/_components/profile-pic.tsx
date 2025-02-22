"use client";

import { motion } from "motion/react";

export default function ProfilePic({ url }: { url: string }) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className="overflow-hidden h-20 w-20 rounded-full"
    >
      <img src={url} alt="Dizzy" className="w-full h-full" />
    </motion.div>
  );
}
