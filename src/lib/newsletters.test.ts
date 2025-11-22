import { describe, it, expect } from "vitest";
import { fetchNewsletters } from "./newsletters";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

describe("fetchNewsletters", () => {
  it("should return correct newsletter structure matching NEWSLETTER_ITEMS", async () => {
    const newsletters = await fetchNewsletters();
    expect(newsletters).toEqual(NEWSLETTER_ITEMS);
  });
});

