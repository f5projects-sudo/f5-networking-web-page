const fs = require('fs');
const path = require('path');

function findFiles(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'scratch' || file === 'translations') continue;
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, filter, fileList);
    } else if (filter.test(filePath)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findFiles(path.join(__dirname, 'src'), /\.(js|jsx)$/);
const keys = new Set();
const regex = /t\(['"]([^'"]+)['"]/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1]);
  }
}

const usedKeys = Array.from(keys).sort();
// Now read the current translation file to see what we actually export
try {
  // Dirty parse of the translations object
  const content = fs.readFileSync(path.join(__dirname, 'src/translations/index.js'), 'utf-8');
  // Simple extraction of the es object
  console.log("Found", usedKeys.length, "keys used in code.");
  console.log("Keys used:");
  console.log(usedKeys.join('\n'));
} catch (e) {
  console.error("Error reading translations", e);
}
