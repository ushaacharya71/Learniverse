import { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function WellnessSection() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const iconsRef = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;

    // GSAP Scroll reveal
    gsap.fromTo(
      el.querySelectorAll(".gsap-animate"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // GSAP Counter animation
    statsRef.current.forEach((stat, i) => {
      const target = +stat.dataset.target;
      gsap.fromTo(
        stat,
        { innerText: 0, scale: 0.8, opacity: 0 },
        {
          innerText: target,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "back.out(2)",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
            once: true,
          },
          delay: i * 0.2,
        }
      );
    });

    // Icon bounce effect
    iconsRef.current.forEach((icon, i) => {
      gsap.fromTo(
        icon,
        { y: -10 },
        {
          y: 10,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
          delay: i * 0.3,
        }
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#0a0f2c] via-blue-50/10 to-white px-4 sm:px-6 lg:px-12 py-12 sm:py-20 overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute top-20 -left-32 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-blue-200 rounded-full blur-2xl sm:blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-10 -right-32 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-purple-200 rounded-full blur-2xl sm:blur-3xl opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            src="https://img.freepik.com/free-vector/audience-segmentation-abstract-concept-illustration_335657-1854.jpg?w=740&q=80"
            alt="Happy family"
            className="rounded-2xl md:rounded-3xl object-cover w-full h-[280px] sm:h-[360px] md:h-[480px] lg:h-[500px] shadow-2xl"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white shadow-lg rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 backdrop-blur-lg"
          >
            <div className="flex -space-x-2">
              {["1", "2", "3"].map((id) => (
                <img
                  key={id}
                  src={`https://randomuser.me/api/portraits/${
                    id % 2 === 0 ? "men" : "women"
                  }/${id}.jpg`}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white"
                  alt=""
                />
              ))}
            </div>
            <div>
              <span className="font-semibold text-xs sm:text-sm">350+</span>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Join our active healthy community
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-black"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug sm:leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Where Smiles Blossom <br /> Into Stories
          </h2>
          <p className="text-black mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Solace isn’t just a space to track your moods and progress, it’s a
            place where your well-being takes center stage. Here you can express
            yourself freely, track your journey, and witness those smiles blossom
            into stories that empower and inspire you.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-5 sm:mt-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Read More <FaArrowRight />
          </motion.button>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {[
              {
                icon: "🔒",
                title: "Confidentiality",
                desc: "Your privacy is our priority. Discreet and secure space for your wellness journey.",
              },
              {
                icon: "♿",
                title: "Accessibility",
                desc: "Designed for everyone, with features that make self-care easy and inclusive.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-5 text-black border border-gray-100"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-xl sm:text-2xl mb-2 sm:mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-base sm:text-lg">{item.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-12 sm:mt-20 relative z-10 px-2">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 py-8 sm:py-12 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-xl border border-white/40"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {[
              { icon: "👥", target: 10000, label: "Happy Users", color: "text-blue-600" },
              { icon: "🧑‍⚕️", target: 50, label: "Wellness Coaches", color: "text-purple-600" },
              { icon: "📅", target: 100, label: "Weekly Sessions", color: "text-green-600" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="p-4 sm:p-6 rounded-xl bg-white/70 shadow hover:shadow-lg"
              >
                <div
                  ref={(el) => (iconsRef.current[i] = el)}
                  className="text-3xl sm:text-4xl mb-2"
                >
                  {stat.icon}
                </div>
                <h3
                  ref={(el) => (statsRef.current[i] = el)}
                  data-target={stat.target}
                  className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${stat.color}`}
                >
                  0
                </h3>
                <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
