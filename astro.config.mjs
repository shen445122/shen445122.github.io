import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shen445122.github.io',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static'
});
