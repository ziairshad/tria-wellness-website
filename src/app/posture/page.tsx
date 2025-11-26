import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import {
  PostureCTA,
  PostureHero,
  PostureMembership,
  PostureMethod,
  PostureClasses,
} from "@/components/posture/sections";

export default function PostureLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <PostureHero />
        <PostureMembership />
        <PostureMethod />
        <PostureClasses />
        <PostureCTA />
      </main>
      <Footer />
    </div>
  );
}
