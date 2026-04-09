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

const files = findFiles('src', /\.(js|jsx)$/);
const keys = new Set();
const regex = /t\(['"]([^'"]+)['"]/g;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = regex.exec(content)) !== null) {
    keys.add(match[1]);
  }
}

// Function to set value deeply
function setDeep(obj, path, value) {
  const parts = path.split('.');
  let current = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    if (!current[parts[i]]) current[parts[i]] = {};
    current = current[parts[i]];
  }
  current[parts[parts.length - 1]] = value;
}

const esObj = {};
const enObj = {};

for (const key of keys) {
  const defaultText = key.split('.').pop(); // A placeholder
  setDeep(esObj, key, `[ES] ${defaultText}`);
  setDeep(enObj, key, `[EN] ${defaultText}`);
}

const output = `// Auto-generated fallback translation dictionary

const translations = {
  es: ${JSON.stringify(esObj, null, 4)},
  en: ${JSON.stringify(enObj, null, 4)}
};

export default translations;
`;

fs.writeFileSync('src/translations/index.js', output);
console.log("Rebuilt translations/index.js with all found keys!");
