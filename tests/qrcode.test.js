import test from 'node:test';
import assert from 'node:assert/strict';
import { generateQrCodeSvg } from '../src/utils/qrcode.js';

test('QR Code Utility: generates valid SVG for URL string', () => {
  const testUrl = 'https://instagram.com/bloco.batucaki';
  const svg = generateQrCodeSvg(testUrl, { size: 200, color: '#000000', bgColor: '#ffffff' });

  assert.ok(svg.includes('<svg'), 'Output must be an SVG element');
  assert.ok(svg.includes('viewBox='), 'SVG must contain viewBox attribute');
  assert.ok(svg.includes('</svg>'), 'SVG must close properly');
  assert.ok(svg.includes('<rect') || svg.includes('<path'), 'SVG must contain geometric shapes for QR modules');
});
