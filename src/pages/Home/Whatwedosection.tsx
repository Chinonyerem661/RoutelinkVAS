import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/Ctabutton";

// SVG imports from assets
import ContentVasIcon from "@/assets/content-svg.svg";
import CloudSvgIcon from "@/assets/cloud_svg.svg";
import HashSvgIcon from "@/assets/hash_svg.svg";
import CRBTIcon from "@/assets/CRBT-svg.svg";
import WebDevIcon from "@/assets/web dev-svg.svg";
import EntertainmentIcon from "@/assets/entertainment-svg.svg";

interface Service {
  icon: string;
  label: string;
  active?: boolean;
}

interface WhatWeDoSectionProps {
  heading?: string;
  description?: string;
  highlightText?: string;
  highlightHref?: string;
  buttonText?: string;
  buttonHref?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  { icon: ContentVasIcon, label: "Content based VAS" },
  { icon: CloudSvgIcon,   label: "Mobile & Web VAS" },
  { icon: HashSvgIcon,    label: "Charging & Billing" },
  { icon: CRBTIcon,       label: "CRBT" },
  { icon: WebDevIcon,     label: "Web Development" },
  { icon: EntertainmentIcon, label: "Entertainment" },
];

const WhatWeDoSection: React.FC<WhatWeDoSectionProps> = ({
  heading = "What we can do for you",
  description = "We help your business create Games, Quizzes, Cool Ringtones, Daily Tips & News and we make sure these things work perfectly",
  highlightText = "on every phone in the country.",
  highlightHref = "",
  buttonText = "Our services",
  buttonHref = "/services",
  services = defaultServices,
}) => {
  return (
    <section className="w-full bg-white py-14 px-6 md:px-12 lg:px-20 xl:px-28 md:mb-32">
      <div className="max-w-8xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-12">
          {/* Left: heading + description */}
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-medium text-gray-900 mb-3">
              {heading}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {description}{" "}
              <Link
                href={highlightHref}
                className="text-[#F05A24] hover:underline"
              >
                {highlightText}
              </Link>
            </p>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <CTAButton text={buttonText} href={buttonHref} />
          </div>
        </div>

        {/* Styles for hover effects */}
        <style>{`
          @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: scale(1.3); opacity: 0; }
          }
          .group:hover .pulse-ring {
            animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
        `}</style>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-12 mt-20 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="service-card flex flex-col items-center text-center gap-6 cursor-pointer group"
            >
            {/* Icon Circle */}
            <div className="relative flex items-center justify-center">
              {/* Active State Outer Ring - visible on hover */}
              <div className="pulse-ring absolute w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full border border-[#F05A24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main Circle Container */}
              <div className="icon-container relative w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full flex items-center justify-center transition-all duration-300 bg-[#F05A24]">
                
                {/* Normal Icon (White) - Always visible */}
                <Image
                  src={service.icon}
                  alt={service.label}
                  width={60}
                  height={60}
                  className="icon relative transition-opacity duration-300 w-10 h-10 md:w-[60px] md:h-[60px]"
                />
              </div>
            </div>

            {/* Content Group (Divider + Label) */}
            <div className="flex flex-col items-center gap-4 w-full">
               {/* Divider */}
              <div className="w-full h-px max-w-[100px] md:max-w-[140px] bg-gray-400 group-hover:bg-[#F05A24] transition-colors duration-300" />
              
              {/* Label */}
              <p className="text-gray-800 text-sm md:text-lg font-normal group-hover:text-[#F05A24] transition-colors duration-300">
                {service.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;