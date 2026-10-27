// Sito statico: Astro genera le pagine in dist/, GitHub Pages le pubblica (workflow in .github/workflows/deploy.yml).
// Quando il dominio matteomarrale.com è attivo: site = 'https://matteomarrale.com' e file public/CNAME.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://matteomarrale.github.io',
  trailingSlash: 'always',
});
