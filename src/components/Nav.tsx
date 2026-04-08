import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "./Button";
import { MenuIcon, XIcon, PlaneIcon, CarIcon, ClockIcon, HeartIcon, ZapIcon } from "./Icons";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceDropdown = [
  { label: "Airport Transfer", href: "/services/airport-transfer", icon: <PlaneIcon size={16} /> },
  { label: "Private Charter", href: "/services/private-charter", icon: <CarIcon size={16} /> },
  { label: "Chauffeur / Hourly", href: "/services/chauffeur-hourly", icon: <ClockIcon size={16} /> },
  { label: "Wedding", href: "/services/wedding", icon: <HeartIcon size={16} /> },
  { label: "Last Minute", href: "/services/last-minute", icon: <ZapIcon size={16} /> },
];

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setAnimating(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [router.pathname]);

  const openMenu = () => {
    setMobileOpen(true);
    requestAnimationFrame(() => setAnimating(true));
  };

  const closeMenu = () => {
    setAnimating(false);
    setTimeout(() => setMobileOpen(false), 400);
  };

  const showDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const hideDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const isServicesActive = router.pathname.startsWith("/services");

  return (
    <>
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 overflow-x-clip ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-border py-3.5 shadow-sm"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-300 mx-auto px-8 flex items-center justify-between">
          <Link href="/" className="no-underline hidden md:inline">
            <span className="font-display text-[24px] font-bold tracking-wider transition-colors duration-400">
              <span className={scrolled ? "text-navy" : "text-white"}>
                WATCH HILL
              </span>{" "}
              <span className={scrolled ? "text-slate" : "text-white/80"}>
                TRANSPORTATION
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((l) =>
              l.label === "Services" ? (
                /* Services with dropdown */
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <Link
                    href={l.href}
                    className={`font-body text-xs font-light tracking-widest2 uppercase pb-1 border-b transition-all duration-300 no-underline inline-flex items-center gap-1.5 ${
                      isServicesActive
                        ? scrolled
                          ? "text-navy border-navy"
                          : "text-white border-white"
                        : scrolled
                          ? "text-slate-light border-transparent hover:text-navy"
                          : "text-white/80 border-transparent hover:text-white"
                    }`}
                  >
                    {l.label}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${
                        dropdownOpen ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`w-[260px] py-3 shadow-xl border ${
                        scrolled
                          ? "bg-white border-border"
                          : "bg-navy-deep/95 backdrop-blur-md border-white/10"
                      }`}
                    >
                      {/* View all link */}
                      <Link
                        href="/services"
                        className={`block px-6 py-2.5 font-body text-[11px] tracking-widest2 uppercase font-light no-underline transition-colors duration-200 ${
                          scrolled
                            ? "text-sand hover:text-navy hover:bg-cream"
                            : "text-sand-light/60 hover:text-sand-light hover:bg-white/5"
                        }`}
                      >
                        View All Services
                      </Link>

                      <div
                        className={`mx-4 my-1.5 h-px ${
                          scrolled ? "bg-border" : "bg-white/10"
                        }`}
                      />

                      {serviceDropdown.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`flex items-center gap-3 px-6 py-2.5 font-body text-[13px] font-light no-underline transition-all duration-200 group ${
                            router.pathname === s.href
                              ? scrolled
                                ? "text-navy bg-cream"
                                : "text-white bg-white/10"
                              : scrolled
                                ? "text-txt-muted hover:text-navy hover:bg-cream"
                                : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span
                            className={`transition-colors duration-200 ${
                              router.pathname === s.href
                                ? scrolled
                                  ? "text-navy"
                                  : "text-sand-light"
                                : scrolled
                                  ? "text-slate-light group-hover:text-navy"
                                  : "text-white/40 group-hover:text-sand-light"
                            }`}
                          >
                            {s.icon}
                          </span>
                          <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                            {s.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`font-body text-xs font-light tracking-widest2 uppercase pb-1 border-b transition-all duration-300 no-underline ${
                    router.pathname === l.href
                      ? scrolled
                        ? "text-navy border-navy"
                        : "text-white border-white"
                      : scrolled
                        ? "text-slate-light border-transparent hover:text-navy"
                        : "text-white/80 border-transparent hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
              )
            )}
            <Link href="/contact">
              <Button as="span" className="!py-2.5 !px-7 !text-[11px]">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden ml-auto bg-transparent border-none cursor-pointer transition-colors duration-400 ${
              scrolled ? "text-navy" : "text-white"
            }`}
            onClick={openMenu}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className={`fixed inset-0 z-[60] bg-cream flex flex-col transition-all duration-400 ease-out ${
            animating
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
        >
          <div className="flex items-center justify-end px-8 py-5">
            <button
              className="text-navy bg-transparent border-none cursor-pointer"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <XIcon />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-6">
            {/* Home */}
            <Link
              href="/"
              className={`font-display text-[36px] font-light tracking-widest no-underline transition-all duration-500 ${
                router.pathname === "/" ? "text-navy" : "text-slate"
              }`}
              style={{
                transitionDelay: animating ? "100ms" : "0ms",
                opacity: animating ? 1 : 0,
                transform: animating ? "translateY(0)" : "translateY(-20px)",
              }}
              onClick={closeMenu}
            >
              Home
            </Link>

            {/* Services with expandable sub-links */}
            <div
              className="flex flex-col items-center transition-all duration-500"
              style={{
                transitionDelay: animating ? "180ms" : "0ms",
                opacity: animating ? 1 : 0,
                transform: animating ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              <button
                className={`font-display text-[36px] font-light tracking-widest bg-transparent border-none cursor-pointer flex items-center gap-2 ${
                  isServicesActive ? "text-navy" : "text-slate"
                }`}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-transform duration-300 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              <div
                className={`flex flex-col items-center gap-3 overflow-hidden transition-all duration-400 ease-out ${
                  mobileServicesOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 mt-0 opacity-0"
                }`}
              >
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="font-body text-[12px] tracking-widest2 uppercase text-sand no-underline"
                >
                  View All
                </Link>
                {serviceDropdown.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={closeMenu}
                    className={`font-body text-[15px] font-light no-underline flex items-center gap-2 ${
                      router.pathname === s.href ? "text-navy" : "text-slate-light"
                    }`}
                  >
                    <span className="text-sand">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              className={`font-display text-[36px] font-light tracking-widest no-underline transition-all duration-500 ${
                router.pathname === "/contact" ? "text-navy" : "text-slate"
              }`}
              style={{
                transitionDelay: animating ? "260ms" : "0ms",
                opacity: animating ? 1 : 0,
                transform: animating ? "translateY(0)" : "translateY(-20px)",
              }}
              onClick={closeMenu}
            >
              Contact
            </Link>

            <div
              className="transition-all duration-500"
              style={{
                transitionDelay: animating ? "340ms" : "0ms",
                opacity: animating ? 1 : 0,
                transform: animating ? "translateY(0)" : "translateY(-20px)",
              }}
            >
              <Link href="/contact" onClick={closeMenu}>
                <Button as="span">Book Now</Button>
              </Link>
            </div>
          </div>

          <div
            className="pb-10 text-center transition-all duration-500"
            style={{
              transitionDelay: animating ? "500ms" : "0ms",
              opacity: animating ? 1 : 0,
            }}
          >
            <a
              href="tel:4016222834"
              className="font-body text-sm text-sand tracking-widest2 no-underline"
            >
              401-622-2834
            </a>
          </div>
        </div>
      )}
    </>
  );
}