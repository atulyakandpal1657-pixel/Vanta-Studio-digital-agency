import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index?: number }) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative overflow-hidden rounded-sm bg-muted">
        <img
          src={project.cover}
          alt={`${project.title} project cover`}
          loading="lazy"
          width={1280}
          height={960}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="display text-3xl">
          {index !== undefined && <span className="eyebrow mr-3 align-middle">0{index + 1}</span>}
          {project.title}
        </h3>
        <span className="eyebrow shrink-0">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{project.categories.join(" · ")}</p>
    </Link>
  );
}
