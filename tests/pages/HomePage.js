import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { level: 1 });
    this.tagline = page.locator('p').first();
  }
}
