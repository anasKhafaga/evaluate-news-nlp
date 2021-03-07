const https = require('follow-redirects').https;

module.exports = (text) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      hostname: 'api.meaningcloud.com',
      path: `/sentiment-2.1?key=${process.env.API_KEY}&lang=en&txt=${text}`,
    };
    
    const req = https.request(options, (res) => {
      const data = [];
    
      res.on('data', (chunk) => {
        data.push(chunk);
      });
    
      res.on('end', () => {
        const finalized = Buffer.concat(data);
        resolve(JSON.parse(finalized));
      });
    
      res.on('error', (err) => {
        reject(err)
      });
    });
    
    req.end();
    
  })

};

