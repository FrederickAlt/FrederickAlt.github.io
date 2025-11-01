import { test, expect } from '@playwright/test';
import { getCollection } from 'astro:content';

test.describe('Blog Posts Compilation', () => {
  test('all blog posts should load without errors', async ({ page }) => {
    // Navigate to each blog post and check for errors
    const blogPosts = [
      '/blog/reversing-cython-binaries-with-ai',
      '/blog/understanding-python-metaclasses',
      '/blog/building-a-code-editor',
    ];

    for (const postUrl of blogPosts) {
      const response = await page.goto(postUrl);

      // Check response is successful
      expect(response?.status()).toBe(200);

      // Check no JavaScript errors occurred
      const errors: string[] = [];
      page.on('pageerror', error => errors.push(error.message));

      // Wait a bit for any errors to surface
      await page.waitForTimeout(500);

      expect(errors).toHaveLength(0);

      // Verify basic page structure exists
      expect(await page.locator('h1, h2').count()).toBeGreaterThanOrEqual(1);
    }
  });

  test('reversing-cython blog post should render properly', async ({ page }) => {
    const response = await page.goto('/blog/reversing-cython-binaries-with-ai');

    expect(response?.status()).toBe(200);

    // Check title exists (use first h1 on page which should be the blog title)
    await expect(page.locator('h1').first()).toContainText(/Reverse Engineering Cython/i);

    // Check details/summary spoiler exists
    const details = page.locator('details');
    expect(await details.count()).toBeGreaterThanOrEqual(1);

    // Check code blocks exist
    const codeBlocks = page.locator('pre code');
    expect(await codeBlocks.count()).toBeGreaterThanOrEqual(1);
  });
});
