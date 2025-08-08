#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parseJS = require('../parser/jsParser');
const { generateMarkdown, saveMarkdownFile } = require('./generateMarkdown');

const filePath = process.argv[2];
const saveAsMarkdown = process.argv.includes('--md');

if (!filePath) {
  console.log("Gunakan: autodocs <file.js> [--md]");
  process.exit(1);
}

const code = fs.readFileSync(filePath, 'utf-8');
const ext = path.extname(filePath);

if (ext === '.js') {
  const result = parseJS(code);
  if (saveAsMarkdown) {
    const md = generateMarkdown(result);
    saveMarkdownFile('frontend/public/API_DOCS.md', md);
  } else {
    console.log(JSON.stringify(result, null, 2));
  }
} else {
  console.log('Parser untuk ekstensi ini belum didukung.');
}
