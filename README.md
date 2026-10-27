# Valadez Audio Stories

Mobile-first landing page (Next.js App Router, TypeScript, Tailwind CSS v4) that sends social visitors to the series on Pocket FM.

## Structure

```
public/images/        Official artwork (logo + one cover per series). Never edit these.
src/data/series.ts    Single source of truth for all series
src/components/       SeriesCard (cover, genres, hook, tracked Pocket FM button), SocialIcons
src/lib/site.ts       Brand name, description, social URLs, site URL helper
src/app/              layout (metadata, fonts, analytics), page, sitemap, robots,
                      icon.png / apple-icon.png (favicon), opengraph-image.png / twitter-image.png
```

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

## Deploy (Vercel + GitHub)

1. Push this folder to a GitHub repository.
2. In Vercel: Add New > Project > import the repo. Defaults (Next.js) are correct.
3. Every branch/PR gets a **Preview deployment** URL. Review there.
4. Production deploys only when you merge to the production branch (`main`). Do not merge until approved.
5. After attaching a custom domain, set `NEXT_PUBLIC_SITE_URL` (e.g. `https://yourdomain.com`) in Vercel env vars so canonical, sitemap and Open Graph URLs use it.
6. Project > Analytics > Enable Web Analytics.

## Analytics

Uses Vercel Web Analytics (cookieless, no personal data, no ad pixels). It reports visits, device type and referrers. Each Pocket FM click also sends a `pocketfm_click` event with `story: <series id>`. Custom events require a Vercel plan that supports them; page-view analytics works on all plans. This measures outbound clicks only, not completed listening.

## Add a series

1. Drop the official cover in `public/images/` (e.g. `new-story.png`).
2. Add one object to `src/data/series.ts` (`id`, `title`, `genres`, `description`, `coverImage`, `pocketFmUrl`, `displayOrder`, `status: "published"`).
3. Use `status: "draft"` to keep an entry hidden until launch.

Layout is a 3-column grid on desktop; a fourth card wraps to a new row automatically.

## Change a Pocket FM URL

Edit `pocketFmUrl` for that entry in `src/data/series.ts`, commit, and deploy.
