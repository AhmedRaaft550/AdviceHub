const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <h1
        className={
          className || `font-bold text-2xl tracking-tight group cursor-pointer`
        }
      >
        <span className="text-white group-hover:text-sky-400 transition-colors">
          Advice
        </span>
        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-blue-600 relative">
          Hub
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
        </span>
      </h1>
    </>
  );
};

export default Logo;
