/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `linear-gradient(158deg, rgba(19, 156, 216, 0) 42%, #fbc44c), 
                           linear-gradient(184deg, rgba(19, 156, 216, 0.93), #139cd8 59%), 
                           linear-gradient(187deg, #18b9ff, rgba(19, 156, 216, 0) 0%, rgba(19, 156, 216, 0.29) 0%, #007cb2)`,
      },
    },
  },
  plugins: [],
};
