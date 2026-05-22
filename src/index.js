// src/index.js
// Entry point for my-app

import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-app</title>
  </head>
  <body>
    <h1>Welcome to my-app</h1>
    <p>Build something great, one feature at a time.</p>
  </body>
</html>`;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`my-app is running on http://localhost:${PORT}`);
});
