'use client'
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Contact() {
  // Animation variants (without transition for type safety)
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  }
  const rightVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  }
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <section className="w-full flex flex-col md:flex-row min-h-screen" id="contact">
      {/* Left side - Contact Info */}
      <motion.div
        className="w-full md:w-1/2 bg-white flex flex-col justify-center px-8 py-16"
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Get In Touch</h2>
        <p className="md:text-xl mb-8 text-black">
          You Can contact me with the following medium
        </p>
        <div className="flex gap-8 mb-8">
          <motion.a
            href="https://twitter.com/b_gentle12"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-primary p-3 text-primary hover:bg-blue-50 transition"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.2, backgroundColor: "#e0e7ff" }}
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/bright-eyo-48a29a163/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-primary p-3 text-primary hover:bg-blue-50 transition"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.2, backgroundColor: "#e0e7ff" }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/B-gentle"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-primary p-3 text-primary hover:bg-blue-50 transition"
            variants={iconVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ scale: 1.2, backgroundColor: "#e0e7ff" }}
          >
            <FaGithub />
          </motion.a>
        </div>
        <motion.div
          className="flex items-center gap-4 mb-6"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <SiGmail className="text-primary" size={32} />
          <div>
            <a href="mailto:info@beetechnologies.ng" className="font-semibold italic text-xl text-black">info@beetechnologies.ng</a>
            <p className="text-base text-black">Send a Message anytime</p>
          </div>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          variants={iconVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <FaWhatsapp className="text-primary" size={32} />
          <div>
            <a href="https://wa.me/2349020533101" className="font-semibold text-xl text-black">+234-9020-533-101</a>
            <p className="text-base text-black">Message me anytime</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right side - Contact Form */}
      <motion.div
        className="w-full md:w-1/2 bg-primary flex items-center justify-center px-8 py-16"
        variants={rightVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <motion.form
          className="w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3
            className="text-3xl md:text-2xl font-bold mb-2 text-[#FFFFFFB2] opacity-80"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            Need A Service?
          </motion.h3>
          <motion.h4
            className="text-3xl md:text-2xl font-bold mb-8 text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Send A Message
          </motion.h4>
          <div className="mb-6">
            <motion.input
              type="text"
              className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none focus:border-blue-200 placeholder:text-white placeholder:opacity-80"
              placeholder="Enter Full Name"
              whileFocus={{ scale: 1.04, borderColor: "#3b82f6" }}
            />
          </div>
          <div className="mb-6">
            <motion.input
              type="email"
              className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none focus:border-blue-200 placeholder:text-white placeholder:opacity-80"
              placeholder="Enter email address"
              whileFocus={{ scale: 1.04, borderColor: "#3b82f6" }}
            />
          </div>
          <div className="mb-8">
            <motion.textarea
              rows={3}
              className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none focus:border-blue-200 placeholder:text-white placeholder:opacity-80 resize-none"
              placeholder="Write A Message"
              whileFocus={{ scale: 1.04, borderColor: "#3b82f6" }}
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-xl hover:bg-blue-100 transition"
            whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}