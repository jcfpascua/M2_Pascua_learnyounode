let http = require('http');

let url = process.argv[2];
let data = '';

http.get(url, response => {
  response.setEncoding('utf8');

  response.on('data', chunk => {
    data += chunk;
  });

  response.on('end', () => {
    console.log(data.length);
    console.log(data);
  });

  response.on('error', error => {
    console.error('Error:', error);
  });
});
