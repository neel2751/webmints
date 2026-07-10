// Central site config so the same codebase can be deployed on multiple
// domains (e.g. webmints.in, webmints.co.uk). Set NEXT_PUBLIC_SITE_URL
// per deployment; the fallback keeps local dev working.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.webmints.in"
).replace(/\/+$/, "");

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@webmints.in";
