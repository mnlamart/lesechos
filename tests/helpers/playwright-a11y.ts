import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import { RGAA_AA_CONFIG } from "./accessibility";

/**
 * Helper function to run accessibility analysis with RGAA Level AA configuration
 */
export async function checkA11y(page: Page) {
  const builder = new AxeBuilder({ page });
  const results = await builder.options(RGAA_AA_CONFIG).analyze();
  return results;
}

