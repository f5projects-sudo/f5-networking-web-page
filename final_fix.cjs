const fs = require('fs');

try {
  let s = fs.readFileSync('public/f5networking_logo_original_safe.svg', 'utf8');

  // Find the start and end of the <image> tag
  const imgStart = s.indexOf('<image');
  const imgEnd = s.indexOf('/>', imgStart) + 2;
  const imgContent = s.substring(imgStart, imgEnd);

  // Extract JUST the href part (which contains the massive base64 string)
  const hrefStart = imgContent.indexOf('href="data');
  const hrefEnd = imgContent.indexOf('"', hrefStart + 6) + 1;
  const hrefPart = imgContent.substring(hrefStart, hrefEnd);

  // Rebuild a clean image tag with exactly one set of attributes
  const newImg = '<image filter="url(#remove-dark-bg)" width="1130" height="586" ' + hrefPart + ' />';
  
  // Replace the old, malformed tag with the new clean one
  s = s.substring(0, imgStart) + newImg + s.substring(imgEnd);
  
  fs.writeFileSync('public/f5networking_logo_original_safe.svg', s);
  console.log('Successfully and safely rebuilt the image tag in the SVG.');
} catch (err) {
  console.error(err);
}
