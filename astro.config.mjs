// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
// https://astro.build/config

export default defineConfig({
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },

  integrations: [sitemap()],

  site: 'https://cflmc.org/',
});