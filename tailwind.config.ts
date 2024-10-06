import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'lavender-dream': {
          '0%': {
            background: 'linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 100%',
          },
          '50%': {
            background: 'linear-gradient(-90deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)',
            backgroundSize: '200% 200%',
            backgroundPosition: '100% 0%',
          },
          '100%': {
            background: 'linear-gradient(-45deg, #a96dc5, #8f7fc7, #7091c8, #49a3c9)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 100%',
          },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'lavender-dream': 'lavender-dream 5s ease infinite',
      },
      fontSize: {
        sm: 'clamp(12.8px, 0.03vi + 12.67px, 13.5px)',
        base: 'clamp(16px, 0.09vi + 15.63px, 18px)',
        md: 'clamp(20px, 0.18vi + 19.26px, 23.99px)',
        lg: 'clamp(25px, 0.32vi + 23.71px, 31.98px)',
        xl: 'clamp(31.25px, 0.53vi + 29.14px, 42.63px)',
        '2xl': 'clamp(39.06px, 0.82vi + 35.77px, 56.83px)',
        '3xl': 'clamp(48.83px, 1.25vi + 43.84px, 75.76px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
