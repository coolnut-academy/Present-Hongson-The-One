import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/hongson-assets/exhibit');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

async function convertRefAssets() {
  console.log('Processing exhibits from Ref folder...');

  const infographicsDir = 'Ref/drive-download-20261112T051546Z-1-001';
  const slidesDir = 'Ref/Hongson THE ONE SLIDE';

  const infographicMap = [
    { src: 'ChatGPT Image Jun 12, 2026, 11_04_45 AM.png', dest: 'infographic-01-ecosystem.webp' },
    { src: 'ChatGPT Image Jun 12, 2026, 11_04_54 AM.png', dest: 'infographic-02-context.webp' },
    { src: 'ChatGPT Image Jun 12, 2026, 11_04_57 AM.png', dest: 'infographic-03-strengths.webp' },
    { src: 'ChatGPT Image Jun 12, 2026, 11_05_00 AM.png', dest: 'infographic-04-tfolio-mvp.webp' },
    { src: 'ChatGPT Image Jun 12, 2026, 11_05_02 AM.png', dest: 'infographic-05-metaverse.webp' },
    { src: 'ChatGPT Image Jun 12, 2026, 11_05_05 AM.png', dest: 'infographic-06-roadmap.webp' },
  ];

  for (const item of infographicMap) {
    const srcPath = path.join(infographicsDir, item.src);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize(1600, 900, { fit: 'inside' })
        .webp({ quality: 88, effort: 5 })
        .toFile(path.join(outDir, item.dest));
      console.log('✓ Exported:', item.dest);
    }
  }

  const photosMap = [
    { src: '10.jpg', dest: 'photo-board-presentation.webp' },
    { src: '15.jpg', dest: 'photo-ai-workshop.webp' },
    { src: '20.jpg', dest: 'photo-digital-plan.webp' },
    { src: '17.jpg', dest: 'photo-student-maker.webp' },
    { src: '19.jpg', dest: 'photo-exhibition-booth.webp' },
    { src: '16.jpg', dest: 'photo-metaverse-showcase.webp' },
  ];

  for (const item of photosMap) {
    const srcPath = path.join(slidesDir, item.src);
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath)
        .resize(1600, 900, { fit: 'inside' })
        .webp({ quality: 85, effort: 5 })
        .toFile(path.join(outDir, item.dest));
      console.log('✓ Exported:', item.dest);
    }
  }

  console.log('All Ref exhibits exported successfully to public/hongson-assets/exhibit/');
}

convertRefAssets().catch(err => {
  console.error(err);
  process.exit(1);
});

