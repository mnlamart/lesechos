import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import type { Newsletter } from "@/types";

/**
 * Simulates fetching newsletters from an API
 * Returns typed newsletter data with a simulated network delay
 */
export async function fetchNewsletters(): Promise<Newsletter[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NEWSLETTER_ITEMS;
}

