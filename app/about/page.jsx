"use client";
import AnimatedText from "@/components/AnimatedText";
import Buttons from "@/components/Buttons";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "motion/react";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 8000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-6xl mb-16 lg:!text-5xl md:text-4xl sm:text-3xl xs:text-2xl"
          />
          <div className="h-full grid w-full grid-cols-8 pb-8 lg:pb-0 gap-x-2 py-32 lg:py-16 md:py-8 sm:py-4 xs:py-2">
            <div className="col-span-4 flex flex-col items-start justify-start md:col-span-full relative">
              <h2 className="uppercase text-5xl font-bold xl:text-4xl sm:text-3xl xs:text-2xl lg:text-3xl md:text-3xl">
                I build seamless
                <span className="block relative pl-20 sm:pl-10">
                  web solutions
                  <span className="absolute w-16 h-1 left-0 bottom-0 top-1/2 -translate-y-1/2 bg-secondary sm:w-8"></span>
                </span>
                that bring ideas to life
              </h2>
              <img
                src="/16.png"
                alt="Shape"
                className="absolute bottom-0 right-36 lg:top-44   max-w-[180px]  invert sm:hidden md:hidden lg:right-20 "
              />
            </div>
            <div className="col-span-4 w-full flex flex-col items-start justify-start md:col-span-full">
              <h2 className="mb-4 text-lg font-bold uppercase md:mt-10">
                What I do
              </h2>
              <p className="font-medium">
                I am Muhammad Hammad, a highly skilled Full Stack Web Developer
                with 1 year of professional experience, specializing in the MERN
                stack (MongoDB, Express.js, React.js, and Node.js). My expertise
                lies in building robust, scalable, and user-friendly web
                applications tailored to meet diverse business needs.
              </p>
              <p className="my-4 font-medium sm:my-1 md:my-2 lg:my-[1px]">
                I have extensive experience working with modern web
                technologies, including Bootstrap, Tailwind CSS, and Redux,
                ensuring visually stunning and highly interactive applications.
                With a passion for clean and efficient code, I develop websites
                and applications that are not only functional but also optimized
                for performance and scalability.
              </p>
              <Buttons className="mt-4 lg:!self-start md:!self-start" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t-2 border-b-2 border-light/40 py-10 mt-32 lg:mt-16 md:8 sm:mt-8">
            {/* Title Section */}
            <div className="w-1/4 border-r-2 border-light/40 md:hidden">
              <h3 className="font-bold text-[#9999] w-full text-2xl uppercase md:border-r-4 border-0 border-[#9999] md:text-xl">
                Worked with Global Largest Brands
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center md:items-center">
              <span className="inline-block text-6xl font-bold md:text-5xl lg:text-5xl sm:text-3xl xs:text-3xl text-secondary">
                <AnimatedNumbers value={50} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-bgDark xl:text-center md:text-lg sm:text-base xs:text-sm">
                Satisfied clients
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center md:items-center">
              <span className="inline-block text-6xl font-bold md:text-5xl lg:text-5xl sm:text-3xl xs:text-3xl text-secondary">
                <AnimatedNumbers value={40} />+
              </span>
              <h2
                className="text-xl font-medium capitalize text-bgDark
                xl:text-center md:text-lg sm:text-base xs:text-sm"
              >
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center md:items-center">
              <span className="inline-block text-6xl font-bold md:text-5xl lg:text-5xl sm:text-3xl xs:text-3xl text-secondary">
                <AnimatedNumbers value={1} />+
              </span>
              <h2 className="text-xl font-medium capitalize text-bgDark xl:text-center md:text-lg sm:text-base xs:text-sm">
                Year of Experience
              </h2>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
          <HireMe className="sm:block md:block lg:hidden xl:hidden 2xl:hidden hidden" />
        </Layout>
      </main>
    </>
  );
};

export default page;
