import React from "react";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon, LinkArrow } from "@/components/Icons";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div>
      <article className="w-full flex items-center justify-between rounded-3xl border border-solid  shadow-3xl p-12 relative !rounded-br-xl bg-dark border-light  lg:flex-col md:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 sm:hidden xs:hidden">
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
          <span className="text-secondary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          {/* Title and summary not wrapped by Link */}
          <Link
            href="/"
            className="my-2 w-full text-left text-4xl font-bold  cursor-pointer sm:text-sm"
          >
            {title}
          </Link>
          <p className="my-2 text-light sm:text-sm">{summary}</p>

          <div className="mt-2 flex items-center">
            {/* Separate Link for GitHub */}
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            {/* Separate Link for project visit */}
            <Link
              href={link}
              target="_blank"
              className="flex items-center justify-between ml-4 rounded-lg  p-2 px-6 text-lg font-semibold bg-secondary text-light sm:px-4 sm:text-base"
            >
              Visit Project
              <LinkArrow className="!w-4 ml-3" />
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
        <span className="text-secondary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
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
        <p className="my-2  text-light sm:text-sm">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* Separate Link for project visit */}
          <Link
            href={link}
            target="_blank"
            className="flex items-center justify-between rounded-lg p-2 px-6 text-lg font-semibold bg-secondary text-light sm:px-4 sm:text-base"
          >
            Visit Project
            <LinkArrow className="!w-4 ml-3" />
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
                title="FunkyFox Car Rental Management: Seamless Booking Experience"
                summary="I developed the FunkyFox Car Rental Management website using the MERN stack to streamline the car rental process. The site features a clean design and user-friendly interface, allowing users to easily browse and reserve cars. With dynamic features powered by MongoDB, Express.js, React.js, and Node.js, it provides a seamless and responsive experience for car rental management.
                Credentials = Email: admin@gmail.com , Password : admin123
                "
                link="https://funky-fox-frontend.vercel.app/"
                github="https://github.com/MrHammadSandhu/FUNKYFOX-FRONTEND"
                type="Featured Project"
                img="/funkyfox.png"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="AHSR Solutions: Dynamic Website Showcasing Comprehensive Services"
                summary="I developed the AHSR Solutions website to showcase the company's services in Saudi Arabia. The site features a responsive design, interactive elements, and animations, highlighting services like renovation, stationery, and printing. Built with HTML, CSS, Bootstrap, JavaScript, jQuery, and WOW.js, it offers a dynamic and engaging online experience."
                link="https://ahsrsolution-delta.vercel.app/"
                github="https://github.com/MrHammadSandhu/AhsrSolution"
                type="Featured Project"
                img="/ashrsolution.png"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title="Gulf Horizon Telecom Est.: Power, Security & IT Solutions"
                summary="I developed the Gulf Horizon Telecom Est. (GHTE) website to showcase their power, security, and IT solutions. Built with HTML, CSS, Bootstrap, JavaScript, and jQuery, the site highlights services like UPS systems, CCTV, access control, and cybersecurity, offering a responsive and user-friendly experience."
                link="https://www.gulfhorizontele.com/"
                github="https://github.com/MrHammadSandhu/ghte"
                type="Featured Project"
                img="/ghte.png"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default page;
