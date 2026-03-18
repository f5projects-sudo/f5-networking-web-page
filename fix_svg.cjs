const fs = require('fs');
const file = 'public/f5networking_logo_original_safe.svg';
let s = fs.readFileSync(file, 'utf8');

// The file currently has duplicate width="1130" height="586" attributes.
// Let's remove the first one that appears.
s = s.replace('width="1130" height="586" ', '');

fs.writeFileSync(file, s);
console.log('Fixed SVG file successfully.');
