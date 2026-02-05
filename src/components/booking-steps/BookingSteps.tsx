"use client";

import { motion } from "framer-motion";
import { bookingSteps } from "@/constants/bookingSteps";
import { containerVariants, cardVariants } from "../../animation/bookingSteps";
import BookingStepsHeading from "./BookingStepsHeading";
import BookingCardDetails from "./BookingCardDetails";

const BookingSteps = () => {
  return (
    <section className="relative py-24 overflow-hidden mainBg">
      {/* Dynamic Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        <BookingStepsHeading />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {bookingSteps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-black/20 border border-white/25 hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 blur-xl pointer-events-none" />

              <BookingCardDetails step={step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSteps;
