"use client";
import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-light sm:text-base py-10 px-10">
      <Layout className="py-8 md:pt-16 sm:pt-5 xl:p-12 lg:p-8 !p-0">
        <div className="flex items-center justify-center flex-col w-full md:flex-col">
          <div className="w-full flex justify-between items-center lg:flex-col-reverse lg:gap-y-10">
            <div className="text-start w-full lg:text-center">
              <p className="text-sm">
                © 2025 | All rights reserved{" "}
                <span className="text-secondary font-bold cursor-pointer">
                  MR HAMMAD
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between  lg:justify-around w-full">
              <div className="flex flex-col justify-center items-start lg:items-center">
                <h2 className="text-secondary font-semibold text-xl">
                  Contact
                </h2>
                <span className="text-[16px] mt-2">+92 309 7369603</span>
              </div>
              <div className="flex flex-col justify-center items-start lg:items-center sm:hidden">
                <h2 className="text-secondary font-semibold text-xl">Email</h2>
                <span className="text-[16px] mt-2">mrhammad060@gmail.com</span>
              </div>
              <div className="flex flex-col justify-center items-start lg:items-center">
                <h2 className="text-secondary font-semibold text-xl">Follow</h2>
                <nav className="flex items-center justify-center flex-wrap mt-2">
                  <motion.a
                    href="/"
                    target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 mr-1  sm:w45 sm:mx-1"
                  >
                    <TwitterIcon />
                  </motion.a>
                  <motion.a
                    href="https://github.com/MrHammadSandhu"
                    target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 mx-1 sm:w-4 sm:mx-1"
                  >
                    <GithubIcon />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/mrhammadsandhu/"
                    target={"_blank"}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-5 mx-1 sm:w-4 sm:mx-1"
                  >
                    <LinkedInIcon />
                  </motion.a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
