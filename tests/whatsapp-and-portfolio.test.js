import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildWhatsAppUrl } from '../src/utils/whatsapp.js';
import { timelineEvents, timelineCategories } from '../src/data/timelineData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('WhatsApp Utility: buildWhatsAppUrl cleans phone number and encodes message', () => {
  const phone = '(18) 99799-8362';
  const message = 'Olá! Gostaria de participar das aulas gratuitas de percussão do Batucaki.';
  const url = buildWhatsAppUrl(phone, message);

  assert.ok(url.startsWith('https://wa.me/5518997998362'), 'Should format clean international Brazilian number');
  assert.ok(url.includes('text='), 'Should have text query param');
  assert.ok(url.includes(encodeURIComponent('aulas gratuitas')), 'Should properly encode message');
});

test('Portfolio Data: timelineEvents has valid items with local image files', () => {
  assert.ok(timelineEvents.length >= 12, 'Should have at least 12 documented historical events');
  assert.ok(timelineCategories.length >= 4, 'Should have category filters');

  for (const event of timelineEvents) {
    assert.ok(event.id, 'Event must have id');
    assert.ok(event.title, 'Event must have title');
    assert.ok(event.date, 'Event must have date');
    assert.ok(event.category, 'Event must have category');
    assert.ok(event.image, 'Event must have image path');

    // Check if the local image file physically exists in public/
    const imagePath = path.join(rootDir, 'public', event.image);
    assert.ok(fs.existsSync(imagePath), `Local image must exist on disk: ${imagePath}`);
    const stats = fs.statSync(imagePath);
    assert.ok(stats.size > 1000, `Image ${event.image} must be a valid non-empty file (> 1KB)`);
  }
});

test('Landing Page: contains rich ritmistas imagery and Lightbox modal', () => {
  const indexPath = path.join(rootDir, 'index.html');
  const content = fs.readFileSync(indexPath, 'utf8');

  // Verify hero showcase images
  assert.ok(content.includes('corrida_oab_ritmistas_acao.webp'), 'Must include corrida_oab_ritmistas_acao in index.html');
  assert.ok(content.includes('carnaval_praca_alegria.jpg'), 'Must include carnaval_praca_alegria in index.html');
  assert.ok(content.includes('aniversario_ritmista.webp'), 'Must include aniversario_ritmista in index.html');
  assert.ok(content.includes('futsal_lnf_dracena.webp'), 'Must include futsal_lnf_dracena in index.html');

  // Verify lightbox modal
  assert.ok(content.includes('modalOpen'), 'Must contain modalOpen Alpine state');
  assert.ok(content.includes('openModal'), 'Must contain openModal method trigger');
  assert.ok(content.includes('closeModal'), 'Must contain closeModal method trigger');
});
