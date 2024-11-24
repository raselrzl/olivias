/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust content paths based on your project structure
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}', // You might not need this if your pages are inside 'src'
    './components/**/*.{js,ts,jsx,tsx}', // Same for this if inside 'src'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B0AE38',
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
