import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwindcss()],
  output: 'static',
  base: '/fallback',
  outDir: 'dist/fallback',

  vite: {
    plugins: [tailwindcss()]
  }
});