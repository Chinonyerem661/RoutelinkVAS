import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import WebDevHero from "@/pages/crbt/crbthero";
import ServiceDetailSection from "@/pages/crbt/servicedetails";

export default function Entertainment() {
    return (
       <main className="bg-white">
        <WebDevHero categoryTitle="CRBT, OTT & Digital Services" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title="Get Your Music Out There!"
        description="Reach millions of subscribers with your music as their caller ringback tune."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}