import { Button } from "@/components/ui/button";
import Image from "next/image";

const studioFeatures = [
  {
    title: "Premium Equipment",
    description: "State-of-the-art Lagree Megaformers and premium yoga props ensure optimal practice experience."
  },
  {
    title: "Wellness Amenities",
    description: "Luxurious changing rooms, filtered water stations, and curated retail for your wellness journey."
  },
  {
    title: "Natural Elements",
    description: "Living plants, natural materials, and abundant light create a connection to nature."
  },
  {
    title: "Sacred Atmosphere",
    description: "Thoughtful acoustics and curated scents create a truly immersive wellness experience."
  }
];

const studioImages = [
  // Column 1: square then tall
  {
    src: "/images/studio-main.jpg",
    alt: "Main studio space with natural lighting",
    className: "col-start-1 row-start-1 col-span-1 row-span-1"
  },
  {
    src: "/images/studio-lounge.jpg",
    alt: "Comfortable lounge area",
    className: "col-start-1 row-start-2 col-span-1 row-span-2"
  },
  // Column 2: tall then square
  {
    src: "/images/studio-lagree.jpg",
    alt: "Lagree studio with Megaformer equipment",
    className: "col-start-2 row-start-1 col-span-1 row-span-2"
  },
  {
    src: "/images/studio-entrance.jpg",
    alt: "Welcoming studio entrance",
    className: "col-start-2 row-start-3 col-span-1 row-span-1"
  },
  // Column 3: square then tall
  {
    src: "/images/studio-meditation.jpg",
    alt: "Peaceful meditation room",
    className: "col-start-3 row-start-1 col-span-1 row-span-1"
  },
  {
    src: "/images/studio-changing.jpg",
    alt: "Premium changing rooms",
    className: "col-start-3 row-start-2 col-span-1 row-span-2"
  }
];

export function Studio() {
  return (
    <section id="studio" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light tracking-tight mb-4">Our Studio</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully designed sanctuary that supports your practice and transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-medium mb-4">Mindfully Crafted Space</h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                A thoughtfully designed environment that nurtures focus, calm, and transformation through natural light, warm textures, and clean lines.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {studioFeatures.slice(0, 2).map((feature, index) => (
                <div key={index}>
                  <h4 className="font-serif font-medium mb-2">{feature.title}</h4>
                  <p className="font-sans text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild className="font-sans">
                <a href="#classes">
                  Schedule a Tour
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] auto-rows-fr">
            {studioImages.map((image, index) => (
              <div key={index} className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 ${image.className}`}>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
