import type { AxeResults, RunOptions } from "axe-core";

/**
 * RGAA Level AA configuration for Axe Core
 * RGAA is aligned with WCAG 2.1 Level AA
 */
export const RGAA_AA_CONFIG: RunOptions = {
  runOnly: {
    type: "tag",
    values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
  },
};

/**
 * Helper function to format Axe violations for better test output
 */
export function formatAxeViolations(violations: AxeResults["violations"]): string {
  if (violations.length === 0) {
    return "No accessibility violations found.";
  }

  return violations
    .map((violation) => {
      const nodes = violation.nodes.map((node) => {
        const target = node.target.join(", ");
        const summary = node.failureSummary || "No summary available";
        return `  - ${target}\n    ${summary}`;
      });

      return `\n${violation.id}: ${violation.help}\n  Impact: ${violation.impact}\n  Help URL: ${violation.helpUrl}\n${nodes.join("\n")}`;
    })
    .join("\n\n");
}

