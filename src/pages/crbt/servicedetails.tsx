interface ServiceDetailProps {
  title?: string;
  description?: string;
  keyFeaturesTitle?: string;
  keyFeatures?: string[];
  idealForTitle?: string;
  idealFor?: string[];
}

const ServiceDetailSection: React.FC<ServiceDetailProps> = ({
  title = "CRBT, OTT & Digital Services",
  description = "We Deliver Aggregation and management of Caller Ringback Tunes and over-the-top services, enabling partners to extend digital reach across mobile networks.",
  keyFeaturesTitle = "Key Features",
  keyFeatures = [
    "CRBT content aggregation.",
    "Multi-network CRBT deployment.",
    "OTT service integration.",
    "Multi-network CRBT deployment.",
    "Content library management.",
    "Cross-network compatibility.",

  ],
  idealForTitle = "Ideal For:",
  idealFor = [
    "Music labels and artists.",
    "Entertainment platforms.",
    "Marketing agencies.",
    "Content aggregators.",
    "Digital service providers.",

  ],
}) => {
  return (
    <section className="w-full bg-white py-10 px-5 md:py-16 md:px-12 lg:px-20 xl:px-28 mt-10 mb-10 md:mt-20 md:mb-20">
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