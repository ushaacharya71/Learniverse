import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "001",
    title: "Street Chronicles: The Art of Everyday Moments",
    city: "Los Angeles, USA",
    date: "17/07/24",
    image:
      "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740",
  },
  {
    number: "002",
    title: "Timeless Alleyways: Streets in Analog",
    city: "New York, USA",
    date: "10/06/24",
    image:
      "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740",
  },
  {
    number: "003",
    title: "Silent Stories: The Streets Through My Lens",
    city: "London, UK",
    date: "07/03/24",
    image:
      "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740",
  },
  {
    number: "004",
    title: "In the Frame: City Rhythms on Film",
    city: "Milan, IT",
    date: "—",
    image:
      "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740",
  },
  {
    number: "005",
    title: "Street Shadows: Light, Life, and Lenses",
    city: "Warsaw, PL",
    date: "23/12/24",
    image:
      "https://img.freepik.com/free-photo/professional-programmer-working-late-dark-office_1098-18705.jpg?w=740",
  },
];

export default function FeaturedProjects() {
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(".featured-title", {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      // Animate rows alternately left/right
      gsap.utils.toArray(".project-row").forEach((row, i) => {
        gsap.from(row, {
          opacity: 0,
          x: i % 2 === 0 ? -60 : 60,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-20 relative">
      <h2 className="featured-title text-5xl md:text-7xl font-extrabold leading-tight mb-12">
        FEATURED <br /> PROJECTS
      </h2>

      {/* Floating preview image */}
      {hovered !== null && (
        <div className="hidden md:flex absolute top-12 left-1/2 -translate-x-1/2 z-50">
          <div className="relative">
            <img
              src={projects[hovered].image}
              alt={projects[hovered].title}
              className="w-[450px] h-auto object-cover rounded-2xl shadow-2xl transform scale-95 opacity-0 animate-fadeIn"
            />
            {/* gradient glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/30 via-pink-400/20 to-yellow-300/30 blur-3xl -z-10"></div>
          </div>
        </div>
      )}

      {/* Desktop: Table layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left relative">
          <thead>
            <tr className="text-gray-500 text-xs md:text-sm uppercase border-b border-gray-300">
              <th className="w-16 py-3">No</th>
              <th className="py-3">Title</th>
              <th className="py-3">City</th>
              <th className="py-3">Date</th>
              <th className="w-8"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="project-row border-b border-gray-200 cursor-pointer relative group hover:bg-gray-50 transition"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <td className="py-4 text-gray-700 font-bold">{project.number}</td>
                <td className="py-4 font-medium relative">
                  <span className="relative inline-block">
                    {project.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>
                  </span>
                </td>
                <td className="py-4 text-gray-600">{project.city}</td>
                <td className="py-4 text-gray-600">{project.date}</td>
                <td className="py-4 text-gray-800 font-bold transition-transform group-hover:translate-x-1 group-hover:rotate-12">
                  ↗
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Cards */}
      <div className="md:hidden grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 relative cursor-pointer group"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.city}</p>
            <p className="text-gray-500 text-xs mb-2">{project.date}</p>
            <span className="absolute top-3 right-3 font-bold text-gray-700">
              {project.number}
            </span>
            {hovered === index && (
              <img
                src={project.image}
                alt={project.title}
                className="mt-3 w-full h-48 object-cover rounded-lg shadow-lg transition-all duration-500"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
