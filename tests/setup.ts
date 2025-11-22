import "@testing-library/jest-dom";
import "vitest-axe/extend-expect";
import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";

// Extend Vitest matchers with axe-core
expect.extend(matchers);

