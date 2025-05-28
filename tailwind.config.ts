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
        // Your Clean Queen Brand Colors
        teal: {
          DEFAULT: '#008080', // Primary brand teal (matches Teal's name!)
          light: '#007791',
          dark: '#006666',
        },
        clean: {
          white: '#FFFFFF',
          grey: '#F4F4F4',
          'grey-light': '#E8E8E8',
        },
        accent: {
          silver: '#C0C0C0',
          gold: '#F0E68C',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;