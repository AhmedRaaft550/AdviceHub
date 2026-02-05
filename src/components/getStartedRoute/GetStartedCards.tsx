"use client";

import AnimatedBtn from "../customUi/AnimatedBtn";
import { motion } from "motion/react";
import { GetStartedCardProps } from "@/types/app";
import Link from "next/link";

const GetStartedCards = ({ cards }: { cards: GetStartedCardProps[] }) => {
  return (
    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
      {cards.map((card: GetStartedCardProps, index) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, x: card.id === "user" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ y: -10 }}
          transition={{ delay: index * 0.2 }}
          className="group relative p-10 rounded-3xl bg-white/3 border border-white/10 hover:border-sky-500/50 transition-all duration-500 overflow-hidden"
        >
          {/* <div className="absolute -right-10 -top-10 text-sky-500/5 group-hover:text-sky-500/10 transition-colors pointer-events-none z-50">
            {React.cloneElement(card.icon as React.ReactElement)}
          </div> */}

          <div className="relative z-20">
            <div className="w-14 h-14 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-6 border border-sky-500/30 text-sky-400 text-2xl">
              {card.icon}
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
              {card.title}
            </h3>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              {card.description}
            </p>

            <Link href={card.link} className="block">
              <AnimatedBtn className="w-full py-4 text-lg">
                {card.btnText}
              </AnimatedBtn>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GetStartedCards;
