import HeroSection from "@/pages/Home/Herosection";
import Startusing from "@/pages/Home/Startusing";
import Whatwedosection from "@/pages/Home/Whatwedosection";
import PartnersSection from "@/pages/Home/Partnerssection";
import Whyussection from "@/pages/Home/Whyussection";
import Partnershipmodelssection from "@/pages/Home/Partnershipmodelssection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Startusing />
      <Whatwedosection />
      <PartnersSection />
      <Whyussection />
      <Partnershipmodelssection />
    </main>
  );
}