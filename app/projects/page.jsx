import React from "react";
import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div>
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid  shadow-3xl p-12 relative !rounded-br-xl bg-dark border-light  lg:flex-col md:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -z-10 -right-3 w-[100%] h-[103%] rounded-[2.5rem]  rounded-br-3xl bg-light xs:-right-2 sm:h-[102%]  sm:w-[100%] xs:rounded-[1.5rem]" />
        {/* Link wrapping only the image */}
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-auto text-light hover:scale-105 transition-all"
          />
        </Link>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          {/* Title and summary not wrapped by Link */}
          <Link
            href="/"
            className="my-2 w-full text-left text-4xl font-bold hover:underline underline-offset-4 cursor-pointer sm:text-sm"
          >
            {title}
          </Link>
          <p className="my-2 font-medium text-light sm:text-sm">{summary}</p>

          <div className="mt-2 flex items-center">
            {/* Separate Link for GitHub */}
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            {/* Separate Link for project visit */}
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg   p-2 px-6 text-lg font-semibold bg-light text-dark sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid  bg-dark p-6 relative border-light xs:p-4">
      <div className="absolute top-0 -z-10 -right-3 w-[101%] h-[102%] rounded-[2rem]  rounded-br-3xl bg-light md:-right-2 md:w-[101%] md:h-[102%] xs:rounded-[1.5rem]" />
      {/* Link wrapping only the image */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-all"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        {/* Title and summary not wrapped by Link */}
        <Link
          href="/"
          className="my-2 w-full text-left text-3xl font-bold hover:underline underline-offset-4 cursor-pointer
          lg:text-2xl"
        >
          {title}
        </Link>
        <p className="my-2 font-medium text-light sm:text-sm">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* Separate Link for project visit */}
          <Link
            href={link}
            target="_blank"
            className="rounded-lg p-2 px-6 text-lg font-semibold bg-light text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
          {/* Separate Link for GitHub */}
          <Link href={github} target="_blank" className="w-10 md:w-8">
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="text-8xl mb-24 lg:text-6xl sm:mb-8 sm:text-4xl xs:text-2xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img="/crypto-screener-cover-image.jpg"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img="/crypto-screener-cover-image.jpg"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title=" Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                link="/"
                github="/"
                type="Featured Project"
                img="/crypto-screener-cover-image.jpg"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
