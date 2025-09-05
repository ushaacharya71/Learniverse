import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#projects", label: "Projects" },
    { href: "#resources", label: "Resources" },
  ];

  return (
    <div className="fixed top-4 z-[1000] w-full px-4 md:left-1/2 md:-translate-x-1/2 md:max-w-6xl">
      {/* Main Navbar */}
      <nav className="flex items-center justify-between
        bg-[#2b2828]/90 backdrop-blur-md
        px-6 py-2 rounded-full shadow-lg transition-all duration-300"
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lightlogo.png"
            alt="Company Logo"
            className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white text-sm lg:text-base font-medium hover:text-[#8bca1e] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white ml-4"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden mt-2 bg-[#111] rounded-xl shadow-lg px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-64 py-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white text-sm font-medium hover:text-[#8bca1e] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
