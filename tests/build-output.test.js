import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Build Output: dist directory contains production assets', () => {
  const distPath = path.join(rootDir, 'dist');
  assert.ok(fs.existsSync(distPath), 'dist directory must exist after build');

  const distHtmlPath = path.join(distPath, 'index.html');
  assert.ok(fs.existsSync(distHtmlPath), 'dist/index.html must exist');

  const htmlContent = fs.readFileSync(distHtmlPath, 'utf8');
  assert.ok(htmlContent.includes('Tupi em Consciência'), 'dist/index.html must contain project title');

  // Verify assets directory
  const assetsDir = path.join(distPath, 'assets');
  assert.ok(fs.existsSync(assetsDir), 'dist/assets directory must exist');

  const assetFiles = fs.readdirSync(assetsDir);
  assert.ok(assetFiles.some(f => f.endsWith('.css')), 'dist/assets must contain compiled CSS');
  assert.ok(assetFiles.some(f => f.endsWith('.js')), 'dist/assets must contain compiled JS');

  // Verify images directory copied over
  const imagesDir = path.join(distPath, 'images', 'batucaki');
  assert.ok(fs.existsSync(imagesDir), 'dist/images/batucaki must exist');
});
