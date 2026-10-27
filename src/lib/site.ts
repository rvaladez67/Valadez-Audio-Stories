export const siteConfig = {
  name: "Valadez Audio Stories",
  title: "Valadez Audio Stories | Original Audio Dramas",
  description:
    "Original serialized audio dramas across romance, suspense, corporate intrigue, fantasy, and supernatural adventure. Listen to our series on Pocket FM.",
  facebookUrl: "https://www.facebook.com/valadezaudiostories",
  instagramUrl: "https://www.instagram.com/valadezaudiostories/",
};

/** Canonical origin. Set NEXT_PUBLIC_SITE_URL once a custom domain is attached. */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}
