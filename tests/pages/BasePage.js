/**
 * BasePage — base class for all page objects.
 *
 * Extend this class for each page/component:
 *
 *   import { BasePage } from './BasePage.js';
 *
 *   export class LoginPage extends BasePage {
 *     constructor(page) {
 *       super(page);
 *       this.emailInput = page.getByLabel('Email');
 *       this.submitButton = page.getByRole('button', { name: 'Sign in' });
 *     }
 *
 *     async login(email, password) {
 *       await this.emailInput.fill(email);
 *       await page.getByLabel('Password').fill(password);
 *       await this.submitButton.click();
 *     }
 *   }
 */

export class BasePage {
  /** @param {import('@playwright/test').Page} page */
  constructor(page) {
    this.page = page;
  }

  async goto(path = '/') {
    await this.page.goto(path);
  }
}
