module.exports = {
  purge: ['./src/*.{js,jsx,ts,tsx}','./src/pages/*.{js,jsx,ts,tsx}','./src/components/*.{js,jsx,ts,tsx}','./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#1010A3",
        secondary: "#D4ECF4",
        tertiary:"#1D879E"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
