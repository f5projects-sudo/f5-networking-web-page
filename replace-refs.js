import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const replaceInFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace references to our optimized images
  const images = [
    'bpo_hero_image', 'pbx_corporate_hero', 'cableado_hero', 'venta_equipos',
    'echo_crm_mockup', 'F5 finalizado 2', 'F5 finalizado 22', 'f5networking_logo_original_safe',
    'favicon', 'software_engineering', 'software_refactoring', 'software_security',
    'desarrollo_software', 'voxis_hero', 'quienes-somos', 'datacenter_iso_4k',
    'datacenter_iso', 'cabling_pro', 'dc_aisle', 'a', 'pbx_presenter', 'step_analisis_1773243343222',
    'step_feedback_1773243461422', 'step_implementacion_1773243789918', 'step_prototipo_1773243392190',
    'step_pruebas_1773243483294', 'step_reunir_info_1773243319702'
  ];

  let changed = false;
  for (const img of images) {
    // Replace .png
    if (content.includes(`${img}.png`)) {
      content = content.replaceAll(`${img}.png`, `${img}.webp`);
      changed = true;
    }
    // Replace .jpg
    if (content.includes(`${img}.jpg`)) {
      content = content.replaceAll(`${img}.jpg`, `${img}.webp`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

const walkSync = (dir, filelist = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.js') || dirFile.endsWith('.html')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
};

const allFiles = walkSync(path.join(__dirname, 'src'));
allFiles.push(path.join(__dirname, 'index.html'));

for (const file of allFiles) {
  replaceInFile(file);
}
