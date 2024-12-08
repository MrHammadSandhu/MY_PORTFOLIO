"use client";
import { motion, useMotionValue } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const FramerImage = motion(Image);

const FeaturedArticles = ({ img, title, summary, link, time }) => {
  return (
    <li className="col-span-1 w-full p-4 border  border-solid rounded-2xl relative bg-dark border-light">
      <div className="absolute top-1 -z-10 -right-5 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      {/* Link wrapping only the image */}
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <img src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <h2 className="capitalize text-2xl font-bold my-2 underline underline-offset-4 xs:text-lg">
          {title}
        </h2>
        <p className="text-sm mb-2">{summary}</p>
        <span className="text-primary font-semibold dark:text-primaryDark">
          {time}
        </span>
      </Link>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
    >
      <MovingImage title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const MovingImage = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handlemouse(e) {
    imgRef.current.style.display = "inline-block";
    x.set(e.pageX);
    y.set(-10);
  }
  function handlemouseLeave(e) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href=""
      target="_blank"
      className=""
      onMouseMove={handlemouse}
      onMouseLeave={handlemouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline underline-offset-4">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
        className="w-96 h-auto absolute rounded-lg hidden z-10 md:!hidden"
        width={96}
        height={96}
      />
    </Link>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="words can chnage the world!"
            className="mb-16 text-8xl lg:text-6xl sm:mb-8 sm:text-4xl xs:text-2xl"
          />
          <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img="/pagination component in reactjs.jpg"
            />
            <FeaturedArticles
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              img="/pagination component in reactjs.jpg"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img="/form validation in reactjs using custom react hook.png"
            date="March 22,2023"
            link="/"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img="/form validation in reactjs using custom react hook.png"
            date="March 22,2023"
            link="/"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img="/form validation in reactjs using custom react hook.png"
            date="March 22,2023"
            link="/"
          />
          <Article
            title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
            img="/form validation in reactjs using custom react hook.png"
            date="March 22,2023"
            link="/"
          />
        </Layout>
      </main>
    </>
  );
};

export default page;
