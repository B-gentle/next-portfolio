"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 bg-secondary px-4"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center">
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
          I&#39;m a passionate{" "}
          <span className="font-semibold">Full Stack Developer,</span>{" "}
          passionate about building fast, scalable, and user-friendly web
          applications. I specialize in Express.js, Node.js, React.js...
        </motion.p>
        <motion.a
          href="/about"
          whileHover={{ scale: 1.07, backgroundColor: "#3b82f6" }}
          className="bg-primary text-white px-6 py-2 rounded shadow hover:bg-primary-light transition font-semibold"
        >
          Read More
        </motion.a>
      </div>
    </motion.section>
  );
}
