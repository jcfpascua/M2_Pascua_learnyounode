let http = require('http');
let fs = require('fs');

let port = process.argv[2];
let filePath = process.argv[3];

let server = http.createServer((req, res) => {
  let readStream = fs.createReadStream(filePath);

  readStream.pipe(res);

  readStream.on('error', (err) => {
    res.statusCode = 500;
    res.end('Error reading the file.');
  });
});

server.listen(port, () => {
  console.log(`HTTP Server listening on port ${port}`);
});
