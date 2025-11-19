import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ui/service-card";

const servicesData = [
  {
    title: "Group Classes",
    description: "Expertly guided yoga and Lagree sessions in a supportive community environment.",
    includes: ["Vinyasa Flow", "Lagree Method", "Restorative Yoga", "Meditation"],
    gradientColors: "from-primary to-accent",
    iconBg: "bg-primary/10",
    iconColor: "bg-primary",
    dotColor: "bg-accent"
  },
  {
    title: "Private Sessions",
    description: "One-on-one personalized guidance tailored to your unique wellness goals.",
    includes: ["Personal Training", "Injury Recovery", "Mindfulness Coaching", "Wellness Consultation"],
    gradientColors: "from-accent to-secondary",
    iconBg: "bg-accent/10",
    iconColor: "bg-accent",
    dotColor: "bg-primary"
  },
  {
    title: "Wellness Programs",
    description: "Comprehensive programs for sustainable wellness and life transformation.",
    includes: ["Stress Management", "Nutrition Guidance", "Life Coaching", "Workshops"],
    gradientColors: "from-secondary to-primary/60",
    iconBg: "bg-secondary/10",
    iconColor: "bg-secondary",
    dotColor: "bg-secondary"
  },
  {
    title: "Special Events",
    description: "Unique experiences and retreats for deeper connection and transformation.",
    includes: ["Weekend Retreats", "Teacher Training", "Community Events", "Seasonal Workshops"],
    gradientColors: "from-primary/60 to-accent",
    iconBg: "bg-primary/5",
    iconColor: "bg-primary/60",
    dotColor: "bg-primary/60"
  }
];


export function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6 text-accent-foreground">Our Services</h2>
          <p className="text-lg font-sans text-accent-foreground/80 max-w-2xl mx-auto">
            Holistic wellness offerings designed to nurture your mind, body, and spirit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>


        <div className="text-center mt-16">
          <Button asChild size="lg" className="px-8 bg-accent-foreground text-accent hover:bg-accent-foreground/90">
            <a href="#classes">
              Explore Our Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}