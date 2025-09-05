import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const percentagesRef = useRef([]);
  const barsRef = useRef([]);

  useEffect(() => {
    percentagesRef.current.forEach((el, index) => {
      const targetValue = parseInt(el.dataset.value, 10);

      // Counter animation
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = Math.floor(el.innerText) + "%";
          },
        }
      );

      // Progress bar animation
      gsap.fromTo(
        barsRef.current[index],
        { width: "0%" },
        {
          width: `${targetValue}%`,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12">
        Why <span className="text-blue-600">Us?</span>
      </h2>

      <div className="space-y-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base sm:text-lg font-medium text-gray-800">
              Users said they felt truly heard and understood during their first
              session with the experts.
            </p>
            <span
              ref={(el) => (percentagesRef.current[0] = el)}
              data-value="98"
              className="text-3xl sm:text-4xl font-bold text-blue-600"
            >
              0%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-4 overflow-hidden">
            <div
              ref={(el) => (barsRef.current[0] = el)}
              className="h-2 sm:h-3 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
            ></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base sm:text-lg font-medium text-gray-800">
              Experienced noticeable emotional improvement within the first few
              weeks of using the service.
            </p>
            <span
              ref={(el) => (percentagesRef.current[1] = el)}
              data-value="88"
              className="text-3xl sm:text-4xl font-bold text-blue-500"
            >
              0%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-4 overflow-hidden">
            <div
              ref={(el) => (barsRef.current[1] = el)}
              className="h-2 sm:h-3 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
            ></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base sm:text-lg font-medium text-gray-800">
              Continued using the platform regularly after their initial
              consultation, showing lasting engagement and trust.
            </p>
            <span
              ref={(el) => (percentagesRef.current[2] = el)}
              data-value="71"
              className="text-3xl sm:text-4xl font-bold text-blue-400"
            >
              0%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mt-4 overflow-hidden">
            <div
              ref={(el) => (barsRef.current[2] = el)}
              className="h-2 sm:h-3 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center max-w-3xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
          Helping Thousands Find Peace & Growth
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          Discover the power of expert support through stories of healing,
          growth, and the journey to emotional well-being. With proven results
          and trusted guidance, we empower individuals to build resilience and
          achieve lasting peace of mind.
        </p>
      </div>
    </section>
  );
}
