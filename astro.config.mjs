import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],

  // site: 'https://example.com' - esto lo vemos al final en que dominio queda publicada nuestra app
  site: 'https://lautaro-blog.netlify.app/'
});