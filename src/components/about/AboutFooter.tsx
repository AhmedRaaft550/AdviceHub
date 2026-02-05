import AnimatedBtn from "@/components/customUi/AnimatedBtn";
import Link from "next/link";

const AboutFooter = () => {
  return (
    <section className=" relative text-center ">
      <div className="max-w-3xl mx-auto px-6 relative z-10 mt-10">
        <h2 className="text-5xl font-bold mb-8">Empower your future today.</h2>
        <div className="flex py-10 flex-col sm:flex-row gap-4 justify-center">
          <Link href="/getStarted">
            <AnimatedBtn className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-600/20 active:scale-95">
              Get Started Now
            </AnimatedBtn>
          </Link>
          <AnimatedBtn className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl transition-all active:scale-95">
            Browse Experts
          </AnimatedBtn>
        </div>
      </div>
      {/* Abstract Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-500/50 to-transparent"></div>
    </section>
  );
};

export default AboutFooter;
