'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, type: 'spring' }}
      className="min-h-[60vh] flex flex-col justify-center items-center bg-background text-primary px-4 text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4"
      >
        Hello, I&#39;m Eyo Bright
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg sm:text-xl md:text-2xl mb-8"
      >
        A passionate developer building web experiences
      </motion.p>
      <motion.a
        href="/projects"
        whileHover={{ scale: 1.07, backgroundColor: '#3b82f6' }}
        className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary-light transition font-semibold"
      >
        View Projects
      </motion.a>
    </motion.section>
  )
}