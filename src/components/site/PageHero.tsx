import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="container-x pt-20 pb-16 md:pt-32">
      <p className="eyebrow animate-rise">{eyebrow}</p>
      <h1 className="display mt-6 text-[clamp(3rem,11vw,10rem)] animate-rise" style={{ animationDelay: "80ms" }}>
        {title}
      </h1>
      {children && (
        <div className="mt-10 max-w-xl text-lg text-muted-foreground animate-rise md:ml-[40%]" style={{ animationDelay: "160ms" }}>
          {children}
        </div>
      )}
    </section>
  );
}

export const services = [
  {
    n: "01",
    title: "Branding",
    body: "Strategy, naming support, identity systems and guidelines that hold up across every touchpoint.",
    items: ["Brand strategy", "Visual identity", "Packaging", "Guidelines"],
  },
  {
    n: "02",
    title: "Web Design",
    body: "Editorial, conversion-aware websites designed around your content rather than a template.",
    items: ["UX architecture", "Interface design", "Prototyping", "Art direction"],
  },
  {
    n: "03",
    title: "Development",
    body: "Fast, accessible front-ends with content systems your team can actually maintain.",
    items: ["Front-end build", "CMS integration", "Performance", "Accessibility"],
  },
  {
    n: "04",
    title: "Optimization",
    body: "Ongoing iteration after launch: testing, measurement and steady design improvements.",
    items: ["Analytics review", "A/B testing", "Design retainers", "SEO hygiene"],
  },
];
