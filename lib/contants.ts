import koloz from "@/assets/koloz.png";
import ssms from "@/assets/ssms.png";
import gvi from "@/assets/gvi.png"

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export const projects = [
  {
    name: "Koloz",
    desc: "Brief description of the project and its technologies.",
    github: "https://github.com/B-gentle/koloz",
    link: "https://koloz.netlify.app",
    image: koloz,
  },
  {
    name: "SSMS",
    desc: "Smarter school management system - A system built for management of schools: grading, attendance, online fee payment etc.",
    github: "https://github.com/B-gentle/smss",
    link: "https://sheyasolutionslcc.com",
    image: ssms,
  },
  {
    name: "PMS",
    desc: "Project management system - A system designed to facilitate project planning, tracking, and collaboration.",
    github: "",
    link: "https://pms.flgwebpay.com",
    image: "",
  },
  {
    name: "GVI",
    desc: "Green Vision International - A multi level marketing system implemented to streamline business processes and has features like - referral, bonuses, wallet, purchases etc.",
    github: "",
    link: "https://gviltd.com",
    image: gvi,
  },
];
