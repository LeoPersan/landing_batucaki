import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Design System: src/style.css defines Tailwind v4 and Google Fonts', () => {
  const cssPath = path.join(rootDir, 'src', 'style.css');
  assert.ok(fs.existsSync(cssPath), 'src/style.css must exist');

  const cssContent = fs.readFileSync(cssPath, 'utf8');
  assert.match(cssContent, /@import\s+["']tailwindcss["'];?/, 'src/style.css must import tailwindcss');
  assert.match(cssContent, /fonts\.googleapis\.com/, 'src/style.css must import Google Fonts');
  assert.match(cssContent, /Outfit/, 'src/style.css must include Outfit font');
  assert.match(cssContent, /Inter/, 'src/style.css must include Inter font');
});

test('Design System: src/style.css defines Batucaki color theme tokens and utility classes', () => {
  const cssPath = path.join(rootDir, 'src', 'style.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');

  assert.match(cssContent, /--color-batucaki-dark/, 'Theme must include --color-batucaki-dark');
  assert.match(cssContent, /--color-batucaki-card/, 'Theme must include --color-batucaki-card');
  assert.match(cssContent, /--color-batucaki-gold/, 'Theme must include --color-batucaki-gold');
  assert.match(cssContent, /--color-batucaki-red/, 'Theme must include --color-batucaki-red');
  assert.match(cssContent, /\.glass-panel/, 'Utilities must include .glass-panel');
  assert.match(cssContent, /\.gradient-gold-text/, 'Utilities must include .gradient-gold-text');
});
