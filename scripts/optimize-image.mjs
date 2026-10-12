#!/usr/bin/env node
/**
 * Shrink an image in place for the web.
 *
 *   node scripts/optimize-image.mjs <file> [maxWidth=1600]
 *
 * Why this exists: photos dropped straight from a camera are 6000-8000px wide
 * and 1-2 MB, but this site shows them at 300-1100 CSS px. Resizing to about 2x
 * the largest size an image is displayed at (so Retina screens stay sharp) took
 * the delivered image weight of the heaviest pages from ~10 MB to under 1 MB.
 *
 * Needs `sharp` (not a project dependency):  npm i --no-save sharp
 * - JPEG: auto-oriented, mozjpeg quality 78, progressive.
 * - PNG:  palette-quantized (keeps transparency).
 * - Never enlarges, and never writes a file that is bigger than the original.
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const [file, widthArg] = process.argv.slice(2);
if (!file) {
  console.error('usage: node scripts/optimize-image.mjs <file> [maxWidth=1600]');
  process.exit(1);
}
const maxWidth = Number(widthArg) || 1600;
const ext = path.extname(file).toLowerCase();
const before = fs.statSync(file).size;

let pipeline = sharp(file).rotate().resize({ width: maxWidth, withoutEnlargement: true });
if (ext === '.png') pipeline = pipeline.png({ palette: true, quality: 85, effort: 10 });
else if (ext === '.jpg' || ext === '.jpeg') pipeline = pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true });
else {
  console.error(`unsupported extension: ${ext}`);
  process.exit(1);
}

const out = await pipeline.toBuffer();
if (out.length >= before) {
  console.log(`${file}: already optimal (${(before / 1024).toFixed(0)} KB), left unchanged`);
} else {
  fs.writeFileSync(file, out);
  console.log(`${file}: ${(before / 1024).toFixed(0)} KB -> ${(out.length / 1024).toFixed(0)} KB`);
}
