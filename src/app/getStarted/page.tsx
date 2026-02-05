"use client";
import Logo from "@/components/customUi/Logo";
import Link from "next/link";
import { motion } from "framer-motion";
import { getStartedCards } from "@/constants/getStartedCards";
import GetStartedCards from "@/components/getStartedRoute/GetStartedCards";

const GetStarted = () => {
  return (
    <section className="min-h-screen  relative flex flex-col justify-center items-center overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center my-28"
      >
        <Logo className="text-6xl md:text-7xl font-bold mb-6 block" />
        <h1 className="text-gray-400 text-xl md:text-2xl font-light tracking-wide">
          Choose your path in{" "}
          <span className="text-white font-semibold underline">AdviceHub</span>
        </h1>
      </motion.div>

      {/* Get Started Cards */}
      <GetStartedCards cards={getStartedCards} />

      {/* Already have an account section  */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-gray-500 text-sm italic"
      >
        Already have an account?{" "}
        <Link href="/login" className="text-sky-500 underline">
          Sign in
        </Link>
      </motion.p>
    </section>
  );
};

export default GetStarted;
