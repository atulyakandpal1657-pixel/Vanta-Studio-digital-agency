import { createFileRoute, Outlet, useMatch } from "@tanstack/react-router";
import { useState } from "react";
import { categories, projects, type Category } from "@/lib/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Vanta Studio" },
      { name: "description", content: "Concept case studies in branding, web design, development and product from Vanta Studio." },
      { property: "og:title", content: "Work — Vanta Studio" },
      { property: "og:description", content: "Filter our concept case studies by discipline." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkLayout,
});

function WorkLayout() {
  const child = useMatch({ from: "/work/$slug", shouldThrow: false });
  return child ? <Outlet /> : <Work />;
}

function Work() {
  const [filter, setFilter] = useState<Category | "All">("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <PageHero eyebrow="Work" title={<>Selected<br /><span className="text-primary">concepts.</span></>}>
        Fictional case studies that show how we think, from first workshop to final pixel.
      </PageHero>
      <section className="container-x">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2 border-y border-border py-5">
          {(["All", ...categories] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <p className="eyebrow mt-6" aria-live="polite">{list.length} project{list.length === 1 ? "" : "s"}</p>
        {list.length === 0 ? (
          <div className="py-24 text-center">
            <p className="display text-3xl">Nothing here yet.</p>
            <button onClick={() => setFilter("All")} className="link-underline mt-4 text-primary">Show all projects</button>
          </div>
        ) : (
          <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
            {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        )}
      </section>
    </>
  );
}
