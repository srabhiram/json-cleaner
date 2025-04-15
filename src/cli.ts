#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { cleanJSON } from './index';

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[2];

if (!inputPath || args[1] !== '-o' || !outputPath) {
  console.log('Usage: json-cleaner <input.json> -o <output.json>');
  process.exit(1);
}

const raw = fs.readFileSync(path.resolve(inputPath), 'utf8');
const input = JSON.parse(raw);

const cleaned = cleanJSON(input);

fs.writeFileSync(path.resolve(outputPath), JSON.stringify(cleaned, null, 2), 'utf8');
console.log(`Cleaned JSON saved to ${outputPath}`);
