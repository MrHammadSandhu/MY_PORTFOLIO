import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = ({ className = "" }) => {
  return (
    <div
      className={`fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0 ${className}`}
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText className={"fill-light animate-spin-slow"} />
        <Link
          href=""
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-dark shadow-md border border-solid border-white w-20 h-20 rounded-full font-semibold bg-light hover:bg-dark hover:text-white 
          md:w-12 md:h-12 md:text-[10px]"
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
