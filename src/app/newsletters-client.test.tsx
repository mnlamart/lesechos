import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import NewslettersClient from "./newsletters-client";
import { NEWSLETTER_ITEMS } from "@/mocks/newsletters";
import { renderWithStyledComponents } from "~tests/helpers/test-utils";

describe("NewslettersClient", () => {
  it("renders newsletter page with heading and description", () => {
    renderWithStyledComponents(<NewslettersClient newsletters={NEWSLETTER_ITEMS} />);

    expect(screen.getByRole("heading", { level: 1, name: "Newsletters" })).toBeInTheDocument();
    expect(
      screen.getByText(/Dans cette page, vous retrouvez/)
    ).toBeInTheDocument();
  });

  it("renders newsletter groups", () => {
    renderWithStyledComponents(<NewslettersClient newsletters={NEWSLETTER_ITEMS} />);

    // Check for at least one site group heading
    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.length).toBeGreaterThan(0);
  });
});

