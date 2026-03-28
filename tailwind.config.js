/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm cream base
        parchment:  '#FBF6EE',
        'parch-2':  '#F7F0E4',
        'parch-3':  '#F0E6D3',
        'parch-4':  '#E8D9C0',

        // Warm dark browns
        espresso:   '#2C1A0E',
        'brown-1':  '#3D2314',
        'brown-2':  '#4E2D1A',
        'brown-3':  '#5C3520',
        'brown-4':  '#7C4A28',

        // Terracotta accents
        terra:      '#C2410C',
        'terra-2':  '#9A3412',

        // Muted warm tones
        'warm-gray': '#8C7B6B',
        'warm-gray-2': '#A8957F',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}