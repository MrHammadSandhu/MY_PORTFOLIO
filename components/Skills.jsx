import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y, icon }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center  font-semibold  text-light  shadow-light cursor-pointer absolute  md:text-sm"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      <img
        src={icon}
        alt={name}
        className="w-14 h-auto xs:w-6 md:w-7 lg:w-7 xl:w-7"
      />
      <span className="sm:hidden">{name}</span>
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
        xl:bg-circularDarkXl
        2xl:bg-circularDark2Xl
      lg:bg-circularDarkLg
      md:bg-circularDarkMd
      sm:bg-circularDarkSm
      "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-secondary text-light p-6  cursor-pointer  lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-13vw" y="2vw" icon="/html.svg" />
        <Skill name="CSS" x="9vw" y="-5vw" icon="/css.svg" />
        <Skill name="JS" x="17vw" y="6vw" icon="/js.svg" />
        <Skill name="Next.JS" x="0vw" y="15vw" icon="/next.svg" />
        <Skill name="React.JS" x="-19vw" y="-10vw" icon="/react.svg" />
        <Skill name="TypeScript" x="-27vw" y="-15vw" icon="/typescript.svg" />
        <Skill name="Tailwind CSS" x="-4vw" y="-11vw" icon="/tailwind.svg" />
        <Skill name="Node js" x="15vw" y="-12vw" icon="/node.svg" />
        <Skill name="Github" x="-19vw" y="10vw" icon="/github.svg" />
        <Skill name="Docker" x="-32vw" y="1vw" icon="/docker.svg" />
        <Skill name="Graph ql" x="31vw" y="-5vw" icon="/graphql.svg" />
        <Skill name="MySql" x="33vw" y="-12vw" icon="/mysql.svg" />
        <Skill name="Redux" x="2vw" y="-19vw" icon="/redux.svg" />
      </div>
    </>
  );
};

export default Skills;
