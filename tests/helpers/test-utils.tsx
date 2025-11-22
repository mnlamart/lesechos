import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import StyledComponentsRegistry from "@/components/StyledComponentsRegistry";

export function renderWithStyledComponents(ui: ReactElement) {
  return render(ui, {
    wrapper: ({ children }) => (
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    ),
  });
}

