module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,scss}"],
  theme: {
    extend: {
      backgroundImage: {
        "auth-gradient":
          "linear-gradient(133.02deg, #001436 -0.17%, #002E7B 20.11%, #2A6BD6 62.62%, #26E7FB 113.95%)",
        "logo-gradient":
          "linear-gradient(108.44deg, #2A6BD6 41.98%, #26E7FB 87.07%)",
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inter: "Inter",
        poppins: "Poppins",
      },
      colors: {
        primary: {
          DEFAULT: "#2A6BD6",
          text: "#303132",
          border: "#CBD1D8",
          white: "#F5F8FA",
          disabled: "#808091",
        },
        secondary: {
          border: "#E5E7EB",
        },
        danger: {
          DEFAULT: "#FF220C",
        },
        warning: {
          DEFAULT: "#ED9902",
        },
        success: {
          DEFAULT: "#2E933C",
        },
        dark: {
          DEFAULT: "#020420",
        },
        highlight: {
          DEFAULT: "#EFF6FF",
          text: "#15366B",
        },
        offline: {
          gray: "#D9D9D9",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
