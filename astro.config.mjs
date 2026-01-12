// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import cloudflare from '@astrojs/cloudflare';
import db from '@astrojs/db';
import markdoc from '@astrojs/markdoc';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '$': fileURLToPath(new URL('./src/assets/', import.meta.url)),
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  integrations: [
    svelte(),
    db({
      mode: 'web',
    }),
    markdoc(),
    mdx(),
    partytown(),
    sitemap()
  ],
  adapter: cloudflare(),
});
