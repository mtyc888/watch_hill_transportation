import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/Button";
import GoldDivider from "@/components/Divider";
import Image from "next/image";
import {
  PlaneIcon,
  CarIcon,
  ClockIcon,
  HeartIcon,
  ZapIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
  PhoneIcon,
} from "@/components/Icons";

function useParallax() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return offset;
}

const pillars = [
  {
    icon: <ShieldIcon className="text-sea" />,
    title: "Safety & Trust",
    desc: "Licensed, insured, and professionally trained chauffeurs committed to your security and peace of mind.",
  },
  {
    icon: <StarIcon className="text-sea" />,
    title: "Premium Fleet",
    desc: "Meticulously maintained luxury vehicles, immaculate inside and out, equipped for every occasion.",
  },
  {
    icon: <UsersIcon className="text-sea" />,
    title: "White-Glove Service",
    desc: "Every journey is personal. From meet-and-greet to bespoke itineraries, your comfort comes first.",
  },
];

const services = [
  {
    icon: <PlaneIcon className="text-navy" size={28} />,
    label: "Airport Transfer",
    brief: "Seamless pickups from T.F. Green, Logan & JFK",
    href: "/services/airport-transfer",
  },
  {
    icon: <CarIcon className="text-navy" size={28} />,
    label: "Private Charter",
    brief: "A dedicated vehicle & driver, wherever you need",
    href: "/services/private-charter",
  },
  {
    icon: <ClockIcon className="text-navy" size={28} />,
    label: "Hourly Chauffeur",
    brief: "Flexible by-the-hour service on your schedule",
    href: "/services/chauffeur-hourly",
  },
  {
    icon: <HeartIcon className="text-navy" size={28} />,
    label: "Wedding",
    brief: "Arrive at your big day in unforgettable style",
    href: "/services/wedding",
  },
  {
    icon: <ZapIcon className="text-navy" size={28} />,
    label: "Last Minute",
    brief: "Plans changed? We're ready. Same-day available",
    href: "/services/last-minute",
  },
];

const marqueeItems = [
  "Watch Hill",
  "◆",
  "Westerly",
  "◆",
  "Newport",
  "◆",
  "Providence",
  "◆",
  "T.F. Green Airport",
  "◆",
  "Logan Airport",
  "◆",
  "JFK Airport",
  "◆",
  "Cape Cod",
  "◆",
  "Nantucket",
  "◆",
  "Martha's Vineyard",
  "◆",
];

export default function Home() {
  const scrollY = useParallax();

  return (
    <>
      <Head>
        <title>Watch Hill Transportation | Premium Chauffeur Services</title>
        <meta
          name="description"
          content="Comfortable and reliable luxury chauffeur service in Watch Hill, Rhode Island. Airport transfers, private charter, weddings, and more."
        />
      </Head>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        </div>

        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-navy-deep/60" />

        <div className="relative z-10 text-center max-w-[900px] px-6 md:px-8">
          <h1 className="sr-only">Watch Hill Transportation</h1>

          <FadeIn>
            <div className="mb-6 md:mb-10">
              <div className="w-16 h-16 md:w-24 md:h-24 mx-auto rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
                <span className="font-display text-2xl md:text-4xl text-white/90 font-light">
                  W
                </span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="font-body text-[11px] md:text-[12px] tracking-widest3 uppercase text-white/60 mb-4 md:mb-6 font-light">
              Watch Hill, Rhode Island
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="font-display text-[clamp(28px,5vw,72px)] text-white font-light leading-[1.1] mb-1 md:mb-2">
              Comfortable &amp; Reliable
            </p>
            <p className="font-display text-[clamp(28px,5vw,72px)] italic text-sand-light font-light leading-[1.1] mb-6 md:mb-10">
              Luxury Chauffeur Service
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex items-center justify-center gap-4 mb-5 md:mb-8">
              <div className="h-px w-12 md:w-16 bg-white/25" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-sand" />
              <div className="h-px w-12 md:w-16 bg-white/25" />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="font-body text-[15px] md:text-[17px] text-white/70 leading-relaxed max-w-[520px] mx-auto mb-8 md:mb-14 font-light">
              Travel confidently with premium vehicles and experienced,
              licensed and insured drivers at your service.
            </p>
          </FadeIn>

          <FadeIn delay={0.5}>
            <a
              href="tel:4016222834"
              className="group inline-flex items-center gap-2 md:gap-3 bg-sand/90 backdrop-blur-sm text-navy-deep font-body text-[13px] md:text-[15px] font-normal tracking-widest2 uppercase px-8 py-4 md:px-14 md:py-5 transition-all duration-300 hover:bg-sand no-underline hover:shadow-[0_8px_32px_rgba(196,168,130,0.3)]"
            >
              <PhoneIcon size={18} className="text-navy-deep transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">Call or Text 401-622-2834</span>
              <span className="sm:hidden">401-622-2834</span>
            </a>
            <p className="font-body text-[12px] text-white/40 font-light tracking-wide mt-3 md:mt-5">
              For an instant quote
            </p>
          </FadeIn>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-cream to-transparent" />

        <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-10 md:h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── LOCATION MARQUEE ── */}
      <section className="bg-cream overflow-hidden py-4 md:py-5 border-b border-border">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className={`mx-3 md:mx-4 font-body text-[10px] md:text-[11px] tracking-widest2 uppercase font-light ${
                item === "◆" ? "text-sand" : "text-slate-light"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </section>

      {/* ── INTRO ── */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-cream">
        <div className="max-w-[900px] mx-auto text-center">
          <FadeIn>
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand mb-4 md:mb-6 font-light">
              Welcome
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,48px)] font-light text-navy leading-snug mb-5 md:mb-6">
              Arrive the Way You Should
              <br />
              <span className="italic text-sea">On Time &amp; Comfortably</span>
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-8">
              <div className="h-px w-8 bg-sand/50" />
              <div className="w-1 h-1 rounded-full bg-sand" />
              <div className="h-px w-8 bg-sand/50" />
            </div>
            <p className="font-body text-[14px] md:text-base text-txt-muted leading-[1.9] font-light max-w-[640px] mx-auto mb-5 md:mb-6">
              Watch Hill Transportation is a premium private car service
              offering reliable, professional rides throughout Watch Hill and
              all surrounding areas. Whether it&apos;s dinners, events, airport
              transfers, business... we make getting around effortless.
            </p>
            <p className="font-body text-[14px] md:text-base text-txt-muted leading-[1.9] font-light max-w-[640px] mx-auto">
              Our service is simple, on-time, and tailored to you. Call or text
              to book your ride, and we&apos;ll handle the rest so you can
              focus on enjoying the moment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PILLARS ── */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-cream-warm">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-0">
          {pillars.map((item, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div
                className={`p-8 md:p-14 text-center transition-all duration-400 hover:-translate-y-1 ${
                  i < pillars.length - 1
                    ? "border-b md:border-b-0 md:border-r border-border"
                    : ""
                }`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto rounded-full bg-navy-deep/5 flex items-center justify-center mb-5 md:mb-6">
                  {item.icon}
                </div>
                <h3 className="font-display text-[18px] md:text-[20px] font-normal text-navy mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] md:text-sm text-txt-muted leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 md:py-[120px] px-6 md:px-8 bg-cream relative">
        <FadeIn>
          <div className="text-center mb-10 md:mb-16">
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand mb-4 font-light">
              Our Services
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,44px)] font-light text-navy mb-4">
              Tailored to Your Journey
            </h2>
            <GoldDivider width={80} />
          </div>
        </FadeIn>

        <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <Link href={s.href} className="no-underline group">
                <div className="bg-white border border-border p-6 md:p-8 transition-all duration-400 hover:border-navy/20 hover:shadow-lg cursor-pointer group-hover:-translate-y-1">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-cream-warm flex items-center justify-center shrink-0 transition-colors group-hover:bg-navy/5">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-[16px] md:text-lg font-normal text-navy mb-1">
                        {s.label}
                      </h3>
                      <p className="font-body text-[12px] md:text-[13px] text-txt-muted font-light leading-relaxed">
                        {s.brief}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sand font-body text-[11px] tracking-widest2 uppercase font-light">
                    <span>Learn more</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}

          <FadeIn delay={0.5}>
            <a
              href="tel:4016222834"
              className="no-underline flex flex-col items-center justify-center bg-navy-deep p-6 md:p-8 text-center transition-all duration-400 hover:bg-navy min-h-[160px] md:min-h-[180px]"
            >
              <PhoneIcon size={24} className="text-sand-light mb-3 md:mb-4" />
              <p className="font-display text-lg md:text-xl text-white font-light mb-1">
                Get a Quote
              </p>
              <p className="font-body text-[12px] md:text-[13px] text-white/50 font-light">
                401-622-2834
              </p>
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/coast.jpg"
            alt="Watch Hill Coastline"
            fill
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="absolute inset-0 bg-navy-deep/40" />
        <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-8">
          <FadeIn>
            <div className="text-center">
              <p className="font-display text-[clamp(20px,4vw,40px)] text-white font-light italic">
                &ldquo;Where the coastline meets comfort&rdquo;
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 md:py-[120px] px-6 md:px-8 bg-cream text-center">
        <FadeIn>
          <div className="max-w-[680px] mx-auto">
            <div className="flex items-center justify-center gap-1 mb-6 md:mb-8">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#C4A882"
                  stroke="none"
                  className="md:w-4 md:h-4"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="font-display text-[clamp(16px,2.5vw,26px)] font-light italic text-navy leading-relaxed mb-6 md:mb-8">
              An extraordinary level of service. From the moment we booked to
              the final drop-off, everything was flawless. This is what luxury
              travel should feel like.
            </p>
            <div className="flex items-center justify-center gap-4 mb-5 md:mb-6">
              <div className="h-px w-8 bg-sand/50" />
              <div className="w-1 h-1 rounded-full bg-sand" />
              <div className="h-px w-8 bg-sand/50" />
            </div>
            <p className="font-body text-[11px] md:text-[12px] tracking-widest2 uppercase text-sand font-normal">
              A Satisfied Client
            </p>
            <p className="font-body text-[11px] md:text-[12px] text-txt-muted font-light mt-1">
              Your testimonials will go here
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-navy-deep text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
          }}
        />
        <div className="relative z-10">
          <FadeIn>
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand-light/60 mb-3 md:mb-4 font-light">
              Ready?
            </p>
            <h2 className="font-display text-[clamp(24px,4vw,48px)] font-light text-white mb-2 md:mb-3">
              Your Journey
            </h2>
            <p className="font-display text-[clamp(24px,4vw,48px)] italic text-sand-light font-light mb-8 md:mb-10">
              Starts with a Call
            </p>
            <a
              href="tel:4016222834"
              className="group inline-flex items-center gap-2 md:gap-3 bg-sand/90 text-navy-deep font-body text-[13px] md:text-[14px] font-normal tracking-widest2 uppercase px-8 py-4 md:px-12 md:py-5 transition-all duration-300 hover:bg-sand no-underline hover:shadow-[0_8px_32px_rgba(196,168,130,0.25)]"
            >
              <PhoneIcon
                size={18}
                className="text-navy-deep transition-transform duration-300 group-hover:scale-110"
              />
              <span>401-622-2834</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}