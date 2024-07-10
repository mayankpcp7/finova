/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "luxor-gold": "#AA832F",
        "moon-mist": "#E2DDCB",
        cloud: "#C4C4C5",
        "gun-metal": "#313338",
        "section-border": "#ffffff1a",
        "wood-gray": "#6C6C6D",
        "yellowish-orange": "#C89E43",
        parchment: "#FFFBAD",
        "primary-black": "#00000050",
        "heavy-metal": "#2b2925",
      },
      fontSize: {
        "custom-sm": "13px",
        "custom-md": "22px",
        "custom-lg": "26px",
        "custom-2xl": "35px",
        "custom-4xl": "41px",
        "custom-5xl": "47px",
        "custom-6xl": "55px",
      },
      lineHeight: {
        110: "110%",
        126: "126%",
      },
    },
  },
  plugins: [],
};
