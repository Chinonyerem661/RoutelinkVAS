import Image from "next/image";
import MtnLogo from "@/assets/MTN-Logo.svg";
import AirtelLogo from "@/assets/airtel-logo.svg";
import GloLogo from "@/assets/glo.svg";

interface Partner {
  name: string;
  logoSrc: any;
}

interface TelecomPartnersProps {
  partners?: Partner[];
}

const defaultPartners: Partner[] = [
  {
    name: "MTN",
    logoSrc: MtnLogo,
  },
  {
    name: "Airtel",
    logoSrc: AirtelLogo,
  },
  {
    name: "Glo",
    logoSrc: GloLogo,
  },
];

const TelecomPartners: React.FC<TelecomPartnersProps> = ({
  partners = defaultPartners,
}) => {
  return (
    <div className="inline-flex items-center gap-8">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className={`relative w-auto flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
            partner.name === "Glo" ? "h-20" : "h-10"
          }`}
        >
          <Image
            src={partner.logoSrc}
            alt={partner.name}
            width={120}
            height={60}
            className="h-full w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default TelecomPartners;