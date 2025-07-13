"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/lib/contants";
import { shuffleArray, filterWithImage } from "@/lib/utils"; 

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function ProjectSlider() {
  function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMobile;
}

  const projectsWithImages = shuffleArray(filterWithImage(projects)).slice(
    0,
    3
  );
  const isMobile = useIsMobile();
  const slidesToShow = isMobile ? 1 : 2;
  const [[page, direction], setPage] = useState([0, 0]);
  // const project = projectsWithImages[page];

    const visibleProjects = projectsWithImages.slice(page * slidesToShow, page * slidesToShow + slidesToShow);
    const maxPage = Math.ceil(projectsWithImages.length / slidesToShow);

 const paginate = (newDirection: number) => {
    setPage(([p]) => {
      let next = p + newDirection;
      if (next < 0) next = maxPage - 1;
      if (next >= maxPage) next = 0;
      return [next, newDirection];
    });
  };

  return (
    <div className="w-full flex flex-col items-center py-12 bg-secondary">
      <div className="w-full max-w-4xl flex items-center justify-center relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-100 text-primary rounded-full p-3 shadow z-10"
          onClick={() => paginate(-1)}
          aria-label="Previous Project"
        >
          <FaChevronLeft size={24} />
        </button>
        {/* Slider */}
        <AnimatePresence custom={direction} mode="wait">
         <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", duration: 0.6 }}
            className={`w-full flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-6 mx-10 gap-8`}
          >
           {visibleProjects.map((project) => (
              <div key={project.name} className="flex-1 flex flex-col items-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-lg mb-6"
                  width={100}
                  height={100}
                />
                <h3 className="text-2xl font-bold mb-2 text-primary">{project.name}</h3>
                <p className="text-gray-700 mb-4 text-center">{project.desc.slice(0, 100)}...</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline font-semibold"
                >
                  Visit Website
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-100 text-primary rounded-full p-3 shadow z-10"
          onClick={() => paginate(1)}
          aria-label="Next Project"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Slider Dots */}
     <div className="flex gap-2 mt-6">
        {Array.from({ length: maxPage }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage([idx, idx > page ? 1 : -1])}
            className={`w-3 h-3 rounded-full ${idx === page ? "bg-primary" : "bg-blue-200"} transition`}
            aria-label={`Show slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* View All Button */}
      <Link href="/projects" className="mt-10">
        <button className="bg-primary text-white px-8 py-3 rounded font-semibold text-lg shadow hover:bg-primary-light transition">
          View All Projects
        </button>
      </Link>
    </div>
  );
}
