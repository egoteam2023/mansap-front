import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        'hero-sm': '550px',
        'hero-md': '600px',
        'hero-lg': '650px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',    // Полная ширина на маленьких экранах
          md: '100%',    // Полная ширина на средних экранах
          lg: '1024px',  // Ограничение на больших экранах
          xl: '1280px',  // Ограничение на экстра-больших экранах
          '2xl': '1536px', // Ограничение на супер-больших экранах
        },
      }
    },
  },
  plugins: [],
};
export default config;
