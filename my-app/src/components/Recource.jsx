import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: "Membangun Kebiasaan Menabung: Tips Dan Trik yang Efektif",
    description:
      "Cara sederhana namun ampuh untuk mulai menabung dan mencapai tujuan finansial Anda.",
    author: "Konselor",
    date: "Jan 05, 2023",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5HWyAuw4dJppqYVMmeNlvyIC-ZkG-0fdc2LgpmiBZkp_Yccu0ftkYeU7xC-tJIEAcpfw&usqp=CAU",
    link: "https://timesofindia.indiatimes.com/blogs/voices/how-the-new-age-technology-is-transforming-e-learning-in-india/"
  },
  {
    title: "Membuat Rencana Keuangan: Langkah Mudah Mewujudkan Impian",
    description:
      "Panduan praktis menyusun rencana keuangan yang realistis agar hidup lebih terarah.",
    author: "Dewi",
    date: "Jan 12, 2023",
    image:
      "https://images.unsplash.com/photo-1612815154858-60aa05cba427?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/rencana-keuangan"
  },
  {
    title: "Menyiapkan Dana Darurat: Pentingnya dan Cara Membuatnya",
    description:
      "Strategi menyiapkan dana darurat untuk menghadapi kondisi tak terduga dengan aman.",
    author: "Dominikus",
    date: "Jan 20, 2023",
    image:
      "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/dana-darurat"
  },
  {
    title: "Mengatasi Utang: Cara Keluar dari Jerat Hutang",
    description:
      "Langkah bijak untuk mengatur hutang agar tidak menjadi beban berkepanjangan.",
    author: "Dian",
    date: "Feb 01, 2023",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c5121f9a?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/mengatasi-utang"
  },
  {
    title: "Meningkatkan Edukasi dan Literasi Finansial",
    description:
      "Mengapa literasi finansial penting untuk kehidupan modern dan bagaimana memulainya.",
    author: "Dewi",
    date: "Feb 10, 2023",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/literasi-finansial"
  },
  {
    title: "Tips untuk Menyiapkan Pensiun Nyaman",
    description:
      "Strategi investasi dan tabungan agar pensiun Anda lebih tenang dan sejahtera.",
    author: "Dian",
    date: "Feb 15, 2023",
    image:
      "https://images.unsplash.com/photo-1518544889281-b0fef06cc581?auto=format&fit=crop&w=600&q=80",
    link: "https://example.com/pensiun-nyaman"
  }
];

export default function FinancialNews() {
  useEffect(() => {
    gsap.utils.toArray(".article-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Latest Articles
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
            reprehenderit molestiae maxime delectus recusandae voluptatem
            cumque fuga impedit rerum eveniet?
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="article-card bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group"
          >
            {/* Image wrapped with link */}
            <a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-48 overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <span className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                {article.author}
              </span>
            </a>

            {/* Content */}
            <div className="p-6">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white line-clamp-2 hover:underline">
                  {article.title}
                </h3>
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                {article.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>📅 {article.date}</span>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium group-hover:underline"
                >
                  Baca Selengkapnya →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
