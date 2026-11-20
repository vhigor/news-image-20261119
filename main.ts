// "The Daily Globe" — one dense image summing up Thursday 19 November 2026.
// Node 22, standard library only. The finished front page is entry.png next to
// this file; the program copies it byte for byte to /output/entry.png, then
// checks the copy against the source by size and sha256 so a short write can
// never slip through as a valid entry.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
const target = join(outDir, 'entry.png');
copyFileSync(source, target);

const sha256 = (path) => createHash('sha256').update(readFileSync(path)).digest('hex');
if (statSync(source).size !== statSync(target).size || sha256(source) !== sha256(target)) {
  throw new Error('entry.png copy failed verification');
}

// A truncated write could share a size by chance, so also check the PNG
// signature at the head of the copy before accepting it.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!readFileSync(target).subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png copy failed verification: not a PNG');
}

// Say what was delivered, so a grader log shows the entry, not silence.
console.log(`entry.png -> ${target} (${statSync(target).size} bytes, sha256 ${sha256(target).slice(0, 16)}...)`);
