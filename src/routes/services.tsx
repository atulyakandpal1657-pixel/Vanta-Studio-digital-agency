import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, services } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Vanta Studio" },
      { name: "description", content: "Branding, web design, development and ongoing optimization from Vanta Studio." },
      { property: "og:title", content: "Services — Vanta Studio" },
      { property: "og:description", content: "Four disciplines, one small senior team." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title={<>Four things,<br /><span className="text-primary">done well.</span></>}>
        Hire us for one discipline or all four. Every project is led by the same small senior team from start to finish.
      </PageHero>
      <section className="container-x">
        {services.map((s) => (
          <div key={s.n} className="grid gap-8 border-t border-border py-16 md:grid-cols-12">
            <span className="eyebrow md:col-span-2">{s.n}</span>
            <h2 className="display text-5xl md:col-span-4 md:text-7xl">{s.title}</h2>
            <div className="md:col-span-5 md:col-start-8">
              <p className="text-lg text-muted-foreground">{s.body}</p>
              <ul className="mt-8 grid grid-cols-2 gap-3 text-sm">
                {s.items.map((i) => <li key={i} className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />{i}</li>)}
              </ul>
            </div>
          </div>
        ))}
        <div className="border-t border-border pt-16">
          <Link to="/contact" className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-4 font-semibold text-primary-foreground">
            Discuss your project <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
