import Link from "next/link";
import React from "react";
import { LinkArrow } from "./Icons";

const Buttons = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center self-start mt-2 lg:self-center flex-wrap   ${className}`}
    >
      <Link
        href="/projects"
        className="flex items-center justify-between bg-secondary text-light p-2.5 px-4  rounded-lg text-lg font-semibold hover:bg-bgDark hover:text-light border-2 border-solid border-transparent  md:p-2 md:text-base transition-all"
      >
        <LinkArrow className="!w-4 mr-3" />
        View Portfolio
      </Link>
      <Link
        href="/resume"
        className="flex items-center justify-between bg-bgDark text-light p-2.5 px-4 ml-4  rounded-lg text-lg font-semibold hover:bg-secondary hover:text-light border-2 border-solid border-transparent  md:p-2 md:text-base transition-all"
      >
        <img src="/resume-icon.png" alt="" className="w-6 mr-2" />
        View Resume
      </Link>
    </div>
  );
};

export default Buttons;
