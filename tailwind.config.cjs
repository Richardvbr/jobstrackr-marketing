/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: ['btn-primary', 'btn-secondary', 'transition'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      inter: 'Inter, sans-serif',
      satoshi: 'Satoshi, sans-serif',
    },
    borderWidth: {
      DEFAULT: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
    },
    extend: {
      width: {
        '7xl': '77rem',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
        'spin-slow-reverse': 'spin 6s linear infinite reverse',
      },
      colors: {
        primary: '#e9e5dd',
        secondary: '#1e1e1e',
        white: '#fff',
        black: '#0d0d0d',
        'gray-accent': '#dadada',
        'border-light': '#b2b2b2',
      },
    },
  },
  plugins: [],
};
