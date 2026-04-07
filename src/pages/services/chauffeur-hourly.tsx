import ServiceLayout from "@/components/ServiceLayout";
import { ClockIcon } from "@/components/Icons";

export default function ChauffeurHourly() {
  return (
    <ServiceLayout
      title="Chauffeur / Hourly"
      subtitle="Your personal driver on standby, by the hour. Go wherever the day takes you."
      metaDescription="Hourly chauffeur service in Watch Hill, Rhode Island. Flexible, on-demand private car service for meetings, events, and day trips."
      icon={<ClockIcon size={40} />}
      heroImage="/images/chauffeur-hourly-hero.jpg"
      contentImage="/images/chauffeur-hourly.jpg"
      intro="Enjoy the flexibility of a private chauffeur on your schedule. Whether you're heading to multiple stops, a night out, business meetings, or special events, we provide reliable, on-demand service with a professional driver dedicated to you. No waiting, no stress. Just seamless transportation wherever you need to go."
      features={[
        {
          title: "Hourly Booking Flexibility",
          desc: "Book by the hour with no fixed route. Two hours or ten, we're there for as long as you need.",
        },
        {
          title: "On-Demand Schedule Changes",
          desc: "Running late? Need to add a stop? No problem. Your driver adapts to your schedule in real time.",
        },
        {
          title: "Multiple Stops Included",
          desc: "Hop in and out as many times as you need. Meetings, restaurants, shops, it's all covered.",
        },
        {
          title: "Professional & Discreet",
          desc: "Our drivers are courteous, well-presented, and understand that your privacy matters.",
        },
      ]}
    />
  );
}