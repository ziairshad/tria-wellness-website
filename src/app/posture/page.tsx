import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import {
  PostureCTA,
  PostureExperience,
  PostureHero,
  PostureMembership,
  PosturePrograms,
  PostureSchedule,
  PostureStrip,
} from "@/components/posture/sections";

export default function PostureLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <PostureHero />
        <PostureStrip />
        <PosturePrograms />
        <PostureExperience />
        <PostureMembership />
        <PostureSchedule />
        <PostureCTA />
      </main>
      <Footer />
    </div>
  );
}
