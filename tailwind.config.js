/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-text': '#44A0FF',
        'green-text': '#62D134',
      },
      animation:{
"loop-scroll":"loop-scroll 10s linear infinite"
      },
keyframes:{
"loop-scroll":{
  from:{transform:"translateX(0)"},
  to:{transform:"translateX(-100%)"}
}
},
      variants: {
        extend: {
          backgroundClip: ['hover', 'focus'],
        },
      },
    },
  },
  plugins: [],
}