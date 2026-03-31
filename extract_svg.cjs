const fs = require('fs');
const path = require('path');

const logPath = 'C:/Users/javie/.gemini/antigravity/brain/86028d91-73d6-41a7-bffe-83f50e43e57e/.system_generated/logs/overview.txt';
const outPath = 'C:/Users/javie/Desktop/F5 Networking - Web Page/public/f5networking_logo_new.svg';

try {
  const content = fs.readFileSync(logPath, 'utf8');
  
  // Find the last occurrence of the SVG string
  const startIdx = content.lastIndexOf('<svg xmlns="http://www.w3.org/2000/svg"');
  const endMarker = '</svg>';
  const endIdx = content.indexOf(endMarker, startIdx);
  
  if (startIdx !== -1 && endIdx !== -1) {
    const svgData = content.substring(startIdx, endIdx + endMarker.length);
    fs.writeFileSync(outPath, svgData, 'utf8');
    console.log('Successfully wrote SVG to:', outPath);
  } else {
    console.log('SVG not found in the logs');
  }
} catch(err) {
  console.error('Error:', err);
}
