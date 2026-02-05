"use client";

import { motion } from "motion/react";

const AnimatedBtn = ({
  children,
  className,
  type,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}) => {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.1, y: -6 }}
      whileTap={{ scale: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.09, ease: "easeIn" }}
      className={`text-white border cursor-pointer hover:bg-sky-600  shadow-lg shadow-sky-900/40 active:scale-95 font-semibold border-sky-900 px-3 py-2 bg-sky-900 rounded-sm ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default AnimatedBtn;
