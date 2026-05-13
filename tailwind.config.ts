import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EBF0",
          100: "#C5CDD9",
          200: "#8E9DB5",
          300: "#5B6E91",
          400: "#2D4470",
          500: "#0A1628",
          600: "#081220",
          700: "#060E18",
          800: "#040A10",
          900: "#020508",
        },
        orange: {
          DEFAULT: "#F97316",
          50: "#FEF3E8",
          100: "#FDE0C2",
          200: "#FBC08A",
          300: "#F99F52",
          400: "#F97316",
          500: "#EA6008",
          600: "#C24E06",
          700: "#9A3D05",
          800: "#722D03",
          900: "#4A1C02",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
