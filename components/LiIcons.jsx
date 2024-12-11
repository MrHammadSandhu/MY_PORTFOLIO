"use client";
import React from "react";
import { motion, useScroll } from "motion/react";

const LiIcons = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "start start"],
  });
  return (
    <figure className="absolute left-0 stroke-light">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-secondary stroke-1 fill-none"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px]"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 stroke-secondary fill-secondary"
        />
      </svg>
    </figure>
  );
};

export default LiIcons;
