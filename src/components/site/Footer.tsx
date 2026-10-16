import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { nav, Logo } from "./Header";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="container-x py-20">
        <p className="eyebrow">Have something in mind?</p>
        <Link
          to="/contact"
          className="group display mt-4 inline-flex items-end gap-4 text-[clamp(3rem,10vw,9rem)] transition-colors hover:text-primary"
        >
          Let's talk
          <ArrowUpRight className="mb-[0.15em] size-[0.6em] transition-transform group-hover:-translate-y-2 group-hover:translate-x-2" />
        </Link>
        <div className="mt-20 grid gap-10 border-t border-border pt-10 sm:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              An independent studio for brands, websites and digital products. A fictional agency.
            </p>
          </div>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline">{n.label}</Link>
              </li>
            ))}
          </ul>
          <div className="text-sm text-muted-foreground">
            <a href="mailto:hello@vanta.studio" className="link-underline text-foreground">
              hello@vanta.studio
            </a>
            <p className="mt-6 eyebrow">© {new Date().getFullYear()} Vanta Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
