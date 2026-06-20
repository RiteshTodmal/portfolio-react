/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        bg: { DEFAULT: '#0a0e1a', soft: '#0f1424', light: '#f5f6fb' },
        surface: { DEFAULT: '#131a2e', 2: '#1a2238', lightDEFAULT: '#ffffff' },
        brand: { blue: '#3b82f6', violet: '#8b5cf6', teal: '#14b8a6', cyan: '#22d3ee' },
      },
      backgroundImage: {
        'grad-main': 'linear-gradient(135deg, #3b82f6, #8b5cf6 55%, #14b8a6)',
        'grad-text': 'linear-gradient(135deg, #60a5fa, #a78bfa 50%, #2dd4bf)',
      },
      animation: {
        blink: 'blink 1s steps(2) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: { '50%': { opacity: 0 } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
      },
    },
  },
  plugins: [],
}
