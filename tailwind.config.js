/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: { 
  "custom-gradient": `linear-gradient(158deg, rgba(0, 154, 132, 0) 42%, #D3222A),  
                      linear-gradient(184deg, rgba(0, 154, 132, 0.93), #009a84 59%),  
                      linear-gradient(187deg, #009a84, rgba(0, 154, 132, 0) 0%, rgba(0, 154, 132, 0.29) 0%, #006f63)`, 
},

    },
  },
  plugins: [require('daisyui'),],
};
