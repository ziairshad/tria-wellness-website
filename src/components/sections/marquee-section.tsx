import { Marquee } from "@/components/ui/marquee";
import { AnimatedSection } from "@/components/sections/animated-section";

const marqueeTexts = [
  "Sacred Balance",
  "Mindful Movement",
  "Inner Peace",
  "Strength & Grace",
  "Conscious Living",
  "Mind Body Soul"
];

export function MarqueeSection() {
  return (
    <AnimatedSection className="py-12 border-y border-border">
      <Marquee className="[--duration:25s]">
        {marqueeTexts.map((text, index) => (
          <div key={index} className="flex items-center space-x-8 mx-8">
            <span className="text-xl font-serif font-light text-muted-foreground whitespace-nowrap">
              {text}
            </span>
            <span>•</span>
          </div>
        ))}
      </Marquee>
    </AnimatedSection>
  );
}
