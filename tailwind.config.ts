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
        "body-bg": "var(--body-background)",
        "body-bg-2": "var(--body-background-2)",
        "graph-bg": "var(--graph-background)",
        "nav-bg": "var(--navbar-background)",
        "pro-btn-bg": "var(--pro-btn-background)",
        "pro-btn-bg-hover": "var(--pro-btn-background-hover)",
        "sign-in-btn": "var(--sign-in-btn)",
      },
    },
  },
  plugins: [],
};
export default config;
