/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#050A0E',
        base: '#0A1117',
        elevated: '#101B23',
        signal: {
          emerald: '#00D6A3',
          cyan: '#52CFE5',
          violet: '#9673E6',
        },
        headline: '#F5FAF8',
        secondary: '#A3B5B3',
        stroke: 'rgba(153, 203, 192, 0.18)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"IBM Plex Sans Thai"', 'Inter', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

