import { MonsterDatabase } from "@/app/components/data/MonsterDatabase";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";



const BASE_URL = "https://novarangers.com";

type SitemapUrl = {
  url: string;
  lastModified?: string;
};

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function createUrlXml(entry: SitemapUrl): string {
  const lastModifiedXml = entry.lastModified
    ? `\n    <lastmod>${escapeXml(entry.lastModified)}</lastmod>`
    : "";

  return `  <url>
    <loc>${escapeXml(entry.url)}</loc>${lastModifiedXml}
  </url>`;
}

async function generateSitemap(): Promise<void> {
  const database = MonsterDatabase.getInstance();

  // Replace this with the actual method/property you already use
  // to retrieve the fully mapped Monster objects.
  const monsters = database.getAllMonsters();
  const abilities = database.getAllAbilities();
  const moves = database.getAllMoves();
  const types = database.getAllTypes();

  const staticPages: SitemapUrl[] = [
    { url: `${BASE_URL}/` },
    { url: `${BASE_URL}/monsters.html` },
    { url: `${BASE_URL}/moves.html` },
    { url: `${BASE_URL}/abilities.html` },
    { url: `${BASE_URL}/locations.html` },
    { url: `${BASE_URL}/items.html` },
  ];

  const monsterPages: SitemapUrl[] = monsters.map((monster) => ({
    url: `${BASE_URL}/monsters/${encodeURIComponent(
      monster.monsterKey
    )}.html`,
  }));

  const abilitiesPages: SitemapUrl[] = abilities.map((monster) => ({
    url: `${BASE_URL}/abilities/${encodeURIComponent(
      monster.key
    )}.html`,
  }));

  const typePages: SitemapUrl[] = types.map((monster) => ({
    url: `${BASE_URL}/types/${encodeURIComponent(
      monster.key
    )}.html`,
  }));

  const movesPages: SitemapUrl[] = moves.map((monster) => ({
    url: `${BASE_URL}/moves/${encodeURIComponent(
      monster.key
    )}.html`,
  }));

  

  const pages = [...staticPages, ...monsterPages, ...typePages, ...abilitiesPages, ...movesPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(createUrlXml).join("\n")}
</urlset>
`;

  const publicDirectory = path.join(process.cwd(), "public");
  const outputPath = path.join(publicDirectory, "sitemap.xml");

  await mkdir(publicDirectory, {
    recursive: true,
  });

  await writeFile(outputPath, xml, "utf8");

  console.log(`Generated sitemap.xml with ${pages.length} URLs.`);
  console.log(`Output: ${outputPath}`);
}

generateSitemap().catch((error: unknown) => {
  console.error("Failed to generate sitemap.xml:");

  if (error instanceof Error) {
    console.error(error.message);
    console.error(error.stack);
  } else {
    console.error(error);
  }

  process.exitCode = 1;
});