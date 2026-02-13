import HeroBanner from "@/components/Herobanner";
import HowWeWorkSection from "@/components/Howweworksection";
import WebDevHero from "@/pages/web-development/webdevhero";
import ServiceDetailSection from "@/pages/web-development/servicesdetails";

export default function WebDevelopment() {
    return (
       <main className="bg-white">
        <WebDevHero categoryTitle="Web Development & Digital Platforms" />
        <ServiceDetailSection />
        <HowWeWorkSection />
        <HeroBanner
        title=" Build Your Web Project!"
        description="Tell us what you need and we'll build something that works—and converts.."
        buttonText="Get In Touch"
        buttonHref="/contact"
        />
       </main>
    );
}