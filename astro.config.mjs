import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  // adapter: netlify(),
  adapter: vercel(),
  devToolbar: {
    enabled: false
  }
});

