"use client";

import { motion } from "motion/react";

const FinalCTA = () => {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-5xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-600 to-sky-800 p-12 text-center text-white"
      >
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Lets build something <br /> extraordinary.
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Currently accepting new projects for Q1 2026. Lets discuss your vision
          and turn it into a high-performance reality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all">
            Get a Free Quote
          </button>
          <button className="px-8 py-4 bg-blue-700/30 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-blue-700/50 transition-all">
            Contact on WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
