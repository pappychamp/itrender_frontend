import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Search' }).click();
  await expect(page.getByPlaceholder('気になる単語を検索')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Enterで検索' })).toBeVisible();
  await expect(page.getByTestId('custom-badge')).not.toBeVisible();
  await page.getByPlaceholder('気になる単語を検索').fill('test');
  await page.getByPlaceholder('気になる単語を検索').press('Enter');
  await expect(page.getByTestId('custom-badge')).toBeVisible();
  await page.getByTestId('custom-badge').click();
  await expect(page.getByTestId('custom-badge')).not.toBeVisible();
});
