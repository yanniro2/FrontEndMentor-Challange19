/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "Mobile": { "min": "375px", "max": "600px" },
    },
    colors: {
      // Primary
      "Linear-gradient-1": "hsl(249, 99%, 64%)",
      "Linear-gradient-2": "hsl(278, 94%, 30%)",
      "Red": "hsl(0, 100%, 66%)",

      // Neutral
      "White": "hsl(0, 0%, 100%)",
      "Light-grayish-violet": "hsl(270, 3%, 87%)",
      "Dark-grayish-violet": "hsl(279, 6%, 55%)",
      "Very-dark-violet": "hsl(278, 68%, 11%)",
    },
    fontSize: {
      "ms": "18px",
    },
    fontFamily: {
      Space: ["Space Grotesk", "sans-serif"],
    },
    fontWeight: {
      ms: 500
    },
    extend: {},
  },
  plugins: [],
}
