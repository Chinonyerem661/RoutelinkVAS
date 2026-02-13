interface ServiceDetailProps {
  title?: string;
  description?: string;
  keyFeaturesTitle?: string;
  keyFeatures?: string[];
  idealForTitle?: string;
  idealFor?: string[];
}

const ServiceDetailSection: React.FC<ServiceDetailProps> = ({
  title = "Web & Mobile VAS",
  description = "Web-based VAS solutions with integrated mobile number validation and direct carrier billing, fully compliant with MNO and regulatory requirements.",
  keyFeaturesTitle = "Key Features",
  keyFeatures = [
    "Direct carrier billing integration with MTN, Airtel, and Glo.",
    "Mobile number validation and real-time network detection.",
    "Web-based payment gateway for seamless transactions.",
    "Real-time transaction logging and reporting.",
    "Secure API integration with end-to-end encryption.",
    "Compliance with MNO and regulatory standards.",
    "Compliance-ready service flows with clear opt-in/opt-out.",
    "Multi-language content support.",
    "Analytics and performance tracking.",
  ],
  idealForTitle = "Ideal For:",
  idealFor = [
    "Digital service providers.",
    "Subscription-based platforms.",
    "Content aggregators.",
    "Content aggregators.",

  ],
}) => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20 xl:px-28 mt-20 mb-20">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-medium text-[#F05A24] text-center mb-8">
          {title}
        </h1>

        {/* Description - Left aligned */}
        <p className="text-black text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="max-w-3xl mx-auto space-y-12">
            {/* Key Features Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#F05A24] mb-6">
                {keyFeaturesTitle}
              </h2>
              <ul className="space-y-3 pl-4 list-disc marker:text-black">
                {keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="text-black text-lg leading-relaxed pl-2"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#F05A24] mb-6">
                {idealForTitle}
              </h2>
              <div className="space-y-2 pl-4">
                {idealFor.map((item, index) => (
                  <p key={index} className="text-black text-lg leading-relaxed">
                    {item}
                  </p>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSection;