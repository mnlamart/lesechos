import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NewsletterCard from "./NewsletterCard";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { renderWithStyledComponents } from "~tests/helpers/test-utils";
import { hasAccessToNewsletter } from "@/utils/subscriptions";

describe("NewsletterCard", () => {
  // Find a newsletter that USER_WITH_ONE_SUBSCRIPTION has access to
  const newsletterWithAccess = NEWSLETTER_ITEMS.find(
    (n) => hasAccessToNewsletter(USER_WITH_ONE_SUBSCRIPTION, n)
  )!;

  // Find a newsletter that USER_WITHOUT_SUBSCRIPTION does NOT have access to
  const newsletterWithoutAccess = NEWSLETTER_ITEMS.find(
    (n) => !hasAccessToNewsletter(USER_WITHOUT_SUBSCRIPTION, n)
  )!;

  const newsletterWithNoRestrictions = NEWSLETTER_ITEMS.find(
    (n) => n.subscriptions.length === 0
  )!;

  it("shows 'S'inscrire' button when user has access", () => {
    renderWithStyledComponents(
      <NewsletterCard
        newsletter={newsletterWithAccess}
        user={USER_WITH_ONE_SUBSCRIPTION}
      />
    );

    const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]nscrire/);
  });

  it("shows 'S'abonner' button when user doesn't have access", () => {
    renderWithStyledComponents(
      <NewsletterCard
        newsletter={newsletterWithoutAccess}
        user={USER_WITHOUT_SUBSCRIPTION}
      />
    );

    const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]bonner/);
  });

  it("shows 'S'inscrire' for all users when newsletter has no restrictions", () => {
    renderWithStyledComponents(
      <NewsletterCard
        newsletter={newsletterWithNoRestrictions}
        user={USER_WITHOUT_SUBSCRIPTION}
      />
    );

    const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]nscrire/);
  });

  describe("with USER_WITH_ONE_SUBSCRIPTION", () => {
    it("shows correct button for newsletter with RIGHT_1", () => {
      renderWithStyledComponents(
        <NewsletterCard
          newsletter={newsletterWithAccess}
          user={USER_WITH_ONE_SUBSCRIPTION}
        />
      );

      const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]nscrire/);
    });
  });

  describe("with USER_WITHOUT_SUBSCRIPTION", () => {
    it("shows 'S'abonner' for restricted newsletters", () => {
      renderWithStyledComponents(
        <NewsletterCard
          newsletter={newsletterWithAccess}
          user={USER_WITHOUT_SUBSCRIPTION}
        />
      );

      const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]bonner/);
    });
  });

  describe("with USER_WITH_MULTIPLE_SUBSCRIPTION", () => {
    it("shows 'S'inscrire' for newsletter with RIGHT_2", () => {
      // Find a newsletter that USER_WITH_MULTIPLE_SUBSCRIPTION has access to
      const newsletterWithRight2 = NEWSLETTER_ITEMS.find(
        (n) => hasAccessToNewsletter(USER_WITH_MULTIPLE_SUBSCRIPTION, n) && n.subscriptions.includes("RIGHT_2")
      )!;

      renderWithStyledComponents(
        <NewsletterCard
          newsletter={newsletterWithRight2}
          user={USER_WITH_MULTIPLE_SUBSCRIPTION}
        />
      );

      const button = screen.getByRole("button");
    expect(button.textContent).toMatch(/S\u2019[ia]nscrire/);
    });
  });
});

