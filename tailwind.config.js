/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1140px",
        '2xl': '1140px'
      },
    },
    extend: {
      colors: {
        "tory-blue": "#0046AD",
        "congress-blue": '#023DA0',
        "davy-grey": "#525252"
      },
      fontSize: {
        "custom-xs": '13px',
        "custom-xl": "22px",
        "custom-4xl": '61px'
      },
      backgroundImage: {
        "hero-bg": "url('../public/assets/images/webp/hero-background.webp')"
      },
      backgroundSize: {
        "size": "100% 850px"
      },
      lineHeight: {
        "custom-xl": "115%",
        "custom-2xl": "136%"
      },
    },
  },
  plugins: [],
}