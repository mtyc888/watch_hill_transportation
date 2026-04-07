import ServiceLayout from "@/components/ServiceLayout";
import { CarIcon } from "@/components/Icons";

export default function PrivateCharter() {
  return (
    <ServiceLayout
      title="Private Charter"
      subtitle="A dedicated vehicle and driver, exclusively yours, for as long as you need."
      metaDescription="Private charter chauffeur service in Watch Hill, Rhode Island. Dedicated vehicle and driver for business travel, tours, and multi-day trips."
      icon={<CarIcon size={40} />}
      heroImage="/images/private-charter-hero.jpg"
      contentImage="/images/private-charter.jpg"
      intro="Travel on your terms with a fully private experience. From pickup to drop-off, your vehicle is reserved exclusively for you, delivering a quiet, comfortable, and stress-free ride. We handle timing, traffic, and route changes so every detail feels effortless."
      features={[
        {
          title: "Dedicated Vehicle & Driver",
          desc: "One vehicle, one driver, entirely focused on your itinerary. No shared rides, no distractions.",
        },
        {
          title: "Flexible Multi-Stop Routing",
          desc: "Change your plans on the fly. Add stops, reroute, or extend your booking with a simple call or text.",
        },
        {
          title: "Corporate & Leisure Packages",
          desc: "Tailored packages for business groups, executive retreats, wine tours, and sightseeing excursions.",
        },
        {
          title: "Multi-Day Availability",
          desc: "Need a driver for the whole weekend or an extended trip? We offer multi-day bookings at preferred rates.",
        },
      ]}
    />
  );
}