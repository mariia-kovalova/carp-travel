import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '743.98px' },
      mdOnly: { min: '744px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          sm: '20px',
          md: '32px',
          xl: '24px',
        },
      },
      // FONTS
      fontFamily: {
        inter: ['var(--font-inter)'],
        katarina: ['var(--font-katarina)'],
      },
      colors: {
        error: '#ff5757',
        fallback: '#396366',
        grey: '#010A05',
      },
    },
  },
  plugins: [],
};

export default config;
