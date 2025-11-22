import { Navigation } from "@/components/sections/navigation";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const STORY_CONTENT = {
  hero: {
    title: "Our Journey",
    subtitle: "Sacred Balance",
    description: "Tria represents a journey toward sacred balance — the harmony of mind, body, and soul through mindful movement and conscious transformation."
  },
  mission: {
    title: "Our Mission",
    content: "Tria's mission is to create an environment where transformation feels intentional, not rushed, a space that honors both the strength of Lagree and the stillness of yoga. Through mindful design, curated instruction, and a holistic approach to wellness, Tria encourages individuals to move with awareness, breathe with depth, and connect inward. Each session is an act of balance, strengthening the body, mind, and restoring the soul."
  },
  vision: {
    title: "Our Vision",
    content: "Tria envisions a community grounded in alignment, where physical, emotional, and mental wellbeing coexist in harmony. It seeks to redefine modern fitness by bridging contrast: effort and ease, energy and calm, individuality and unity. The vision is simple yet profound: to become a sanctuary for balance, clarity, and connection, a living embodiment of the alignment of three."
  },
  values: [
    {
      title: "Grounded",
      description: "Tria stands on a foundation of calm strength, authentic, composed, and rooted in presence. It embodies the stability of yoga's breath and the endurance built through reformer's controlled intensity."
    },
    {
      title: "Intentional",
      description: "Nothing is accidental. Every movement, space, and detail serves a purpose, designed to create awareness and clarity. Just as the reformer demands focus in every pulse, Tria's design language mirrors that mindfulness."
    },
    {
      title: "Harmonious",
      description: "Harmony lies in duality, strength and softness, energy and ease, movement and stillness. Tria finds beauty in this coexistence, uniting yoga's flow with Lagree's precision."
    }
  ]
};

const TEAM_MEMBERS = [
  {
    name: "Sarah Chen",
    role: "Founder & Lead Yoga Instructor",
    specialty: "Yoga & Mindfulness",
    experience: "10+ years",
    certifications: ["RYT-500", "Mindfulness Meditation", "Trauma-Informed Yoga"],
    description: "Sarah founded Tria with a vision of creating sacred space for transformation. Her grounding presence and decade of experience help students find their center through mindful movement.",
    gradient: "from-primary/30 to-primary/10"
  },
  {
    name: "Marcus Rivera",
    role: "Lead Lagree Instructor",
    specialty: "Lagree Method & Athletic Training",
    experience: "8+ years",
    certifications: ["Lagree Certified", "NASM-CPT", "Corrective Exercise Specialist"],
    description: "Marcus brings precision and athletic excellence to every Lagree session, combining his background in sports training with Lagree methodology for transformative results.",
    gradient: "from-accent/30 to-accent/10"
  },
  {
    name: "Jordan Kim",
    role: "Senior Lagree Instructor",
    specialty: "Form & Alignment",
    experience: "5+ years",
    certifications: ["Lagree Method Certified", "Physical Therapy Assistant"],
    description: "Jordan's expertise in movement mechanics ensures every client receives safe, effective instruction with meticulous attention to form and proper alignment.",
    gradient: "from-accent/20 to-accent/10"
  },
  {
    name: "Luna Martinez",
    role: "Wellness Specialist",
    specialty: "Recovery & Mindfulness",
    experience: "7+ years",
    certifications: ["Yoga Alliance RYT-200", "Life Coach Certified", "Reiki Master"],
    description: "Luna specializes in restorative practices and holistic wellness, helping clients navigate challenges and maintain balance through personalized approaches.",
    gradient: "from-secondary/30 to-secondary/10"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6">
            {STORY_CONTENT.hero.subtitle}
          </Badge>
          <h1 className="font-vonca text-4xl md:text-6xl font-bold text-foreground mb-6">
            {STORY_CONTENT.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {STORY_CONTENT.hero.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-primary/5 border-primary/20">
              <h2 className="font-vonca text-3xl font-semibold text-primary mb-6">
                {STORY_CONTENT.mission.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {STORY_CONTENT.mission.content}
              </p>
            </Card>

            <Card className="p-8 bg-secondary/5 border-secondary/20">
              <h2 className="font-vonca text-3xl font-semibold text-secondary mb-6">
                {STORY_CONTENT.vision.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {STORY_CONTENT.vision.content}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-vonca text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core principles guide everything we do at Tria
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {STORY_CONTENT.values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-background/50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                  <span className="font-vonca text-2xl font-bold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-vonca text-2xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-vonca text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert instructors dedicated to guiding your wellness journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-background to-muted/20">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                    <span className="font-vonca text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-vonca text-2xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-1">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience} experience</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Specialty:</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.certifications.map((cert, certIndex) => (
                      <Badge key={certIndex} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}