const https = require('https');

// Test different date formats to see which one Zoho accepts without "Enter a valid date."
const formats = [
  '01-Jan-1995',
  '01-01-1995',
  '01/01/1995',
  '1995-01-01',
  '01-January-1995',
  'Jan-01-1995',
  '1995/01/01'
];

async function testDate(dateStr) {
  return new Promise((resolve) => {
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
    let body = '';
    
    function addField(name, val) {
      body += `--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${val}\r\n`;
    }
    
    addField('Name_First', 'Test');
    addField('Name_Last', 'User');
    addField('Email', 'test@example.com');
    addField('Date', dateStr);
    addField('SingleLine', '500000');
    addField('Decimal', '2');
    addField('PhoneNumber_countrycode', '9876543210');
    addField('PhoneNumber_countrycodeval', '+91');
    addField('SingleLine5', 'Yes');
    addField('SingleLine3', 'B.Tech');
    addField('SingleLine1', '400000');
    addField('Website1', 'https://linkedin.com/in/test');
    
    // Add dummy file
    body += `--${boundary}\r\nContent-Disposition: form-data; name="FileUpload"; filename="resume.pdf"\r\nContent-Type: application/pdf\r\n\r\nDummy PDF content\r\n`;
    body += `--${boundary}--\r\n`;
    
    const req = https.request('https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/HvLPGaauQXxm0lUYiV3px3VP4BJUGTQ31qY5g9DD7Ek/htmlRecords/submit', {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let respData = '';
      res.on('data', d => respData += d);
      res.on('end', () => {
        const hasDateErr = respData.includes('Date of Birth') || respData.includes('valid date');
        const hasFileErr = respData.includes('Upload Your Resume');
        console.log(`Date format [${dateStr}]: Status ${res.statusCode}, DateErr=${hasDateErr}, FileErr=${hasFileErr}`);
        if (!hasDateErr && !hasFileErr) {
          console.log(`>>> SUCCESS or Different Response for [${dateStr}]! Snippet:`, respData.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 300));
        }
        resolve();
      });
    });
    
    req.write(body);
    req.end();
  });
}

async function run() {
  for (const f of formats) {
    await testDate(f);
  }
}

run();
