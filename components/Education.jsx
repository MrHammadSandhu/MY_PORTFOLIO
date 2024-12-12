"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "motion/react";
import LiIcons from "./LiIcons";

const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcons reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl md:text-xl xs:text-lg mb-2">
          {type}
        </h3>
        <span className="capitalize font-medium text-light/40 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2024-Prsent"
            place="Virtual University, Pakistan"
            info="I am pursuing a Bachelor of Science in Computer Science (BSCS) at Virtual University of Pakistan, a highly regarded institution known for its flexible and innovative approach to education. This program is equipping me with a strong foundation in computer science concepts and modern technologies, preparing me for a dynamic career in the tech industry."
          />
          <Details
            type="MERN Stack Developement"
            time="Agu 2023-May 2024"
            place="Ideoversity, Lahore"
            info="I completed a comprehensive MERN Stack Development program at Ideoversity, Lahore, where I gained in-depth knowledge and hands-on experience in building modern web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js)."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
