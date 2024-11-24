/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:'#B0AE38'
      },
      fontSize: {
        'xxs': '0.625rem', // equivalent to 10px
      },
      scrollBehavior: {
        smooth: 'smooth',
      }
    },
  },
  plugins: [],
};
