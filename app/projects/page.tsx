'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    name: "Project One",
    desc: "Brief description of the project and its technologies.",
    link: "#",
  },
  {
    name: "Project Two",
    desc: "Brief description of the project and its technologies.",
    link: "#",
  },
]

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-12 sm:py-16 bg-blue-50 text-primary px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold mb-8"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 20px #2563eb33" }}
              className="bg-white rounded shadow p-6 flex flex-col gap-2"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2">{p.name}</h3>
              <p className="mb-2 text-base">{p.desc}</p>
              <a href={p.link} className="text-primary underline font-medium">View on GitHub</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}