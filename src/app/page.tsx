import HeroSection from "@/pages/Home/Herosection";
import Startusing from "@/pages/Home/Startusing";
import Whatwedosection from "@/pages/Home/Whatwedosection";
import PartnersSection from "@/pages/Home/Partnerssection";
import Whyussection from "@/pages/Home/Whyussection";
import Partnershipmodelssection from "@/pages/Home/Partnershipmodelssection";
import Testimonialssection from "@/pages/Home/Testimonialssection";
import HeroBanner from "@/components/Herobanner";


export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <Startusing />
      <Whatwedosection />
      <PartnersSection />
      <Whyussection />
      <Partnershipmodelssection />
      <Testimonialssection />
      <HeroBanner />
    </main>
  );
}