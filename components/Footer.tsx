import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#10162a] py-16 flex flex-col items-center w-full">
      {/* Top divider with name */}
      <div className="flex items-center w-full justify-center mb-8">
        <div className="hidden md:block border-t border-gray-200 w-2/6"></div>
        <h2 className="text-white font-semibold text-2xl md:text-5xl mx-6 text-center flex-1">Eyo Bright</h2>
        <div className="hidden md:block border-t border-gray-200 w-2/6"></div>
      </div>

      {/* Social icons */}
      <div className="flex gap-8 my-8">
        <a
          href="https://x.com/B_Gentle12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition rounded-full border border-gray-200 p-3"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="mailto:brighteyo16@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition rounded-full border border-gray-200 p-3"
        >
          <SiGmail size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/bright-eyo-48a29a163/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition rounded-full border border-gray-200 p-3"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/B-gentle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition rounded-full border border-gray-200 p-3"
        >
          <FaGithub size={30} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-gray-200 text-lg mt-4 font-medium">
        BeeTime Technologies © {currentYear} | All Rights Reserved
      </div>
    </footer>
  )
}