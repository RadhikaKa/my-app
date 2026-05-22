import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';

test.describe('Home page', () => {
  test('loads successfully with correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(page).toHaveTitle(/my-app/i);
  });

  test('displays the main heading', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.heading).toBeVisible();
    await expect(homePage.heading).toHaveText('Welcome to my-app');
  });

  test('displays the tagline', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.tagline).toBeVisible();
    await expect(homePage.tagline).toHaveText('Build something great, one feature at a time.');
  });

  test('shows a non-empty page body', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    const body = page.locator('body');
    await expect(body).not.toBeEmpty();
  });
});

test.describe('Left navigation bar', () => {
  test('is visible on the page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.nav).toBeVisible();
  });

  test('contains a Home link marked as active', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.navHomeLink).toBeVisible();
    await expect(homePage.navHomeLink).toHaveAttribute('aria-current', 'page');
  });

  test('contains an About link', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.navAboutLink).toBeVisible();
    await expect(homePage.navAboutLink).toHaveAttribute('href', '/about');
  });
});
