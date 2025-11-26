import { ServiceCard } from "@/components/ui/service-card";
import { Carousel } from "@/components/ui/carousel";
import { AnimatedSection } from "@/components/sections/animated-section";

const membershipData = [
  {
    title: "Unlimited Monthly",
    description: "Complete access to all classes and studio amenities for unlimited wellness.",
    includes: ["Unlimited Classes", "All Class Types", "Studio Amenities", "Guest Passes"],
    gradientColors: "from-primary to-accent",
    iconBg: "bg-primary/10",
    iconColor: "bg-primary",
    dotColor: "bg-accent"
  },
  {
    title: "Class Packages",
    description: "Flexible class packages that fit your schedule and commitment level.",
    includes: ["10-Class Package", "5-Class Package", "Single Drop-In", "Never Expire"],
    gradientColors: "from-accent to-secondary",
    iconBg: "bg-accent/10",
    iconColor: "bg-accent",
    dotColor: "bg-primary"
  },
  {
    title: "Private Training",
    description: "Personalized one-on-one sessions tailored to your specific goals and needs.",
    includes: ["Personal Assessment", "Custom Programs", "Injury Recovery", "Flexible Scheduling"],
    gradientColors: "from-secondary to-primary/60",
    iconBg: "bg-secondary/10",
    iconColor: "bg-secondary",
    dotColor: "bg-secondary"
  },
  {
    title: "Student & Senior",
    description: "Special pricing for students and seniors to make wellness accessible for all.",
    includes: ["Discounted Classes", "Special Workshops", "Community Events", "Valid ID Required"],
    gradientColors: "from-primary/60 to-accent",
    iconBg: "bg-primary/5",
    iconColor: "bg-primary/60",
    dotColor: "bg-primary/60"
  }
];


export function Services() {
  return (
    <AnimatedSection id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6 text-foreground">Membership & Packages</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            Flexible membership options and packages designed to fit your wellness journey
          </p>
        </div>

        {/* Mobile: Carousel */}
        <div className="block md:hidden">
          <Carousel
            showArrows={false}
            showDots={true}
            className="mb-16"
          >
            {membershipData.map((membership, index) => (
              <ServiceCard key={index} {...membership} />
            ))}
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipData.map((membership, index) => (
            <ServiceCard key={index} {...membership} />
          ))}
        </div>


      </div>
    </AnimatedSection>
  );
}
