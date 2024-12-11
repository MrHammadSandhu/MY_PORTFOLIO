"use client";
import React from "react";
import Link from "next/link";
import { DribbbleIcon, GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "motion/react";

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between z-10 lg:px-16 md:px-12 md:py-6 sm:px-8 sm:py-6">
      <div className="w-full flex justify-between items-center">
        <Link
          href=""
          className="flex items-center justify-center w-20 h-20 text-light text-3xl font-bold italic 
          md:w-12 md:h-12"
        >
          {/* <img src="/logo.png" alt="" /> */}
          MHS
        </Link>
        <nav className="flex items-center justify-center flex-wrap md:hidden">
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mr-2  sm:w-5 sm:mx-1"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mx-2 sm:w-5 sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="w-7 mx-2 sm:w-5 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
