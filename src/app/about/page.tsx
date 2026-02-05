"use client";
import { motion } from "framer-motion";
import { PILLARS_DATA, stats } from "@/constants/about";
import AboutHeading from "@/components/about/AboutHeading";
import AboutPillars from "@/components/about/AboutPillars";
import AboutFooter from "@/components/about/AboutFooter";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white  pt-20">
      {/* about heading */}
      <AboutHeading />

      {/* display the state here with the loop */}
      <section className="py-20 border  border-white/10 shadow-sm shadow-sky-600 container bg-white/1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center "
              >
                <h3 className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-gray-500 font-semibold tracking-widest uppercase text-[10px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* about pillars cards section */}
      <section className="py-32 px-6 container mx-auto  ">
        <div className="mb-16 max-w-xl ">
          <h2 className="text-4xl font-bold mb-4 headingGradient text-transparent bg-clip-text">
            The Pillars of Our Platform
          </h2>
          <p className="text-gray-400">
            Everything we build is centered around quality and security.
          </p>
        </div>
        <AboutPillars pillars={PILLARS_DATA} />
      </section>
      {/* about footer */}
      <AboutFooter />
    </div>
  );
};

export default AboutPage;
