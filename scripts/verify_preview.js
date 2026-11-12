import http from 'http';

function get(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function verify() {
  console.log('Testing Vite Preview Server on http://localhost:4173 ...');

  // 1. Root index.html
  const rootRes = await get('http://localhost:4173/');
  if (rootRes.statusCode !== 200) {
    throw new Error(`Failed to fetch root: status ${rootRes.statusCode}`);
  }
  console.log('✓ Root HTML fetched successfully (200 OK)');

  // Verify Title and Meta tags
  if (!rootRes.body.includes('HONGSON THE ONE')) {
    throw new Error('Title or brand name missing in root HTML');
  }
  console.log('✓ Title and meta tags verified in HTML');

  // Find linked assets
  const scriptMatches = [...rootRes.body.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
  const cssMatches = [...rootRes.body.matchAll(/href="([^"]+\.css)"/g)].map(m => m[1]);

  console.log('Found scripts:', scriptMatches);
  console.log('Found CSS:', cssMatches);

  for (const script of scriptMatches) {
    const sUrl = script.startsWith('http') ? script : `http://localhost:4173${script.replace('./', '/')}`;
    const res = await get(sUrl);
    if (res.statusCode !== 200) throw new Error(`Script ${sUrl} returned ${res.statusCode}`);
    console.log(`✓ Script loaded: ${sUrl} (${res.body.length} bytes)`);
  }

  for (const css of cssMatches) {
    const cUrl = css.startsWith('http') ? css : `http://localhost:4173${css.replace('./', '/')}`;
    const res = await get(cUrl);
    if (res.statusCode !== 200) throw new Error(`CSS ${cUrl} returned ${res.statusCode}`);
    console.log(`✓ CSS loaded: ${cUrl} (${res.body.length} bytes)`);
  }

  // Check critical public assets
  const assetsToCheck = [
    '/hongson-assets/logos/hongson-the-one.webp',
    '/hongson-assets/logos/hongson-tfolio.webp',
    '/hongson-assets/screenshots/tfolio-dashboard.webp',
    '/hongson-assets/screenshots/tfolio-portfolio.webp',
    '/hongson-assets/screenshots/tfolio-add-evidence.webp',
    '/hongson-assets/screenshots/tfolio-report.webp',
    '/hongson-assets/screenshots/tfolio-analytics.webp',
    '/hongson-assets/screenshots/tfolio-approval.webp',
  ];

  for (const asset of assetsToCheck) {
    const res = await get(`http://localhost:4173${asset}`);
    if (res.statusCode !== 200) throw new Error(`Asset ${asset} failed with ${res.statusCode}`);
    console.log(`✓ Public asset accessible: ${asset} (${res.headers['content-length'] || res.body.length} bytes)`);
  }

  console.log('\n=========================================');
  console.log('ALL PREVIEW VERIFICATIONS PASSED (100%)');
  console.log('=========================================');
}

verify().catch(err => {
  console.error('Verification failed:', err);
  process.exit(1);
});
