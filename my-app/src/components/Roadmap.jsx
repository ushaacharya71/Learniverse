import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Roadmap Data
const roadmapData = [
  {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },
   {
    time: "00 mins - 10 mins",
    title: "Student Help",
    description:
      "You will first unlearn all the common myths taught to us by our professional experts.",
    image: "https://img.freepik.com/free-vector/geography-teacher-class_74855-5512.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_hybrid&w=740&q=80",
    icon: <span className="text-3xl">🎓</span>, // bigger size here
  },


];

export default function Roadmap() {
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    // Animate cards
    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    // Animate timeline line (draw effect)
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 10%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        What will you learn with Glowlogics?
      </h2>

      <div className="relative">
        {/* Timeline vertical thread */}
        <div
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#8bca1e] rounded-full"
          style={{ top: 0, bottom: 0 }}
        ></div>

        {/* Roadmap steps */}
        {roadmapData.map((step, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`mb-16 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="relative w-full md:w-1/2 flex justify-center md:justify-center">
              <div className="z-10 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                {step.icon}
              </div>
            </div>

            {/* Card */}
            <div
              className="bg-white shadow-lg rounded-2xl p-6 max-w-xl hover:shadow-2xl
              transition-transform transform hover:-translate-y-2 duration-300 md:w-1/2"
            >
              <p className="text-sm text-gray-500 mb-2">{step.time}</p>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {step.description}
              </p>
              <img
                src={step.image}
                alt={step.title}
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>
          </div>
        ))}
      </div>

    </div>

  );
}
