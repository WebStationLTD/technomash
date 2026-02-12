const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Ръчно извадени URL-и на снимките от стария сайт (ГОЛЕМИ версии с _2)
// Техномикс 60
const technomix60Images = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/technomix_60/img_1_2.jpg', name: 'technomix-60-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/technomix_60/img_2_2.jpg', name: 'technomix-60-2.jpg' },
];

// Техномикс 100 - няма снимки в стария сайт
const technomix100Images = [];

// SIMEM 100
const simem100Images = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/1_2.jpg', name: 'simem-100-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/2_2.jpg', name: 'simem-100-2.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/3_2.jpg', name: 'simem-100-3.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/4_2.jpg', name: 'simem-100-4.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/5_2.jpg', name: 'simem-100-5.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/6_2.jpg', name: 'simem-100-6.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/simem_100/7_2.jpg', name: 'simem-100-7.jpg' },
];

// Мобилмикс 60
const mobilmix60Images = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/mobilmix_60/1_2.jpg', name: 'mobilmix-60-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/mobilmix_60/2_2.jpg', name: 'mobilmix-60-2.jpg' },
];

// ТМЕ 110
const tme110Images = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/asfaltova_baza_TME_110/1_2.jpg', name: 'tme-110-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/asfaltova_baza_TME_110/3_2.jpg', name: 'tme-110-2.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/asfaltova_baza_TME_110/4_2.jpg', name: 'tme-110-3.jpg' },
];

// Пресевна 300
const presevna300Images = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/presevna_modulna_300_t/1_2.jpg', name: 'presevna-300-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/presevna_modulna_300_t/2_2.jpg', name: 'presevna-300-2.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/presevna_modulna_300_t/3_2.jpg', name: 'presevna-300-3.jpg' },
];

// Land Rover (Range Rover)
const rangeRoverImages = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/land_rover/1_2.jpg', name: 'range-rover-1.jpg' },
];

// Камион MAN
const manTruckImages = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/man/1_2.jpg', name: 'man-truck-1.jpg' },
  { url: 'https://www.technomash-bg.com/2_hand_equipment/man/2_2.jpg', name: 'man-truck-2.jpg' },
];

// Челен товарач
const loaderImages = [
  { url: 'https://www.technomash-bg.com/2_hand_equipment/chelen_tovarach/1_2.jpg', name: 'loader-1.jpg' },
];

const allImages = [
  ...technomix60Images,
  ...technomix100Images,
  ...simem100Images,
  ...mobilmix60Images,
  ...tme110Images,
  ...presevna300Images,
  ...rangeRoverImages,
  ...manTruckImages,
  ...loaderImages,
];

// Функция за сваляне на снимка
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      // Follow redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        downloadImage(response.headers.location, filepath)
          .then(resolve)
          .catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        console.log(`⚠️  Skipped ${path.basename(filepath)} (${response.statusCode})`);
        fs.unlink(filepath, () => {});
        resolve(); // Don't reject, just skip
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.log(`⚠️  Skipped ${path.basename(filepath)} (${err.message})`);
      resolve(); // Don't reject, just skip
    });
  });
}

// Main function
async function main() {
  console.log('🚀 Starting equipment images download from technomash-bg.com...\n');
  console.log('📥 Downloading to public/used-equipment/\n');
  
  const fullPath = path.join(__dirname, 'public', 'used-equipment');
  
  // Създаваме папката ако не съществува
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  
  let successCount = 0;
  let skipCount = 0;
  
  for (const image of allImages) {
    try {
      const filepath = path.join(fullPath, image.name);
      await downloadImage(image.url, filepath);
      
      // Check if file exists and has size
      if (fs.existsSync(filepath) && fs.statSync(filepath).size > 0) {
        successCount++;
      } else {
        skipCount++;
      }
      
      // Малка пауза между requests
      await new Promise(resolve => setTimeout(resolve, 300));
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
      skipCount++;
    }
  }
  
  console.log(`\n✅ Download complete!`);
  console.log(`   - Successfully downloaded: ${successCount} images`);
  console.log(`   - Skipped: ${skipCount} images`);
  console.log('\n🎉 You can now test: http://localhost:3000/equipment/used');
}

main();
