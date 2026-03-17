// @ts-check
import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  integrations: [solid(), icon()],
  vite: {
    plugins: [tailwindcss()]
  }
});
