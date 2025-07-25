// src/ExperienceCard.js
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ExperienceCard({ title, date, points, skills, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="experience-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      <h3>{title}</h3>
      <p className="experience-duration">{date}</p>
      <ul>
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      <h5>{skills}</h5>
    </motion.div>
  );
}
