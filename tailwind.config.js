/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "primary-white": "#ffffff",
      "secondary-white": "#F5F5F5",
      "ternary-white": "#F1E9D2",
      "primary-black": "#000000",
      "secondary-black": "#1B1B1B",
      "ternary-black": "#666362",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "840px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "about-image": "url('/assets/person9.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
