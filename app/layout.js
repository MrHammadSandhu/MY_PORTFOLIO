import "./globals.css";
import { Montserrat } from "next/font/google";
import Nav from "@/components/Sidebar";
import SocialsContainer from "@/components/Topbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Mr Hammad | Full Stack Web Developer - MERN Stack Specialist",
  description:
    "Explore the portfolio of Muhammad Hammad , a skilled Full Stack Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Discover projects, skills, and services tailored to build modern, scalable, and efficient web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} w-full min-h-screen `}>
        <SocialsContainer />
        <Nav />
        {children}
      </body>
    </html>
  );
}
