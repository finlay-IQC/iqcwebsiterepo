import type { Config } from "tailwindcss";

/**
 * Design tokens for The IQ Collective.
 * These are the single source of truth for colour and type — do not hardcode
 * hex values in components. The matching CSS custom properties are declared in
 * app/globals.css for the handful of places that need raw CSS (masks,
 * gradients, ::before content colours).
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#15181A", // --ink        primary background
          2: "#1B1F22", // --ink-2      card / panel background
        },
        paper: {
          DEFAULT: "#EEE9E0", // --paper      primary text on dark
          dim: "#B9B4A9", // --paper-dim  secondary / muted text
        },
        bronze: {
          DEFAULT: "#A9814C", // --bronze     primary accent
          dim: "#8A6B3F", // --bronze-dim
          hover: "#BE9459", // primary CTA hover fill (from design reference)
        },
        slate: {
          DEFAULT: "#3B5166", // --slate      reserved secondary/technical accent
        },
        redline: {
          DEFAULT: "#C1502E", // --redline    signature marking accent — use sparingly
        },
        hair: {
          DEFAULT: "rgba(238,233,224,0.10)", // --hair        hairline dividers
          strong: "rgba(238,233,224,0.18)", // --hair-strong borders, active dividers
        },
      },
      borderColor: {
        DEFAULT: "rgba(238,233,224,0.10)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      screens: {
        // Breakpoints mirrored 1:1 from the approved design reference (which
        // expresses them as max-width queries) so the stacking behaviour is
        // identical to the HTML prototype. Named by pixel value to keep the
        // mapping obvious; used mobile-first (min-width) here.
        w600: "600px",
        w640: "640px",
        w720: "720px",
        w800: "800px",
        w820: "820px",
        w860: "860px",
      },
    },
  },
  plugins: [],
};

export default config;
