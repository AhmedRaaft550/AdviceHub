import { IoShieldCheckmark } from "react-icons/io5";
import { FaGlobeAfrica, FaUserShield } from "react-icons/fa";
import { BiSolidZap } from "react-icons/bi";

export const PILLARS_DATA = [
  {
    id: 1,
    title: "Vetted Expertise",
    desc: "Every consultant undergoes a rigorous multi-step verification process to ensure you only learn from the best.",
    icon: IoShieldCheckmark,
    iconColor: "text-sky-500",
    gridSpan: "md:col-span-3",
    bg: "bg-[#0A0C10]",
    hasGlow: true,
  },
  {
    id: 2,
    title: "Global Reach",
    desc: "Connecting minds across 6 continents and 50+ languages effortlessly.",
    icon: FaGlobeAfrica,
    iconColor: "text-sky-500",
    gridSpan: "md:col-span-3",
    bg: "bg-linear-to-br from-sky-600 to-sky-900",
    isSpecial: true,
  },
  {
    id: 3,
    title: "Instant Impact",
    desc: "No wait times. Get the answers you need through our real-time scheduling and secure infrastructure.",
    icon: BiSolidZap,
    iconColor: "text-sky-500",
    gridSpan: "md:col-span-2",
    bg: "bg-[#0A0C10]",
  },
  {
    id: 4,
    title: "Community Focused",
    desc: "We foster a thriving ecosystem where knowledge is shared freely and connections last a lifetime.",
    icon: FaUserShield,
    iconColor: "text-sky-500",
    gridSpan: "md:col-span-2",
    bg: "bg-[#0A0C10]",
    hasAvatars: true,
  },
];

export const stats = [
  { label: "Vetted Experts", value: "12K+" },
  { label: "Successful Sessions", value: "85K+" },
  { label: "Countries Reached", value: "140+" },
  { label: "User Rating", value: "4.9/5" },
];
