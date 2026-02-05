"use client";

import {
  motion,
  useAnimationControls,
  TargetAndTransition,
} from "motion/react";
import { categories } from "@/constants/categories";
import { useEffect, useMemo } from "react";

const ScrollingRow = () => {
  const controls = useAnimationControls();

  const scrollConfig = useMemo(
    (): TargetAndTransition => ({
      x: ["0%", "-50%"], // defentaion
      transition: {
        // transation
        ease: "linear",
        duration: 25,
        repeat: Infinity,
      },
    }),
    [],
  );

  useEffect(() => {
    // logic to start the animation
    controls.start(scrollConfig);

    // cleanup when the componet unmounts
    return () => {
      controls.stop();
    };
  }, [controls, scrollConfig]);

  return (
    <div className="relative flex overflow-hidden group">
      <motion.ul
        initial={{ x: "0%" }}
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start(scrollConfig)}
        className="flex whitespace-nowrap gap-6"
      >
        {[...categories, ...categories].map((feature, index) => (
          <li
            key={index}
            className="px-8 py-4 font-serif rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white text-lg font-medium hover:border-sky-500/50 hover:bg-sky-500/10 transition-all cursor-default"
          >
            {feature}
          </li>
        ))}
      </motion.ul>
      {/* layers */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-slate-950 to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-slate-950 to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingRow;
