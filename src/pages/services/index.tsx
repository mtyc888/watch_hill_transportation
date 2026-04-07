import Head from "next/head";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/Button";
import {
  PlaneIcon,
  CarIcon,
  ClockIcon,
  HeartIcon,
  ZapIcon,
  PhoneIcon,
} from "@/components/Icons";
import { ReactNode } from "react";

interface Service {
  icon: ReactNode;
  title: string;
  desc: string;
  href: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <PlaneIcon className="text-navy" />,
    title: "Airport Transfer",
    desc: "Seamless luxury transfers to and from all major airports including T.F. Green, Logan, and JFK. Flight tracking, meet-and-greet service, and complimentary wait time included.",
    href: "/services/airport-transfer",
    features: [
      "Flight monitoring & tracking",
      "Meet-and-greet at arrivals",
      "Complimentary waiting time",
      "Luggage assistance",
    ],
  },
  {
    icon: <CarIcon className="text-navy" />,
    title: "Private Charter",
    desc: "A dedicated vehicle and chauffeur for your exclusive use. Perfect for business travel, coastal tours, or multi-day trips through New England with a tailored itinerary.",
    href: "/services/private-charter",
    features: [
      "Dedicated vehicle & chauffeur",
      "Flexible multi-stop routing",
      "Corporate & leisure packages",
      "Multi-day availability",
    ],
  },
  {
    icon: <ClockIcon className="text-navy" />,
    title: "Chauffeur / Hourly",
    desc: "Your personal chauffeur on standby, by the hour. Ideal for meetings, events, or a day exploring Watch Hill and the Rhode Island coast.",
    href: "/services/chauffeur-hourly",
    features: [
      "Hourly booking flexibility",
      "On-demand schedule changes",
      "Multiple stops included",
      "Professional & discreet",
    ],
  },
  {
    icon: <HeartIcon className="text-navy" />,
    title: "Wedding",
    desc: "Make your special day unforgettable with luxury wedding transportation. Decorated vehicles, red carpet service, and a chauffeur who understands the importance of your moment.",
    href: "/services/wedding",
    features: [
      "Decorated luxury vehicles",
      "Red carpet arrival",
      "Bridal party coordination",
      "Photography-ready presentation",
    ],
  },
  {
    icon: <ZapIcon className="text-navy" />,
    title: "Last Minute Requests",
    desc: "Plans changed? We're ready. Our rapid-response team handles urgent bookings with the same level of care and professionalism as any scheduled service.",
    href: "/services/last-minute",
    features: [
      "Quick response booking",
      "Same-day availability",
      "No compromise on quality",
      "24/7 support line",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Watch Hill Transportation</title>
        <meta
          name="description"
          content="Airport transfers, private charter, hourly chauffeur, wedding transport, and last-minute requests in Watch Hill, Rhode Island."
        />
      </Head>

      {/* ── HERO ── */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-navy-deep to-navy pt-36 pb-20 px-8 text-center">
        <FadeIn>
          <p className="font-body text-[11px] tracking-widest3 uppercase text-sand-light mb-6 font-light">
            What We Offer
          </p>
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-txt-light mb-4">
            Our <span className="italic text-sand-light">Services</span>
          </h1>
          <p className="font-body text-[15px] text-txt-light/60 max-w-[560px] mx-auto font-light leading-relaxed">
            Every service is crafted to deliver an exceptional travel
            experience, on time, every time.
          </p>
        </FadeIn>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-20 pb-[120px] px-8 bg-cream">
        <div className="max-w-[900px] mx-auto flex flex-col gap-12">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white border border-border p-14 max-md:p-9 transition-all duration-400 hover:border-navy/30 hover:shadow-lg">
                <div>
                  <div className="mb-5">{s.icon}</div>
                  <h3 className="font-display text-[28px] font-normal text-navy mb-4">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm text-txt-muted leading-relaxed font-light mb-6">
                    {s.desc}
                  </p>
                  <Link href={s.href} className="no-underline group inline-flex items-center gap-2">
                    <span className="font-body text-[12px] tracking-widest2 uppercase text-sand font-light">
                      Learn more
                    </span>
                    <span className="text-sand transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-3.5">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-sand rounded-full shrink-0" />
                      <span className="font-body text-[13px] text-txt font-light">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-[100px] px-8 bg-navy-deep text-center">
        <FadeIn>
          <h2 className="font-display text-[clamp(24px,4vw,40px)] font-light text-white mb-3">
            Need Something <span className="italic text-sand-light">Bespoke?</span>
          </h2>
          <p className="font-body text-sm text-white/50 mb-9 font-light">
            We accommodate special requests. Get in touch and we&apos;ll make
            it happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4016222834"
              className="group inline-flex items-center gap-3 bg-sand/90 text-navy-deep font-body text-[14px] font-normal tracking-widest2 uppercase px-10 py-4 transition-all duration-300 hover:bg-sand no-underline"
            >
              <PhoneIcon size={18} className="text-navy-deep" />
              <span>401-622-2834</span>
            </a>
            <Link href="/contact">
              <GoldButton
                as="span"
                variant="outline"
                className="!text-sand-light !border-sand-light/40 hover:!border-sand-light hover:!text-white"
              >
                Contact Us
              </GoldButton>
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}