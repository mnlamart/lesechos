import { describe, it, expect } from "vitest";
import { hasAccessToNewsletter } from "./subscriptions";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";

describe("hasAccessToNewsletter", () => {
  it("should return true for all users when newsletter has empty subscriptions array", () => {
    const newsletterWithNoRestrictions = {
      id: "test-1",
      image: "test.jpg",
      description: "Test",
      title: "Test Newsletter",
      site: "TEST",
      subscriptions: [],
    };

    expect(
      hasAccessToNewsletter(USER_WITH_ONE_SUBSCRIPTION, newsletterWithNoRestrictions)
    ).toBe(true);
    expect(
      hasAccessToNewsletter(USER_WITHOUT_SUBSCRIPTION, newsletterWithNoRestrictions)
    ).toBe(true);
    expect(
      hasAccessToNewsletter(
        USER_WITH_MULTIPLE_SUBSCRIPTION,
        newsletterWithNoRestrictions
      )
    ).toBe(true);
  });

  it("should return true when user has matching subscription", () => {
    const newsletterWithRight1 = NEWSLETTER_ITEMS.find(
      (n) => n.subscriptions.includes("RIGHT_1") && n.subscriptions.length > 0
    );

    expect(newsletterWithRight1).toBeDefined();
    expect(
      hasAccessToNewsletter(USER_WITH_ONE_SUBSCRIPTION, newsletterWithRight1!)
    ).toBe(true);
    expect(
      hasAccessToNewsletter(USER_WITH_MULTIPLE_SUBSCRIPTION, newsletterWithRight1!)
    ).toBe(true);
  });

  it("should return false when user does not have matching subscription", () => {
    const newsletterWithRight1 = NEWSLETTER_ITEMS.find(
      (n) => n.subscriptions.includes("RIGHT_1") && n.subscriptions.length > 0
    );

    expect(newsletterWithRight1).toBeDefined();
    expect(
      hasAccessToNewsletter(USER_WITHOUT_SUBSCRIPTION, newsletterWithRight1!)
    ).toBe(false);
  });

  it("should return true when user with multiple subscriptions accesses newsletter with RIGHT_2", () => {
    const newsletterWithRight2 = NEWSLETTER_ITEMS.find(
      (n) => n.subscriptions.includes("RIGHT_2")
    );

    expect(newsletterWithRight2).toBeDefined();
    expect(
      hasAccessToNewsletter(USER_WITH_MULTIPLE_SUBSCRIPTION, newsletterWithRight2!)
    ).toBe(true);
  });

  it("should return false for user with no subscriptions when newsletter is restricted", () => {
    const restrictedNewsletter = NEWSLETTER_ITEMS.find(
      (n) => n.subscriptions.length > 0
    );

    expect(restrictedNewsletter).toBeDefined();
    expect(
      hasAccessToNewsletter(USER_WITHOUT_SUBSCRIPTION, restrictedNewsletter!)
    ).toBe(false);
  });
});

