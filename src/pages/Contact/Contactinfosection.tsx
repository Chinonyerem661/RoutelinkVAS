import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

// Update with actual background image path
import ContactBgImage from "@/assets/contact-us.jpg"; // same image as How We Work section

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  link?: string;
}

interface ContactInfoSectionProps {
  heading?: string;
  backgroundImage?: string;
  contactInfo?: ContactInfo[];
}

const defaultContactInfo: ContactInfo[] = [
  {
    icon: <FaPhoneAlt className="w-5 h-5" />,
    label: "Phone Number:",
    value: "(+234) 12 345 678 90",
    link: "tel:+2341234567890",
  },
  {
    icon: <FaEnvelope className="w-5 h-5" />,
    label: "Email Address:",
    value: "info@routelinkVAS.com",
    link: "mailto:info@routelinkVAS.com",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    label: "Socials:",
    value: "RoutelinkVAS",
    link: "https://instagram.com/routelinkvas",
  },
  {
    icon: <FaMapMarkerAlt className="w-5 h-5" />,
    label: "Office Address:",
    value: "HQ Routelink, Lagos 900108, Ikeja, Lagos.",
    link: "https://maps.google.com/?q=HQ+Routelink+Lagos",
  },
];

const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  heading = "Contact Us",
  backgroundImage = ContactBgImage,
  contactInfo = defaultContactInfo,
}) => {
  return (
    <section className="relative w-full h-[500px] md:h-[400px] overflow-hidden">
      {/* Background Image - No overlay */}
      <Image
        src={backgroundImage}
        alt="Contact background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Content */}
      <div className="relative z-10 h-full px-6 md:px-12 lg:px-20 xl:px-28 py-12 flex flex-col justify-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          {heading}
        </h2>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-[#F05A24] flex items-center justify-center text-white mb-4">
                {info.icon}
              </div>

              {/* Label */}
              <p className="text-gray-600 text-sm mb-2">{info.label}</p>

              {/* Value */}
              {info.link ? (
                <a
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[#F05A24] font-bold text-base hover:underline"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-[#F05A24] font-bold text-base">{info.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;