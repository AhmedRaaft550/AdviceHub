import React from "react";

const CustomeBtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-sky-900/20 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomeBtn;
