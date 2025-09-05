// ReferencesSection.jsx
import React from "react";

const people = [
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
  "https://media.licdn.com/dms/image/v2/D5603AQGLxkSsXcG_6A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1723197575718?e=1758153600&v=beta&t=pQU7RLjVWcGOqzkq8hM9GGMzYLlaFF1WuT97STeOsXM",
];

export default function ReferencesSection() {
  const half = Math.ceil(people.length / 2);
  const firstRow = people.slice(0, half);
  const secondRow = people.slice(half);

  return (
    <section className="py-12 px-4 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">
        Reviews of students <br className="hidden sm:block" /> and
      </h2>

      {/* Two fixed rows */}
      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="flex justify-center gap-3 flex-nowrap">
          {firstRow.map((img, idx) => (
            <div
              key={idx}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            >
              <img
                src={img}
                alt={`Person ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-3 flex-nowrap">
          {secondRow.map((img, idx) => (
            <div
              key={idx}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            >
              <img
                src={img}
                alt={`Person ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-xl mx-auto">
        <h3 className="text-xs font-bold tracking-widest mb-3">SAVIINA</h3>
        <p className="text-gray-700 text-sm md:text-base italic">
          “Vlad is great to work with. He articulates all decisions with facts
          and provides a visually appealing finished product.”
        </p>
      </div>
    </section>
  );
}
