import type { User, Newsletter } from "@/types";

/**
 * Checks if a user has access to a newsletter
 * - If newsletter.subscriptions is empty, everyone has access
 * - Otherwise, user must have at least one matching subscription
 */
export function hasAccessToNewsletter(
  user: User,
  newsletter: Newsletter
): boolean {
  if (newsletter.subscriptions.length === 0) {
    return true;
  }
  
  return newsletter.subscriptions.some((sub) =>
    user.subscriptions.includes(sub)
  );
}

