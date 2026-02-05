import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

export const getStartedCards = [
  {
    id: "user",
    icon: <FaUserGraduate />,
    title: "Get Advice",
    description:
      "Find the perfect mentor, book seamless sessions, and accelerate your personal or professional growth.",
    btnText: "Continue as a User",
    link: "/signup?role=user",
    color: "sky",
  },
  {
    id: "expert",
    icon: <FaChalkboardTeacher />,
    title: "Become an Expert",
    description:
      "Monetize your knowledge, manage your schedule, and inspire others by sharing your unique expertise.",
    btnText: "Continue as an Expert",
    link: "/signup?role=expert",
    color: "blue",
  },
];
