import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/custom/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/design-systems/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/auth/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: "class",
  plugins: [
    heroui({
      defaultTheme: "light", // default theme from the themes object
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FFEEF2",
              100: "#FFDDE6",
              200: "#FFBBCC",
              300: "#FF98B3",
              400: "#FF7699",
              500: "#FF5480",
              600: "#D54369",
              700: "#AA3251",
              800: "#80223A",
              900: "#551122",
              foreground: "#FFFFFF",
              DEFAULT: "#ff5480",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
