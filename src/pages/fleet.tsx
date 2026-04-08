import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect, ReactNode } from "react";
import GoldButton from "@/components/Button";
import GoldDivider from "@/components/Divider";
import { PhoneIcon, UsersIcon } from "@/components/Icons";

/* ── Reveal ── */
function Reveal({
  children,
  from = "bottom",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "bottom" | "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const transforms = {
    bottom: "translateY(60px)",
    left: "translateX(-60px)",
    right: "translateX(60px)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0)" : transforms[from],
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

interface Vehicle {
  name: string;
  type: string;
  passengers: number;
  luggage: number;
  image: string;
  features: string[];
  description: string;
}

const vehicles: Vehicle[] = [
  {
    name: "Chevrolet Suburban",
    type: "Premium SUV",
    passengers: 7,
    luggage: 4,
    image: "/images/fleet/suburban.jpg",
    description:
      "Spacious, comfortable, and built for any occasion. The Suburban offers generous seating for up to seven passengers with plenty of room for luggage. Whether it's an airport run, a night out, or a wedding, this is the ride that gets it done in style.",
    features: [
      "Leather interior",
      "Climate controlled",
      "Complimentary water",
      "USB charging ports",
      "Third-row seating",
      "Extra luggage capacity",
    ],
  },
];

export default function Fleet() {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Our Fleet | Watch Hill Transportation</title>
        <meta
          name="description"
          content="Explore our premium fleet of luxury vehicles. SUVs, sedans, and executive vans available for any occasion in Watch Hill, Rhode Island."
        />
      </Head>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-end overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 overflow-hidden">
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 pb-10 md:pb-16 pt-32 md:pt-40">
          <div className="overflow-hidden mb-2 md:mb-3">
            <p
              className={`font-body text-[11px] tracking-widest3 uppercase text-sand-light/70 font-light transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 ${
                heroLoaded ? "translate-y-0" : "translate-y-full"
              }`}
            >
              Our Vehicles
            </p>
          </div>

          <div className="overflow-hidden mb-2 md:mb-3">
            <h1
              className={`font-display text-[clamp(32px,7vw,80px)] font-light text-white leading-[1.05] transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                heroLoaded ? "translate-y-0" : "translate-y-full"
              }`}
            >
              The Fleet
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              className={`font-body text-[15px] md:text-[17px] text-white/60 font-light max-w-[500px] leading-relaxed transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                heroLoaded ? "translate-y-0" : "translate-y-full"
              }`}
            >
              Every vehicle in our fleet is late-model, meticulously maintained, and detailed before every trip.
            </p>
          </div>

          <div
            className={`mt-6 md:mt-8 h-px bg-sand/40 transition-all duration-[1.2s] ease-out delay-700 origin-left ${
              heroLoaded ? "w-16 md:w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </section>

      {/* ═══ FLEET PROMISE ═══ */}
      <section className="py-16 md:py-[80px] px-6 md:px-8 bg-cream">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-sand/50" />
              <div className="w-1 h-1 rounded-full bg-sand" />
              <div className="h-px w-8 bg-sand/50" />
            </div>
            <p className="font-body text-[14px] md:text-base text-txt-muted leading-[1.9] font-light max-w-[640px] mx-auto">
              Our fleet is growing. Every vehicle is selected for comfort,
              reliability, and presentation, and cleaned before each trip so you
              always step into a spotless ride.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ VEHICLES ═══ */}
      <section className="pb-16 md:pb-[100px] px-6 md:px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-20 md:gap-28">
          {vehicles.map((v, i) => {
            const isReversed = i % 2 !== 0;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <Reveal from={isReversed ? "right" : "left"} delay={0.1}>
                  <div className="relative aspect-[16/10] overflow-hidden lg:[direction:ltr]">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover"
                    />
                    {/* Type badge */}
                    <div className="absolute top-4 left-4 bg-navy-deep/80 backdrop-blur-sm px-4 py-2">
                      <p className="font-body text-[10px] tracking-widest2 uppercase text-sand-light font-light">
                        {v.type}
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Details */}
                <Reveal from={isReversed ? "left" : "right"} delay={0.2}>
                  <div className="lg:[direction:ltr]">
                    <p className="font-body text-[11px] tracking-widest2 uppercase text-sand font-light mb-3">
                      {v.type}
                    </p>
                    <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light text-navy leading-snug mb-4">
                      {v.name}
                    </h2>
                    <p className="font-body text-[14px] md:text-[15px] text-txt-muted leading-[1.9] font-light mb-6">
                      {v.description}
                    </p>

                    {/* Capacity badges */}
                    <div className="flex items-center gap-6 mb-8">
                      <div className="flex items-center gap-2">
                        <UsersIcon size={18} className="text-sea" />
                        <span className="font-body text-[13px] text-navy font-light">
                          Up to {v.passengers} passengers
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          className="text-sea"
                        >
                          <rect x="2" y="7" width="20" height="14" rx="2" />
                          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                        </svg>
                        <span className="font-body text-[13px] text-navy font-light">
                          {v.luggage} bags
                        </span>
                      </div>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {v.features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-sand rounded-full shrink-0" />
                          <span className="font-body text-[12px] md:text-[13px] text-txt-muted font-light">
                            {f}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-navy-deep text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10">
          <Reveal>
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand-light/60 mb-3 md:mb-4 font-light">
              Like What You See?
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,44px)] font-light text-white mb-3">
              Book Your Ride
            </h2>
            <p className="font-body text-[14px] text-white/50 font-light mb-10 max-w-[440px] mx-auto">
              Call or text to reserve your vehicle. We&apos;ll match you with the right car for your trip.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:4016222834"
                className="group inline-flex items-center gap-2 md:gap-3 bg-sand/90 text-navy-deep font-body text-[13px] md:text-[14px] font-normal tracking-widest2 uppercase px-8 py-4 md:px-10 md:py-4 transition-all duration-300 hover:bg-sand no-underline hover:shadow-[0_8px_32px_rgba(196,168,130,0.25)]"
              >
                <PhoneIcon
                  size={18}
                  className="text-navy-deep transition-transform duration-300 group-hover:scale-110"
                />
                <span>401-622-2834</span>
              </a>
              <Link href="/contact">
                <GoldButton
                  as="span"
                  variant="outline"
                  className="!text-sand-light !border-sand-light/40 hover:!border-sand-light hover:!text-white"
                >
                  Send a Message
                </GoldButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}