const HeroBadge = () => {
  return (
    <div className="inline-flex items-center  px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8 backdrop-blur-sm ">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
      </span>
      Live: 500+ Experts available for global Consultations
    </div>
  );
};

export default HeroBadge;
