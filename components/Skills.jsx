import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-light text-dark py-3 px-6 shadow-light cursor-pointer absolute  lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent  xs:text-light  xs:font-bold "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      lg:bg-circularLightLg 
      lg:dark:bg-circularDarkLg
      md:bg-circularLightMd 
      md:dark:bg-circularDarkMd
      sm:bg-circularLightSm 
      sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-light text-dark p-6  cursor-pointer  lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-21vw" y="2vw" />
        <Skill name="CSS" x="-4vw" y="-9vw" />
        <Skill name="JS" x="18vw" y="6vw" />
        <Skill name="React.JS" x="0vw" y="12vw" />
        <Skill name="Next.JS" x="-20vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="Node js" x="15vw" y="-12vw" />
        <Skill name="figma" x="0vw" y="-21vw" />
        <Skill name="Fire Base" x="-25vw" y="18vw" />
        <Skill name="Web Design" x="35vw" y="-5vw" />
        <Skill name="GatsbyJS" x="15vw" y="-12vw" />
      </div>
    </>
  );
};

export default Skills;
