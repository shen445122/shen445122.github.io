export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        paper: '#f6f1e8',
        ink: '#16181d',
        muted: '#666f7a',
        line: '#ddd4c6',
        accent: '#1f3f75',
        accentSoft: '#d9e3f5',
        card: '#fbf8f2'
      },
      fontFamily: {
        sans: ['"Inter"', '"SF Pro Display"', '"Segoe UI"', 'system-ui', 'sans-serif'],
        serif: ['"Iowan Old Style"', '"Palatino Linotype"', '"Book Antiqua"', 'Georgia', 'serif']
      },
      boxShadow: {
        editorial: '0 16px 40px -26px rgba(22, 24, 29, 0.28)'
      },
      maxWidth: {
        reading: '72ch'
      }
    }
  },
  plugins: []
};
