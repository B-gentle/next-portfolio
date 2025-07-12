'use client';
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/icon.png";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/contants";

export default function Navbar() {

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, type: "spring" }}
      className="bg-primary text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow"
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
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
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
    </motion.nav>
  );
}
