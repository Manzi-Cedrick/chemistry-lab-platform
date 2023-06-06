/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: "#0A5DAB"
      },
      backgroundImage: {
        'gradient2' : 'linear-gradient(94.71deg, #38EF7D -6.04%, #11998E 100%)',
        'gradient1' : 'linear-gradient(94.71deg, #00B6DE -6.04%, #0A4EFF 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
