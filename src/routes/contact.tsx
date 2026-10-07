import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Cimarron Motor LLC" },
      { name: "description", content: "Visit Cimarron Motor at 602 W Ave A in Cimarron or 211 Clay St in Jetmore. Call 620.855.3496 or 620.357.8353, or email cimmotor@ucom.net." },
      { property: "og:title", content: "Contact — Cimarron Motor LLC" },
      { property: "og:description", content: "Visit, call, or email Cimarron Motor in Cimarron or Jetmore, Kansas." },
    ],
  }),
  component: ContactPage,
});

const hours = [
  ["Monday", "7:00 to 5:30"],
  ["Tuesday", "7:00 to 5:30"],
  ["Wednesday", "7:00 to 5:30"],
  ["Thursday", "7:00 to 5:30"],
  ["Friday", "7:00 to 5:30"],
  ["Saturday", "8:00 to 12:00"],
  ["Sunday", "CLOSED"],
] as const;

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="VISIT THE SHOP" title={<>Stop in. Call. <span className="text-primary">Or write.</span></>}>
        We're on the corner of Avenue A in Cimarron, Kansas, and at 211 Clay St
        in Jetmore. Coffee, popcorn, and the cheapest pop in Southwest Kansas are
        on the house.
      </PageHero>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-3">
          <div className="border-l-4 border-primary bg-background p-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl">Cimarron</h2>
            <p className="mt-2 text-foreground/80">
              602 W Ave A<br />Cimarron, KS 67835<br />USA
            </p>
            <a
              href="https://maps.google.com/?q=602+W+Ave+A,+Cimarron,+KS+67835"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-display text-lg text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="border-l-4 border-primary bg-background p-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl">Jetmore</h2>
            <p className="mt-2 text-foreground/80">
              211 Clay St<br />Jetmore, KS 67854<br />USA
            </p>
            <p className="mt-3 text-sm text-foreground/70">
              NAPA Auto Parts location serving Hodgeman County and surrounding areas.
            </p>
            <a
              href="https://maps.google.com/?q=211+Clay+St,+Jetmore,+KS+67854"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block font-display text-lg text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div className="border-l-4 border-primary bg-background p-6">
            <Phone className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl">Phone</h2>
            <a href="tel:6208553496" className="mt-2 block font-display text-2xl hover:text-primary">
              Cimarron: 620.855.3496
            </a>
            <a href="tel:6203578353" className="mt-2 block font-display text-2xl hover:text-primary">
              Jetmore: 620.357.8353
            </a>
            <p className="mt-3 text-sm text-foreground/70">
              Call either parts counter for stock, pricing, or to schedule service.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-3">
          <div className="border-l-4 border-primary bg-background p-6 lg:col-span-2">
            <Mail className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-2xl">Email</h2>
            <a href="mailto:cimmotor@ucom.net" className="mt-2 block break-all font-display text-2xl hover:text-primary">
              cimmotor@ucom.net
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2">
          <div className="bg-secondary p-8 text-secondary-foreground md:p-10">
            <div className="flex items-center gap-3">
              <Clock className="h-7 w-7 text-primary" />
              <h2 className="font-display text-3xl md:text-4xl">Hours</h2>
            </div>
            <p className="mt-2 text-sm text-secondary-foreground/70">Cimarron location</p>
            <ul className="mt-4 divide-y divide-secondary-foreground/10">
              {hours.map(([day, time]) => (
                <li key={day} className="flex items-center justify-between py-3">
                  <span className="font-display text-xl tracking-wide">{day}</span>
                  <span className="font-medium">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden border border-border">
            <iframe
              title="Cimarron Motor map"
              src="https://www.google.com/maps?q=602+W+Ave+A,+Cimarron,+KS+67835&output=embed"
              loading="lazy"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-7xl gap-10 px-4 md:px-8 lg:grid-cols-2">
          <div className="overflow-hidden border border-border">
            <iframe
              title="Cimarron Motor Jetmore map"
              src="https://www.google.com/maps?q=211+Clay+St,+Jetmore,+KS+67854&output=embed"
              loading="lazy"
              className="h-full min-h-[360px] w-full border-0"
            />
          </div>
          <div className="flex flex-col justify-center bg-secondary p-8 text-secondary-foreground md:p-10">
            <h2 className="font-display text-3xl text-primary md:text-4xl">Jetmore NAPA</h2>
            <p className="mt-4 text-secondary-foreground/80">
              Cimarron Motor also operates a sister store in Jetmore under the NAPA Auto Parts network.
              We carry agricultural and automotive replacement parts, with access to the full NAPA warehouse
              distribution network. Call or stop by for farm, vehicle, and small engine parts.
            </p>
            <a
              href="https://maps.google.com/?q=211+Clay+St,+Jetmore,+KS+67854"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-display text-xl text-primary hover:underline"
            >
              Get directions to Jetmore →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}