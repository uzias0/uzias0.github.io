import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://uzias0.github.io',
    integrations: [tailwind()],
    });
    
