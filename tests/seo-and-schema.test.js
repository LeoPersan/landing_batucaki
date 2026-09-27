import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('SEO & Schema.org: index.html contains Open Graph and Meta Tags', () => {
  const htmlPath = path.join(rootDir, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  assert.match(html, /<meta property="og:title"/, 'Must contain og:title');
  assert.match(html, /<meta property="og:description"/, 'Must contain og:description');
  assert.match(html, /<meta property="og:image"/, 'Must contain og:image');
  assert.match(html, /<meta property="og:type" content="website"/, 'Must contain og:type');
});

test('SEO & Schema.org: index.html contains valid Schema.org Event JSON-LD', () => {
  const htmlPath = path.join(rootDir, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  const schemaMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(schemaMatch, 'Must contain JSON-LD script block');

  const jsonLd = JSON.parse(schemaMatch[1]);
  assert.equal(jsonLd['@context'], 'https://schema.org');
  assert.equal(jsonLd['@type'], 'Event');
  assert.equal(jsonLd.name, 'Tupi em Consciência: Samba, Memória e Vozes Negras');
  assert.ok(jsonLd.startDate.startsWith('2026-11-20'), 'Start date must be 2026-11-20');
  assert.equal(jsonLd.location.address.addressLocality, 'Tupi Paulista');
  assert.equal(jsonLd.isAccessibleForFree, true, 'Must declare free entry');
});

test('Transparency & Technical Team: index.html includes official team members and PNAB credits', () => {
  const htmlPath = path.join(rootDir, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf8');

  assert.ok(html.includes('Leonardo Pereira dos Santos de Oliveira'), 'Must mention Leonardo Oliveira');
  assert.ok(html.includes('Clodoaldo Carvalho de Jesus'), 'Must mention Clodoaldo Carvalho');
  assert.ok(html.includes('Letícia Augusto Lima'), 'Must mention Letícia Augusto Lima');
  assert.ok(html.includes('Política Nacional Aldir Blanc') || html.includes('PNAB'), 'Must mention PNAB');
  assert.ok(html.includes('Prefeitura Municipal de Tupi Paulista'), 'Must mention Prefeitura de Tupi Paulista');
});
