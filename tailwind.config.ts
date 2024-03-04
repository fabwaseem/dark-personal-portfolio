import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["app/**/*.{css,ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        accent: "hsl(var(--accent))",
        grey: {
          1: "hsl(var(--grey-1))",
          2: "hsl(var(--grey-2))",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
