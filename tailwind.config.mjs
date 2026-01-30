/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D96541',
          hover: '#c44e2e',
          light: '#e8754f',
        },
        secondary: {
          DEFAULT: '#2D3789',
          hover: '#1f2560',
          light: '#3f4ba3',
        },
      }
    },
  },
  plugins: [],
};
