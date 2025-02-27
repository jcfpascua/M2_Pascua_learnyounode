let http = require('http');

let port = process.argv[2];

let server = http.createServer((req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;  // Method Not Allowed
    return res.end('Only POST requests are allowed');
  }

  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(body.toUpperCase());
  });
});

server.listen(port, () => {
  console.log(`HTTP Uppercase Server listening on port ${port}`);
});
