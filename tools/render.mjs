// Render src/frontpage.html (1024x1024) to entry.png with headless Chromium.
// Run from ~/workspace/makefun so `playwright` resolves from its node_modules:
//   node news-image-20261119-entry/tools/render.mjs
import { chromium } from 'playwright';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1024, height: 1024 } });
await page.goto('file://' + join(root, 'src', 'frontpage.html'));
await page.waitForTimeout(400);
await page.screenshot({ path: join(root, 'entry.png') });
await browser.close();
console.log('rendered entry.png');
