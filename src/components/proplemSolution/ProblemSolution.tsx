"use client";

import ScrollingRow from "./ScrollingRow";
import { motion } from "motion/react";

const MovingFeatures = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="  bg-linear-to-r from-sky-800/10 to-sky-950 p-10 mx-10 border-2 border-sky-500/50 rounded-xl"
    >
      <div className="py-20 bg-slate-950 overflow-hidden container shadow-sm shadow-sky-800/50 mainBg  ">
        {/* section defeniton with the title and description */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Expertise Across
            <span className="bg-clip-text text-transparent headingGradient">
              {" "}
              All Fields ...
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Access a global network of specialists covering every sector. Browse
            our categories to find the perfect consultant tailored to your
            specific goals and time zone.
          </p>
        </div>

        {/* start handle the animation with the scrolling row component */}
        <ScrollingRow />
      </div>
    </motion.section>
  );
};

export default MovingFeatures;
