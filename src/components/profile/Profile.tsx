"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import { MdMonitor, MdOutlineSmartphone } from "react-icons/md";
import eCommerce from "../../../public/images/e-commerce.png";
import dashboard from "../../../public/images/dashboard.png";

const projects = [
  {
    title: "E-Commerce OS",
    description:
      "A high-performance storefront for a luxury brand in Dubai. Built for 100/100 Lighthouse score.",

    image: eCommerce,
    link: "https://everlane-dun.vercel.app/",
    type: "Web App",
  },
  {
    title: "Authuntication Dashboard ",
    description:
      "A Dashboard with authentication features for a startup. Built for 100/100 Lighthouse score.",

    image: dashboard,
    link: "https://digital-hub-dashboard.vercel.app/",
    type: "Dashboard",
  },
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Work
            </h2>
            <p className="text-gray-400">
              Selected projects that demonstrate our commitment to digital
              excellence.
            </p>
          </div>
          <button className="text-sky-400 font-medium hover:text-sky-300 transition-colors flex items-center gap-2">
            View all projects <FaExternalLinkAlt size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden rounded-3xl bg-slate-900 border border-white/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"
                  >
                    <FaExternalLinkAlt size={20} />
                  </Link>
                </div>

                <div className="w-full relative h-full bg-linear-to-br from-sky-900/20 to-blue-900/20 group-hover:scale-105 transition-transform duration-500" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className=" object-cover"
                />
              </div>

              <div className="flex justify-between items-start mb-2">
                <span className="text-sky-500 text-xs font-bold uppercase tracking-widest">
                  {project.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex gap-3"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
