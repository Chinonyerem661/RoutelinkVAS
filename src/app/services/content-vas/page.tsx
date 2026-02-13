import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import ContentHero from "@/pages/content-based-vas/ContentHero";
import ServiceDetailSection from "@/pages/content-based-vas/Servicedetail";

export default function ContentVAS() {
    return (
       <main className="bg-white">
        <ContentHero />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title=" Launch Your Content Service"
        description="Ready to turn your content into a revenue stream? Let’s get started."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}