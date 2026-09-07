const https = require('https');

https.get('https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/HvLPGaauQXxm0lUYiV3px3VP4BJUGTQ31qY5g9DD7Ek', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const title = body.match(/<title>(.*?)<\/title>/i);
    console.log('Title:', title ? title[1] : 'No title');
    const text = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                     .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    console.log('Body text snippet:', text.slice(0, 1000));
  });
});
