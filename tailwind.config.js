/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
         "gold-btn": "linear-gradient(180deg, #AA832F 0%, #795302 100%)",
        "brown-gradient":"linear-gradient(180deg, #AA832F 0%, #795302 100%)",
        "white-gradient":"linear-gradient(327.64deg, rgba(170, 131, 47, 0.04) 0%, rgba(170, 131, 47, 0.06) 100%)",
        "brown-black-gradient":"radial-gradient(110.97% 56.01% at 50% 50%, #7D5706 0%, #A67F2C 65.95%, #E7B549 93.45%)",
      },
      screens: {
        xs:"420px"
      },
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
        125: "125%",
        126: "126%",
      },
      boxShadow: {
        progress: "0px 4px 4px 0px #B8C37773",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
            200: "200px",
        10: "10px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}