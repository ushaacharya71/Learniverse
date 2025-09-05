import { FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lime-400 text-black relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
        {/* Left: Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-xs sm:text-sm font-semibold mb-2">Contact</h4>
          <p className="text-sm sm:text-base font-medium break-words">
            Hi@thlearniverse.com
          </p>
          <p className="text-sm sm:text-base font-medium">+62821-5949-5854</p>
        </div>

        {/* Middle: CTA */}
        <div className="text-center">
          <h4 className="text-base sm:text-lg font-semibold mb-4 px-2">
            Got a project? Want to collaborate?
          </h4>
          <button className="bg-blue-600 text-white px-5 sm:px-6 py-2 rounded-full font-medium flex items-center justify-center mx-auto hover:bg-blue-700 transition text-sm sm:text-base">
            Discuss your project →
          </button>
        </div>

        {/* Right: Locations */}
        <div className="text-center md:text-right">
          <h4 className="text-xs sm:text-sm font-semibold mb-2">Office</h4>
          <p className="text-sm sm:text-base font-medium">
            Shree Narayana Tower, HSR Layout
          </p>
          <p className="text-sm sm:text-base font-medium">
            Outer Ring Rd Jakkasandra, 1st Block Koramangala <br />
            Bengaluru, Karnataka 560034
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 py-4 border-t border-black relative z-10 space-y-3 md:space-y-0 text-center md:text-left">
        <p className="text-xs sm:text-sm">
          © Copyright 2024. ThLearniverse. All rights reserved.
        </p>
        <a
          href="#"
          className="text-xs sm:text-sm underline hover:text-blue-600"
        >
          Terms & Conditions
        </a>
        <div className="flex space-x-4 text-lg sm:text-xl justify-center md:justify-end">
          <a href="#" aria-label="Behance" className="hover:text-blue-600">
            <FaBehance />
          </a>
          <a href="#" aria-label="Dribbble" className="hover:text-pink-600">
            <FaDribbble />
          </a>
          <a
            href="https://www.linkedin.com/company/glowlogics"
            aria-label="LinkedIn"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Huge Background Text (Watermark) */}
      <h1
        className="absolute bottom-0 left-0 w-full
        text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6vw]
        font-extrabold text-black opacity-20 text-center leading-none
        pointer-events-none"
      >
        TheLearniverse
      </h1>
    </footer>
  );
}
