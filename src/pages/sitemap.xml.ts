// sitemap.xml generata dalle pagine del sito (home + una pagina per progetto)
import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

export const GET: APIRoute = ({ site }) => {
  const urls = ['/', ...projects.map((p) => `/projects/${p.slug}/`)].map((u) => `  <url><loc>${new URL(u, site).href}</loc></url>`);
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`, { headers: { 'Content-Type': 'application/xml' } });
};
