import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Moments Resto Cafe & Lounge — brand tokens
        espresso: "#1B1714",   // primary background — deep charcoal-espresso
        panel: "#241D18",      // slightly raised panel background
        cream: "#F4ECDE",      // primary text on dark
        sand: "#B8AA95",       // muted secondary text
        gold: "#C79A4B",       // antique gold accent (candlelight)
        wine: "#6E2430",       // deep wine/burgundy accent
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
        script: ["var(--font-instrument)", "serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -3%) scale(1.05)" },
        },
        drift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 2%) scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        drift: "drift 14s ease-in-out infinite",
        drift2: "drift2 18s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
