import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/hongson-assets/screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Neutral dark mask to overlay over user profile areas in UI (typically top right of app screen)
// In slide 13-17 (1920x1080), user info badge is around x: 1550-1820, y: 180-260
const privacyMaskSvg = Buffer.from(`
<svg width="280" height="60" viewBox="0 0 280 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="280" height="60" rx="12" fill="#101B23" stroke="#00D6A3" stroke-width="2" opacity="0.95"/>
  <circle cx="35" cy="30" r="18" fill="#00D6A3" opacity="0.3"/>
  <circle cx="35" cy="30" r="10" fill="#00D6A3"/>
  <rect x="70" y="20" width="120" height="8" rx="4" fill="#F5FAF8" opacity="0.8"/>
  <rect x="70" y="34" width="80" height="6" rx="3" fill="#52CFE5" opacity="0.6"/>
  <rect x="210" y="22" width="55" height="16" rx="6" fill="#050A0E" stroke="#52CFE5" stroke-width="1"/>
  <text x="237" y="33" fill="#52CFE5" font-size="9" font-family="sans-serif" text-anchor="middle" font-weight="bold">ACTIVE</text>
</svg>
`);

async function processSlides() {
  console.log('Generating sanitized, high-efficiency WebP screenshots...');

  // 1. Dashboard (Slide 13)
  await sharp('reference-private/tfolio-slides/slide-13.png')
    .resize(1600, 900, { fit: 'inside' })
    .composite([
      { input: privacyMaskSvg, top: 180, left: 1250, blend: 'over' }
    ])
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-dashboard.webp'));

  // 2. Portfolio overview (Slide 14)
  await sharp('reference-private/tfolio-slides/slide-14.png')
    .resize(1600, 900, { fit: 'inside' })
    .composite([
      { input: privacyMaskSvg, top: 180, left: 1250, blend: 'over' }
    ])
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-portfolio.webp'));

  // 3. Add Evidence / New Portfolio (Slide 15)
  await sharp('reference-private/tfolio-slides/slide-15.png')
    .resize(1600, 900, { fit: 'inside' })
    .composite([
      { input: privacyMaskSvg, top: 180, left: 1250, blend: 'over' }
    ])
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-add-evidence.webp'));

  // 4. Report Print / PDF (Slide 16)
  await sharp('reference-private/tfolio-slides/slide-16.png')
    .resize(1600, 900, { fit: 'inside' })
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-report.webp'));

  // 5. Analytics (Slide 17)
  await sharp('reference-private/tfolio-slides/slide-17.png')
    .resize(1600, 900, { fit: 'inside' })
    .composite([
      { input: privacyMaskSvg, top: 180, left: 1250, blend: 'over' }
    ])
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-analytics.webp'));

  // 6. Approval Flow (Slide 07)
  await sharp('reference-private/tfolio-slides/slide-07.png')
    .resize(1600, 900, { fit: 'inside' })
    .webp({ quality: 85, effort: 5 })
    .toFile(path.join(outDir, 'tfolio-approval.webp'));

  console.log('Sanitized screenshots ready in public/hongson-assets/screenshots/');
}

processSlides().catch(err => {
  console.error(err);
  process.exit(1);
});

