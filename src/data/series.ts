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
      "When Isabella Morgan was accused of stealing millions, her billionaire husband believed the evidence and divorced her. Three years later, she returns to Manhattan with a thriving business and a daughter Alexander Sterling never knew he had. He wants a place in their lives. Isabella wants to know who set her up. The closer they get to the truth, the clearer it becomes why someone in the Sterling family needed their marriage to end. Now their daughter stands to inherit a share of the family fortune.",
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
      "Fernando Ashborne gets paid to spot what everyone else misses. He never sees his own betrayal coming. When a conspiracy makes him a target, the overlooked analyst discovers a dragon’s power sealed in his blood. It might keep him alive long enough to find out who set him up. But every time he draws on it, he loses a little more of himself. How much will be left by the time he gets his revenge?",
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
    coverImage: "/images/the-vote-they-feared-v2.png",
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
