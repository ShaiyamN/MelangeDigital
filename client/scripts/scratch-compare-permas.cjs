const https = require('https');

async function testSubmit(perma) {
  return new Promise((resolve) => {
    const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
    let body = '';
    
    function addField(name, val) {
      body += `--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${val}\r\n`;
    }
    
    addField('Name_First', 'Test');
    addField('Name_Last', 'Applicant');
    addField('Email', 'testapplicant@example.com');
    addField('Date', '01-Jan-1995');
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
    
    const url = `https://forms.zohopublic.in/melangedigital1/form/CareersForm/formperma/${perma}/htmlRecords/submit`;
    console.log('Testing URL:', url);
    
    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': Buffer.byteLength(body)
      }
    }, res => {
      let respData = '';
      res.on('data', d => respData += d);
      res.on('end', () => {
        console.log(`Perma [${perma}]: Status ${res.statusCode}`);
        const text = respData.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        console.log('Response text:', text.slice(0, 300));
        resolve();
      });
    });
    
    req.write(body);
    req.end();
  });
}

async function run() {
  console.log('--- Submitting to D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI ---');
  await testSubmit('D3dMn9tzL49YuMHf4zm1NhIL7IYLUTx4iHNZ-0HaHgI');
  
  console.log('\n--- Submitting to HvLPGaauQXxm0lUYiV3px3VP4BJUGTQ31qY5g9DD7Ek ---');
  await testSubmit('HvLPGaauQXxm0lUYiV3px3VP4BJUGTQ31qY5g9DD7Ek');
}

run();
