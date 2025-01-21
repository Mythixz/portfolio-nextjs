"use client";

import { motion } from "framer-motion";

interface AnimatedCardProps {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

export default function AnimatedCard({ title, description, link, thumbnail }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
    >
      <img src={thumbnail} alt={title} className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 mt-2">{description}</p>
      <a href={link} className="text-purple-500 hover:underline mt-4 block">
        View Project
      </a>
    </motion.div>
  );
}
