import Head from "next/head";
import { useState, FormEvent } from "react";
import FadeIn from "@/components/FadeIn";
import GoldButton from "@/components/Button";
import GoldDivider from "@/components/Divider";
import { PhoneIcon, MailIcon } from "@/components/Icons";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form), // 'form' state has name, email, phone, etc.
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full py-3.5 px-4 bg-cream border border-border text-txt font-body text-sm font-light outline-none transition-colors duration-300 focus:border-navy";

  const labelClasses =
    "font-body text-[11px] tracking-widest2 uppercase text-navy mb-2 block font-normal";

  return (
    <>
      <Head>
        <title>Contact | Watch Hill Transportation</title>
        <meta
          name="description"
          content="Get in touch to book your luxury chauffeur in Watch Hill, Rhode Island. Call, email, or send us a message."
        />
      </Head>

      {/* ── HERO ── */}
      <section className="min-h-[45vh] flex items-center justify-center bg-gradient-to-b from-navy-deep to-navy pt-36 pb-20 px-8 text-center">
        <FadeIn>
          <p className="font-body text-[11px] tracking-widest3 uppercase text-sand-light mb-6 font-light">
            Get In Touch
          </p>
          <h1 className="font-display text-[clamp(36px,6vw,64px)] font-light text-txt-light mb-4">
            Contact <span className="italic text-sand-light">Us</span>
          </h1>
          <p className="font-body text-[15px] text-txt-light/60 max-w-[480px] mx-auto font-light leading-relaxed">
            Ready to book or have questions? We&apos;d love to hear from you.
          </p>
        </FadeIn>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section className="py-20 pb-[120px] px-8 bg-cream">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-16">
          {/* Left — Info */}
          <FadeIn>
            <div>
              <h3 className="font-display text-[28px] font-normal text-navy mb-8">
                Let&apos;s Start Planning
              </h3>

              <div className="flex flex-col gap-7">
                <div className="flex items-start gap-4">
                  <div className="pt-0.5 text-navy">
                    <PhoneIcon />
                  </div>
                  <div>
                    <p className={labelClasses}>Phone</p>
                    <p className="font-body text-base text-txt font-light">
                      +1 (401) 622-2834
                    </p>
                    <p className="font-body text-xs text-txt-muted font-light mt-0.5">
                      Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="pt-0.5 text-navy">
                    <MailIcon />
                  </div>
                  <div>
                    <p className={labelClasses}>Email</p>
                    <p className="font-body text-base text-txt font-light">
                      Timhence5@gmail.com
                    </p>
                    <p className="font-body text-xs text-txt-muted font-light mt-0.5">
                      We respond within the hour
                    </p>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div className="mt-12 p-8 bg-white border border-border">
                <p className="font-display text-lg italic text-navy leading-relaxed mb-3">
                  &ldquo;Every detail, every mile, handled with care.&rdquo;
                </p>
                <GoldDivider width={40} />
              </div>
            </div>
          </FadeIn>

          {/* Right — Form */}
          <FadeIn delay={0.15}>
            <div className="bg-white border border-border p-12 max-md:p-8">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4 text-navy">✓</div>
                  <h3 className="font-display text-[28px] font-normal text-navy mb-3">
                    Message Sent
                  </h3>
                  <p className="font-body text-sm text-txt-muted font-light">
                    We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-normal text-navy mb-8">
                    Send a Message
                  </h3>
                  <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Name</label>
                        <input
                          className={inputClasses}
                          placeholder="Your name"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Email</label>
                        <input
                          className={inputClasses}
                          type="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClasses}>Phone</label>
                        <input
                          className={inputClasses}
                          placeholder="+1 (401) 555-0123"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Service</label>
                        <select
                          className={`${inputClasses} cursor-pointer appearance-none`}
                          value={form.service}
                          onChange={(e) =>
                            setForm({ ...form, service: e.target.value })
                          }
                        >
                          <option value="">Select a service</option>
                          <option>Airport Transfer</option>
                          <option>Private Charter</option>
                          <option>Chauffeur / Hourly</option>
                          <option>Wedding</option>
                          <option>Last Minute Request</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClasses}>Message</label>
                      <textarea
                        className={`${inputClasses} min-h-[120px] resize-y`}
                        placeholder="Tell us about your trip..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                      />
                    </div>

                    <GoldButton 
                      onClick={handleSubmit} 
                      className="w-full"
                      disabled={isSubmitting} // Disable while sending
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </GoldButton>
                  </div>
                </>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}