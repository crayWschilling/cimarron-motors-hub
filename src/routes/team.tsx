import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team | Cimarron Motor LLC" },
      { name: "description", content: "Meet the family and crew behind Cimarron Motor — independently owned in Cimarron, Kansas since 1969." },
      { property: "og:title", content: "Our Team — Cimarron Motor LLC" },
      { property: "og:description", content: "The Maxwell family and crew keeping a 1969 tradition alive." },
    ],
  }),
  component: TeamPage,
});

const timeline = [
  { year: "1969", title: "Founded", body: "\"Red\" Cahoon opens Cimarron Motor on Avenue A." },
  { year: "Early 70s", title: "Joe Salem", body: "Joe Salem purchases the business and carries it forward." },
  { year: "1975", title: "Larry Salem", body: "Joe's brother Larry buys the shop and grows it for decades until retirement." },
  { year: "2022", title: "The Maxwell Family", body: "The Maxwells purchase Cimarron Motor and continue the tradition of first-class parts, service and hospitality." },
];

function TeamPage() {
  return (
    <>
      <PageHero eyebrow="OUR TEAM" title={<>Four owners.<br/><span className="text-primary">Same handshake.</span></>}>
        Cimarron Motor has only changed hands a handful of times in over fifty
        years, and the standard has been the same every time: take care of the
        customer, and tell them the truth.
      </PageHero>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <ol className="relative space-y-10 border-l-2 border-primary pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[42px] grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  ●
                </span>
                <p className="font-display text-xl tracking-[0.2em] text-primary">{t.year}</p>
                <h3 className="mt-1 font-display text-3xl md:text-4xl">{t.title}</h3>
                <p className="mt-2 text-foreground/80">{t.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-20 border-t border-border pt-10">
            <h2 className="font-display text-3xl md:text-5xl">Meet the crew</h2>
            <p className="mt-4 text-foreground/80">
              The Maxwell family runs the day-to-day alongside a small crew of
              parts and service folks who know the customers, the equipment, and
              the territory. Stop in, say hi, and grab a coffee.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Aaron Maxwell", roles: ["Owner / Operator"] },
                { name: "Audrey Maxwell", roles: ["Owner / Operator"] },
                { name: "Matt Hammes", roles: ["Shop Manager / Foreman", "Automotive Technician"] },
                { name: "Sergio Saenz", roles: ["Automotive Technician"] },
                { name: "Mike Cornell", roles: ["Parts Manager", "Counter Clerk"] },
              ].map((member) => (
                <div
                  key={member.name}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="font-display text-2xl tracking-wide">{member.name}</h3>
                  <div className="mt-3 space-y-1">
                    {member.roles.map((role) => (
                      <p key={role} className="text-sm font-medium text-primary">
                        {role}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}