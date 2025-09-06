import {  AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
   { name: "Home", id: "home", type: "scroll" },
  { name: "About", id: "about", type: "scroll" },
  { name: "Programs", id: "programs", type: "scroll" },
  { name: "Projects", id: "projects", type: "scroll" },
  { name: "Resources", id: "resources", type: "scroll" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const lastScrollY = useRef(window.scrollY);

  const location = useLocation();
  const navigate = useNavigate();

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = navLinks
        .filter((l) => l.type === "scroll")
        .map((link) => {
          const section = document.getElementById(link.id);
          return section
            ? { id: link.id, offset: section.getBoundingClientRect().top }
            : null;
        });

      const visible = sectionOffsets.filter(
        (s) => s && s.offset < window.innerHeight / 2
      );
      if (visible.length > 0) {
        setActiveLink(visible[visible.length - 1].id);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (link) => {
    setActiveLink(link.id);

    if (link.type === "page") {
      navigate(`/${link.id}`);
    } else if (location.pathname === "/") {
      scrollToSection(link.id);
    } else {
      navigate("/", { state: { scrollTo: link.id } });
    }

    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 z-[1000] w-full px-4 md:left-1/2 md:-translate-x-1/2 md:max-w-6xl">
      <nav className="flex items-center justify-between bg-[#2b2828]/90 backdrop-blur-md px-6 py-2 rounded-full shadow-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lightlogo.png"
            alt="Company Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNavClick(link)}
                className={`text-white text-sm lg:text-base font-medium hover:text-[#8bca1e] ${
                  activeLink === link.id ? "text-[#8bca1e]" : ""
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-[#111] rounded-xl shadow-lg px-6 py-4"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link)}
                    className="text-white text-sm font-medium hover:text-[#8bca1e]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
