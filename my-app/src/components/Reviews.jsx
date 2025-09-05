// Testimonials.jsx
import React, { useEffect, useRef } from "react";

const testimonials = [
  {
    stars: 5,
    text: "This course completely transformed the way I approach programming. The lessons were clear, well-structured, and the projects really boosted my confidence.",
    name: "Harsh Jaiswal",
    role: "Computer Science, MIT",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
  {
    stars: 4,
    text: "As a design student, I appreciated how practical and hands-on the course was. It bridged the gap between theory and real-world application perfectly.",
    name: "Harsh Jaiswal",
    role: "Graphic Design, Rhode Island School of Design",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
  {
    stars: 5,
    text: "I took the Data Science course and loved how it started from basics and built up to advanced projects. The support from instructors was fantastic.",
    name: "Harsh Jaiswal",
    role: "Data Science, Stanford University",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
  {
    stars: 6,
    text: "The Web Development Bootcamp was intense but so rewarding. By the end, I built a full-stack app I could showcase to employers.",
    name: "Harsh Jaiswal",
    role: "Software Engineering, Carnegie Mellon University",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
  {
    stars: 7,
    text: "The AI & Machine Learning course had an amazing mix of theory and coding challenges. It’s already helping me with my research projects.",
    name: "Harsh Jaiswal",
    role: "Artificial Intelligence, University of Cambridge",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
  {
    stars: 8,
    text: "I loved the UX/UI Design course! It made me confident in using industry-standard tools and creating designs that people love.",
    name: "Harsh Jaiswal",
    role: "Human-Computer Interaction, University of Toronto",
    img: "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          top: 200,
          behavior: "smooth",
        });
        if (
          scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
          scrollRef.current.scrollHeight
        ) {
          scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="rounded-xl p-6 md:p-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
      {/* Left Side */}
      <div className="bg-green-100 rounded-xl flex flex-col justify-between p-6 h-full shadow-md">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Hear From Our <br /> Satisfied Students <br /> Have To Say ❤️
          </h2>
        </div>
        <div className="text-4xl md:text-5xl font-bold mt-6">22.9K+</div>
      </div>

      {/* Right Side - Scrolling Testimonials */}
      <div
        ref={scrollRef}
        className="overflow-hidden h-[350px] flex flex-col gap-4 pr-2"
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="rounded-xl p-4 shadow-md bg-white"
          >
            <div className="flex mb-2">
              {Array.from({ length: t.stars }).map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-sm italic mb-3">{t.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.img}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="text-sm font-bold">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="md:col-span-2 bg-green-700 text-white flex justify-between items-center px-6 py-4 rounded-xl mt-6">
        <p className="text-lg font-semibold">Are you The Next One!</p>
        <button className="bg-white text-green-700 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
          Join Now
        </button>
      </div>
    </section>
  );
}
