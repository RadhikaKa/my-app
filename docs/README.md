# my-app — Product Documentation

This folder contains product and API documentation for **my-app**.

---

## Contents

| File / Folder       | Description                              |
|---------------------|------------------------------------------|
| `README.md`         | This file — documentation index          |
| `features/`         | Per-feature user-facing documentation    |
| `api/`              | API reference (endpoints, payloads)      |
| `architecture/`     | System design and architecture decisions |

---

## How Documentation Is Updated

Documentation is maintained as part of the automated E2E development workflow
defined in `.claude/skills/e2e-dev-flow/SKILL.md`.

Every code change that affects user-facing behaviour or the public API
**must** be accompanied by a docs update in the same Pull Request.

---

## Features

### Home Page (`MYAPP-1`)

The home page is served at `/` by the Node.js HTTP server in `src/index.js`.

| Element   | Content                                        |
|-----------|------------------------------------------------|
| `<title>` | `my-app`                                       |
| `<h1>`    | `Welcome to my-app`                            |
| `<p>`     | `Build something great, one feature at a time.` |

**Tests:** `tests/home.spec.js` — 4 Playwright tests covering title, heading, tagline, and non-empty body.

---

## Style Guide

- Write in clear, plain English.
- Use present tense ("The button **saves** the form").
- One concept per page.
- Include code examples where relevant.
- Keep line length ≤ 100 characters.
