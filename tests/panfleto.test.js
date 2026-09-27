import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Panfleto A5: panfleto.html exists and contains two A5 pages (Frente e Verso)', () => {
  const panfletoPath = path.join(rootDir, 'panfleto.html');
  assert.ok(fs.existsSync(panfletoPath), 'panfleto.html must exist');

  const content = fs.readFileSync(panfletoPath, 'utf8');
  const a5Pages = content.match(/<article[\s\S]*?class="[^"]*a5-page[^"]*"[\s\S]*?<\/article>/g);
  assert.ok(a5Pages && a5Pages.length === 2, 'Must contain exactly 2 A5 pages (Frente e Verso)');
});

test('Panfleto A5: contains all essential event data and speakers', () => {
  const panfletoPath = path.join(rootDir, 'panfleto.html');
  const content = fs.readFileSync(panfletoPath, 'utf8');

  assert.ok(content.includes('Tupi em Consciência'), 'Must contain event title');
  assert.ok(content.includes('20 de Novembro'), 'Must contain event date');
  assert.ok(content.includes('Praça Dr. Ilton da Costa Oliveira'), 'Must contain location');
  assert.ok(content.includes('Dr. Ricardo Reis'), 'Must contain Ricardo Reis');
  assert.ok(content.includes('Profª Deocélia Souza'), 'Must contain Deocelia Souza');
  assert.ok(content.includes('Mestre Jabá'), 'Must contain Mestre Jaba');
  assert.ok(content.includes('OFICINAS GRATUITAS DE PERCUSSÃO'), 'Must mention free workshops');
  assert.ok(content.includes('AABB de Dracena'), 'Must mention AABB location');
  assert.ok(content.includes('qrCodeEventSvg'), 'Must bind event QR code');
  assert.ok(content.includes('qrCodeInstagramSvg'), 'Must bind Instagram QR code');
});

test('Panfleto A5: src/style.css defines A5 print dimensions', () => {
  const cssPath = path.join(rootDir, 'src', 'style.css');
  const css = fs.readFileSync(cssPath, 'utf8');

  assert.ok(css.includes('148mm'), 'Must declare 148mm width');
  assert.ok(css.includes('210mm'), 'Must declare 210mm height');
  assert.ok(css.includes('@media print'), 'Must contain @media print');
  assert.ok(css.includes('.no-print'), 'Must define .no-print utility');
});
