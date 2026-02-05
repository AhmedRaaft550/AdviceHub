import Link from "next/link";
import AnimatedBtn from "../customUi/AnimatedBtn";

const HeroText = () => {
  return (
    <>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 ">
        Master Your Next Move <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-blue-600">
          With Expert Advice
        </span>
      </h1>

      <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed ">
        Connect with world-class consultants and mentors. Get personalized
        guidance, solve complex challenges, and accelerate your journey today.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 ">
        <Link href="/getStarted">
          <AnimatedBtn className="px-8 py-4  w-full sm:w-auto">
            Get Started
          </AnimatedBtn>
        </Link>
      </div>
    </>
  );
};

export default HeroText;
