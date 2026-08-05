import { defineConfig } from 'astro/config';
// import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
// import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), react()],
  output: 'server',
  // adapter: netlify(),
  adapter: vercel(),
  devToolbar: {
    enabled: false
  }
});

