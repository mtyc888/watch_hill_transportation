import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState, ReactNode } from "react";
import GoldButton from "@/components/Button";
import GoldDivider from "@/components/Divider";
import {
  PhoneIcon,
  ShieldIcon,
  StarIcon,
  UsersIcon,
  ClockIcon,
  CarIcon,
  HeartIcon,
} from "@/components/Icons";

/* ── Reveal on scroll (slide direction) ── */
function Reveal({
  children,
  from = "bottom",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  from?: "bottom" | "left" | "right" | "top";
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
    top: "translateY(-60px)",
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

/* ── Text clip reveal ── */
function TextReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
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
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          transform: visible ? "translateY(0)" : "translateY(105%)",
          transition: `transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── Counter animation ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Props ── */
interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  metaDescription: string;
  icon: ReactNode;
  intro: string;
  features: { title: string; desc: string }[];
  heroImage: string;
  contentImage: string;
}

const reasons = [
  {
    icon: <ShieldIcon size={22} className="text-sea" />,
    title: "Licensed & Insured",
    desc: "Every driver is fully licensed, insured, and background-checked.",
  },
  {
    icon: <ClockIcon size={22} className="text-sea" />,
    title: "Always On Time",
    desc: "Punctuality is non-negotiable. We arrive early, every time.",
  },
  {
    icon: <CarIcon size={22} className="text-sea" />,
    title: "Premium Vehicles",
    desc: "Late-model vehicles maintained to the highest standard.",
  },
  {
    icon: <UsersIcon size={22} className="text-sea" />,
    title: "Personal Service",
    desc: "Real people, not apps. Call or text and talk to our team.",
  },
  {
    icon: <StarIcon size={22} className="text-sea" />,
    title: "5-Star Reputation",
    desc: "Trusted by locals, visitors, and businesses throughout Watch Hill.",
  },
  {
    icon: <HeartIcon size={22} className="text-sea" />,
    title: "Locally Owned",
    desc: "We live here, work here, and take pride in our community.",
  },
];

const steps = [
  {
    number: "01",
    title: "Get in Touch",
    desc: "Call or text 401-622-2834 with your pickup details. You can also use our contact form.",
  },
  {
    number: "02",
    title: "Confirm Your Ride",
    desc: "We confirm your booking with all details including vehicle, driver, and timing.",
  },
  {
    number: "03",
    title: "Sit Back & Relax",
    desc: "Your driver arrives on time. Enjoy the ride and leave the rest to us.",
  },
];

export default function ServiceLayout({
  title,
  subtitle,
  metaDescription,
  icon,
  intro,
  features,
  heroImage,
  contentImage,
}: ServiceLayoutProps) {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Watch Hill Transportation</title>
        <meta name="description" content={metaDescription} />
      </Head>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[50vh] md:min-h-[70vh] flex items-end overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={heroImage}
            alt={title}
            fill
            className={`object-cover transition-transform duration-[1.8s] ease-out ${
              heroLoaded ? "scale-100" : "scale-110"
            }`}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-8 pb-10 md:pb-16 pt-32 md:pt-40">
          <div
            className={`text-sand-light mb-3 md:mb-4 transition-all duration-700 delay-200 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {icon}
          </div>

          <div className="overflow-hidden mb-2 md:mb-3">
            <h1
              className={`font-display text-[clamp(32px,7vw,80px)] font-light text-white leading-[1.05] transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${
                heroLoaded ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {title}
            </h1>
          </div>

          <div className="overflow-hidden">
            <p
              className={`font-body text-[15px] md:text-[17px] text-white/60 font-light max-w-[500px] leading-relaxed transition-transform duration-[1s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-500 ${
                heroLoaded ? "translate-y-0" : "translate-y-full"
              }`}
            >
              {subtitle}
            </p>
          </div>

          <div
            className={`mt-6 md:mt-8 h-px bg-sand/40 transition-all duration-[1.2s] ease-out delay-700 origin-left ${
              heroLoaded ? "w-16 md:w-24 opacity-100" : "w-0 opacity-0"
            }`}
          />
        </div>
      </section>

      {/* ═══ INTRO SPLIT ═══ */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-cream overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          <Reveal from="left">
            <div>
              <span className="inline-block font-body text-[11px] tracking-widest2 uppercase text-sand font-light mb-5 md:mb-6 relative after:content-[''] after:absolute after:left-[calc(100%+12px)] after:top-1/2 after:w-8 after:h-px after:bg-sand/50">
                About This Service
              </span>
              <h2 className="font-display text-[clamp(24px,3.5vw,42px)] font-light text-navy leading-snug mb-6 md:mb-8">
                {title}
              </h2>
              <p className="font-body text-[14px] md:text-[15px] text-txt-muted leading-[2] font-light">
                {intro}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-10 pt-8 md:pt-10 border-t border-border">
                <div>
                  <p className="font-display text-[24px] md:text-[32px] font-light text-navy">
                    <Counter target={24} />/
                    <span className="text-[16px] md:text-[20px]">7</span>
                  </p>
                  <p className="font-body text-[10px] md:text-[11px] text-txt-muted tracking-widest2 uppercase font-light mt-1">
                    Availability
                  </p>
                </div>
                <div>
                  <p className="font-display text-[24px] md:text-[32px] font-light text-navy">
                    <Counter target={100} suffix="%" />
                  </p>
                  <p className="font-body text-[10px] md:text-[11px] text-txt-muted tracking-widest2 uppercase font-light mt-1">
                    On-Time Rate
                  </p>
                </div>
                <div>
                  <p className="font-display text-[24px] md:text-[32px] font-light text-navy">
                    5<span className="text-sand">.0</span>
                  </p>
                  <p className="font-body text-[10px] md:text-[11px] text-txt-muted tracking-widest2 uppercase font-light mt-1">
                    Star Rating
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal from="right" delay={0.15}>
            <div className="relative overflow-hidden">
              <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden">
                <Image
                  src={contentImage}
                  alt={`${title} service`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating accent card — stays inside on mobile */}
              <div className="absolute bottom-0 left-0 md:bottom-4 md:left-4 bg-navy-deep text-white px-5 py-3 md:px-6 md:py-4 z-10">
                <p className="font-display text-base md:text-lg font-light">Watch Hill</p>
                <p className="font-body text-[10px] md:text-[11px] text-white/50 tracking-widest2 uppercase font-light">
                  Transportation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FEATURES — BENTO GRID ═══ */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <Reveal from="bottom">
            <div className="mb-10 md:mb-16">
              <span className="inline-block font-body text-[11px] tracking-widest2 uppercase text-sand font-light mb-4 relative after:content-[''] after:absolute after:left-[calc(100%+12px)] after:top-1/2 after:w-8 after:h-px after:bg-sand/50">
                What&apos;s Included
              </span>
              <h2 className="font-display text-[clamp(24px,4vw,44px)] font-light text-navy">
                The Details
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {features.map((f, i) => (
              <Reveal key={i} from={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="bg-white p-6 md:p-10 group cursor-default hover:bg-cream transition-colors duration-500">
                  <div className="flex items-start gap-4 md:gap-5">
                    <span className="font-display text-[28px] md:text-[40px] font-light text-sand/30 leading-none shrink-0 group-hover:text-sand transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[17px] md:text-[19px] font-normal text-navy mb-2 group-hover:translate-x-1 transition-transform duration-300">
                        {f.title}
                      </h3>
                      <p className="font-body text-[12px] md:text-[13px] text-txt-muted font-light leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-16 md:py-[100px] px-6 md:px-8 bg-cream overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <TextReveal className="mb-4">
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand font-light">
              The Difference
            </p>
          </TextReveal>
          <TextReveal delay={0.1} className="mb-8 md:mb-12">
            <h2 className="font-display text-[clamp(24px,4vw,44px)] font-light text-navy">
              Why Choose Us?
            </h2>
          </TextReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-6 md:gap-y-10">
            {reasons.map((r, i) => (
              <Reveal key={i} from="bottom" delay={i * 0.08}>
                <div className="group flex items-start gap-4 py-5 md:py-6 border-b border-border hover:border-navy/30 transition-colors duration-300">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-navy-deep/5 flex items-center justify-center shrink-0 group-hover:bg-navy-deep/10 transition-colors duration-300">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] md:text-[16px] font-normal text-navy mb-1">
                      {r.title}
                    </h3>
                    <p className="font-body text-[12px] md:text-[13px] text-txt-muted font-light leading-relaxed">
                      {r.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUR PROCESS — VERTICAL TIMELINE ═══ */}
      <section className="py-16 md:py-[120px] px-6 md:px-8 bg-navy-deep relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg, transparent, transparent 60px,
              rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px
            )`,
          }}
        />

        <div className="relative z-10 max-w-[700px] mx-auto">
          <TextReveal className="mb-4">
            <p className="font-body text-[11px] tracking-widest2 uppercase text-sand-light/50 font-light">
              Simple & Seamless
            </p>
          </TextReveal>
          <TextReveal delay={0.1} className="mb-10 md:mb-16">
            <h2 className="font-display text-[clamp(24px,4vw,44px)] font-light text-white">
              Our Process
            </h2>
          </TextReveal>

          <div className="relative">
            <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-white/10" />

            {steps.map((s, i) => (
              <Reveal key={i} from="left" delay={i * 0.2}>
                <div className="flex gap-5 md:gap-8 mb-12 md:mb-16 last:mb-0">
                  <div className="relative shrink-0">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-sand/40 flex items-center justify-center bg-navy-deep">
                      <span className="font-body text-[11px] md:text-[12px] text-sand font-light">
                        {s.number}
                      </span>
                    </div>
                  </div>

                  <div className="pt-0.5 md:pt-1.5">
                    <h3 className="font-display text-[19px] md:text-[22px] font-normal text-white mb-2">
                      {s.title}
                    </h3>
                    <p className="font-body text-[13px] md:text-[14px] text-white/50 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal from="bottom" delay={0.7}>
            <div className="ml-[36px] md:ml-[56px] mt-10 md:mt-12 pt-10 md:pt-12 border-t border-white/10">
              <a
                href="tel:4016222834"
                className="group inline-flex items-center gap-2 md:gap-3 bg-sand text-navy-deep font-body text-[13px] md:text-[14px] font-normal tracking-widest2 uppercase px-8 py-3.5 md:px-10 md:py-4 transition-all duration-300 hover:bg-sand-light no-underline hover:shadow-[0_8px_32px_rgba(196,168,130,0.25)]"
              >
                <PhoneIcon
                  size={18}
                  className="text-navy-deep transition-transform duration-300 group-hover:scale-110"
                />
                <span>401-622-2834</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ BOTTOM CTA ═══ */}
      <section className="py-12 md:py-[80px] px-6 md:px-8 bg-cream">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          <Reveal from="left">
            <div>
              <h2 className="font-display text-[clamp(22px,3vw,36px)] font-light text-navy mb-2">
                Ready to Book?
              </h2>
              <p className="font-body text-[13px] md:text-[14px] text-txt-muted font-light">
                Call or text us for an instant quote. We&apos;ll take care of everything.
              </p>
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <Link href="/contact">
                <GoldButton as="span">Send a Message</GoldButton>
              </Link>
              <Link href="/services">
                <GoldButton as="span" variant="outline">
                  All Services
                </GoldButton>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}