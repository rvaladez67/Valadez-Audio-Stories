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
  {
    id: "the-vote-they-feared",
    title: "The Vote They Feared",
    genres: ["Corporate Thriller", "Family Drama", "Secrets"],
    description:
      "Daniel Archer loses a contract after refusing to sign off on a failed freight test. Then he gets a shot at directing the largest voting bloc at Wren Consolidated, and the executive who cut him loose retaliates by rerouting a truck full of groceries away from the town counting on it. As Daniel takes on one of the company’s most powerful men, his eleven-year-old daughter is waiting to see if he’ll keep a simple promise.",
    coverImage: "/images/the-vote-they-feared.png",
    pocketFmUrl:
      "https://pocketfm.com/show/the-vote-they-feared/132e2d777f499374b38eda34fb260d429e996f9b",
    displayOrder: 3,
    status: "published",
  },
];

export function getPublishedSeries(): Series[] {
  return series
    .filter((s) => s.status === "published")
    .sort((a, b) => a.displayOrder - b.displayOrder);
}
