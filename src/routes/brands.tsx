import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands | Cimarron Motor LLC" },
      { name: "description", content: "Trusted automotive and agricultural brands stocked at Cimarron Motor in Cimarron, Kansas." },
      { property: "og:title", content: "Brands | Cimarron Motor LLC" },
      { property: "og:description", content: "The names we trust on our shelves and in the service bay." },
    ],
  }),
  component: BrandsPage,
});

const brands = [
  "Mahindra ROXOR", "NAPA", "AC Delco", "Motorcraft", "Bosch", "Gates",
  "Fram", "WIX Filters", "Interstate Batteries", "Valvoline", "Mobil 1",
  "Cummins", "Stanadyne", "Donaldson", "Baldwin Filters", "Champion",
  "Dayco", "Permatex",
];

function BrandsPage() {
  return (
    <>
      <PageHero eyebrow="THE NAMES WE TRUST" title={<>Brands we stock<span className="text-primary">.</span></>}>
        From the parts counter to the service bay, we carry the names that
        Kansas farmers, ranchers and drivers count on. Don't see what you need?
        We can usually have it in the shop within a day or two.
      </PageHero>

      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="grid grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((b) => (
              <div
                key={b}
                className="flex h-32 items-center justify-center bg-background p-4 text-center transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                <span className="font-display text-2xl tracking-wide md:text-3xl">{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-start gap-4 border-l-4 border-primary pl-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-3xl md:text-5xl">Looking for something specific?</h2>
              <p className="mt-2 max-w-xl text-foreground/80">
                Give the parts counter a call. If we don't have it on the shelf,
                we'll tell you straight when we can.
              </p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 bg-primary px-6 py-3 font-display text-xl text-primary-foreground hover:brightness-110">
              Contact the shop
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}