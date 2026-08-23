/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fafafa',
        secondary: '#1d1c20',
        accent: '#72ffff',
        'muted-foreground': '#cccccc',
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeUp: 'fadeUp 0.5s ease-in-out',
        gradient: 'gradient 15s ease infinite',
        lineAnimation: 'gradientAnimation 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '0%' },
        },
        gradientAnimation: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -200%' },
        },
      },
    },
  },
  plugins: [],
};
