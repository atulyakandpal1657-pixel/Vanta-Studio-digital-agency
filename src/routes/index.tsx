import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { services } from "@/components/site/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vanta Studio — Brands, websites & digital products" },
      { name: "description", content: "Vanta Studio is an independent studio designing sharp brands, editorial websites and calm digital products." },
      { property: "og:title", content: "Vanta Studio — Brands, websites & digital products" },
      { property: "og:description", content: "Independent studio for branding, web design, development and optimization." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const process = [
  { t: "Listen", d: "Workshops and research to understand the business, not just the brief." },
  { t: "Frame", d: "A short strategy that names the problem and what success looks like." },
  { t: "Make", d: "Design and build in tight loops, reviewed with you every week." },
  { t: "Refine", d: "Launch, measure and keep improving what matters." },
];

const quotes = [
  { q: "They asked better questions in the first hour than we'd asked ourselves in a year.", who: "Sample feedback — founder persona" },
  { q: "The system they handed over is the first one our team has actually kept using.", who: "Sample feedback — marketing lead persona" },
];

function Home() {
  return (
    <>
      <section className="container-x pt-16 pb-24 md:pt-28">
        <div className="flex items-center gap-3 eyebrow animate-rise">
          <span className="size-2 rounded-full bg-primary" /> Taking new projects for 2027
        </div>
        <h1 className="display mt-8 text-[clamp(3.4rem,13vw,13rem)] animate-rise" style={{ animationDelay: "80ms" }}>
          Design that
          <br />
          <span className="md:ml-[18%]">refuses to</span>
          <br />
          <span className="text-primary">blend in.</span>
        </h1>
        <div className="mt-14 grid gap-10 md:grid-cols-12 animate-rise" style={{ animationDelay: "180ms" }}>
          <p className="text-lg text-muted-foreground md:col-span-5 md:col-start-7">
            Vanta is an independent studio crafting brands, websites and digital products for teams who'd rather be remembered than be safe.
          </p>
          <div className="flex flex-wrap gap-3 md:col-span-5 md:col-start-7">
            <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Start a project <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/work" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 hover:border-foreground">
              View work
            </Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border py-5" aria-hidden>
        <div className="flex w-max animate-marquee gap-12 display text-3xl text-muted-foreground">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["Branding", "✦", "Web Design", "✦", "Development", "✦", "Optimization", "✦"].map((w, i) => (
              <span key={`${k}-${i}`} className={w === "✦" ? "text-primary" : ""}>{w}</span>
            )),
          )}
        </div>
      </div>

      <section className="container-x py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="display mt-4 text-[clamp(2.5rem,7vw,6rem)]">Recent<br />concepts</h2>
          </div>
          <Link to="/work" className="link-underline inline-flex items-center gap-2">
            All projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={p.slug} className={i % 2 === 1 ? "md:mt-32" : ""}>
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-28">
        <p className="eyebrow">What we do</p>
        <ul className="mt-10 border-t border-border">
          {services.map((s) => (
            <li key={s.n}>
              <Link to="/services" className="group grid items-baseline gap-4 border-b border-border py-8 md:grid-cols-12">
                <span className="eyebrow md:col-span-1">{s.n}</span>
                <span className="display text-4xl transition-colors group-hover:text-primary md:col-span-5 md:text-6xl">{s.title}</span>
                <span className="text-muted-foreground md:col-span-5">{s.body}</span>
                <ArrowUpRight className="hidden justify-self-end transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:col-span-1 md:block" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-28">
          <p className="eyebrow text-primary-foreground/70">How we work</p>
          <h2 className="display mt-4 max-w-3xl text-[clamp(2.5rem,7vw,6rem)]">Four steps. No theatre.</h2>
          <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <li key={p.t} className="border-t border-primary-foreground/30 pt-6">
                <span className="font-mono text-sm">0{i + 1}</span>
                <h3 className="display mt-4 text-3xl">{p.t}</h3>
                <p className="mt-3 text-primary-foreground/75">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-28">
        <p className="eyebrow">Kind words (illustrative)</p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {quotes.map((q) => (
            <figure key={q.q} className="border-l-2 border-primary pl-6">
              <blockquote className="display text-2xl leading-tight md:text-4xl">“{q.q}”</blockquote>
              <figcaption className="eyebrow mt-6">{q.who}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
