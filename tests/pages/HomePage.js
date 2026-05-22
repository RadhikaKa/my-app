import { BasePage } from './BasePage.js';

export class HomePage extends BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { level: 1 });
    this.tagline = page.locator('main p').first();
    this.nav = page.getByRole('navigation', { name: 'Main navigation' });
    this.navHomeLink = page.getByRole('link', { name: 'Home' });
    this.navAboutLink = page.getByRole('link', { name: 'About' });
  }
}
