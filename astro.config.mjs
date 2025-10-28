import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

// ⚙️ Configuración para GitHub Pages
const repo = "deployarCon-Astro";

export default defineConfig({
  vite: {
    plugins: [tailwind()],
  },
  site: `https://atlas1981.github.io/${repo}/`,
  base: `/${repo}/`,
  outDir: "dist", // carpeta donde Astro genera el sitio
});
