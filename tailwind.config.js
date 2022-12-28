module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Pinky: "#DC294F",
        Hitam: "#0F0305",
        Abu: "#D8D8D8",
      },
    },
  },
  plugins: [require("daisyui")],
};
