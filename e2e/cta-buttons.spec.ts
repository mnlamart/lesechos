import { test, expect } from "@playwright/test";
import { NEWSLETTER_ITEMS } from "../src/mocks/newsletters";
import { USER_WITH_MULTIPLE_SUBSCRIPTION } from "../src/mocks/user";
import { hasAccessToNewsletter } from "../src/utils/subscriptions";

// Calculate expected counts based on mock data
const expectedInscrireCount = NEWSLETTER_ITEMS.filter((newsletter) =>
  hasAccessToNewsletter(USER_WITH_MULTIPLE_SUBSCRIPTION, newsletter)
).length;
const expectedAbonnerCount =
  NEWSLETTER_ITEMS.length - expectedInscrireCount;

test.describe("Dynamic CTA Buttons", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    // Wait for page to load
    await page.waitForSelector('text="Newsletters"');
  });

  test("buttons display correct text ('S'inscrire' vs 'S'abonner')", async ({
    page,
  }) => {
    // Wait for buttons to be visible
    await page.waitForSelector('button:has-text("S\u2019inscrire"), button:has-text("S\u2019abonner")');

    const inscrireButtons = page.locator('button:has-text("S\u2019inscrire")');
    const abonnerButtons = page.locator('button:has-text("S\u2019abonner")');

    const inscrireCount = await inscrireButtons.count();
    const abonnerCount = await abonnerButtons.count();

    // Default user (USER_WITH_MULTIPLE_SUBSCRIPTION) should have exact expected counts
    expect(inscrireCount).toBe(expectedInscrireCount);
    expect(abonnerCount).toBe(expectedAbonnerCount);
  });

  test("newsletters with empty subscriptions show 'S'inscrire' for default user", async ({
    page,
  }) => {
    await page.waitForSelector('button:has-text("S\u2019inscrire"), button:has-text("S\u2019abonner")');

    // Count newsletters with empty subscriptions array
    const newslettersWithNoRestrictions = NEWSLETTER_ITEMS.filter(
      (n) => n.subscriptions.length === 0
    ).length;

    // All newsletters with no restrictions should show "S'inscrire"
    // Verify that we have at least this many "S'inscrire" buttons
    const inscrireButtons = page.locator('button:has-text("S\u2019inscrire")');
    const count = await inscrireButtons.count();
    expect(count).toBeGreaterThanOrEqual(newslettersWithNoRestrictions);
  });

  test("restricted newsletters show correct button based on default user's subscriptions", async ({
    page,
  }) => {
    await page.waitForSelector('button:has-text("S\u2019inscrire"), button:has-text("S\u2019abonner")');

    // Default user is USER_WITH_MULTIPLE_SUBSCRIPTION (has RIGHT_1 and RIGHT_2)
    // Verify exact counts match expected values
    const inscrireButtons = page.locator('button:has-text("S\u2019inscrire")');
    const abonnerButtons = page.locator('button:has-text("S\u2019abonner")');

    expect(await inscrireButtons.count()).toBe(expectedInscrireCount);
    expect(await abonnerButtons.count()).toBe(expectedAbonnerCount);
  });
});

