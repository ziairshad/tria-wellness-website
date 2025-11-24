import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const ABOUT_CONTENT = {
  hero: {
    label: "ABOUT US",
    title: "Building a Legacy of Wellness",
    description: "Tria represents a journey toward sacred balance — the harmony of mind, body, and soul. Founded on the principles of intentional movement and mindful transformation, we create a sanctuary where strength meets serenity."
  },
  stats: [
    {
      number: "1000+",
      label: "Classes",
      description: "Transformative yoga and Lagree sessions delivered with precision."
    },
    {
      number: "500+",
      label: "Members",
      description: "Community members on their wellness journey with us."
    },
    {
      number: "3",
      label: "Principles",
      description: "Grounded, Intentional, and Harmonious approach to wellness."
    },
    {
      number: "100%",
      label: "Dedication",
      description: "Committed to your transformation and sacred balance."
    }
  ],
  sections: [
    {
      title: "Why Choose Tria?",
      description: "We bridge the gap between strength and stillness, offering both dynamic Lagree sessions and grounding yoga practices in one harmonious space."
    },
    {
      title: "Our Vision",
      description: "To become a sanctuary for balance, clarity, and connection — a living embodiment of the alignment of mind, body, and soul."
    },
    {
      title: "Our Community",
      description: "Expert instructors and welcoming members create an environment where transformation feels intentional, never rushed."
    }
  ]
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Main About Section */}
      <section className="pt-32 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground text-lg mb-4">{ABOUT_CONTENT.hero.label}</p>
                <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
                  {ABOUT_CONTENT.hero.title}
                </h1>
                <p className="text-xl font-sans text-muted-foreground leading-relaxed mb-8">
                  {ABOUT_CONTENT.hero.description}
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 gap-6">
                {ABOUT_CONTENT.stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-foreground">{stat.number}</span>
                      <span className="text-lg text-foreground font-medium">{stat.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary to-accent opacity-80 hover:opacity-100 transition-opacity duration-300">
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Three Columns */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {ABOUT_CONTENT.sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-foreground mb-3">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}