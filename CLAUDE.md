# Project Memory — my-app

This file is loaded automatically by Claude Code at the start of every session.
Keep it up to date with commands, rules, and architecture decisions.

---

## Project Overview

A web application with a fully automated E2E development workflow powered by Claude Code.
Human-in-the-loop gates are enforced at PR review and merge steps.

---

## Key Commands

| Command             | Description                                      |
|---------------------|--------------------------------------------------|
| `npm run dev`       | Start the local development server               |
| `npm run build`     | Compile and bundle the application               |
| `npm run lint`      | Run ESLint across all source files               |
| `npm run lint:fix`  | Auto-fix lint issues                             |
| `npm test`          | Run the full Playwright E2E test suite           |
| `npm run test:ui`   | Open Playwright UI mode for interactive testing  |
| `npm run docs`      | Generate/update documentation in docs/           |

---

## Workflow Rules

1. **Never push directly to `main`.** Always open a feature branch.
2. **All code changes must pass lint and tests** before a PR is created.
3. **PR review and merge require human approval.** Claude Code must not auto-merge.
4. **Playwright tests live in `tests/`** and must cover every new user-facing feature.
5. **Documentation in `docs/`** must be updated alongside any API or UI change.
6. **Commit messages** must follow Conventional Commits: `feat:`, `fix:`, `docs:`, `test:`, `chore:`.

---

## Architecture

```
src/        Application source code
tests/      Playwright E2E UI tests
docs/       Product and API documentation
.claude/    Claude Code configuration and skill playbooks
```

---

## Code Conventions

- **Language:** JavaScript (ES2022+)
- **Style:** ESLint with Prettier formatting
- **Imports:** ES module syntax (`import`/`export`)
- **Tests:** Playwright with page-object model pattern
- **Docs format:** Markdown

---

## Human-in-the-Loop Gates

Claude Code automates the following steps:
- Implement feature code in `src/`
- Write/update Playwright tests in `tests/`
- Run lint + test suite
- Update docs in `docs/`
- Open a Pull Request (via `gh pr create`)

The following steps **always require a human**:
- PR code review
- PR approval and merge
- Production deployment
