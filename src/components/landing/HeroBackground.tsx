import { motion } from "motion/react";

const HeroBackground = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{
        scale: [0, 5, 6],
        opacity: [1, 1, 0],
      }}
      transition={{
        duration: 5,
        times: [0, 0.8, 1],
        ease: "circIn",
      }}
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center"
    >
      <div className="w-screen h-[100vw] bg-sky-600/20 rounded-full blur-[50px]" />
    </motion.div>
  );
};

export default HeroBackground;
