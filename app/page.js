import AnimatedText from "@/components/AnimatedText";
import HireMe from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import TypeWriter from "@/components/TypeWriter";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/developer-pic-1.png";
import Buttons from "@/components/Buttons";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <TransitionEffect />
      <main className="flex items-center  w-full min-h-screen">
        <Layout className="pt-0 md:pt-16 sm:pt-5">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="ProfilePic"
                className="w-full h-auto  md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi, 🖐I’m "
                className="text-left text-xl sm:text-[16px] lg:text-center"
              />
              <AnimatedText
                text="Muhammad Hammad"
                className="text-left text-3xl xl:text-2xl md:text-xl sm:text-[16px] lg:text-center"
              />
              <TypeWriter
                phrases={[
                  "MERN  Developer",
                  "React.Js Developer",
                  "Node.Js Developer",
                  "Next.Js Developer",
                ]}
                className="text-6xl text-left xl:text-5xl lg:text-5xl 2xl:text-[58px] lg:text-center md:text-4xl  sm:text-3xl"
              />
              <AnimatedText
                text="As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development."
                className="my-4 text-base font-medium md:text-sm sm:text-xs text-white text-start"
              />
              <Buttons />
            </div>
          </div>
          <HireMe />
        </Layout>
      </main>
    </>
  );
}
