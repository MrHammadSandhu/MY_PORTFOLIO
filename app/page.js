import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import Layout from "@/components/Layout";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";
import profilePic from "../public/mypic.png";
import Buttons from "@/components/Buttons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center  w-full ">
        <Layout className="pt-0 md:pt-16 sm:pt-5 lg:py-0">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="ProfilePic"
                className="w-full h-auto  md:inline-block md:w-full rounded-b-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Hi,🖐 I’m "
                className="text-left text-xl sm:text-[16px] lg:text-center mt-8 font-semibold"
              />
              <AnimatedText
                text="Muhammad Hammad"
                className="text-left text-4xl xl:text-2xl md:text-xl sm:text-[16px] lg:text-center w-1/2 mb-6 xs:mb-0 font-semibold"
              />
              <TypeWriter
                phrases={["Full Stack Developer", "MERN Stack Developer"]}
                className="text-6xl text-left xl:text-5xl lg:text-5xl 2xl:text-[58px] lg:text-center md:text-4xl  sm:text-[26px]"
              />
              <p className="my-2 mt-4 text-base font-medium md:text-sm sm:text-xs text-white text-start xs:text-center md:text-center">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <p className="text-base font-medium md:text-sm sm:text-xs text-white text-start mb-6 xs:text-center md:text-center">
                I love to do develop for every category of websites whether it
                be an online eCommerce store, an event page or even a product
                landing page.
              </p>
              <Buttons className="mt-4" />
            </div>
          </div>
          <HireMe />
        </Layout>
      </main>
    </>
  );
}
