import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const hours = [
  ["Monday", "7:00 to 5:30"],
  ["Tuesday", "7:00 to 5:30"],
  ["Wednesday", "7:00 to 5:30"],
  ["Thursday", "7:00 to 5:30"],
  ["Friday", "7:00 to 5:30"],
  ["Saturday", "8:00 to 12:00"],
  ["Sunday", "CLOSED"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center bg-primary font-display text-2xl text-primary-foreground">
              CM
            </span>
            <span className="font-display text-2xl">Cimarron Motor LLC</span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
            Independently owned since 1969. Parts, service, and a friendly atmosphere
            on the corner of Avenue A in Cimarron, Kansas.
          </p>
          <nav className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-display text-lg">
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/brands" className="hover:text-primary">Brands</Link>
            <Link to="/roxor" className="hover:text-primary">ROXOR</Link>
            <Link to="/team" className="hover:text-primary">Our Team</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>

        <div>
          <h3 className="font-display text-2xl text-primary">Contact</h3>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <p className="font-display text-lg text-secondary-foreground/90">Cimarron</p>
              <ul className="mt-1 space-y-2">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <a
                    href="https://maps.google.com/?q=602+W+Ave+A,+Cimarron,+KS+67835"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    602 W Ave A, Cimarron, KS 67835
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" />
                  <a href="tel:6208553496" className="hover:text-primary">
                    620.855.3496
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-display text-lg text-secondary-foreground/90">Jetmore</p>
              <ul className="mt-1 space-y-2">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <a
                    href="https://maps.google.com/?q=211+Clay+St,+Jetmore,+KS+67854"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    211 Clay St, Jetmore, KS 67854
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary" />
                  <a href="tel:6203578353" className="hover:text-primary">
                    620.357.8353
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex items-start gap-3 border-t border-secondary-foreground/10 pt-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href="mailto:cimmotor@ucom.net" className="hover:text-primary">
                cimmotor@ucom.net
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="flex items-center gap-2 font-display text-2xl text-primary">
            <Clock className="h-5 w-5" /> Hours
          </h3>
          <ul className="mt-4 space-y-1.5 text-sm">
            {hours.map(([day, time]) => (
              <li key={day} className="flex justify-between border-b border-secondary-foreground/10 py-1">
                <span className="text-secondary-foreground/70">{day}</span>
                <span className="font-medium">{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-xs text-secondary-foreground/60 md:px-8">
          © {new Date().getFullYear()} Cimarron Motor LLC. Family owned in
          Southwest Kansas since 1969.
        </p>
      </div>
    </footer>
  );
}