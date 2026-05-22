// scripts/screenshot.js
// Captures a screenshot of the home page and saves it to docs/screenshots/

import { chromium } from '@playwright/test';
import { spawn } from 'child_process';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'docs', 'screenshots');
const OUT_FILE = join(OUT_DIR, 'home-page.png');

// Start the dev server
const server = spawn('node', ['src/index.js'], { cwd: ROOT, stdio: 'pipe' });

await new Promise((resolve, reject) => {
  server.stdout.on('data', (data) => {
    if (data.toString().includes('running')) resolve();
  });
  server.on('error', reject);
  setTimeout(() => reject(new Error('Server start timeout')), 10000);
});

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 720 });
await page.goto('http://localhost:3000');

mkdirSync(OUT_DIR, { recursive: true });
await page.screenshot({ path: OUT_FILE });

await browser.close();
server.kill();

console.log(`Screenshot saved → ${OUT_FILE}`);
