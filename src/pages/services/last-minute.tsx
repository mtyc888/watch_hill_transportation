import ServiceLayout from "@/components/ServiceLayout";
import { ZapIcon } from "@/components/Icons";

export default function LastMinute() {
  return (
    <ServiceLayout
      title="Last Minute Requests"
      subtitle="Plans changed? We're ready. Same level of service, no matter the notice."
      metaDescription="Last-minute chauffeur service in Watch Hill, Rhode Island. Same-day availability with no compromise on quality or professionalism."
      icon={<ZapIcon size={40} />}
      heroImage="/images/last-minute-hero.jpg"
      contentImage="/images/last-minute.jpg"
      intro="Need a ride on short notice? We've got you covered. Watch Hill Transportation provides fast, reliable service for last-minute requests so you're never left waiting or scrambling for a ride."
      features={[
        {
          title: "Quick Response Booking",
          desc: "Call or text and get a confirmation within minutes. No apps, no waiting, no hassle.",
        },
        {
          title: "Same-Day Availability",
          desc: "We keep vehicles and drivers available for last-minute requests so you're never left stranded.",
        },
        {
          title: "No Compromise on Quality",
          desc: "Short notice doesn't mean lower standards. You get the same premium vehicles and professional drivers, every time.",
        },
        {
          title: "24/7 Support",
          desc: "Early morning flight? Late night event? We're available around the clock to get you where you need to be.",
        },
      ]}
    />
  );
}