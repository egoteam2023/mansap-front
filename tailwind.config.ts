import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      container: {
        center: true,
        padding: '1rem',
      },
      fontSize: {
        xs: '11px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        md: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '30px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
export default config
