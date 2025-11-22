import "@testing-library/jest-dom";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import { expect, vi } from "vitest";
import React from "react";

// Extend Vitest matchers with axe-core
expect.extend(matchers);

// Mock Next.js Image component
// Next.js Image requires the Next.js runtime which isn't available in unit tests
// This mock converts it to a regular img tag and filters out Next.js-specific props
vi.mock("next/image", () => ({
  default: (props: any) => {
    // Filter out Next.js-specific props that aren't valid HTML attributes
    const { fill, sizes, priority, loading, fetchPriority, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return React.createElement("img", imgProps);
  },
}));

