import { NavigationV2 } from "@/components/sections/navigation-v2";
import { HeroV2 } from "@/components/sections/hero-v2";
import { CardGrid } from "@/components/sections/card-grid";
import { InstagramFeedV2 } from "@/components/sections/instagram-feed-v2";
import { BehindTria } from "@/components/sections/behind-tria";
import { ClassesAccordion } from "@/components/sections/classes-accordion";
import { CafeteriaBanner } from "@/components/sections/cafeteria-banner";
import { FooterV2 } from "@/components/sections/footer-v2";

export default function LandingV2() {
  return (
    <div className="min-h-screen landing-v2-bg overflow-x-hidden">
      <NavigationV2 />
      <HeroV2 />
      <CardGrid />
      <InstagramFeedV2 />
      <BehindTria />
      <ClassesAccordion />
      <CafeteriaBanner />
      <FooterV2 />
    </div>
  );
}
