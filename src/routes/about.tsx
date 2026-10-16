import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import abstract from "@/assets/p-abstract.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vanta Studio" },
      { name: "description", content: "The story, team, values and approach behind Vanta Studio, a fictional independent design studio." },
      { property: "og:title", content: "About — Vanta Studio" },
      { property: "og:description", content: "A small senior team that prefers clarity over noise." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const team = [
  { name: "Mira Okafor", role: "Creative Director" },
  { name: "Jonas Lindqvist", role: "Design Lead" },
  { name: "Priya Raman", role: "Engineering Lead" },
  { name: "Theo Alvarez", role: "Strategy" },
];
const values = [
  ["Clarity over noise", "If it doesn't help someone understand, it goes."],
  ["Small on purpose", "Senior people on every project, no hand-offs to juniors."],
  ["Built to last", "Systems your team can run long after we leave."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About" title={<>Small studio.<br /><span className="text-primary">Loud work.</span></>}>
        Vanta started as two designers sharing a desk and a frustration: too much digital work looks the same. We're still small, by choice.
      </PageHero>
      <img src={abstract} alt="Sculptural form lit with a lime edge" width={1280} height={960} loading="lazy" className="container-x aspect-[21/9] object-cover" />
      <section className="container-x grid gap-12 py-28 md:grid-cols-12">
        <h2 className="display text-5xl md:col-span-4">Our approach</h2>
        <p className="text-xl text-muted-foreground md:col-span-7 md:col-start-6">
          We start by listening, write down the problem in one sentence, and only then open a design tool. Every decision after that is tested against that sentence. It keeps the work honest, and it keeps projects on time.
        </p>
      </section>
      <section className="container-x py-12">
        <p className="eyebrow">Values</p>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {values.map(([t, d]) => (
            <div key={t} className="border-t border-primary pt-6">
              <h3 className="display text-3xl">{t}</h3>
              <p className="mt-3 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-28">
        <p className="eyebrow">Team (fictional)</p>
        <ul className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {team.map((m) => (
            <li key={m.name} className="group rounded-sm bg-card p-6 transition-colors hover:bg-primary hover:text-primary-foreground">
              <div className="display grid aspect-square place-items-center rounded-sm bg-muted text-6xl text-muted-foreground transition-colors group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground">
                {m.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <p className="mt-5 font-semibold">{m.name}</p>
              <p className="text-sm opacity-70">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
