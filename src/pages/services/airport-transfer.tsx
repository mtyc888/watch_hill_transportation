import ServiceLayout from "@/components/ServiceLayout";
import { PlaneIcon } from "@/components/Icons";

export default function AirportTransfer() {
  return (
    <ServiceLayout
      title="Airport Transfer"
      subtitle="Reliable, stress-free transfers to and from every major airport in the region."
      metaDescription="Luxury airport transfer service in Watch Hill, Rhode Island. Pickups from T.F. Green, Logan, and JFK with flight tracking and meet-and-greet."
      icon={<PlaneIcon size={40} />}
      heroImage="/images/airport-transfer-hero.jpg"
      contentImage="/images/airport-transfer.jpg"
      intro="Reliable airport transportation to and from all major airports. Watch Hill Transportation ensures on-time pickups, real-time flight tracking, and a smooth, stress-free ride every time. Whether you're heading out or coming home, we handle the details so you don't have to."
      features={[
        {
          title: "Real-Time Flight Tracking",
          desc: "We monitor delays and gate changes so your driver is always there when you land, not a minute too early or too late.",
        },
        {
          title: "Meet-and-Greet at Arrivals",
          desc: "Your chauffeur will be waiting at the designated pickup area, ready to assist with luggage and get you on your way.",
        },
        {
          title: "Complimentary Wait Time",
          desc: "Flight delayed? No problem. We include generous complimentary wait time so you never feel rushed.",
        },
        {
          title: "Door-to-Door Service",
          desc: "From your front door to the terminal and back again. We handle the logistics so you can focus on your trip.",
        },
      ]}
    />
  );
}