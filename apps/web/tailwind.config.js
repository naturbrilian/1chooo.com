/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'jet': 'hsl(0, 0%, 22%)',
        'onyx': 'hsl(240, 1%, 17%)',
        'eerie-black-1': 'hsl(240, 2%, 13%)',
        'eerie-black-2': 'hsl(240, 2%, 12%)',
        'smoky-black': 'hsl(0, 0%, 7%)',
        'white-1': 'hsl(0, 0%, 100%)',
        'white-2': 'hsl(0, 0%, 98%)',
        'orange-yellow-crayola': 'hsl(45, 100%, 72%)',
        'orange-yellow-crayola-dark': 'hsl(45, 100%, 10%)',
        'vegas-gold': 'hsl(45, 54%, 58%)',
        'light-gray': 'hsl(0, 0%, 84%)',
        'light-gray-70': 'hsla(0, 0%, 84%, 0.7)',
        'bittersweet-shimmer': 'hsl(0, 43%, 51%)',
      },
      backgroundImage: {
        'gradient-onyx': 'linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)',
        'gradient-jet': 'linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)',
        'gradient-yellow-1': 'linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)',
        'gradient-yellow-2': 'linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)',
        'border-gradient-onyx': 'linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)',
        'text-gradient-yellow': 'linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "shiny-text": "shiny-text 8s infinite",
        gradient: "gradient 8s linear infinite",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
// https://ui.shadcn.com/docs/installation/manual