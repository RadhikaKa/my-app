import { test, expect } from '@playwright/test';
import { HomePage } from './pages/HomePage.js';
import { SettingsPage } from './pages/SettingsPage.js';

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

  test('has a link to the Settings page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('/');
    await expect(homePage.settingsLink).toBeVisible();
    await expect(homePage.settingsLink).toHaveAttribute('href', '/settings');
  });
});

test.describe('Settings page', () => {
  test('loads with correct title', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await expect(page).toHaveTitle(/settings/i);
  });

  test('displays the Settings heading', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await expect(settingsPage.heading).toBeVisible();
    await expect(settingsPage.heading).toHaveText('Settings');
  });

  test('has a Theme preference selector', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await expect(settingsPage.themeSelect).toBeVisible();
  });

  test('has an Email notifications toggle', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await expect(settingsPage.notificationsCheckbox).toBeVisible();
    await expect(settingsPage.notificationsCheckbox).toBeChecked();
  });

  test('has a Back to Home link', async ({ page }) => {
    const settingsPage = new SettingsPage(page);
    await settingsPage.goto();
    await expect(settingsPage.backLink).toBeVisible();
    await settingsPage.backLink.click();
    await expect(page).toHaveURL(/localhost:3000\/?$/);
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
