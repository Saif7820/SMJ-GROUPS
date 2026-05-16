/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",                
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        'shadow-pulse': {
          '0%, 100%': { boxShadow: '0 0 15px 5px rgba(212, 175, 55, 0.4)' },
          '50%': { boxShadow: '0 0 25px 10px rgba(212, 175, 55, 0.7)' },
        }
      },
      animation: {
        'shadow-pulse': 'shadow-pulse 2s infinite',
      }
    },
  },
}
