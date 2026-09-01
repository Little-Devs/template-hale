export const site = {
  logo: {
    text: "Hale & Rowan",
    mark: "HR",
  },
  fonts: {
    display: "Syne",
    ui: "Manrope",
  },
  colors: {
    charcoal: "#2c241b",
    limestone: "#c4b7a2",
    copper: "#8c4a2f",
    paper: "#f7f3ec",
  },
  meta: {
    title: "Hale & Rowan — Architecture for civic and housing work",
    description: "A twelve-person architecture studio for civic buildings, housing, and adaptive reuse. Drawings first. Edinburgh and a site hut.",
  },
  contact: {
    email: "sales@little.cloud",
    phone: "+44 131 555 0176",
    address: "18 Circus Lane, Edinburgh EH3",
    hours: [
      { day: "Mon–Thu", time: "09:00–18:00" },
      { day: "Friday", time: "09:00–16:00" },
      { day: "Site", time: "By arrangement" },
    ],
  },
  sections: {
    hero: true,
    practice: true,
    projects: true,
    approach: true,
    studio: true,
    contact: true,
  },
  nav: [
    { href: "#practice", label: "Practice", section: "practice" as const },
    { href: "#projects", label: "Work", section: "projects" as const },
    { href: "#approach", label: "Approach", section: "approach" as const },
    { href: "#studio", label: "Studio", section: "studio" as const },
    { href: "#contact", label: "Commission", section: "contact" as const },
  ],
  hero: {
    kicker: "Architecture · Edinburgh",
    title: "Buildings that hold a street, not a mood board.",
    lead: "Hale & Rowan is a studio for civic work, housing, and the reuse of what is already there. We draw, we sit with planners, and we stay on site until the junctions are honest.",
    primaryCta: { label: "Selected work", href: "#projects" },
    secondaryCta: { label: "Write to the studio", href: "mailto:sales@little.cloud" },
    stats: [
      { value: "12", label: "in the studio" },
      { value: "2009", label: "practice opened" },
      { value: "RIBA", label: "chartered" },
    ],
  },
  practice: {
    kicker: "Practice",
    title: "Three kinds of work we take",
    items: [
      { num: "01", title: "Civic", body: "Libraries, halls, and the quiet buildings a town uses every week. Public money, public drawings." },
      { num: "02", title: "Housing", body: "Streets of houses, not object-buildings. Tenure mix, daylight, and a stair you would actually use." },
      { num: "03", title: "Reuse", body: "Keeping the frame when it still works. New fabric only where the old one has failed." },
      { num: "04", title: "Planning", body: "Reports, heritage notes, and a conversation with the officer that does not start from zero." },
    ],
  },
  projects: {
    kicker: "Selected work",
    title: "Jobs we can still walk through",
    items: [
      { title: "Leith Walk library", tag: "Civic", note: "A single-storey reading room on a former garage plot. Cross-laminated timber, north light.", tone: "one" },
      { title: "Canonmills terrace", tag: "Housing", note: "Eight flats behind a retained stone wall. Shared stair, no corridor.", tone: "two" },
      { title: "Hawick mill offices", tag: "Reuse", note: "A spinning mill as desks. The iron columns stayed; the roof did not.", tone: "three" },
      { title: "Fife village hall", tag: "Civic", note: "Hall, kitchen, and a room that can be a clinic on Tuesdays.", tone: "four" },
    ],
  },
  approach: {
    kicker: "Approach",
    title: "Draw, then sit with it",
    steps: [
      { title: "Brief", body: "What must the building do on a wet Tuesday, not on opening day." },
      { title: "Measure", body: "The site as it is: levels, neighbours, the thing nobody put on the survey." },
      { title: "Draw", body: "Plans at a scale you can argue with. Sections before elevations." },
      { title: "Build", body: "The same people who drew it visit the hut. Junctions, not renders." },
    ],
  },
  studio: {
    kicker: "Studio",
    title: "A room on Circus Lane, a hut on site",
    manifesto: "We are twelve. Partners still draw. We do not sell interiors as a separate craft, and we do not take competitions that are already decided.",
    points: [
      "Chartered architects, conservation-accredited on the heritage jobs.",
      "Models in card before the first visualisation.",
      "Fees written as stages, not as a percentage of a moving budget.",
    ],
  },
  footer: {
    credit: "Hale & Rowan — a Little-Devs template",
    note: "MIT. Light-custom: logo, colours, fonts, copy, sections.",
  },
} as const;

export type Site = typeof site;
