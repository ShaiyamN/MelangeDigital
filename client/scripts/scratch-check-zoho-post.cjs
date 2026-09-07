const https = require('https');
const querystring = require('querystring');

const postData = querystring.stringify({
  'Name_First': 'Test',
  'Name_Last': 'User',
  'Email': 'test@example.com',
  'Date': '1995-01-01',
  'SingleLine': '500000',
  'Decimal': '2',
  'PhoneNumber_countrycode': '9876543210',
  'PhoneNumber_countrycodeval': '+91',
  'SingleLine5': 'Yes',
  'SingleLine3': 'B.Tech',
  'SingleLine1': '400000',
  'Website1': 'https://linkedin.com/in/test'
});

const req = https.request('https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/HvLPGaauQXxm0lUYiV3px3VP4BJUGTQ31qY5g9DD7Ek/htmlRecords/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
}, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    console.log('Status:', res.statusCode);
    const text = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
                     .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
                     .replace(/<[^>]+>/g, ' ')
                     .replace(/\s+/g, ' ')
                     .trim();
    console.log('Full Text:', text);
    console.log('Raw HTML:', body);
  });
});

req.write(postData);
req.end();
