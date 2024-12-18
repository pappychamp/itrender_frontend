import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'ホーム' }).first().click();
  await expect(page.getByText('最終更新日')).toBeVisible();
});
