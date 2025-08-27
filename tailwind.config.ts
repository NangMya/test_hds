// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Include the paths to your components and pages
  ],
  theme: {
    extend: {
      fontFamily: {
        graphik: ['Graphik-Regular', 'sans-serif'],
        lora: ['Lora-Regular', 'serif'],
      },
      colors: {
        border:'#C9C8C8',
        primary: "#932E52",
        primaryLight:'#FFCBE0',
        hr: "#E7E7E7",
        cartBg:'#F8F8F8',
        bg: '#EDF2F4',
        primaryTextColor: '#1E344F',
        textColor: '#18181B',
        desc:'#6C768A',
        secondaryBg:'#3A3A3C', //black
        second:'#F15A22', //orange
        third: '#552588', //purple
        fourth: '#326B62', //dark green
        fifth: '#B71E89',
        textLight: '#3F3B3B',
        dashboardBg: '#DEE5ED',

      },
    },
  },
  plugins: [],
};
