const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  // Parse the URL and query string
  let parsedUrl = url.parse(req.url, true);
  let path = parsedUrl.pathname;
  let query = parsedUrl.query;

  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (path === '/api/parsetime') {
    let iso = query.iso;
    let date = new Date(iso);
    let result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds(),
    };
    res.end(JSON.stringify(result));
  }
  else if (path === '/api/unixtime') {
    let iso = query.iso;
    let date = new Date(iso);
    let result = {
      unixtime: date.getTime(),
    };
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404; // Not Found
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
