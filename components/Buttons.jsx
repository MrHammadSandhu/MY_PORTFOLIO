import Link from "next/link";
import React from "react";
import { LinkArrow } from "./Icons";

const Buttons = ({ className = "" }) => {
  return (
    <div
      className={`flex items-center self-start mt-2 lg:self-center ${className}`}
    >
      <Link
        href="#"
        className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-light   md:p-2 md:px-4 md:text-base"
      >
        Resume
        <LinkArrow className="w-6 ml-1" />
      </Link>
      <Link
        href="#"
        className="ml-4 text-lg font-medium text-light underline underline-offset-8  md:text-base"
      >
        Get in Touch
      </Link>
    </div>
  );
};

export default Buttons;
