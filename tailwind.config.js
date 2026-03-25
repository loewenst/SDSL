/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'game-blue':  '#418CCA',
        'game-dark':  '#0E2737',
        'game-gold':  '#E7AB43',
        'game-panel': '#424040',
      },
      fontFamily: {
        dosis:  ['Dosis', 'sans-serif'],
        sigmar: ['"Sigmar"', 'cursive'],
      },
      keyframes: {
        'bounce-scale': {
          '0%':   { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.18)' },
        },
        'fade-slide-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-scale':   'bounce-scale 0.85s ease-in-out infinite alternate',
        'fade-slide-up':  'fade-slide-up 0.28s ease-out',
      },
    },
  },
  plugins: [],
}
