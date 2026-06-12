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

test('6_Kiem tra dang nhap that bai voi Password khong hop le', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'aaa');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

test('7_Kiem tra dang nhap that bai voi Username va Password khong hop le', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', 'aaa');
    await page.fill('input[name="password"]', 'bbb');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

test('8_Kiem tra dieu huong khi nhan lien ket Forgot Password', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.click('text=Forgot your password?');

    await expect(page).toHaveURL(/requestPasswordResetCode/);
});

test('9_Kiem tra Password duoc an ky tu khi nhap', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="password"]', 'admin123');

    await expect(page.locator('input[name="password"]')).toHaveAttribute('type', 'password');
});

test('10_Kiem tra Username duoc cat khoang trang dau cuoi', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', '   Admin   ');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

test('11_Kiem tra Password duoc cat khoang trang dau cuoi', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await expect(page).toHaveTitle(/OrangeHRM/);

    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', '  admin123   ');
    await page.locator('button[type="submit"]').click({ timeout: 60000 });

    await expect(page.locator('text=Invalid credentials')).toBeVisible();
});

