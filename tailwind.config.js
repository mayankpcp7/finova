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
        "off-black": "#0A0A0B",
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
        "dark-gold": "#11100D",
        "dark-border": "#2A2825",
      },
      fontSize: {
        md: "18px",
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
        125: "125%",
        126: "126%",
      },
      boxShadow: {
        progress: "0px 4px 4px 0px #B8C37773",
      },
      backgroundImage: {
        "gold-btn": "linear-gradient(180deg, #AA832F 0%, #795302 100%)",
      },
      borderRadius: {
        200: "200px",
        10: "10px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
