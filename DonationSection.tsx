interface DonationSectionProps {
  title?: string;
  buttonText?: string;
  buttonUrl?: string;
  buttonIcon?: string;
  className?: string;
  variant?: "default" | "minimal" | "card";
}

export default function DonationSection({
  title = "¿Te gustó la app? Invítame un café",
  buttonText = "Invitar un cafecito",
  buttonUrl = "https://cafecito.app/nachthelad",
  buttonIcon = "☕",
  className = "",
  variant = "default",
}: DonationSectionProps) {
  const baseClasses = "mt-6 text-center";

  const variantClasses = {
    default: "bg-gray-50 rounded-xl p-4 border border-gray-200",
    minimal: "bg-transparent p-2",
    card: "bg-white rounded-lg p-6 shadow-md border border-gray-100",
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      <div className={variantClasses[variant]}>
        <p className="text-gray-600 text-sm mb-3">{title}</p>
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors duration-200"
        >
          <span className="mr-2">{buttonIcon}</span>
          {buttonText}
        </a>
      </div>
    </div>
  );
}
