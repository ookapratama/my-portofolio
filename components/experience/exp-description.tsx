"use client";

import React from "react";
import { motion } from "framer-motion";

const ExperienceDescription: React.FC<{
  paragraphs: string[];
  bullets: string[];
}> = ({ paragraphs, bullets }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="mb-4 indent-4 text-justify text-muted-foreground/90"
          key={index}
        >
          {paragraph}
        </motion.p>
      ))}
      <ul className="list-disc pl-6 mt-4 space-y-2">
        {bullets.map((bullet, index) => (
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: paragraphs.length * 0.1 + index * 0.05 }}
            key={index}
            className="text-muted-foreground/90"
          >
            {bullet}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceDescription;
