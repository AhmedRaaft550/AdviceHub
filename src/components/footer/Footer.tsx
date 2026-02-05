"use client";

import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-950 pt-24 pb-10 overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 select-none pointer-events-none">
        <h1 className="text-[15vw] font-bold text-white/[0.02] leading-none text-center translate-y-1/4 uppercase tracking-tighter">
          Creative Developer
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">
              Your One-Stop Shop for Expert Advice
            </h2>
            <p className="text-gray-400 max-w-sm mb-8">
              Based in Dubai, working globally. Specializing in high-performance
              web experiences and scalable digital solutions.
            </p>
            <a
              href="mailto:hello@yourname.com"
              className="group flex items-center gap-3 text-sky-400 text-lg font-medium"
            >
              hello@yourname.com
              <span className="p-2 bg-sky-400/10 rounded-full group-hover:rotate-45 transition-transform">
                <FaSquareArrowUpRight size={20} />
              </span>
            </a>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Navigation</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin size={20} />, link: "#" },
                { icon: <FaXTwitter size={20} />, link: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Dubai, UAE{" "}
              {new Date().toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            </div>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
