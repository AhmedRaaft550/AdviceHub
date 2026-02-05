"use client";

import { motion } from "motion/react";
import HeroBadge from "./HeroBadge";
import HeroText from "./HeroText";
import HeroBackground from "./HeroBackground";

const LandingPage = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0 h-full w-full mainBg"></div>

      <motion.div
        initial={{ opacity: 0, scale: 5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "circIn", delay: 1 }}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20"
      >
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="container px-6 text-center"
        >
          <HeroBadge />
          <HeroText />
        </motion.section>
      </motion.div>

      <HeroBackground />
    </main>
  );
};

export default LandingPage;
