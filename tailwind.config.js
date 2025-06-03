/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lemonchiffon: 'lemonchiffon',
        wellDone: "#CAF0F8",
        mediumWell: "#90E0EF",
        error: "#ffa9b5",
        rareMedium: "#3d77f5",
        rare: "#03045E",
        medium: "#00B4D8",
        favSearchBg: "#fdfdfd",
        mediumRare: "#0077B6",
        efefef: "#efefef",
        // Colors for form checkboxes from turquoiseYellow theme
        tyRareMedium: "#05668d", // for props.color = #05668d
        tyMediumWell: "#f7d6e0", // for props.color = #f7d6e0
        tyWellDone: "#faf3dd",   // for props.color = #faf3dd
        formInputBg: "#CAF0F8", // alias for wellDone, used in inputs
        formInputBorder: 'lemonchiffon', // alias for solt, used in inputs
        formInputFocusBorder: "#90E0EF", // alias for mediumWell, used in inputs
      },
      textShadow: { // Added for logo text shadow
        'logo': '2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)',
      },
      boxShadow: {
        logoHeader: "2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)",
      },
      keyframes: {
        swipeS: {
          '0%': { transform: 'translateX(0)' },
          '45%': { transform: 'translateX(-52%)' },
          '50%': { transform: 'translateX(-52%)' },
          '100%': { transform: 'translateX(0)' },
        },
        swipeM: {
          '0%': { transform: 'translateX(0)' },
          '45%': { transform: 'translateX(-17%)' },
          '50%': { transform: 'translateX(-17%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        swipeS: 'swipeS 5s linear 2s 1',
        swipeM: 'swipeM 3s linear 2s 1',
      },
    },
    screens: {
      'sm': '320px',
      'mobileM': '375px',
      'mobileXL': '572px',
      'md': '768px',    // This was tablet
      'lg': '1024px',   // This was laptop
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-logo': {
          textShadow: theme('textShadow.logo'),
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
