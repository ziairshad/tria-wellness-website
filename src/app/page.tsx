import { Navigation } from "@/components/sections/navigation";
import { Hero } from "@/components/sections/hero";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { Classes } from "@/components/sections/classes";
import { Studio } from "@/components/sections/studio";
import { Instructors } from "@/components/sections/instructors";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Instagram } from "@/components/sections/instagram";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <MarqueeSection />
      <Classes />
      <Studio />
      <Instructors />
      <Services />
      <Testimonials />
      <Instagram />
      <CTA />
      <Footer />
    </div>
  );
}