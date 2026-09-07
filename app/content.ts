export const site = {
  name: "Moorish Science Temple of America",
  shortName: "MSTA",
  url: "https://moorishsciencetemple.org",
  temple: "Baltimore Temple",
  leader: "Grand Sheik Eric Thompson-Bey",
  phone: "410-522-6633",
  email: "msthqorg@gmail.com",
  address: "1055 Milton Ave",
  locality: "Baltimore, Maryland",
  mission: "A dignified home for study, history, service, and the enduring moral principles of Love, Truth, Peace, Freedom, and Justice.",
} as const;

export const principles = [
  ["I", "Love", "Practice care, dignity, responsibility, and service toward family, community, and humanity."],
  ["II", "Truth", "Seek understanding with discipline, honesty, study, and respect for evidence."],
  ["III", "Peace", "Build harmony through self-command, service, lawful conduct, and principled dialogue."],
  ["IV", "Freedom", "Develop the mind, character, and knowledge needed to live with purpose and responsibility."],
  ["V", "Justice", "Deal fairly with others, honor lawful obligations, and work for stronger communities."],
] as const;

export const routes = [
  ["leadership", "Leadership", "Leadership Chamber", "Temple-level stewardship", "This site presents Grand Sheik Eric Thompson-Bey as leader of this Baltimore Temple. It does not claim national office or jurisdiction beyond verified Temple records.", ["Teaching", "Service", "Stewardship"]],
  ["history", "History", "Prophet Noble Drew Ali", "History with context", "A careful introduction to Prophet Noble Drew Ali and the Moorish Science Temple of America, presented without embellishing dates, titles, or claims that require additional verification.", ["Founder", "Movement", "Sources"]],
  ["teachings", "Teachings", "Love. Truth. Peace. Freedom. Justice.", "Divine Principles", "The Divine Principles are presented as a practical moral framework for character, family, community, study, and service.", ["Love", "Truth", "Peace", "Freedom", "Justice"]],
  ["community", "Community", "Service made visible", "Community uplift", "Temple outreach is presented through education, humanitarian service, community engagement, and practical workshops, with no invented current events.", ["Education", "Humanitarian Service", "Community Engagement", "Workshops"]],
  ["events", "Events", "Current information, carefully published", "Temple calendar", "No event is published here until its date, venue, and attendance details are verified by Temple leadership.", ["Upcoming", "Current", "Past Record"]],
  ["library", "Library", "Enter the Moorish Digital Archive", "Preserve the record", "A growing archive for verified history, teachings, photographs, notices, community records, and public clarifications.", ["Prophet Noble Drew Ali", "Divine Principles", "Community Record", "Myths & Clarifications"]],
  ["temple-locator", "Temple Locator", "Find verified Temple information", "Directory integrity", "This site does not publish a nationwide directory without verified Temple records. Contact the Baltimore Temple for current guidance.", ["Baltimore Temple", "Verified Records", "Corrections"]],
  ["misconceptions", "Dispelling Misconceptions", "Faith is not pseudo-law", "Public clarity", "Moorish Science religion and community identity should not be confused with sovereign-citizen theories, pseudo-legal filings, tax-protest schemes, fake consulates, or invented-government claims.", ["Religion", "Civic Responsibility", "Clarity"]],
  ["give", "Give", "Support with transparency", "Giving safeguards", "Online payment remains inactive until the official recipient, processor, purpose, refund path, and tax-status wording are verified.", ["Recipient", "Purpose", "Processor", "Refund Path"]],
  ["contact", "Contact", "Visit, ask, correct, connect", "Baltimore Temple", "Contact the Temple for current service information, visit questions, source corrections, archive submissions, and leadership inquiries.", ["Visit", "Phone", "Email"]],
  ["trust", "Site Standards", "Trust is part of the design", "Editorial standards", "Claims are labeled carefully, unverifiable information stays unpublished, and corrections are welcomed through the Temple contact channels.", ["Sources", "Corrections", "Privacy"]],
] as const;

export type RouteSlug = (typeof routes)[number][0];
export const routeMap = Object.fromEntries(routes.map((route) => [route[0], route])) as Record<RouteSlug, (typeof routes)[number]>;
