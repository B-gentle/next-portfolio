import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import ProjectSlider from "@/components/ProjectSlide";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <ProjectSlider />
      <Contact />
    </>
  );
};

export default page;
