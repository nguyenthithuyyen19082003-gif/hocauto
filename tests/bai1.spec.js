import {test, expect} from '@playwright/test';

test('Login', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/dashboard/);
});