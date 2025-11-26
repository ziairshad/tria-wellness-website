import { Button } from "@/components/ui/button";
import { ClassCard } from "@/components/ui/class-card";
import { Carousel } from "@/components/ui/carousel";
import { CLASSES_DATA } from "@/data/constants";
import { AnimatedSection } from "@/components/sections/animated-section";

export function Classes() {
  return (
    <AnimatedSection id="classes" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">Our Classes</h2>
          <p className="text-xl font-sans text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our thoughtfully curated classes designed to meet you wherever you are on your wellness journey
          </p>
        </div>

        <Carousel
          showArrows={true}
          showDots={true}
          className="mb-16"
        >
          {CLASSES_DATA.map((classItem, index) => (
            <ClassCard key={index} {...classItem} />
          ))}
        </Carousel>

        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View Full Schedule
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
