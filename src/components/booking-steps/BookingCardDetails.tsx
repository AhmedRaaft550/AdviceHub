import { motion } from "motion/react";
import { BookingStepProps } from "@/types/app";

const BookingCardDetails = ({ step }: { step: BookingStepProps }) => {
  return (
    <div className="relative z-10 ">
      <motion.div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
          {step.icon}
        </div>
      </motion.div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-3xl font-black text-blue-500/50 group-hover:text-blue-500/70 transition-colors font-mono">
          0{step.id}
        </span>
        <h3 className="text-2xl font-bold text-white tracking-wide">
          {step.title}
        </h3>
      </div>

      <p className="text-gray-400 text-lg leading-relaxed font-light group-hover:text-gray-300 transition-colors">
        {step.description}
      </p>
    </div>
  );
};

export default BookingCardDetails;
