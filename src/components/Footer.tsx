import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceList = [
  "Airport Transfer",
  "Private Charter",
  "Hourly Chauffeur",
  "Weddings",
  "Last Minute",
];

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-10 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-wrap gap-12 justify-between">
        <div className="min-w-[240px]">
          <div className="font-display text-[22px] tracking-wider text-txt-light mb-4">
            <span className="text-sand-light">WATCH HILL</span>{" "}
            <span className="text-txt-light/70">TRANSPORTATION</span>
          </div>
          <p className="font-body text-[13px] text-txt-light/50 leading-relaxed max-w-[300px] font-light">
            Premium chauffeur services in Watch Hill, Westerly, and greater Rhode Island. Every journey is an experience in coastal elegance.
          </p>
        </div>

        <div className="flex gap-14 flex-wrap">
          <div>
            <h4 className="font-body text-[11px] tracking-widest2 uppercase text-sand mb-4 font-normal">
              Navigation
            </h4>
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block font-body text-[13px] text-txt-light/50 mb-2.5 font-light no-underline hover:text-sand-light transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="font-body text-[11px] tracking-widest2 uppercase text-sand mb-4 font-normal">
              Services
            </h4>
            {serviceList.map((s) => (
              <div key={s} className="font-body text-[13px] text-txt-light/50 mb-2.5 font-light">
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-10 pt-6 border-t border-white/10 text-center">
        <p className="font-body text-xs text-txt-light/40 font-light">
          &copy; {new Date().getFullYear()} Watch Hill Transportation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}