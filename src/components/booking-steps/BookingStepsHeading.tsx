import { motion } from "motion/react";

const BookingStepsHeading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 3,
      }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        How It{" "}
        <span className="text-transparent bg-clip-text headingGradient">
          Works
        </span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
        Your journey to success starts in three simple steps. Seamless, secure,
        and professional.
      </p>
    </motion.div>
  );
};

export default BookingStepsHeading;
