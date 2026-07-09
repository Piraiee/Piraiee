export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
};

export const posts: Post[] = [
  {
    slug: "iceye-secures-200m",
    title: "ICEYE Secures EUR 200M to Scale the World's Largest Satellite Constellation",
    date: "2025-12-12",
    category: "European Tech",
    excerpt:
      "A concise read on how satellite infrastructure, defense demand, and European deep tech capital are converging."
  },
  {
    slug: "pfr-ventures-commits-44m",
    title: "PFR Ventures Commits EUR 44.5M to Strengthen Poland's VC Ecosystem",
    date: "2025-12-12",
    category: "Venture Capital",
    excerpt:
      "What fresh fund commitments mean for emerging managers, founders, and Poland's next wave of scaleups."
  },
  {
    slug: "cyber-folks-prestashop",
    title: "cyber_Folks Enters the Global E-commerce Premier League with PrestaShop Acquisition",
    date: "2025-12-12",
    category: "M&A",
    excerpt:
      "A snapshot of the strategic logic behind a Polish company expanding into global commerce infrastructure."
  }
];
