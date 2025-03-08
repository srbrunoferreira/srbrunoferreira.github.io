// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import astroIcon from 'astro-icon';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://srbrunoferreira.github.io',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [astroIcon(
    {
      include: {
        ph: ["*"],
      },
    }
  ), react(), sitemap()]
});