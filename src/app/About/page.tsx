import HeroSection from "@/pages/About/Abouthero";
import WhoWeAreSection from "@/pages/About/Whowearesection";
import EcosystemPartnersSection from "@/pages/About/Ecosystempartnerssection";
import MissionSection from "@/pages/About/Mission";
import WhatSetsUsApartSection from "@/pages/About/Whatsetsusapart";
import HeroBanner from "@/components/Herobanner";

export default function About() {
  return (
    <main>
      <HeroSection />
      <WhoWeAreSection />
      <EcosystemPartnersSection />
      <MissionSection />
      <WhatSetsUsApartSection />
      <HeroBanner 
        title="Partner With a Licensed Leader"
        description="Join the brands and content providers who trust RoutelinkVAS to power their digital services."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
    </main>
  );
}