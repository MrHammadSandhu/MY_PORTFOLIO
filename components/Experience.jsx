"use client";
import React, { useRef } from "react";
import { useScroll, motion } from "motion/react";
import LiIcons from "./LiIcons";

const Details = ({ poition, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
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
          {poition}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-secondary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-light/40  xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full  origin-top bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            poition="MERN stack developer"
            company="Heapware Technologies"
            companyLink="https://www.heapware.com/"
            time="2023-July 2024"
            address="Arfa Karim Tower Lahore"
            work="As a MERN Stack Developer at Heapware Technologies, I have been instrumental in building and maintaining dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). My responsibilities revolve around delivering robust and scalable solutions tailored to the unique needs of our clients."
          />
          <Details
            poition="Full stack developer"
            company="Ideoversity"
            companyLink="https://ideoversity.com/"
            time="Jan 2024 - June 2024 (Intern)"
            address="Lahore"
            work="As a Full Stack Developer Intern at Ideoversity, I gained hands-on experience in designing, developing, and deploying modern web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This internship offered an invaluable opportunity to work in a collaborative environment and contribute to impactful projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
