import {test, expect} from '@playwright/test';

test('1_Dang nhap thanh cong voi tai khoan hop le', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await expect(page).toHaveURL(/dashboard/);
});

test('2_Kiem tra thong bao khi de trong Username', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', '');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Required')).toBeVisible();
});

test('3_Kiem tra thong bao khi de trong Password', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', '');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Required')).toBeVisible();
});

test('4_Kiem tra thong bao khi de trong Username va Password', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', '');
    await page.fill('input[name="password"]', '');
    await page.click('button[type="submit"]');

    await expect(page.locator('span.oxd-input-field-error-message')).toHaveCount(2);
});

test('5_Kiem tra dang nhap that bai voi Username khong hop le', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.fill('input[name="username"]', 'aaa');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});