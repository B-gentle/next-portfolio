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
        initial={{ x: '-100%' }}
        animate={{ x: navOpen ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 md:hidden ${navOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-blue-900">Menu</h2>
        </div>
        <nav className="flex flex-col space-y-4 text-blue-700 font-medium">
          <Link href="/" onClick={toggleNav} className="hover:text-blue-900">Home</Link>
          <Link href="/about" onClick={toggleNav} className="hover:text-blue-900">About</Link>
          <Link href="/projects" onClick={toggleNav} className="hover:text-blue-900">Projects</Link>
          <Link href="/#contact" onClick={toggleNav} className="hover:text-blue-900">Contact</Link>
        </nav>
      </motion.div>
      )}
    </>
  );
}
