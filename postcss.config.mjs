/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},   // ✅ Correct Tailwind v4 PostCSS plugin
    autoprefixer: {},             // Optional, but good to have
  },
};

export default config;
