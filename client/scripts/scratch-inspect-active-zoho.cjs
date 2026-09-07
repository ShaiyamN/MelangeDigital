const https = require('https');

https.get('https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    const formMatch = body.match(/<form[^>]+action=['"]([^'"]+)['"]/i);
    console.log('Action:', formMatch ? formMatch[1] : 'No form action');
    
    // Find formperma
    const permaMatch = body.match(/formperma\/([^/'"]+)/i);
    console.log('Perma match:', permaMatch ? permaMatch[1] : 'none');

    // Find submit action
    const submitMatch = body.match(/https:\/\/forms\.zohopublic\.in\/[^'"]+/g);
    console.log('Zoho URLs in page:', submitMatch);

    // Find fields
    const inputs = [...body.matchAll(/name=['"]([^'"]+)['"]/gi)].map(m => m[1]);
    console.log('Inputs:', [...new Set(inputs)]);
  });
});
