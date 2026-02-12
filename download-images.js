const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Снимки от project_bg.htm страницата
const projectImages = [
  { url: 'https://www.technomash-bg.com/img_projects/Picture-010.jpg', name: 'project-1.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMGP0114.jpg', name: 'project-2.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_2941.jpg', name: 'project-3.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/Picture-020.jpg', name: 'project-4.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5020842.jpg', name: 'project-5.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/HPIM2485.jpg', name: 'project-6.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P4260779.jpg', name: 'project-7.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/img7.jpg', name: 'project-8.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5020862.jpg', name: 'project-9.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/mobilmix2.jpg', name: 'project-10.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5311135.jpg', name: 'project-11.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_3489.jpg', name: 'project-12.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P8280465.jpg', name: 'project-13.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/Picture-188.jpg', name: 'project-14.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P8280502.jpg', name: 'project-15.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5221560.jpg', name: 'project-16.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P6111821.jpg', name: 'project-17.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5221572.jpg', name: 'project-18.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5221567.jpg', name: 'project-19.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_3471.jpg', name: 'project-20.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_3492.jpg', name: 'project-21.jpg' },
];

// Generic снимки за оборудване (за equipment страниците)
const equipmentImages = [
  { url: 'https://www.technomash-bg.com/img_projects/Picture-010.jpg', name: 'equipment-1.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMGP0114.jpg', name: 'equipment-2.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_2941.jpg', name: 'equipment-3.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5020842.jpg', name: 'equipment-4.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P4260779.jpg', name: 'equipment-5.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/HPIM2485.jpg', name: 'equipment-6.jpg' },
];

// Снимки за употребявано оборудване
const usedEquipmentImages = [
  { url: 'https://www.technomash-bg.com/img_projects/mobilmix2.jpg', name: 'technomix-60.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5311135.jpg', name: 'technomix-100.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/IMG_3489.jpg', name: 'simem-100.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P8280465.jpg', name: 'mobilmix-60.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/Picture-188.jpg', name: 'tme-110.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P8280502.jpg', name: 'presevna-300.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5221560.jpg', name: 'loader.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P6111821.jpg', name: 'man-truck.jpg' },
  { url: 'https://www.technomash-bg.com/img_projects/P5221572.jpg', name: 'range-rover.jpg' },
];

// Функция за сваляне на снимка
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Функция за сваляне на всички снимки от array
async function downloadAll(images, folder) {
  console.log(`\n📥 Downloading images to ${folder}...\n`);
  
  // Създаваме папката ако не съществува
  const fullPath = path.join(__dirname, 'public', folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  
  for (const image of images) {
    try {
      const filepath = path.join(fullPath, image.name);
      await downloadImage(image.url, filepath);
      // Малка пауза между requests
      await new Promise(resolve => setTimeout(resolve, 200));
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
}

// Main function
async function main() {
  console.log('🚀 Starting image download from technomash-bg.com...\n');
  
  try {
    // Сваляме проектните снимки
    await downloadAll(projectImages, 'projects');
    
    // Сваляме снимките за оборудване
    await downloadAll(equipmentImages, 'equipment');
    
    // Сваляме снимките за употребявано оборудване
    await downloadAll(usedEquipmentImages, 'used-equipment');
    
    console.log('\n✅ All images downloaded successfully!');
    console.log('🎉 You can now test the pages:');
    console.log('   - http://localhost:3000/projects');
    console.log('   - http://localhost:3000/equipment');
    console.log('   - http://localhost:3000/equipment/used');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
