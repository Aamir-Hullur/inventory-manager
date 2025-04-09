import type { Config } from "tailwindcss";
// Remove tw-colors import if you are not using it for other features
// import { createThemes } from "tw-colors";
// Remove colors import if not needed elsewhere
// import colors from "tailwindcss/colors";

// Remove baseColors, shadeMapping, generateThemeObject, lightTheme, darkTheme, and themes constants

// Helper function to generate color shades referencing CSS variables
const generateColorShades = (name: string) => ({
  50: `var(--color-${name}-50)`,
  100: `var(--color-${name}-100)`,
  200: `var(--color-${name}-200)`,
  300: `var(--color-${name}-300)`,
  400: `var(--color-${name}-400)`,
  500: `var(--color-${name}-500)`,
  600: `var(--color-${name}-600)`,
  700: `var(--color-${name}-700)`,
  800: `var(--color-${name}-800)`,
  900: `var(--color-${name}-900)`,
  // Add 950 only if you consistently defined it for all colors in CSS
  // 950: `var(--color-${name}-950)`,
});


const config: Config = {
  darkMode: "class", // Keep this
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Extend colors to use CSS variables
      colors: {
        gray: generateColorShades("gray"),
        red: generateColorShades("red"),
        yellow: generateColorShades("yellow"),
        green: generateColorShades("green"),
        blue: generateColorShades("blue"),
        indigo: generateColorShades("indigo"),
        purple: generateColorShades("purple"),
        pink: generateColorShades("pink"),
        // Map semantic colors (optional but good practice)
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        // Map white/black if you want to use them via Tailwind classes like text-white
        white: 'var(--color-white)',
        black: 'var(--color-black)',
        // Add primary/secondary mappings if you defined them in CSS
        // primary: generateColorShades("primary"),
        // secondary: generateColorShades("secondary"),
      },
      backgroundImage: { // Keep existing extensions
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    // Remove createThemes(themes)
    // Add any other v4 compatible plugins here
  ],
};

export default config;