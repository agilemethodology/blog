import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';  // Import the MDX integration
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agilemethodology.github.io/latest',
  integrations: [
    mdx(),        // Enable the MDX integration
    sitemap(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',  // Syntax highlighting theme
      wrap: true          // Enable wrapping for long code lines
    }
  }
});
