import type { Config } from 'tailwindcss'

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        verdeClaro: '#3BAE2A',
        verdeEscuro: '#0B4337',
        branco: '#FFFCFF',
        preto: '#233138',
        cinza: '#E3E3E3',
      },
      screens: {
        '440': '440px',
        '640': '640px',
        '768': '768px',
        '880': '880px',
        '1024': '1024px',
        '1280': '1280px',
        '1536': '1536px',
        '1920': '1920px',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
