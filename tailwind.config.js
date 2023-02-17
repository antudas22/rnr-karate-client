/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  daisyui:{
    themes: [
      {
        rnrtheme:{
          primary: '#26c6da',
          'accent-content': 'black',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
],
}
