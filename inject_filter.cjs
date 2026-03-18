const fs = require('fs');

const svgPath = 'public/f5networking_logo_original_safe.svg';
let content = fs.readFileSync(svgPath, 'utf8');

// The original content is basically:
// <svg xmlns="http://www.w3.org/2000/svg" width="1130" height="586" viewBox="0 0 1130 586">
//   <image href="data:image..." />
// </svg>

const defsBlock = `
  <defs>
    <filter id="remove-dark-bg" colorInterpolationFilters="sRGB">
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        5 5 5 0 -1.5
      " />
    </filter>
  </defs>
`;

// Inject defs right after the opening <svg> tag
if (!content.includes('<defs>')) {
  // Find the end of the opening svg tag
  const svgCloseBracketIdx = content.indexOf('>');
  if (svgCloseBracketIdx !== -1) {
    const part1 = content.slice(0, svgCloseBracketIdx + 1);
    const part2 = content.slice(svgCloseBracketIdx + 1);
    
    content = part1 + defsBlock + part2;
  }
}

// Add filter attribute to the image tag
if (!content.includes('filter="url(#remove-dark-bg)"')) {
  content = content.replace('<image ', '<image filter="url(#remove-dark-bg)" ');
  content = content.replace('href="data', 'width="1130" height="586" href="data');
}

fs.writeFileSync(svgPath, content, 'utf8');
console.log('Successfully injected SVG filter into', svgPath);
