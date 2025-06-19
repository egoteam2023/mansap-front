import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        burgerTopOpen: 'burgerTopOpen 1s ease-in-out forwards',
        burgerTopClose: 'burgerTopClose 1s ease-in-out forwards',
        burgerBottomOpen: 'burgerBottomOpen 1s ease-in-out forwards',
        burgerBottomClose: 'burgerBottomClose 1s ease-in-out forwards',
        leftHide: 'leftHide 1s ease-in-out forwards',
        leftShow: 'leftShow 1s ease-in-out forwards',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        header: '#111111',
        yellow: '#F8BE00',
        red: 'linear-gradient(261.42deg, #FF5353 -6.48%, #2F2F2F 101.92%)'
      },
      fontFamily: {
        manrope: ['var(--font-manrope)', 'sans-serif'],
        philosopher: ['var(--font-philosopher)', 'serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        md: '20px',
        xl: '24px',
        '2xl': '26px',
        '3xl': [
          '36px',
          {
            lineHeight: '1.2',
          },
        ],
        '4xl': [
          '48px',
          {
            lineHeight: '1.2',
          },
        ],
        '5xl': [
          '56px',
          {
            lineHeight: '1.4',
          },
        ],
        '6xl': [
          '62px',
          {
            lineHeight: '1.5',
          },
        ],
      },
      height: {
        custom460: '460px',
        custom200: '200px',
        'icon-sm': 'var(--icon-fontSize-sm)',
        'icon-md': 'var(--icon-fontSize-md)',
        'icon-lg': 'var(--icon-fontSize-lg)',
        'icon-xl': 'var(--icon-fontSize-xl)',
        'hero-sm': '550px',
        'hero-md': '600px',
        'hero-lg': '650px',
      },
      width: {
        custom300: '300px',
        custom400: '400px',
        custom500: '500px',
        custom600: '600px',
        custom200: '200px',
        'icon-sm': 'var(--icon-fontSize-sm)',
        'icon-md': 'var(--icon-fontSize-md)',
        'icon-lg': 'var(--icon-fontSize-lg)',
        'icon-xl': 'var(--icon-fontSize-xl)',
      },
      maxWidth: {
        custom600: '600px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%', // Полная ширина на маленьких экранах
          md: '100%', // Полная ширина на средних экранах
          lg: '1024px', // Ограничение на больших экранах
          xl: '1280px', // Ограничение на экстра-больших экранах
          '2xl': '1536px', // Ограничение на супер-больших экранах
        },
      },
    },
  },
  plugins: [],
}
export default config
