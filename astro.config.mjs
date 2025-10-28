// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://atllas1981.github.io/deployarCon-Astro/', // URL completa del sitio
  base: '/deployarCon-Astro/', // nombre exacto del repositorio
  vite: {
    plugins: [tailwindcss()],
  },
});
