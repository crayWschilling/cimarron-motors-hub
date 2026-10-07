import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/roxor", label: "ROXOR" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-secondary/20 bg-secondary text-secondary-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center bg-primary font-display text-xl text-primary-foreground">
            CM
          </span>
          <span className="font-display text-xl leading-none tracking-wide md:text-2xl">
            Cimarron Motor <span className="text-primary">LLC</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 font-display text-lg tracking-wide text-secondary-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "px-3 py-2 font-display text-lg tracking-wide text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href="tel:6208553496"
            className="ml-3 inline-flex items-center gap-2 bg-primary px-4 py-2 font-display text-lg tracking-wide text-primary-foreground transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> 620.855.3496
          </a>
        </nav>

        <button
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-secondary-foreground/10 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-secondary-foreground/10 py-3 font-display text-xl tracking-wide"
                activeProps={{ className: "border-b border-secondary-foreground/10 py-3 font-display text-xl tracking-wide text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href="tel:6208553496"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary px-4 py-3 font-display text-lg text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> 620.855.3496
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}