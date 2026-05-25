import fs from 'fs';
const pages = ["", "nosotros", "axia", "nova-core", "desarrollo", "cableado", "echo", "bpo", "pbx", "equipamiento", "privacidad", "terminos", "pua", "soporte", "alianzas"];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>https://f5networking.com/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;
fs.writeFileSync('dist/sitemap.xml', sitemap);
console.log('Sitemap generated successfully!');
