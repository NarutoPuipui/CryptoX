/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('./src/assets/bitcoin3.jpeg')",
        'hero-pattern2': "url('./src/assets/bitcoin2.jpeg')",
        'hero-pattern3': "url('./src/assets/bitcoin4.jpeg')",
        'hero-pattern4': "url('https://wallpapers.com/images/hd/red-and-black-geometric-backgrounds-bsd1p92h45xyb4r1.jpg')",
      },
      

      keyframes:{
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20%) translateY(-100%)' },
          '100%': { transform: 'translateX(0) translateY(0)' },
        },
        glow: {
          '0%, 100%': { borderColor: '#FF0000'}, // Red border color
          '50%': { borderColor: '#FF4500' }, // Brighter orange-red color
        },
        
        lighting: {
          '0%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000',
          },
          '50%': {
            textShadow: '0 0 10px #ff0000, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000, 0 0 40px #ff0000',
          },
          '100%': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff0000, 0 0 20px #ff0000, 0 0 25px #ff0000, 0 0 30px #ff0000, 0 0 35px #ff0000',
          },
        },
        
        lightRun: {
          '0%': { 'box-shadow': 'none' },
          '50%': { 'box-shadow': '0 2px 10px 2px red' },
          '100%': { 'box-shadow': 'none' },
        },
      },

      animation:{        
        fadeIn: 'fadeIn 1s ease-out',
        slideIn: 'slideIn 1s ease-out',
        lighting: 'lighting 10s ease-out infinite',
        glow: 'glow 2s infinite',
        lightrun: 'lightRun 4s linear infinite',
      }
      
    },
  },
  plugins: [],
}