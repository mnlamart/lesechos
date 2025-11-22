import { test, expect } from "@playwright/test";
import { checkA11y } from "../tests/helpers/playwright-a11y";

test.describe("Newsletter Page", () => {
  test("page loads successfully", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    expect(page.url()).toContain("localhost:3000");
  });

  test("newsletters are displayed and grouped by site", async ({ page }) => {
    await page.goto("/");

    await page.waitForSelector('text="Newsletters"');

    // Check that newsletters are displayed by looking for newsletter images
    const newsletterImages = page.getByRole("img");
    await expect(newsletterImages.first()).toBeVisible();

    // Check that site groups are visible (DEN, DAN, LAN, SAN)
    const siteGroups = page.locator("h2").filter({ hasText: /^(DEN|DAN|LAN|SAN)$/ });
    await expect(siteGroups.first()).toBeVisible();
  });

  test("has no RGAA Level AA accessibility violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await page.waitForSelector('text="Newsletters"');

    const results = await checkA11y(page);

    expect(results.violations).toEqual([]);
  });
});

