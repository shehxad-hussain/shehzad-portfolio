/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
   
    container:{
      padding:{
        default:'15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    extend: {
      colors:{
        primary:'#0a0a0a',
        accent:'#b809c3',
      },
      backgroundImage:{
        site:"url('./assets/site-bg.jpg')",
        services:"url('./assets/services.png')"
      },
    },
  },
  plugins: [],
}