import { motion } from "motion/react";

const AboutHeading = () => {
  return (
    <section className="relative py-10 px-6 overflow-hidden ">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sky-400 text-sm font-medium mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
          </span>
          Our Mission
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-linear-to-b from-white to-white/40 bg-clip-text text-white"
        >
          Human Intellect, <br /> <span className="text-sky-500">Unbound.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-400 text-xl leading-relaxed"
        >
          We are building the world most trusted bridge between seekers of
          wisdom and masters of craft. By removing geographical barriers, we
          empower growth through direct, high-impact mentorship.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHeading;
