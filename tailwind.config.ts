import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          500: '#6C5CE7'
        },
        cyan: {
          400: '#00D2FF'
        },
        coral: '#FF7A59',
        sunshine: '#FFD166',
        midnight: '#0B1021',
        surface: '#F7F8FC',
        textDark: '#0F172A',
        textLight: '#E6E8F2'
      },
      fontFamily: {
        display: ['"Sora"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', '"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      borderRadius: {
        xs: '0.5rem',
        md: '1rem',
        xl: '2rem'
      },
      boxShadow: {
        xs: '0 1px 2px rgba(12, 23, 46, 0.08)',
        sm: '0 4px 16px rgba(12, 23, 46, 0.12)',
        md: '0 12px 32px rgba(12, 23, 46, 0.16)',
        lg: '0 24px 60px rgba(12, 23, 46, 0.24)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: 0.8 },
          '50%': { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};

export default config;
