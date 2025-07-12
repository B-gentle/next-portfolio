'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 bg-white text-primary px-4"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 text-base sm:text-lg"
        >
          [Briefly introduce yourself here. Mention your skills, experience, and what makes you passionate about technology.]
        </motion.p>
        <ul className="list-disc list-inside space-y-1">
          <li>Frontend: React, Next.js, Tailwind</li>
          <li>Backend: Node.js, Express</li>
          <li>Other: Git, Docker</li>
        </ul>
      </div>
    </motion.section>
  )
}