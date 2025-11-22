import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import NewsletterGroup from "./NewsletterGroup";
import {
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { renderWithStyledComponents } from "~tests/helpers/test-utils";

describe("NewsletterGroup", () => {
  const denNewsletters = NEWSLETTER_ITEMS.filter((n) => n.site === "DEN");
  const group = {
    site: "DEN",
    newsletters: denNewsletters,
  };

  it("groups newsletters correctly by site", () => {
    renderWithStyledComponents(
      <NewsletterGroup group={group} user={USER_WITH_MULTIPLE_SUBSCRIPTION} />
    );

    denNewsletters.forEach((newsletter) => {
      expect(screen.getByText(newsletter.title)).toBeInTheDocument();
    });
  });

  it("renders correct number of cards per group", () => {
    renderWithStyledComponents(
      <NewsletterGroup group={group} user={USER_WITH_MULTIPLE_SUBSCRIPTION} />
    );

    const cards = screen.getAllByRole("button");
    expect(cards.length).toBe(denNewsletters.length);
  });
});

