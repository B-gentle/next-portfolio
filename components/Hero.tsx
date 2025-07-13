"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import image from "@/assets/image.png";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-blue-50">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Hi, I&apos;m Bright 👋
        </h1>
        <p className="mt-4 text-lg font-[800] text-[2rem] leading-[1.2]">
          A passionate <strong>Full Stack Developer</strong> and{" "}
          <strong>Mentor.</strong>
        </p>
        <div className="flex gap-8 my-8">
          <a
            href="https://x.com/B_Gentle12"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2351DC] hover:text-gray-300 transition rounded-full border border-[#2351DC] p-2"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:brighteyo16@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2351DC] hover:text-gray-300 transition rounded-full border border-[#2351DC] p-2"
          >
            <SiGmail />
          </a>
          <a
            href="https://www.linkedin.com/in/bright-eyo-48a29a163/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2351DC] hover:text-gray-300 transition rounded-full border border-[#2351DC] p-2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/B-gentle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2351DC] hover:text-gray-300 transition rounded-full border border-[#2351DC] p-2"
          >
            <FaGithub />
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/projects"
            className="bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 transition"
          >
            View My Work
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10 md:mb-0 md:w-1/2 flex justify-center"
      >
        <div className="w-48 h-48 md:w-64 md:h-64 relative">
          <Image
            src={image}
            alt="Bright Eyo"
            fill
            className="object-cover rounded-full shadow-xl border-4 border-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
