/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line

  theme: {
    extend: {
      backgroundImage: {
        "starry-night": "url('/assets/starry_night.jpg')",
      },
      fontSize: {
        h1: ["69px", { fontWeight: "700" }],
        h2: ["55px", { lineHeight: "47px", fontWeight: "700" }],
        h3: ["44px", { lineHeight: "40px", fontWeight: "700" }],
        h4: ["32px", { lineHeight: "34px", fontWeight: "700" }],
        body: ["18px", { lineHeight: "18px", fontWeight: "600" }],
        "h1-md": ["2.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h2-md": ["1.75rem", { lineHeight: "1.25", fontWeight: "600" }],
        "h3-md": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-md": ["0.9375rem", { lineHeight: "1.5", fontWeight: "400" }],
        "h1-sm": ["2rem", { lineHeight: "1.2", fontWeight: "700" }],
        "h2-sm": ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        "h3-sm": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
      },

      fontFamily: {
        Space_Grotesk: ["Space Grotesk", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Sfpro_display: ["SF Pro Display", "sans-serif"],
        PP_Mori: ["PP Mori", "sans-serif"],
      },
      backgroundColor: {
        "night-sky": "#000000",
      },

      colors: {
        // "night-sky": "#0a192f",

        primary: "#65D008",
        secondary: "#F5F7F9",
        light: "#f7f7f7",
        light_gray: "#97A3B7",
        light_purple: "#6B29FC",
        dark: "#000000",
        dark2: "#677489",
      },
      borderRadius: {
        "3xl": "3rem",
      },

      container: {
        width: "100%",
        center: true,
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          xxl: "80px",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "0rem",
          xl: "0rem",
          xxl: "0rem",
        },
      },
    },
  },
  plugins: [],
};
