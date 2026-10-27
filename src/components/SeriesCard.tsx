"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import type { Series } from "@/data/series";

export function SeriesCard({ series, priority }: { series: Series; priority?: boolean }) {
  const headingId = `series-${series.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-gold/25 bg-navy shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] transition hover:border-gold/60 md:hover:-translate-y-1"
    >
      {/* Square frame + object-contain: the full official cover is always shown, never cropped. */}
      <div className="relative aspect-square w-full bg-midnight">
        <Image
          src={series.coverImage}
          alt={`Official cover art for ${series.title}`}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <ul className="flex flex-wrap gap-2" aria-label="Genres">
          {series.genres.map((genre) => (
            <li
              key={genre}
              className="rounded-full border border-gold/40 px-3 py-1 text-xs font-medium tracking-wide text-champagne"
            >
              {genre}
            </li>
          ))}
        </ul>

        <h3 id={headingId} className="font-display text-3xl font-semibold leading-tight text-champagne">
          {series.title}
        </h3>

        <p className="flex-1 text-base leading-relaxed text-warm-white/85">{series.description}</p>

        <a
          href={series.pocketFmUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("pocketfm_click", { story: series.id })}
          className="mt-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gold px-6 text-base font-semibold text-midnight shadow-lg shadow-gold/10 transition hover:bg-gold-bright"
        >
          Listen on Pocket FM
          <span className="sr-only"> — {series.title} (opens in a new tab)</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </article>
  );
}
