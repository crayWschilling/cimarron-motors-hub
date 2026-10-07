import type { ReactNode } from "react";
import heroImg from "@/assets/hero-shop.png";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-secondary text-secondary-foreground">
      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-secondary/40" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <p className="font-display text-sm tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 font-display text-5xl leading-none md:text-7xl">{title}</h1>
        {children ? (
          <p className="mt-6 max-w-2xl text-lg text-secondary-foreground/80">{children}</p>
        ) : null}
      </div>
    </section>
  );
}