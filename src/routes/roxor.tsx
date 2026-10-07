import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import roxorImg from "@/assets/roxor.jpg";
import roxorGallery from "@/assets/roxor-gallery.png";

export const Route = createFileRoute("/roxor")({
  head: () => ({
    meta: [
      { title: "Mahindra ROXOR Dealer | Cimarron Motor LLC" },
      { name: "description", content: "Licensed Mahindra ROXOR dealer in Cimarron, Kansas. Sales, parts and service for the rugged off road ROXOR." },
      { property: "og:title", content: "Mahindra ROXOR | Cimarron Motor LLC" },
      { property: "og:description", content: "Built for work. Ready for the back forty." },
    ],
  }),
  component: RoxorPage,
});

const features = [
  "Steel body on frame construction",
  "2.5L turbo-diesel engine",
  "True 4x4 with low range transfer case",
  "Off road only, built for the ranch, field and trail",
  "Customizable: bumpers, lighting, cabs and more",
  "Backed by authorized parts and service right here in Cimarron",
];

function RoxorPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-secondary text-secondary-foreground">
        <img src={roxorImg} alt="Mahindra ROXOR" width={1600} height={1100} className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-36">
          <p className="font-display text-sm tracking-[0.3em] text-primary">LICENSED MAHINDRA DEALER</p>
          <p className="mt-2 font-display text-4xl leading-tight text-accent md:text-6xl lg:text-7xl">
            Test drive today.
          </p>
          <h1 className="mt-3 font-display text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
            ROXOR<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-secondary-foreground/85">
            The off-road utility vehicle built like the trucks you grew up on,
            steel, diesel, and ready for real work.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-primary">WHY ROXOR</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              A side-by-side with<br /><span className="text-primary">truck DNA.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/80">
              The Mahindra ROXOR is purpose-built for off-road work. It's not a
              sport quad and it's not a golf cart, it's a real 4x4 with a
              diesel under the hood and a steel body wrapped around it.
            </p>
          </div>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-border pb-3 text-base">
                <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-secondary py-20 text-secondary-foreground md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-2 lg:items-center">
          <img
            src={roxorGallery}
            alt="Mahindra ROXOR at Cimarron Motor"
            loading="lazy"
            className="w-full rounded-sm object-cover shadow-2xl"
          />
          <div>
            <p className="font-display text-sm tracking-[0.3em] text-primary">BUILT TO WORK</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              A dependable<br /><span className="text-primary">workhorse.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-secondary-foreground/85">
              <p>
                Choose the Mahindra ROXOR when you need a long lasting workhorse
                for the ranch, farm, or hunting property. Built for durability
                and power over highway speed, the ROXOR handles tough jobs with
                ease, hauling trailers, moving farm equipment, and clearing
                fallen trees. With a towing capacity of up to 3,500 pounds, it
                delivers the strength you need every day.
              </p>
              <p>
                Why buy your ROXOR from Cimarron Motor? Because we understand
                what makes the ROXOR stand out, its reliable 2.7 liter turbo
                diesel engine. Our full service shop is experienced in both gas
                and diesel repair, so you can trust our team long after the sale.
              </p>
              <p className="border-l-4 border-primary pl-4 font-display text-xl italic text-secondary-foreground">
                Stop by Cimarron Motor and test drive a Mahindra ROXOR today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-end md:px-8">
          <h2 className="font-display text-4xl leading-none md:text-6xl">
            Ready to take one out?
          </h2>
          <div className="flex flex-wrap gap-3">
            <a href="tel:6208553496" className="bg-secondary px-6 py-3 font-display text-xl text-secondary-foreground hover:brightness-110">
              Call 620.855.3496
            </a>
            <Link to="/contact" className="border-2 border-primary-foreground px-6 py-3 font-display text-xl hover:bg-primary-foreground hover:text-primary">
              Schedule a visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}