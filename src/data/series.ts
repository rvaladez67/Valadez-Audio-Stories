export type SeriesStatus = "published" | "draft";

export interface Series {
  /** Stable identifier; also sent with analytics click events. */
  id: string;
  /** Exact public series title. */
  title: string;
  genres: string[];
  /** Spoiler-safe marketing hook. */
  description: string;
  /** Path under /public. Official artwork only. */
  coverImage: string;
  pocketFmUrl: string;
  displayOrder: number;
  /** Optional small label shown above the card, e.g. "Featured Romance Drama". */
  featuredLabel?: string;
  /** Only "published" series appear on the site. */
  status: SeriesStatus;
}

export const series: Series[] = [
  {
    id: "the-wife-he-failed",
    title: "The Wife He Failed",
    genres: ["Romance", "Betrayal", "Second Chances"],
    description:
      "He believed the accusations and lost the woman who loved him. Three years later, Isabella Morgan returns with a life she's rebuilt and secrets that could change everything.",
    coverImage: "/images/the-wife-he-failed.png",
    pocketFmUrl:
      "https://pocketfm.com/show/the-wife-he-failed/86452e8079723e6a18dcfaace37efb557d4904e2",
    displayOrder: 1,
    featuredLabel: "Featured Romance Drama",
    status: "published",
  },
  {
    id: "sealed-dragons-awakening",
    title: "Sealed Dragon's Awakening",
    genres: ["Dark Fantasy", "Supernatural", "Revenge"],
    description:
      "Fernando Ashborne is an overlooked analyst caught in a dangerous conspiracy. As betrayal closes in, a hidden legacy threatens to transform everything he believes about himself.",
    coverImage: "/images/sealed-dragons-awakening.png",
    pocketFmUrl:
      "https://pocketfm.com/show/sealed-dragons-awakening/361c2a22e4f6196adcd4bba7178dd411638e0931",
    displayOrder: 2,
    status: "published",
  },
];

export function getPublishedSeries(): Series[] {
  return series
    .filter((s) => s.status === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
