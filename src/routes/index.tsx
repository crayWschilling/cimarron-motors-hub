import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, Tractor, Car, Droplets, Cog, Truck, Building2, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-shop.png";
import partsImg from "@/assets/parts.jpg";
import serviceImg from "@/assets/service.jpg";
import roxorImg from "@/assets/roxor.jpg";
import napaLogo from "@/assets/napa-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cimarron Motor LLC | Parts, Service & ROXOR in Cimarron, KS" },
      { name: "description", content: "Independently owned since 1969. Auto parts, ag supplies, repair, irrigation overhauls, used cars and Mahindra ROXOR. Serving Cimarron and Jetmore, Kansas." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Wrench, title: "Automotive Parts", desc: "Stocked shelves and quick-order on hard-to-find parts." },
  { icon: Tractor, title: "Agricultural Supplies", desc: "Built for the working farms of Southwest Kansas." },
  { icon: Cog, title: "Automotive Repair", desc: "Honest diagnostics and dependable repair." },
  { icon: Droplets, title: "Irrigation Engine Overhauls", desc: "Keep your pivots running through the season." },
  { icon: Car, title: "Licensed Used Car Dealer", desc: "A rotating lot of trustworthy used vehicles." },
  { icon: Truck, title: "Mahindra ROXOR Dealer", desc: "Authorized sales and service for the off-road ROXOR." },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <img
          src={heroImg}
          alt="Cimarron Motor storefront in Cimarron, Kansas"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 md:px-8 md:py-36 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-accent">
              EST. 1969 · CIMARRON, KANSAS
            </p>
            <h1 className="mt-3 font-display text-5xl leading-[0.9] tracking-wide sm:text-7xl lg:text-8xl">
              Parts. Service.{" "}
              <span className="text-accent">Handshake good.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-secondary-foreground/80">
              Independently owned for over fifty years. We keep Southwest Kansas
              moving from Cimarron and Jetmore, from pickups and pivots to the Mahindra ROXOR.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3 font-display text-xl tracking-wide text-primary-foreground transition hover:brightness-110"
              >
                What we do <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-accent px-6 py-3 font-display text-xl tracking-wide text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Visit the shop
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <img
                src={napaLogo}
                alt="NAPA Auto Parts dealer"
                width={96}
                height={96}
                className="h-20 w-auto drop-shadow-lg"
              />
              <div>
                <p className="font-display text-2xl text-accent">Proud NAPA dealer</p>
                <p className="text-sm text-secondary-foreground/70">Your local NAPA Auto Parts store.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="text-center lg:text-right">
              <p className="font-display text-6xl leading-[0.9] text-accent drop-shadow-[0_4px_0_oklch(0.15_0.05_250)] sm:text-7xl xl:text-8xl">
                Cimarron<br/>Motor.
              </p>
              <p className="mt-4 font-display text-base tracking-[0.3em] text-secondary-foreground/80 sm:text-xl">
                SOUTHWEST KANSAS
              </p>
            </div>
          </div>
        </div>
        <div className="relative border-t border-secondary-foreground/10 bg-secondary/90">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-secondary-foreground/10 px-4 md:grid-cols-4 md:px-8">
            {[
              ["55+", "Years independent"],
              ["6", "Specialties"],
              ["M to Sat", "Open weekly"],
              ["$1", "Cheapest pop in SW KS"],
            ].map(([n, l]) => (
              <div key={l} className="px-3 py-6 md:px-6">
                <div className="font-display text-3xl text-accent md:text-4xl">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-secondary-foreground/60">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-secondary py-20 text-secondary-foreground md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-sm tracking-[0.3em] text-primary">WHAT WE DO</p>
              <h2 className="mt-3 font-display text-4xl md:text-6xl">We specialize in</h2>
            </div>
            <Link to="/services" className="font-display text-xl text-primary hover:underline">
              All services →
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-secondary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-secondary p-8 transition-colors hover:bg-primary"
              >
                <Icon className="h-10 w-10 text-primary transition-colors group-hover:text-primary-foreground" />
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-secondary-foreground/70 group-hover:text-primary-foreground/90">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE: ROXOR */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <img
              src={roxorImg}
              alt="Mahindra ROXOR on a Kansas dirt road"
              loading="lazy"
              width={1600}
              height={1100}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="px-4 py-16 md:px-12 md:py-24">
            <p className="font-display text-sm tracking-[0.3em] text-primary">LICENSED DEALER</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">Mahindra ROXOR</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Built for work, ready for the back forty. As an authorized Mahindra
              ROXOR dealer, we sell, service, and stock parts for the toughest
              off-road side-by-side on the prairie.
            </p>
            <Link
              to="/roxor"
              className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 font-display text-xl text-primary-foreground hover:brightness-110"
            >
              Explore ROXOR <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="order-2 px-4 py-16 md:order-1 md:px-12 md:py-24">
            <p className="font-display text-sm tracking-[0.3em] text-primary">PARTS COUNTER</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">If we don't have it,<br/>we'll find it.</h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              Automotive parts on the shelf, agricultural supplies for the
              season, and a parts counter that knows what fits — call ahead or
              walk in.
            </p>
            <a
              href="tel:6208553496"
              className="mt-8 inline-flex items-center gap-2 border-2 border-foreground px-6 py-3 font-display text-xl hover:bg-foreground hover:text-background"
            >
              Call 620-855-3496
            </a>
          </div>
          <div className="order-1 relative min-h-[320px] md:order-2">
            <img
              src={partsImg}
              alt="Wall of parts at Cimarron Motor"
              loading="lazy"
              width={1400}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>


      {/* LOCATIONS */}
      <section className="bg-secondary py-16 text-secondary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <p className="font-display text-sm tracking-[0.3em] text-primary">TWO LOCATIONS</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">Come see us in town.</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="border-l-4 border-primary bg-background p-6 text-foreground">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl">Cimarron</h3>
              </div>
              <p className="mt-3 text-foreground/80">
                602 W Ave A<br />Cimarron, KS 67835
              </p>
              <a href="tel:6208553496" className="mt-2 block font-display text-2xl hover:text-primary">
                620.855.3496
              </a>
              <a
                href="https://maps.google.com/?q=602+W+Ave+A,+Cimarron,+KS+67835"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-display text-lg text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
            </div>

            <div className="border-l-4 border-primary bg-background p-6 text-foreground">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-primary" />
                <h3 className="font-display text-2xl">Jetmore NAPA</h3>
              </div>
              <p className="mt-3 text-foreground/80">
                211 Clay St<br />Jetmore, KS 67854
              </p>
              <a href="tel:6203578353" className="mt-2 block font-display text-2xl hover:text-primary">
                620.357.8353
              </a>
              <p className="mt-3 text-sm text-foreground/70">
                NAPA Auto Parts serving Hodgeman County with farm, vehicle, and small engine parts.
              </p>
              <a
                href="https://maps.google.com/?q=211+Clay+St,+Jetmore,+KS+67854"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-display text-lg text-primary hover:underline"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative isolate overflow-hidden bg-primary py-20 text-primary-foreground md:py-28"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0) 0 24px, rgba(0,0,0,0.06) 24px 26px)",
        }}
      >
        <div className="mx-auto max-w-5xl px-4 text-center md:px-8">
          <h2 className="font-display text-5xl leading-none md:text-7xl">
            Stop in. Coffee's on.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
            602 W Ave A in Cimarron or 211 Clay St in Jetmore — open Monday through Saturday.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="https://maps.google.com/?q=602+W+Ave+A,+Cimarron,+KS+67835"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-secondary px-6 py-3 font-display text-xl text-secondary-foreground hover:brightness-110"
            >
              Cimarron directions
            </a>
            <a
              href="https://maps.google.com/?q=211+Clay+St,+Jetmore,+KS+67854"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground px-6 py-3 font-display text-xl hover:bg-primary-foreground hover:text-primary"
            >
              Jetmore directions
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary-foreground px-6 py-3 font-display text-xl hover:bg-primary-foreground hover:text-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
