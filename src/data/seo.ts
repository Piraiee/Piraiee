export type SeoEntry = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  label: string;
};

export const seo = {
  home: {
    title: "Ahmad Piraiee",
    description:
      "Ahmad Piraiee helps founders, executives, and innovation teams challenge assumptions, validate opportunities, and turn uncertainty into executable direction.",
    image: "/social/core/home-landscape.png",
    imageAlt: "Turn unclear ideas into executable direction with Ahmad Piraiee.",
    label: "/ 0 / HOME"
  },
  about: {
    title: "About Ahmad Piraiee",
    description:
      "Meet Ahmad Piraiee, a strategist and execution partner helping founders, investors, companies, and innovation teams make better decisions before committing resources.",
    image: "/social/core/about-landscape.png",
    imageAlt: "Ahmad Piraiee — turning uncertainty into execution.",
    label: "/ 01 / ABOUT"
  },
  startups: {
    title: "Startup Advisory and Venture Building",
    description:
      "Startup clarity, founder advisory, and AI-era venture building for teams that want to validate the right problem before accelerating execution.",
    image: "/social/core/startups-landscape.png",
    imageAlt: "Building a startup has changed. Most advice has not.",
    label: "/ 02 / STARTUPS"
  },
  deals: {
    title: "Curated Startup and Operator Deals",
    description:
      "A selective collection of useful software, services, and partner offers for founders, operators, and startup teams.",
    image: "/social/core/deals-landscape.png",
    imageAlt: "Curated offers for founders, operators, and startup teams.",
    label: "/ 03 / DEALS"
  },
  writing: {
    title: "Writing on Startups, Capital, and Technology",
    description:
      "High-signal writing by Ahmad Piraiee on startups, venture capital, technology, markets, operators, and European ecosystem momentum.",
    image: "/social/core/writing-landscape.png",
    imageAlt: "Writing by Ahmad Piraiee on startups, capital, markets, and ecosystems.",
    label: "/ 04 / WRITING"
  },
  reading: {
    title: "Reading — Books That Shaped My Thinking",
    description:
      "Books and ideas that shape Ahmad Piraiee's thinking on startups, AI, strategy, technology, behavioral science, and human decision-making.",
    image: "/social/core/reading-landscape.png",
    imageAlt: "Books that shaped Ahmad Piraiee's thinking.",
    label: "/ 05 / READING"
  }
} satisfies Record<string, SeoEntry>;

export type SeoKey = keyof typeof seo;
