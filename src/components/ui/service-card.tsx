
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  includes: string[];
  gradientColors: string;
  iconBg: string;
  iconColor: string;
  dotColor: string;
}

export function ServiceCard({
  title,
  description,
  includes,
  gradientColors,
  iconBg,
  iconColor,
  dotColor
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-background border border-accent-foreground/20 p-6 hover:shadow-xl hover:shadow-accent-foreground/10 transition-all duration-300 hover:border-accent-foreground/30">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradientColors}`}></div>
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 bg-accent/10">
          <Image
            src="/images/Tria-Icon-02.png"
            alt="Tria icon"
            width={32}
            height={32}
          />
        </div>
        <h3 className="text-xl font-serif font-medium mb-3 text-foreground">{title}</h3>
        <p className="text-sm font-sans text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      <div className="space-y-2">
        <div className="text-xs font-medium text-accent">Includes:</div>
        <ul className="space-y-1 text-xs text-muted-foreground">
          {includes.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-1 h-1 rounded-full bg-accent"></div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}