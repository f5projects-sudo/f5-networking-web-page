import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirsToScan = [
  path.join(__dirname, 'public'),
  path.join(__dirname, 'src', 'assets')
];

async function optimizeImages() {
  for (const dir of dirsToScan) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      // Only compress PNGs and JPGs that are larger than ~1MB, or just convert all of them
      // Actually, let's just convert all of them to webp for maximum performance
      if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
        const filePath = path.join(dir, file);
        const newFileName = file.replace(new RegExp(`\\${ext}$`, 'i'), '.webp');
        const newFilePath = path.join(dir, newFileName);
        
        try {
          // If the image is extremely large, resize it to a max width of 1920 to save even more space
          await sharp(filePath)
            .resize({ width: 1920, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(newFilePath);
            
          console.log(`✅ Converted ${file} -> ${newFileName}`);
          
          // Optionally delete the original file to save space
          // fs.unlinkSync(filePath);
        } catch (error) {
          console.error(`❌ Error converting ${file}:`, error);
        }
      }
    }
  }
}

optimizeImages();
