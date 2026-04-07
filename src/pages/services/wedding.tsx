import ServiceLayout from "@/components/ServiceLayout";
import { HeartIcon } from "@/components/Icons";

export default function Wedding() {
  return (
    <ServiceLayout
      title="Wedding"
      subtitle="Arrive at your big day the way you deserve. In style, on time, stress-free."
      metaDescription="Luxury wedding transportation in Watch Hill, Rhode Island. Decorated vehicles, red carpet service, and bridal party coordination."
      icon={<HeartIcon size={40} />}
      heroImage="/images/wedding-hero.jpg"
      contentImage="/images/wedding.jpg"
      intro="Make your day seamless from start to finish. Watch Hill Transportation provides reliable, professional service for weddings in all surrounding areas, ensuring you and your guests arrive on time and stress-free. From ceremonies to receptions and everything in between, we handle the transportation so you can focus on the moment."
      features={[
        {
          title: "Decorated Luxury Vehicles",
          desc: "Our vehicles are prepared with tasteful decorations to complement your wedding theme and color palette.",
        },
        {
          title: "Red Carpet Arrival",
          desc: "Make an entrance. We roll out the red carpet so you step out in style for photos and guests.",
        },
        {
          title: "Bridal Party Coordination",
          desc: "Multiple pickups, different locations, tight timelines. We coordinate with your wedding planner to keep everything on track.",
        },
        {
          title: "Photography-Ready Presentation",
          desc: "Every vehicle is detailed inside and out. Your photos will look as good as the day feels.",
        },
      ]}
    />
  );
}