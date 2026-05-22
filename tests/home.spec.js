import { test, expect } from '@playwright/test';

/**
 * Example E2E test — replace with real user flows.
 *
 * Convention:
 *   - One `test.describe` block per feature.
 *   - Cover the happy path + at least one error/edge case.
 *   - Use page-object classes (see tests/pages/) for reusable selectors.
 */
test.describe('Home page', () => {
  test('loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/my-app/i);
  });

  test('displays the main heading', async ({ page }) => {
    await page.goto('/');
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });
});
