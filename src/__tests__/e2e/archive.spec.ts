import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'Archive' }).click();
  //   レンダリング検証
  await expect(page.getByText('サイト', { exact: true })).toBeVisible();
  await expect(page.getByPlaceholder('サイト選択')).toBeVisible();
  await expect(page.getByText('日付')).toBeVisible();
  await expect(page.getByPlaceholder('日付選択')).toBeVisible();
  await page.getByPlaceholder('サイト選択').click();
  await page.getByRole('option', { name: 'Yahoo' }).click();
  //   オプションの選択
  const selectOption = await page.getByPlaceholder('サイト選択').inputValue();
  //   検証
  expect(selectOption).toBe('Yahoo');
});
