/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          cream: '#FDFAF4',
          beige: '#F5EDD8',
          charcoal: '#1C1917',
          'dark-brown': '#292524',
        },
        fontFamily: {
          display: ['Playfair Display', 'Georgia', 'serif'],
          body: ['DM Sans', 'sans-serif'],
        },
        boxShadow: {
          'card': '0 4px 24px -4px rgba(0,0,0,0.08), 0 2px 8px -2px rgba(0,0,0,0.04)',
          'card-hover': '0 16px 48px -8px rgba(0,0,0,0.14), 0 4px 16px -4px rgba(0,0,0,0.08)',
          'orange': '0 8px 24px -4px rgba(249,115,22,0.35)',
          'green': '0 8px 24px -4px rgba(34,197,94,0.3)',
        },
      },
    },
    plugins: [],
  }