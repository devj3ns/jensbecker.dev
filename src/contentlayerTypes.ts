// In order to itrate over the string literal types construct the type like this:
export const tags = ["webapp", "mobileapp", "website", "seo"] as const;
export type tags = (typeof tags)[number];
