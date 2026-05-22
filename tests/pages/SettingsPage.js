import { BasePage } from './BasePage.js';

export class SettingsPage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { level: 1 });
    this.description = page.locator('main p').first();
    this.backLink = page.getByRole('link', { name: 'Home' });
    this.themeSelect = page.getByLabel('Theme');
    this.notificationsCheckbox = page.getByLabel('Email notifications');
  }

  async goto() {
    await this.page.goto('/settings');
  }
}
