import { FaSearch, FaCalendar, FaVideo } from "react-icons/fa";

export const bookingSteps = [
  {
    id: 1,
    title: "Choose Your Expert",
    description:
      "Browse through our curated list of world-class consultants and check their reviews.",
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Book a Session",
    description:
      "Select a time slot that fits your schedule and confirm your booking securely.",
    icon: <FaCalendar className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Start Consulting",
    description:
      "Join the live video session and get the personalized advice you need to grow.",
    icon: <FaVideo className="w-6 h-6" />,
  },
];
