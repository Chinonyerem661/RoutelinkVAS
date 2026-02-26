import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import WebMobileHero from "@/pages/web-and-mobile-vas/web&mobilehero";
import ServiceDetailSection from "@/pages/web-and-mobile-vas/servicedetails";

export default function WebAndMobileVAS() {
    return (
       <main className="bg-white">
        <WebMobileHero categoryTitle="Web & Mobile VAS" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title=" Set Up Mobile Billing"
        description="Start accepting airtime payments from MTN, Airtel, and Glo subscribers today."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}