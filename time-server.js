let net = require('net');

let port = process.argv[2];

let server = net.createServer(socket => {
  let now = new Date();

  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, '0');  // Month is 0-based, so add 1
  let day = String(now.getDate()).padStart(2, '0');
  let hour = String(now.getHours()).padStart(2, '0');
  let minute = String(now.getMinutes()).padStart(2, '0');

  let dateString = `${year}-${month}-${day} ${hour}:${minute}\n`;

  socket.write(dateString);
  socket.end();
});

server.listen(port, () => {
  console.log(`TCP Time Server listening on port ${port}`);
});
