import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const content = fs.readFileSync('src/translations/index.js', 'utf8');

try {
  // Use a regex to remove 'export const translations = ' and try to parse the object
  // Actually, better: use a dynamic import if it works
  console.log('Testing translations file...');
  await import('../src/translations/index.js');
  console.log('Success! No syntax errors.');
} catch (e) {
  console.error('Error found:');
  console.error(e);
  if (e.stack) {
    const match = e.stack.match(/index\.js:(\d+):(\d+)/);
    if (match) {
      console.log(`Potential error at Line: ${match[1]}, Column: ${match[2]}`);
    }
  }
}
