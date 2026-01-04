const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Welcome to Service A! Version: v1\n');
});

server.listen(port, () => {
  console.log(`Service A running on port ${port}`);
});
