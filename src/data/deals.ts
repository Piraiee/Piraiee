export type Deal = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  details: string;
  href: string;
  featuredImage: string;
};

const defaultDealImage =
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80";

export const deals: Deal[] = [
  {
    slug: "manychat",
    name: "Manychat",
    category: "Chat Marketing",
    summary: "50% off your first two months of Manychat Pro.",
    details:
      "Automate conversations, lead capture, and customer engagement across Instagram, WhatsApp, TikTok, and Messenger while saving 50% on your first two months of Pro.",
    href: "https://manychat.partnerlinks.io/o97t6dxkhfxu-wki14",
    featuredImage: defaultDealImage
  },
  {
    slug: "dify",
    name: "Dify",
    category: "AI Workflows",
    summary: "Build and deploy production-ready agentic workflows.",
    details:
      "Create AI agents, visual workflows, and knowledge pipelines in one collaborative platform, then deploy them through Dify Cloud, a private environment, or a self-hosted setup.",
    href: "https://affiliate.dify.ai/ifomitofn80k-nusw0l",
    featuredImage: defaultDealImage
  },
  {
    slug: "bolt-for-business",
    name: "Bolt for Business",
    category: "Mobility",
    summary: "Business travel and team ride management.",
    details:
      "Manage company rides, budgets, and travel spend in one place. Use code BBSELECT when activating the offer.",
    href: "https://get.business.bolt.eu/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "cic-warsaw",
    name: "CIC Warsaw",
    category: "Workspace",
    summary: "Startup workspace access in Warsaw.",
    details:
      "Request access to CIC Warsaw, meet the community, and test a professional workspace built around founders and innovation teams.",
    href: "https://15ii.share.hsforms.com/2TWpPGNxkTlG320nYTMS6ww",
    featuredImage: defaultDealImage
  },
  {
    slug: "pandadoc",
    name: "PandaDoc",
    category: "Documents",
    summary: "Proposal, contract, and e-signature workflows.",
    details:
      "Create, approve, sign, and track business documents from one operating layer for sales, partnerships, and client work.",
    href: "https://pandadoc.partnerlinks.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "socialbee",
    name: "SocialBee",
    category: "Marketing",
    summary: "Social media planning for lean teams.",
    details:
      "Plan, publish, recycle, and organize social content across channels without adding more manual work to the team.",
    href: "https://get.socialbee.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "deel",
    name: "Deel",
    category: "People",
    summary: "Global hiring, payroll, and HR operations.",
    details:
      "Hire and manage international teams with payroll, contracts, onboarding, compliance, and HR workflows across markets.",
    href: "https://get.deel.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Voice",
    summary: "AI voice generation for content and products.",
    details:
      "Create realistic voiceovers, audio content, and voice experiences for products, media, education, and marketing.",
    href: "https://try.elevenlabs.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "surfer",
    name: "Surfer",
    category: "SEO",
    summary: "Content optimization for search visibility.",
    details:
      "Plan, write, and optimize SEO content with data-backed guidance for teams that need clearer organic growth execution.",
    href: "https://get.surferseo.com/piraiee-mc",
    featuredImage: defaultDealImage
  },
  {
    slug: "flippa",
    name: "Flippa",
    category: "Marketplaces",
    summary: "Buy and sell digital businesses.",
    details:
      "Explore websites, apps, SaaS products, and digital assets for acquisition, sale, or market research.",
    href: "https://referral.flippa.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "learnworlds",
    name: "LearnWorlds",
    category: "Education",
    summary: "Online course and learning business platform.",
    details:
      "Build, sell, and manage learning experiences, academies, and training products from a professional course platform.",
    href: "https://get.learnworlds.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "connecteam",
    name: "Connecteam",
    category: "Operations",
    summary: "Workforce management for distributed teams.",
    details:
      "Coordinate scheduling, communication, tasks, training, and field operations from a single mobile-first team platform.",
    href: "https://partners.connecteam.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "jibble",
    name: "Jibble",
    category: "Time Tracking",
    summary: "Time tracking and attendance management.",
    details:
      "Track time, attendance, timesheets, and team productivity with tools suited for remote, hybrid, and operational teams.",
    href: "https://affiliate.jibble.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "partnerstack",
    name: "PartnerStack",
    category: "Partnerships",
    summary: "Partner and affiliate program management.",
    details:
      "Launch, manage, and scale partner programs with tracking, payouts, reporting, and partner relationship workflows.",
    href: "https://try.partnerstack.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "cloudtalk",
    name: "CloudTalk",
    category: "Sales",
    summary: "Cloud calling for sales and support teams.",
    details:
      "Run business calling, call routing, recordings, analytics, and customer conversations through a modern phone system.",
    href: "https://get.cloudtalk.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "wati",
    name: "Wati.io",
    category: "Messaging",
    summary: "WhatsApp engagement for business teams.",
    details:
      "Manage WhatsApp conversations, automation, broadcasts, and customer support workflows from a team-ready inbox.",
    href: "https://affiliates.wati.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "angels-partners",
    name: "Angels Partners",
    category: "Fundraising",
    summary: "Investor discovery for startup fundraising.",
    details:
      "Research investors, build targeted outreach lists, and improve fundraising preparation with a startup-focused investor database.",
    href: "https://try.angelspartners.com/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "folk",
    name: "folk",
    category: "CRM",
    summary: "A relationship CRM for modern teams.",
    details:
      "Organize contacts, pipelines, outreach, and relationship workflows for sales, recruiting, partnerships, and founder networks.",
    href: "https://try.folk.app/b1ib401l9auv",
    featuredImage: defaultDealImage
  },
  {
    slug: "apollo",
    name: "Apollo",
    category: "Sales Intelligence",
    summary: "Prospecting data and outbound sales workflows.",
    details:
      "Find prospects, build targeted lists, run outreach, and manage sales engagement from a data-rich go-to-market platform.",
    href: "https://get.apollo.io/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "lindy",
    name: "Lindy",
    category: "AI Agents",
    summary: "AI assistants for business workflows.",
    details:
      "Create AI agents that help with research, email, scheduling, customer tasks, and repeatable operating workflows.",
    href: "https://try.lindy.ai/piraiee",
    featuredImage: defaultDealImage
  },
  {
    slug: "reply-io",
    name: "Reply.io",
    category: "Sales Engagement",
    summary: "Multichannel outreach for revenue teams.",
    details:
      "Build and automate outbound sequences across email, calls, LinkedIn, and tasks while keeping sales activity organized.",
    href: "https://get.reply.io/dkyqija8u1gn",
    featuredImage: defaultDealImage
  },
  {
    slug: "increff",
    name: "Increff",
    category: "Retail Operations",
    summary: "Inventory and order operations for commerce.",
    details:
      "Improve merchandising, inventory accuracy, fulfillment, and omnichannel operations for retail and e-commerce teams.",
    href: "https://partners.increff.com/ksxppiiqchaa",
    featuredImage: defaultDealImage
  },
  {
    slug: "emergent",
    name: "Emergent",
    category: "AI Development",
    summary: "AI-native product building workflows.",
    details:
      "Accelerate the path from idea to working software with AI-assisted development and product execution tools.",
    href: "https://get.emergent.sh/pmpwy7u3g6su",
    featuredImage: defaultDealImage
  },
  {
    slug: "getresponse",
    name: "GetResponse",
    category: "Marketing Automation",
    summary: "Email marketing and conversion automation.",
    details:
      "Run email campaigns, landing pages, funnels, webinars, and marketing automation from one growth platform.",
    href: "https://try.getresponsetoday.com/cdxd2tbytsn1",
    featuredImage: defaultDealImage
  },
  {
    slug: "idrive",
    name: "IDrive",
    category: "Cloud Backup",
    summary: "Cloud backup and storage protection.",
    details:
      "Protect devices, files, servers, and business data with cloud backup, sync, restore, and storage tools.",
    href: "https://partners.idrive.com/rp8aj787b0e5",
    featuredImage: defaultDealImage
  },
  {
    slug: "switcher-studio",
    name: "Switcher Studio",
    category: "Video",
    summary: "Live video production from mobile devices.",
    details:
      "Create livestreams, webinars, product demos, and branded video experiences using iPhones, iPads, and production tools.",
    href: "https://start.switcherstudio.com/j36otqzt28yj-30j07f",
    featuredImage: defaultDealImage
  },
  {
    slug: "vektoros",
    name: "VektorOS",
    category: "AI Operations",
    summary: "AI operating system for knowledge workflows.",
    details:
      "Structure AI-assisted work, knowledge, and team execution so organizations can move from information to action faster.",
    href: "https://partners.vektoros.ai/fsztbi5772rt",
    featuredImage: defaultDealImage
  },
  {
    slug: "foxit",
    name: "Foxit",
    category: "Documents",
    summary: "PDF editing and document productivity.",
    details:
      "Edit, sign, protect, convert, and manage PDFs for business teams that handle documents every day.",
    href: "https://partnerstack.foxit.com/rakw7q1fr1ey-fbeusl",
    featuredImage: defaultDealImage
  },
  {
    slug: "zonka-feedback",
    name: "Zonka Feedback",
    category: "Customer Feedback",
    summary: "Customer feedback and experience surveys.",
    details:
      "Collect feedback, measure customer experience, and close the loop across support, product, and service teams.",
    href: "https://get.zonkafeedback.com/oq8sposgljy9",
    featuredImage: defaultDealImage
  },
  {
    slug: "webcatalog",
    name: "WebCatalog",
    category: "Productivity",
    summary: "Turn web apps into desktop workspaces.",
    details:
      "Organize web tools into focused desktop apps and spaces for cleaner workflows and less browser clutter.",
    href: "https://try.webcatalog.io/vqlv976v8fzc",
    featuredImage: defaultDealImage
  },
  {
    slug: "wegic",
    name: "Wegic",
    category: "AI Websites",
    summary: "AI-assisted website creation.",
    details:
      "Create and iterate websites with AI support for teams that need a faster route from idea to online presence.",
    href: "https://try.wegic.ai/lxqaowxa8t7l",
    featuredImage: defaultDealImage
  },
  {
    slug: "trainual",
    name: "Trainual",
    category: "Training",
    summary: "Document processes and train teams.",
    details:
      "Capture company knowledge, standard operating procedures, onboarding, and training so teams can scale more consistently.",
    href: "https://start.trainual.com/fwfpynmn5gv2",
    featuredImage: defaultDealImage
  },
  {
    slug: "webydo",
    name: "Webydo",
    category: "Web Design",
    summary: "Professional website building for designers.",
    details:
      "Design and publish responsive business websites with a visual workflow built for agencies, designers, and client work.",
    href: "https://partners.webydo.com/aa1r1yz1xfdn",
    featuredImage: defaultDealImage
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    category: "Attribution",
    summary: "Lead tracking and marketing attribution.",
    details:
      "Track calls, forms, chats, and conversions to understand which marketing channels create qualified leads.",
    href: "https://partners.whatconverts.com/n4wyod0lfimn",
    featuredImage: defaultDealImage
  },
  {
    slug: "nexgen",
    name: "NexGen",
    category: "Technology Services",
    summary: "Technology support for digital teams.",
    details:
      "Explore practical technology services and infrastructure support for businesses modernizing operations and delivery.",
    href: "https://try.nexgentechnologies.net/eam7a0z5t918",
    featuredImage: defaultDealImage
  },
  {
    slug: "callhippo",
    name: "CallHippo",
    category: "Business Phone",
    summary: "Virtual phone system for sales and support.",
    details:
      "Set up business numbers, call routing, recordings, analytics, and team calling workflows for customer-facing teams.",
    href: "https://join.callhippo.com/nr26nshxmauk",
    featuredImage: defaultDealImage
  },
  {
    slug: "contractor-foreman",
    name: "Contractor Foreman",
    category: "Construction",
    summary: "Project management for contractors.",
    details:
      "Manage estimates, schedules, jobs, documents, teams, and project financials in one construction operations platform.",
    href: "https://try.contractorforeman.com/vkqc5vo3p82z",
    featuredImage: defaultDealImage
  },
  {
    slug: "close",
    name: "Close",
    category: "CRM",
    summary: "Sales CRM built for fast-moving teams.",
    details:
      "Manage leads, calling, email, pipelines, and sales workflows in a CRM designed for outbound and inside sales teams.",
    href: "https://refer.close.com/g2mlmfm1ugts-fetl0j",
    featuredImage: defaultDealImage
  },
  {
    slug: "printify",
    name: "Printify",
    category: "Commerce",
    summary: "Print-on-demand for product businesses.",
    details:
      "Create and sell custom products through print-on-demand suppliers without managing inventory or fulfillment yourself.",
    href: "https://try.printify.com/op2pqgyvk242",
    featuredImage: defaultDealImage
  },
  {
    slug: "brevo",
    name: "Brevo",
    category: "Marketing",
    summary: "Email, SMS, CRM, and marketing automation.",
    details:
      "Run campaigns, customer messaging, transactional email, CRM workflows, and automation from one customer communication platform.",
    href: "https://get.brevo.com/5d473wicfu8k",
    featuredImage: defaultDealImage
  },
  {
    slug: "thordata",
    name: "ThorData",
    category: "Data Infrastructure",
    summary: "Proxy and web data infrastructure.",
    details:
      "Access web data infrastructure for research, automation, market intelligence, and data-driven product workflows.",
    href: "https://affiliate.thordata.com/7e3z8bjm1ewb",
    featuredImage: defaultDealImage
  },
  {
    slug: "sitesgpt",
    name: "SitesGPT",
    category: "AI Websites",
    summary: "AI website generation for faster launches.",
    details:
      "Generate and publish website drafts quickly when a team needs to test positioning, offers, or a new online presence.",
    href: "https://affiliate.sitesgpt.com/i6g70yvvwl65",
    featuredImage: defaultDealImage
  },
  {
    slug: "kinetic",
    name: "Kinetic",
    category: "Talent",
    summary: "Staffing support for growing teams.",
    details:
      "Explore talent and staffing support for teams that need reliable execution capacity without slowing down hiring cycles.",
    href: "https://partners.kineticstaff.com/9jif3n1f2hit",
    featuredImage: defaultDealImage
  },
  {
    slug: "getscreen",
    name: "Getscreen",
    category: "Remote Access",
    summary: "Remote desktop access for support teams.",
    details:
      "Connect to remote devices through a browser-based access tool for support, administration, and distributed operations.",
    href: "https://try.getscreen.me/utuu6zh9kres",
    featuredImage: defaultDealImage
  },
  {
    slug: "kartra",
    name: "Kartra",
    category: "Marketing Platform",
    summary: "Funnels, memberships, and digital business tools.",
    details:
      "Build landing pages, funnels, memberships, email campaigns, and digital business workflows from one integrated platform.",
    href: "https://try.kartra.com/mh8fw3lnnkoe-26ysr",
    featuredImage: defaultDealImage
  },
  {
    slug: "zenzap",
    name: "Zenzap",
    category: "Team Communication",
    summary: "Work messaging designed for business teams.",
    details:
      "Create cleaner team communication spaces with task-aware messaging, collaboration, and business workflow features.",
    href: "https://try.zenzap.co/5iut4hrfclra",
    featuredImage: defaultDealImage
  },
  {
    slug: "hubstaff",
    name: "Hubstaff",
    category: "Workforce Management",
    summary: "Time tracking and productivity operations.",
    details:
      "Track time, manage teams, monitor productivity, handle payroll inputs, and coordinate remote or field work.",
    href: "https://affiliate.hubstaff.com/e6samw1leys7",
    featuredImage: defaultDealImage
  },
  {
    slug: "diginius",
    name: "Diginius",
    category: "Marketing Intelligence",
    summary: "Advertising and performance marketing analytics.",
    details:
      "Improve paid media visibility, reporting, and optimization with tools for agencies and performance marketing teams.",
    href: "https://get.diginius.com/ih0gbsytm5mi-zjmxj2",
    featuredImage: defaultDealImage
  },
  {
    slug: "closely",
    name: "Closely",
    category: "LinkedIn Outreach",
    summary: "LinkedIn and email prospecting workflows.",
    details:
      "Automate prospecting, relationship building, and outreach sequences across LinkedIn and email with sales-focused workflows.",
    href: "https://get.closelyhq.com/nshuz1xxllj1",
    featuredImage: defaultDealImage
  },
  {
    slug: "plesk",
    name: "Plesk",
    category: "Hosting",
    summary: "Server and website management platform.",
    details:
      "Manage websites, hosting, security, domains, applications, and server operations through a professional control panel.",
    href: "https://try.plesk.com/26angwvimct2",
    featuredImage: defaultDealImage
  }
];
