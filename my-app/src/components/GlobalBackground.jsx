import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

export default function GlobalBackground() {
  useEffect(() => {
    gsap.to(".particle", {
      y: "+=20",
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#0a0a14] overflow-hidden -z-10">
      {/* Gradient Blobs */}
      <motion.div
        className="absolute -top-40 -left-40 rounded-full blur-[20vw] opacity-30"
        style={{
          width: "clamp(250px, 40vw, 500px)",
          height: "clamp(250px, 40vw, 500px)",
          background: "#9333ea",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 rounded-full blur-[15vw] opacity-20"
        style={{
          width: "clamp(200px, 30vw, 400px)",
          height: "clamp(200px, 30vw, 400px)",
          background: "#06b6d4",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Animated Circuit Line */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 0 200 Q 400 100, 800 200 T 1600 200"
          stroke="url(#grad1)"
          strokeWidth="1.5"
          fill="transparent"
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </svg>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full opacity-40 -z-10"
          style={{
            width: "clamp(2px, 0.6vw, 6px)",
            height: "clamp(2px, 0.6vw, 6px)",
            background: "#22d3ee",
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
        />
      ))}

      {/* Futuristic Falling Lines */}
      <div className="absolute inset-0 flex justify-center items-center gap-[clamp(20px,5vw,60px)] -z-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-b from-cyan-400 to-transparent opacity-70"
            style={{
              width: "2px",
              height: "clamp(60px, 15vh, 160px)",
            }}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: [0, 600], opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
