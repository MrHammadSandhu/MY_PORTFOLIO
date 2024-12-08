"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { About, Contact, Home, Project, Services } from "./Icons";

export const navData = [
  { name: "Home", path: "/", icon: <Home /> },
  { name: "About", path: "/about", icon: <About /> },
  { name: "Projects", path: "/projects", icon: <Project /> },
  { name: "Articles", path: "/articles", icon: <Services /> },
  { name: "Contact", path: "/contact", icon: <Contact /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center gap-y-4 fixed   right-[2%] z-50 top-1/2 -translate-y-1/2 w-14  md:w-full md:right-0 md:justify-end md:top-auto md:bottom-0 md:translate-y-0">
      <div className="w-full flex items-center justify-around rounded-full py-12 text-xl gap-y-8 px-0 md:py-5 bg-dark/80  flex-col md:flex-row md:rounded-none">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && "text-accent"}
              relative flex items-center group hover:text-accent translation-all duration-300`}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14 right-0 hidden group-hover:flex">
                <div className="bg-white relative flex text-dark items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2
                  "
                  ></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
