"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icon.png";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/contants";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="bg-primary text-white px-4 sm:px-6 py-4 flex justify-between items-center shadow"
      >
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <div className="hidden md:flex gap-2 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-light transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          onClick={toggleNav}
          className="md:hidden text-3xl text-white"
        >
          {navOpen ? <FaTimes /> : <MdOutlineMenuOpen />}
        </button>
      </motion.nav>
      {/* Mobile Menu */}
      {navOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow px-4 py-4 space-y-4 text-blue-700 font-medium"
        >
          <a href="#home" onClick={toggleNav} className="block">
            Home
          </a>
          <a href="#about" onClick={toggleNav} className="block">
            About
          </a>
          <a href="#projects" onClick={toggleNav} className="block">
            Projects
          </a>
          <a href="#contact" onClick={toggleNav} className="block">
            Contact
          </a>
        </motion.div>
      )}
    </>
  );
}
