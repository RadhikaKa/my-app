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
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { display: flex; min-height: 100vh; font-family: sans-serif; }
      nav {
        width: 220px;
        background: #1e1e2e;
        color: #cdd6f4;
        display: flex;
        flex-direction: column;
        padding: 2rem 1rem;
        gap: 0.5rem;
        flex-shrink: 0;
      }
      nav .nav-brand {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
        color: #cba6f7;
      }
      nav a {
        color: #cdd6f4;
        text-decoration: none;
        padding: 0.5rem 0.75rem;
        border-radius: 6px;
        transition: background 0.2s;
      }
      nav a:hover, nav a.active {
        background: #313244;
        color: #cba6f7;
      }
      main {
        flex: 1;
        padding: 2rem;
      }
    </style>
  </head>
  <body>
    <nav aria-label="Main navigation">
      <span class="nav-brand">my-app</span>
      <a href="/" class="active" aria-current="page">Home</a>
      <a href="/about">About</a>
    </nav>
    <main>
      <h1>Welcome to my-app</h1>
      <p>Build something great, one feature at a time.</p>
    </main>
  </body>
</html>`;

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`my-app is running on http://localhost:${PORT}`);
});
