"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaDatabase } from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiExpress,
  SiTailwindcss,
  SiAntdesign,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-secondary py-10 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed mb-6 text-textSecondary">
          Hello! I&apos;m a{" "}
          <span className="font-semibold">Full Stack Developer</span> passionate
          about building fast, scalable, and user-friendly web applications. I
          specialize in:
        </p>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm"
        >
          <li className="flex items-center gap-2">
            <FaNodeJs className="text-green-700" /> Node.js
          </li>
          <li className="flex items-center gap-2">
            <SiExpress className="text-gray-800" /> Express.js
          </li>
          <li className="flex items-center gap-2">
            <FaReact className="text-sky-500" /> React.js
          </li>
          <li className="flex items-center gap-2">
            <SiNextdotjs className="text-black" /> Next.js
          </li>
          <li className="flex items-center gap-2">
            <SiTypescript className="text-black" /> TypeScript
          </li>
          <li className="flex items-center gap-2">
            <SiTailwindcss className="text-sky-400" /> TailwindCSS
          </li>
          <li className="flex items-center gap-2">
            <SiAntdesign className="text-blue-600" /> Ant Design
          </li>
          <li className="flex items-center gap-2">
            <SiPrisma className="text-purple-600" /> Prisma
          </li>
          <li className="flex items-center gap-2">
            <SiMongodb className="text-green-600" /> MongoDB
          </li>
          <li className="flex items-center gap-2">
            <FaDatabase className="text-gray-600" /> SQL
          </li>
          <li className="flex items-center gap-2">
            <TbBrandReactNative className="text-gray-600" /> React Native
          </li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 bg-white p-6 rounded-lg shadow-xl border border-blue-200"
        >
          <h2 className="text-2xl font-semibold mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-base leading-relaxed">
            With hands-on experience in both frontend and backend development, I
            craft complete web solutions. My development process is focused on
            performance, scalability, and a strong user experience. I leverage
            modern tools and libraries to build responsive and accessible
            applications.
            <br />
            <br />
            In addition to building software, I also serve as a{" "}
            <strong>tech mentor and consultant</strong>, guiding aspiring
            developers and helping businesses make informed technical decisions.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
