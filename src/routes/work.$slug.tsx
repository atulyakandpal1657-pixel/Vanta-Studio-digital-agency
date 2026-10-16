import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData, params }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Vanta Studio` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — Vanta Studio` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/work/${params.slug}` },
        ]
      : [{ title: "Project unavailable — Vanta Studio" }, { name: "robots", content: "noindex" }],
    links: [{ rel: "canonical", href: `/work/${params.slug}` }],
  }),
  component: ProjectPage,
  notFoundComponent: () => (
    <section className="container-x py-32">
      <p className="eyebrow">Project not found</p>
      <h1 className="display mt-6 text-6xl">This case study doesn't exist.</h1>
      <Link to="/work" className="link-underline mt-8 inline-block text-primary">Back to all work</Link>
    </section>
  ),
  errorComponent: () => (
    <section className="container-x py-32">
      <h1 className="display text-5xl">Couldn't load this project.</h1>
      <Link to="/work" className="link-underline mt-8 inline-block text-primary">Back to all work</Link>
    </section>
  ),
});

function ProjectPage() {
  const p = Route.useLoaderData();
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length] ?? projects[0]!;

  return (
    <article>
      <section className="container-x pt-12 md:pt-20">
        <Link to="/work" className="eyebrow inline-flex items-center gap-2 hover:text-foreground">
          <ArrowLeft size={14} /> All work
        </Link>
        <h1 className="display mt-8 text-[clamp(3.5rem,13vw,12rem)] animate-rise">{p.title}</h1>
        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-6 md:grid-cols-4">
          {[["Client", p.client], ["Year", p.year], ["Discipline", p.categories.join(", ")], ["Status", "Concept study"]].map(([k, v]) => (
            <div key={k}><dt className="eyebrow">{k}</dt><dd className="mt-2 text-sm">{v}</dd></div>
          ))}
        </dl>
      </section>
      <img src={p.cover} alt={`${p.title} key visual`} width={1280} height={960} className="container-x mt-12 aspect-[16/9] object-cover" />
      <section className="container-x grid gap-16 py-24 md:grid-cols-12">
        <p className="display text-3xl leading-tight md:col-span-7 md:text-5xl">{p.summary}</p>
        <div className="space-y-12 md:col-span-5 md:col-start-8">
          <div><h2 className="eyebrow">The challenge</h2><p className="mt-4 text-muted-foreground">{p.challenge}</p></div>
          <div><h2 className="eyebrow">The solution</h2><p className="mt-4 text-muted-foreground">{p.solution}</p></div>
          <div>
            <h2 className="eyebrow">Deliverables</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {p.deliverables.map((d) => <li key={d} className="rounded-full border border-border px-3 py-1 text-sm">{d}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-x grid gap-6 md:grid-cols-5" aria-label="Gallery">
        {p.gallery.map((g, i) => (
          <img key={i} src={g} alt={`${p.title} gallery image ${i + 1}`} loading="lazy" width={1280} height={960}
            className={`aspect-[4/3] w-full object-cover ${i === 0 ? "md:col-span-3" : "md:col-span-2 md:mt-24"}`} />
        ))}
      </section>
      <section className="container-x py-24">
        <p className="eyebrow">Outcome</p>
        <p className="mt-4 max-w-3xl text-2xl">{p.outcome}</p>
      </section>
      <Link to="/work/$slug" params={{ slug: next.slug }} className="group block border-t border-border">
        <div className="container-x flex items-center justify-between py-16">
          <div><p className="eyebrow">Next project</p><p className="display mt-3 text-5xl transition-colors group-hover:text-primary md:text-8xl">{next.title}</p></div>
          <ArrowRight className="size-10 transition-transform group-hover:translate-x-2" />
        </div>
      </Link>
    </article>
  );
}
