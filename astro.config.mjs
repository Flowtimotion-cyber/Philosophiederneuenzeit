import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// BASE_PATH erlaubt eine Vorschau unter github.io/philosophiederneuenzeit/,
// solange die Domain noch bei Jimdo liegt. Für die Live-Domain bleibt sie leer.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.philosophiederneuenzeit.de',
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
