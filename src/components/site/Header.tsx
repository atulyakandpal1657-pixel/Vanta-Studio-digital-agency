import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const nav = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="display text-xl tracking-tight" aria-label="Vanta Studio home">
      vanta<span className="text-primary">.</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-sm text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Start a project
          </Link>
        </nav>
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background md:hidden"
          aria-label="Mobile"
        >
          <ul className="container-x flex flex-col gap-2 pt-8">
            {nav.map((n, i) => (
              <li key={n.to} className="animate-rise" style={{ animationDelay: `${i * 60}ms` }}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="display block border-b border-border py-4 text-5xl"
                  activeProps={{ className: "text-primary" }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
