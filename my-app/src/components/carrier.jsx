import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Award, Star } from "lucide-react";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: "Explore new skills",
    description: "Access 10,000+ courses in AI, business, technology, and more.",
  },
  {
    icon: <Award className="w-10 h-10 text-purple-600" />,
    title: "Earn valuable credentials",
    description:
      "Get certificates for every course you finish and boost your chances of getting hired at no additional cost.",
  },
  {
    icon: <Star className="w-10 h-10 text-yellow-600" />,
    title: "Learn from the best",
    description:
      "Take your skills to the next level with expert-led courses and AI-powered guidance.",
  },
];

export default function CareerBenefits() {
  useEffect(() => {
    gsap.fromTo(
      ".benefit-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#benefits",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Invest in your <span className="text-blue-600">career</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Unlock opportunities with hands-on learning, industry-recognized
          credentials, and expert mentorship to help you reach your goals.
        </p>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="benefit-card bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl transition-transform transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              {benefit.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
