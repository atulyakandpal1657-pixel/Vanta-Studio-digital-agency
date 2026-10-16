import brand from "@/assets/p-brand.jpg";
import web from "@/assets/p-web.jpg";
import abstract from "@/assets/p-abstract.jpg";
import app from "@/assets/p-app.jpg";

export const categories = ["Branding", "Web Design", "Development", "Product"] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  categories: Category[];
  summary: string;
  cover: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
  outcome: string;
};

// All projects below are fictional concept case studies for demonstration.
export const projects: Project[] = [
  {
    slug: "northline-coffee",
    title: "Northline",
    client: "Northline Coffee Co. (concept)",
    year: "2026",
    categories: ["Branding"],
    summary: "A monochrome identity for a roastery that wanted to look as precise as it brews.",
    cover: brand,
    challenge:
      "Northline had grown from one cart to six cafés with six different looks. Packaging, signage and digital didn't feel like the same company.",
    solution:
      "We built a single stamp-like monogram, a strict two-colour palette and a packaging system where one lime band carries every piece of product information.",
    deliverables: ["Brand strategy", "Logo & monogram", "Packaging system", "Brand guidelines"],
    gallery: [brand, abstract],
    outcome: "One system now runs across every touchpoint, with new SKUs designed in hours instead of weeks.",
  },
  {
    slug: "atlas-architecture",
    title: "Atlas Office",
    client: "Atlas Architecture (concept)",
    year: "2026",
    categories: ["Web Design", "Development"],
    summary: "A portfolio site for an architecture practice, built around full-bleed imagery and quiet type.",
    cover: web,
    challenge:
      "The practice's old site buried its best buildings under menus and slow galleries. Prospective clients left before seeing the work.",
    solution:
      "A grid-first layout where every project opens straight into imagery, with fast-loading images and a content model the team updates themselves.",
    deliverables: ["UX architecture", "Visual design", "Front-end build", "Content model"],
    gallery: [web, abstract],
    outcome: "A site that loads fast on mobile and lets the buildings do the talking.",
  },
  {
    slug: "groundwork-app",
    title: "Groundwork",
    client: "Groundwork Outdoors (concept)",
    year: "2025",
    categories: ["Product", "Development"],
    summary: "A trail-tracking app that turns weekend hikes into a calm, readable record.",
    cover: app,
    challenge:
      "Existing hiking apps overwhelmed casual walkers with stats. Groundwork wanted something calmer that still felt capable.",
    solution:
      "We designed a dark, glanceable interface with a single progress ring, simplified maps and one clear action per screen.",
    deliverables: ["Product strategy", "UI design", "Design system", "Prototype"],
    gallery: [app, web],
    outcome: "In concept testing, walkers completed core tasks without any onboarding.",
  },
  {
    slug: "form-gallery",
    title: "Form / Void",
    client: "Form Gallery (concept)",
    year: "2025",
    categories: ["Branding", "Web Design"],
    summary: "Identity and exhibition site for a small gallery of sculptural design objects.",
    cover: abstract,
    challenge:
      "A new gallery needed to launch with presence, on a small budget, without looking like every other white-cube website.",
    solution:
      "A dark, light-led identity inspired by how objects are lit on plinths, carried into a single-page exhibition site.",
    deliverables: ["Identity", "Exhibition graphics", "Website design", "Launch assets"],
    gallery: [abstract, brand],
    outcome: "A launch kit the gallery reuses for every new exhibition.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
