import Image from "next/image";
import { SeriesCard } from "@/components/SeriesCard";
import { SocialLinks } from "@/components/SocialIcons";
import { getPublishedSeries } from "@/data/series";
import { siteConfig } from "@/lib/site";

const waveHeights = [30, 55, 80, 45, 100, 65, 40, 85, 50, 70, 35, 60, 90, 45, 25];

export default function Home() {
  const stories = getPublishedSeries();

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-gold/20 bg-midnight/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl sm:h-16 items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <Image
              src="/images/vas-logo.png"
              alt="Valadez Audio Stories logo"
              width={44}
              height={44}
              sizes="44px"
              className="h-10 w-10 shrink-0 rounded-full sm:h-11 sm:w-11"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-wide text-champagne sm:text-xl">
              {siteConfig.name}
            </span>
          </a>
          <a href="#stories" className="hidden shrink-0 rounded-lg px-3 py-2 text-sm sm:inline-flex font-medium text-gold hover:text-gold-bright">
            Explore Stories
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--color-navy-light),var(--color-midnight)_70%)]">
          <div className="mx-auto grid max-w-6xl items-center gap-7 px-4 pb-4 pt-6 sm:gap-10 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-[1.2fr_1fr] lg:pt-24">
            <div>
              <p className="mb-3 text-xs sm:mb-4 font-semibold uppercase tracking-[0.3em] text-gold">
                Original Audio Dramas
              </p>
              <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] text-champagne sm:text-6xl lg:text-7xl">
                One Story Is Never Enough.
              </h1>
              <p className="mt-4 max-w-xl sm:mt-5 text-lg italic leading-relaxed text-warm-white/85 sm:text-xl">
                Love. Betrayal. Power. Secrets. Extraordinary worlds. Discover original audio dramas that keep you listening.
              </p>
              <a
                href="#stories"
                className="mt-5 inline-flex sm:mt-8 min-h-14 w-full items-center justify-center rounded-xl bg-gold px-8 text-base font-semibold text-midnight shadow-lg shadow-gold/10 transition hover:bg-gold-bright sm:w-auto"
              >
                Explore Our Stories
              </a>
            </div>

            <div className="hidden items-center justify-center lg:flex" aria-hidden="true">
              <Image
                src="/images/vas-logo.png"
                alt=""
                width={420}
                height={420}
                sizes="420px"
                className="h-auto w-[420px] rounded-full shadow-[0_0_80px_-10px_rgba(212,175,102,0.35)]"
              />
            </div>
          </div>

          <div className="pointer-events-none flex h-6 items-end justify-center gap-1.5 pb-2 sm:h-10 sm:pb-3" aria-hidden="true">
            {waveHeights.map((h, i) => (
              <span
                key={i}
                className="wave-bar w-1 rounded-full bg-gold/60"
                style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </section>

        <section id="stories" className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-20">
          <div className="mb-6 text-center sm:mb-10">
            <h2 className="font-display text-4xl font-semibold text-champagne sm:text-5xl">Choose Your Story</h2>
            <p className="mx-auto mt-2 max-w-xl text-warm-white/75 sm:mt-3">
              Three original serialized audio dramas. Pick a world and start listening.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((s, i) => (
              <SeriesCard key={s.id} series={s} priority={i === 0} />
            ))}
          </div>
        </section>

        <section className="border-y border-gold/20 bg-navy">
          <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-14 text-center sm:px-6 sm:py-16">
            <h2 className="font-display text-3xl font-semibold text-champagne sm:text-4xl">
              Follow the Stories Beyond the Episodes
            </h2>
            <p className="mt-3 text-warm-white/80">
              New releases, character reveals, dramatic moments, and behind-the-scenes updates.
            </p>
            <div className="mt-8">
              <SocialLinks size="lg" />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-midnight">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-10 text-center sm:px-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/vas-logo.png"
              alt="Valadez Audio Stories logo"
              width={40}
              height={40}
              sizes="40px"
              className="h-10 w-10 rounded-full"
              loading="lazy"
            />
            <span className="font-display text-xl font-semibold text-champagne">{siteConfig.name}</span>
          </div>
          <SocialLinks size="sm" />
          <p className="max-w-xl text-sm text-warm-white/70">
            Our series are available to listen to on Pocket FM. Valadez Audio Stories is an independent
            creator and is not owned, operated, or endorsed by Pocket FM.
          </p>
          <p className="text-sm text-warm-white/60">
            © {new Date().getFullYear()} Valadez Audio Stories. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
