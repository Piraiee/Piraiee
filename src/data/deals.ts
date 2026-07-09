export type Deal = {
  name: string;
  summary: string;
  details: string;
  href: string;
  code?: string;
  category: "Mobility" | "Workspace" | "Operations" | "People";
};

export const deals: Deal[] = [
  {
    name: "Bolt Business",
    category: "Mobility",
    summary: "Smarter travel for teams.",
    details:
      "Manage company rides, budgets, and travel spend from one platform. New teams can get 50% off the first 25 rides.",
    href: "https://get.business.bolt.eu",
    code: "BBSELECT"
  },
  {
    name: "Free Day at CIC",
    category: "Workspace",
    summary: "A complimentary day inside CIC Warsaw.",
    details:
      "Tour one of Warsaw's startup hubs, meet the community, and test the workspace with a free day pass.",
    href: "/contact/?topic=deals"
  },
  {
    name: "PandaDoc",
    category: "Operations",
    summary: "Proposal, document, and e-signature workflows.",
    details:
      "Build, approve, sign, and track business documents from a single operating layer. Eligible teams can save up to 46%.",
    href: "/contact/?topic=deals"
  },
  {
    name: "Deel Payroll",
    category: "People",
    summary: "Global payroll and HR infrastructure.",
    details:
      "Hire and manage international teams with compliant payroll, contracts, onboarding, and HR tools across 150+ countries.",
    href: "/contact/?topic=deals"
  }
];
