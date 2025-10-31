import { test, expect } from '@playwright/test';

test.describe('Homepage Carousel', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display initial 3 posts', async ({ page }) => {
    const posts = page.locator('#posts-container article');
    await expect(posts).toHaveCount(3);
  });

  test('should show right arrow initially, hide left arrow', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');
    const prevArrow = page.locator('#prev-arrow');

    await expect(nextArrow).toBeVisible();
    await expect(prevArrow).not.toBeVisible();
  });

  test('should navigate to next posts when clicking right arrow', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');
    const postsContainer = page.locator('#posts-container');

    // Get initial post titles
    const initialTitles = await postsContainer.locator('h3 a').allTextContents();

    // Click next arrow
    await nextArrow.click();

    // Wait for fade animation
    await page.waitForTimeout(500);

    // Get new post titles
    const newTitles = await postsContainer.locator('h3 a').allTextContents();

    // Verify posts changed
    expect(newTitles).not.toEqual(initialTitles);

    // Verify still 3 posts
    const posts = page.locator('#posts-container article');
    await expect(posts).toHaveCount(3);
  });

  test('should show left arrow after clicking right arrow', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');
    const prevArrow = page.locator('#prev-arrow');

    await nextArrow.click();
    await page.waitForTimeout(500);

    await expect(prevArrow).toBeVisible();
  });

  test('should navigate back to initial posts when clicking left arrow', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');
    const prevArrow = page.locator('#prev-arrow');
    const postsContainer = page.locator('#posts-container');

    // Get initial titles (trim whitespace)
    const initialTitles = (await postsContainer.locator('h3 a').allTextContents()).map(t => t.trim());

    // Navigate forward
    await nextArrow.click();
    await page.waitForTimeout(500);

    // Navigate back
    await prevArrow.click();
    await page.waitForTimeout(500);

    // Get titles after going back (trim whitespace)
    const backTitles = (await postsContainer.locator('h3 a').allTextContents()).map(t => t.trim());

    // Should match initial titles
    expect(backTitles).toEqual(initialTitles);
  });

  test('should hide left arrow when back at start', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');
    const prevArrow = page.locator('#prev-arrow');

    // Go forward
    await nextArrow.click();
    await page.waitForTimeout(500);

    // Go back
    await prevArrow.click();
    await page.waitForTimeout(500);

    // Left arrow should be hidden
    await expect(prevArrow).not.toBeVisible();
  });

  test('should hide right arrow when reaching end', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');

    // Click until we can't anymore
    let clickCount = 0;
    const maxClicks = 10; // Safety limit

    while (await nextArrow.isVisible() && clickCount < maxClicks) {
      await nextArrow.click();
      await page.waitForTimeout(500);
      clickCount++;
    }

    // Right arrow should now be hidden
    await expect(nextArrow).not.toBeVisible();
  });

  test('should not break DOM structure during navigation', async ({ page }) => {
    const nextArrow = page.locator('#next-arrow');

    // Navigate a few times
    for (let i = 0; i < 2; i++) {
      if (await nextArrow.isVisible()) {
        await nextArrow.click();
        await page.waitForTimeout(500);

        // Check posts still exist and have correct structure
        const posts = page.locator('#posts-container article');
        const postCount = await posts.count();

        // Should have at least 1 post, at most 3
        expect(postCount).toBeGreaterThanOrEqual(1);
        expect(postCount).toBeLessThanOrEqual(3);

        // Each post should have title, description, and footer
        for (let j = 0; j < postCount; j++) {
          const post = posts.nth(j);
          await expect(post.locator('h3')).toBeVisible();
          await expect(post.locator('p')).toBeVisible();
          await expect(post.locator('time')).toBeVisible();
        }
      }
    }
  });

  test('should have working links in carousel posts', async ({ page }) => {
    const firstPost = page.locator('#posts-container article').first();
    const postLink = firstPost.locator('h3 a');

    // Verify link exists and has href
    await expect(postLink).toHaveAttribute('href', /\/blog\/.+/);
  });
});
