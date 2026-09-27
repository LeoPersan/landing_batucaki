import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

test('Environment & Setup: package.json has required dependencies and scripts', () => {
  const pkgPath = path.join(rootDir, 'package.json');
  assert.ok(fs.existsSync(pkgPath), 'package.json must exist');

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  assert.equal(pkg.type, 'module', 'package.json type should be module');
  assert.ok(pkg.scripts.build, 'build script must be present');
  assert.ok(pkg.scripts.dev, 'dev script must be present');
  assert.ok(pkg.scripts.test, 'test script must be present');

  assert.ok(pkg.dependencies?.alpinejs || pkg.devDependencies?.alpinejs, 'alpinejs must be installed');
  assert.ok(pkg.devDependencies?.['@tailwindcss/vite'], '@tailwindcss/vite must be installed');
  assert.ok(pkg.devDependencies?.tailwindcss, 'tailwindcss must be installed');
});

test('Environment & Setup: vite.config.js is properly configured with tailwindcss', () => {
  const viteConfigPath = path.join(rootDir, 'vite.config.js');
  assert.ok(fs.existsSync(viteConfigPath), 'vite.config.js must exist');

  const configContent = fs.readFileSync(viteConfigPath, 'utf8');
  assert.match(configContent, /@tailwindcss\/vite/, 'vite.config.js must import @tailwindcss/vite');
  assert.match(configContent, /tailwindcss\(\)/, 'vite.config.js must use tailwindcss plugin');
});

test('Environment & Setup: GitHub Actions workflow is present', () => {
  const workflowPath = path.join(rootDir, '.github', 'workflows', 'deploy.yml');
  assert.ok(fs.existsSync(workflowPath), '.github/workflows/deploy.yml must exist');

  const workflowContent = fs.readFileSync(workflowPath, 'utf8');
  assert.match(workflowContent, /npm run build/, 'Workflow must run npm run build');
  assert.match(workflowContent, /upload-pages-artifact/, 'Workflow must upload pages artifact');
});
