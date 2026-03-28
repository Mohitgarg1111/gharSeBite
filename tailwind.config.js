/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark premium palette
        obsidian:  '#0C0A08',
        'dark-1':  '#111009',
        'dark-2':  '#18150F',
        'dark-3':  '#221E16',
        'dark-4':  '#2D2820',
        cream:     '#FAF7F2',
        'cream-2': '#F5EDD8',
        charcoal:  '#1C1917',
        'dark-brown': '#292524',
        // Accent
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '8xl':  ['6rem',   { lineHeight: '1' }],
        '9xl':  ['7rem',   { lineHeight: '1' }],
        '10xl': ['8.5rem', { lineHeight: '0.95' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'border-dance': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'border-dance': 'border-dance 3s ease infinite',
      },
    },
  },
  plugins: [],
}