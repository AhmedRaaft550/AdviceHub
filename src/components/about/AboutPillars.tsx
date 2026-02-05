"use client";
import { motion } from "motion/react";
import { AboutPillarsProps } from "@/types/app";

const AboutPillars = ({ pillars }: { pillars: AboutPillarsProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-6  ">
      {pillars.map((pillar: AboutPillarsProps) => (
        <motion.div
          key={pillar.id}
          whileHover={{ y: -5 }}
          className={`${pillar.gridSpan}  p-10 rounded-sm border border-sky-500/20 mainBg relative overflow-hidden group flex flex-col justify-between `}
        >
          <div>
            <pillar.icon
              className={`${pillar.iconColor} mb-6 `}
              size={pillar.isSpecial ? 50 : 40}
            />
            <h4
              className={`${pillar.isSpecial ? "text-3xl" : "text-2xl"} font-bold mb-4`}
            >
              {pillar.title}
            </h4>
            <p
              className={`${pillar.isSpecial ? "text-sky-100/70" : "text-gray-400"} leading-relaxed text-sm`}
            >
              {pillar.desc}
            </p>
          </div>

          {pillar.hasGlow && (
            <div className="absolute bg-sky-800 -right-10 -bottom-10 w-40 h-40  blur-3xl group-hover:bg-sky-500/10 transition-all" />
          )}

          {pillar.hasAvatars && (
            <div className="flex -space-x-4 mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-sky-800 border-2 border-[#05070A]"
                />
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default AboutPillars;
