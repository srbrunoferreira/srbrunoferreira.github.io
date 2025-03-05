// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import astroIcon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://brunoferreira.github.io',
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
  ), react()]
});
