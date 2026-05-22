// src/index.js
// Entry point for my-app

import { createServer } from 'http';

const PORT = process.env.PORT || 3000;

const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { display: flex; min-height: 100vh; font-family: sans-serif; color: #333; }
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
  main { flex: 1; padding: 2rem; }
  h1 { margin-bottom: 1rem; }
  p { margin-bottom: 1rem; color: #555; }
  .settings-section { margin-top: 1.5rem; }
  .settings-section h2 { font-size: 1rem; color: #888; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0.75rem; }
  .settings-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid #eee; }
  .settings-item label { font-size: 0.95rem; }
`;

const homePage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>my-app</title>
    <style>${styles}</style>
  </head>
  <body>
    <nav aria-label="Main navigation">
      <span class="nav-brand">my-app</span>
      <a href="/" class="active" aria-current="page">Home</a>
      <a href="/about">About</a>
      <a href="/settings">Settings</a>
    </nav>
    <main>
      <h1>Welcome to my-app</h1>
      <p>Build something great, one feature at a time.</p>
    </main>
  </body>
</html>`;

const settingsPage = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Settings — my-app</title>
    <style>${styles}</style>
  </head>
  <body>
    <nav aria-label="Main navigation">
      <span class="nav-brand">my-app</span>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/settings" class="active" aria-current="page">Settings</a>
    </nav>
    <main>
      <h1>Settings</h1>
      <p>Manage your application preferences below.</p>
      <div class="settings-section">
        <h2>Preferences</h2>
        <div class="settings-item">
          <label for="theme">Theme</label>
          <select id="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div class="settings-item">
          <label for="notifications">Email notifications</label>
          <input type="checkbox" id="notifications" checked />
        </div>
      </div>
    </main>
  </body>
</html>`;

const server = createServer((req, res) => {
  if (req.url === '/settings') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(settingsPage);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage);
  }
});

server.listen(PORT, () => {
  console.log(`my-app is running on http://localhost:${PORT}`);
});
