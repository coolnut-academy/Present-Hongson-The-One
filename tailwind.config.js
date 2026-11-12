/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#050505',
        surface: '#0D0D0F',
        elevated: '#141417',
        silver: {
          DEFAULT: '#86868B',
          muted: '#535359',
          light: '#A1A1A6',
        },
        signal: {
          emerald: '#00E599',
          cyan: '#40D9FF',
        },
        hairline: 'rgba(255, 255, 255, 0.08)',
        specular: 'rgba(255, 255, 255, 0.20)',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.035em',
        widest: '0.18em',
      },
    },
  },
  plugins: [],
}
