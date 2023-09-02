import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      desktop: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        mobile: '20px',
        tablet: '32px',
        desktop: '24px',
      },
    },
    extend: {
      colors: {
        error: '#ff5757',
        'fall-back': '#396366',
        'dark-gray': 'rgba(1, 10, 5, 0.75)',
        'transparent-white-light-accent': 'rgba(255, 255, 255, 0.20)',
        'transparent-white-light': 'rgba(255, 255, 255, 0.10)',
        'transparent-white-dark': 'rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
