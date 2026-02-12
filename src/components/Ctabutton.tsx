import Link from "next/link";

interface CTAButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text = "Let's Start Building",
  href,
  onClick,
  className = "",
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-white font-medium text-lg overflow-hidden transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer";

  const background = {
    background: "#F05A24",
    backgroundSize: "200% 200%",
  };

  const stripeOverlay = (
    <span
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `repeating-linear-gradient(
          to right,
          rgba(255,255,255,0.07) 0px,
          rgba(255,255,255,0.07) 30px,
          transparent 30px,
          transparent 60px
        )`,
      }}
    />
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`} style={background}>
        {stripeOverlay}
        <span className="relative z-10">{text}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyles} ${className}`}
      style={background}
    >
      {stripeOverlay}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default CTAButton;
