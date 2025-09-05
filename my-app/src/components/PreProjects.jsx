import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ShowcaseSection() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

   const cards = [
    {
      img: "https://img.freepik.com/premium-photo/robot-holding-processor-with-ai-artificial-intelligence-technology-neural-networks-concept_1363766-232.jpg?w=740&q=80",
      title: "Artificial Intelligence",
      desc: "Learn AI concepts, Python, Machine Learning & NLP.",
      popup: "Become an AI Professional with ML, DL, CV, and AI deployment."
    },
    {
      img: "https://img.freepik.com/premium-photo/data-technology-network-icons-dark-background-3d-rendering_670147-116394.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Data Science with ML",
      desc: "Master data analysis, visualization, and predictive modeling.",
      popup: "Learn advanced ML techniques, Python, and data visualization."
    },
    {
      img: "https://img.freepik.com/premium-photo/cybersecurity-concept-with-digital-shield-hologram_1204086-5654.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Cyber Security & Ethical Hacking",
      desc: "Protect systems and networks from cyber threats.",
      popup: "Hands-on ethical hacking, penetration testing & tools."
    },
    {
      img: "https://img.freepik.com/premium-photo/night-coder-desktop-coding-multiple-screens_282218-116490.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Web Development Full Stack",
      desc: "Frontend, backend, and databases with modern frameworks.",
      popup: "Become a MERN/MEAN full-stack developer."
    },
    {
      img: "https://img.freepik.com/premium-photo/java-inscription-against-laptop-code-background_505557-42518.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Full Stack JAVA",
      desc: "Enterprise-level web apps using Java, Spring, and Hibernate.",
      popup: "Master Java programming, Spring Boot & Hibernate."
    },
    {
      img: "https://img.freepik.com/premium-vector/cloud-computing-technology-internet-cyber-technology-concept-abstract-cloud-connection-technology_974730-241.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Cloud Computing",
      desc: "AWS, Azure, Google Cloud – deploy scalable apps.",
      popup: "Get cloud certified in AWS, Azure, GCP."
    },
    {
      img: "https://img.freepik.com/premium-photo/phone-with-purple-screen-that-says-smart_1064589-173515.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "App Development",
      desc: "Build Android & iOS apps with Flutter, React Native.",
      popup: "Hands-on app development projects."
    },
    {
      img: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "UI/UX",
      desc: "Design stunning and user-friendly digital experiences.",
      popup: "Master Figma, Adobe XD & prototyping."
    },
    {
      img: "https://img.freepik.com/free-vector/server-room-cloud-storage-icon-datacenter-database-concept-data-exchange-process_39422-556.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "VLSI",
      desc: "Learn chip design, HDL coding, and FPGA implementation.",
      popup: "Get skilled in VHDL, Verilog & circuit design."
    },
    {
      img: "https://img.freepik.com/premium-photo/iot-connected-world-futuristic-network-technology_920245-113.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "IoT",
      desc: "Build smart devices with IoT sensors and connectivity.",
      popup: "Learn Arduino, Raspberry Pi & IoT cloud."
    },
    {
      img: "https://img.freepik.com/premium-photo/architectural-blueprint-showing-detailed-floor-plans-elevation_950002-158018.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "AutoCAD with Self-paced MATLAB",
      desc: "Design with AutoCAD & simulate with MATLAB.",
      popup: "Practical AutoCAD projects + MATLAB automation."
    },
    {
      img: "https://img.freepik.com/premium-photo/free-photo-social-media-marketing-concept-marketing_971974-461.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Digital Marketing",
      desc: "SEO, SEM, content, and social media strategies.",
      popup: "Become a digital marketing expert with real-world campaigns."
    },
    {
      img: "https://img.freepik.com/free-photo/modern-equipped-computer-lab_23-2149241263.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "HRM & Finance",
      desc: "Learn human resource management & financial strategies.",
      popup: "Understand HR practices & financial planning."
    },
    {
      img: "https://img.freepik.com/free-photo/leader-authority-boss-coach-director-manager-concept_53876-133859.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Leadership & Management",
      desc: "Develop leadership skills and manage teams effectively.",
      popup: "Gain corporate leadership & team management skills."
    },
    {
      img: "https://img.freepik.com/premium-photo/beginner-excel-learning-new-formulas-set-modern-bright-office-with-large-windows_1041210-14123.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
      title: "Advanced Excel with Power BI",
      desc: "Data visualization, dashboards, and automation.",
      popup: "Create dashboards, automate reports with Power BI."
    },
    {
      img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Accounting",
      desc: "Master accounting principles, Tally, and financial reporting.",
      popup: "Practical accounting with Tally & Excel."
    }
  ];

  return (
    <section className="py-12 bg-white">
      {/* Wrapper to center content */}
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              className="relative group bg-gray-100 border border-black rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-gray-700 w-full max-w-xs"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-32 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Title + Short desc */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </div>

              {/* Popup on hover */}
              <div className="absolute top-2 right-2 bg-white border border-gray-300 shadow-lg rounded-lg p-4 w-60 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                <h4 className="font-semibold text-gray-800">{card.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{card.popup}</p>
                <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                  <li>Lifetime Access</li>
                  <li>Certificate of Completion</li>
                  <li>Community Support</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Middle Three Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 justify-items-center">
          {[
            "https://img.freepik.com/free-psd/restaurant-landing-page-template_23-2148466849.jpg?ga=GA1.1.1362237040.1750501614&semt=ais_incoming&w=740&q=80",
            "https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?t=st=1756987947~exp=1756991547~hmac=9e3fcb7015978a462046fc869c5b4b7ad0ac459962bafed3c430c2a5fe1d0407&w=740",
            "https://img.freepik.com/free-vector/flat-design-brutalism-template_52683-97143.jpg?t=st=1756987987~exp=1756991587~hmac=314c88973d930e1be8b117c34146e07e90ec7c6ea7f97c1520947564142a7d45&w=740"
          ].map((img, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              className="bg-gray-100 border border-black rounded-xl overflow-hidden flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-sm"
            >
              <img
                src={img}
                alt="Panel"
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Keyboard Section */}
        {/* <div
          data-aos="fade-up"
          className="relative max-w-4xl w-full mx-auto mt-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-xl overflow-hidden group"
        >
          <img
            src="https://plus.unsplash.com/premium_vector-1683133603975-60193704cb08?w=700&auto=format&fit=crop&q=60"
            alt="Leadership"
            className="rounded-2xl object-cover w-full h-[250px]"
          />
        </div> */}
      </div>
    </section>
  );
}
