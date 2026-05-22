---
name: e2e-dev-flow
description: >
  End-to-end automated development workflow for my-app.
  Invoked when implementing a new feature, bug fix, or documentation update.
  Claude Code follows this playbook autonomously and pauses at human-gated steps.
---

# E2E Development Flow Playbook

This skill defines the exact sequence of steps Claude Code executes when asked
to implement a feature, fix a bug, or update documentation. Follow every step
in order. Never skip a step. Never auto-merge or auto-deploy.

---

## Step 1 — Understand the Task

1. Re-read `CLAUDE.md` to recall project rules and conventions.
2. Confirm the feature request is unambiguous. If not, ask one clarifying question.
3. Identify which files in `src/` will need to change.
4. Identify which Playwright tests in `tests/` will need to be created or updated.
5. Identify which docs in `docs/` will need to be updated.

---

## Step 2 — Create a Feature Branch

```bash
git checkout -b feat/<short-kebab-description>
```

Branch naming:
- New feature → `feat/<name>`
- Bug fix → `fix/<name>`
- Documentation → `docs/<name>`
- Chore / tooling → `chore/<name>`

---

## Step 3 — Implement the Feature

1. Make all code changes inside `src/`.
2. Follow the code conventions in `CLAUDE.md`.
3. Do **not** modify `tests/` or `docs/` yet — keep changes focused.
4. Run lint after each file change:

```bash
npm run lint
```

Fix any lint errors before moving on.

---

## Step 4 — Write or Update Playwright Tests

1. Add or update the relevant spec file in `tests/`.
2. Use the **page-object model** pattern: one class per page/component, stored
   alongside the spec or in `tests/pages/`.
3. Each test must:
   - Have a descriptive `test.describe` block matching the feature name.
   - Cover the **happy path** and at least one **error/edge case**.
4. Run the full test suite:

```bash
npm test
```

All tests must pass before continuing. If a test fails:
- Fix the application code or the test (whichever is wrong).
- Do **not** skip or suppress a failing test.

---

## Step 5 — Update Documentation

1. Open the relevant file in `docs/`.
2. Update or add sections that describe the new/changed behaviour.
3. Documentation must stay in sync with the UI and the API.
4. Run the doc generation script if one is configured:

```bash
npm run docs
```

---

## Step 6 — Final Checks

Run the full quality gate in sequence:

```bash
npm run lint     # must produce 0 errors
npm test         # must produce 0 failures
```

If either command fails, fix the issue and re-run before proceeding.

---

## Step 7 — Commit

Stage all changed files and create a Conventional Commit:

```bash
git add src/ tests/ docs/
git commit -m "<type>(<scope>): <short summary>"
```

Examples:
```
feat(auth): add OAuth2 login flow
fix(cart): correct total price calculation
docs(api): document new /orders endpoint
test(checkout): add edge-case tests for empty cart
```

---

## Step 8 — Open a Pull Request  ⛔ HUMAN GATE

Push the branch and open a PR:

```bash
git push origin feat/<short-kebab-description>
gh pr create --title "<type>: <summary>" --body "$(cat .github/pull_request_template.md)"
```

**STOP HERE.** Claude Code must not approve, merge, or close the PR.
A human team member must:
1. Review the diff
2. Request changes or approve
3. Merge the PR

Claude Code may respond to review comments by pushing additional commits to the
same branch, then notifying the reviewer to re-check. It must never merge.

---

## Step 9 — Post-Merge (human-triggered)

After a human merges the PR, CI/CD runs automatically.
Claude Code must not trigger or monitor the deployment pipeline.
Production deploy decisions are owned entirely by the human team.

---

## Quick Reference

| Phase            | Automated by Claude Code | Human required |
|------------------|:------------------------:|:--------------:|
| Branch creation  | ✅                       |                |
| Code changes     | ✅                       |                |
| Lint             | ✅                       |                |
| Playwright tests | ✅                       |                |
| Docs update      | ✅                       |                |
| Commit           | ✅                       |                |
| PR creation      | ✅                       |                |
| PR review        |                          | ✅             |
| PR merge         |                          | ✅             |
| Production deploy|                          | ✅             |
