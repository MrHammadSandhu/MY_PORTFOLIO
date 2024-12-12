/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        secondary: "#007aff", // 80,230,217
        bgDark: "rgba(79, 79, 79)",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        wave: "wave 1s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
          "75%": { transform: "rotate(-15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      backgroundImage: {
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 130px)",

        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 80px)",
        circularDarkXl:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 80px)",
        circularDark2Xl:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 80px)",

        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 40px)",

        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 7px, rgba(27,27,27,0) 10px, rgba(27,27,27,0) 20px)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
