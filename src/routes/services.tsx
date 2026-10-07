import { createFileRoute } from "@tanstack/react-router";
import { Wrench, Truck, ShoppingBag, Fuel } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import serviceImg from "@/assets/service.jpg";
import irrigationImg from "@/assets/irrigation.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Cimarron Motor LLC" },
      { name: "description", content: "Auto parts, shop services, irrigation engine repair, and FedEx/UPS shipping at Cimarron Motor in Cimarron, KS." },
      { property: "og:title", content: "Services — Cimarron Motor LLC" },
      { property: "og:description", content: "Store, shop, irrigation, and shipping services at Cimarron Motor." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShoppingBag,
    title: "Store",
    desc: "Parts for DIYers and daily drivers alike. We help you find or order what you need, make hydraulic hoses, and replace wiper blades. Stop in anytime.",
  },
  {
    icon: Wrench,
    title: "Shop",
    desc: "Oil changes, alignments, brakes, suspension, drivetrain, diagnostics, electronics, and tires. We also inspect, repair, and overhaul natural gas irrigation engines.",
  },
  {
    icon: Fuel,
    title: "Diesel Service",
    desc: "Fully staffed for diesel work. From light duty pickups to farm equipment and irrigation engines, our technicians have the tools and experience to keep your diesel running strong.",
  },
  {
    icon: Truck,
    title: "FedEx / UPS",
    desc: "Print labels, ship domestic and international packages, envelopes, and express or ground. We're also a UPS Access Point for labeled drop-offs during open hours.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="WHAT WE DO" title={<>Services<span className="text-primary">.</span></>}>
        Everything under one roof on Avenue A — built for the people who
        actually use what we sell.
      </PageHero>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-lg border border-border bg-card p-8 shadow-sm">
                <Icon className="h-10 w-10 text-primary" />
                <h2 className="mt-5 font-display text-3xl">{title}</h2>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative min-h-[320px]">
            <img src={serviceImg} alt="Mechanic working on an engine" loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="px-4 py-16 md:px-12 md:py-24">
            <h2 className="font-display text-4xl md:text-6xl">Bring it in.</h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-foreground/80">
              Need a part identified, a vehicle looked at, or an irrigation engine
              picked up? Call the shop and we'll get you on the schedule.
            </p>
            <a href="tel:6208553496" className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 font-display text-xl text-primary-foreground hover:brightness-110">
              Call 620-855-3496
            </a>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="order-2 px-4 py-16 md:order-1 md:px-12 md:py-24">
            <h2 className="font-display text-4xl md:text-6xl">Irrigation season<br/><span className="text-primary">doesn't wait.</span></h2>
            <p className="mt-5 text-base leading-relaxed text-secondary-foreground/80">
              Schedule your overhaul early. We rebuild, repair and tune engines
              so your pivots are turning when the heat shows up.
            </p>
          </div>
          <div className="order-1 relative min-h-[320px] md:order-2">
            <img src={irrigationImg} alt="Irrigation engine in a Kansas field" loading="lazy" width={1400} height={1000} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}