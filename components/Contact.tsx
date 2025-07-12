'use client'
import { motion } from 'framer-motion'

export default function Contact() {
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
          Contact Me
        </motion.h2>
        <form className="flex flex-col gap-4">
          <motion.input
            type="text"
            placeholder="Your Name"
            whileFocus={{ scale: 1.02 }}
            className="border border-primary px-4 py-2 rounded focus:outline-none"
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            whileFocus={{ scale: 1.02 }}
            className="border border-primary px-4 py-2 rounded focus:outline-none"
          />
          <motion.textarea
            placeholder="Your Message"
            rows={4}
            whileFocus={{ scale: 1.02 }}
            className="border border-primary px-4 py-2 rounded focus:outline-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }}
            className="bg-primary text-white px-6 py-2 rounded hover:bg-primary-light transition font-semibold"
          >
            Send
          </motion.button>
        </form>
      </div>
    </motion.section>
  )
}