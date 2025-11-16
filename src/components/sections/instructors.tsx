import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const instructorsData = [
  {
    name: "Sarah Chen",
    specialty: "Yoga & Mindfulness",
    initials: "SC",
    gradient: "from-primary/30 to-primary/10",
    bgColor: "bg-primary/20",
    description: "With over 10 years of experience, Sarah brings a grounding presence to every class, helping students find their center through mindful movement.",
    image: "/images/instructors/Sara.png"
  },
  {
    name: "Marcus Rivera",
    specialty: "Lagree Method",
    initials: "MR",
    gradient: "from-accent/30 to-accent/10",
    bgColor: "bg-accent/20",
    description: "Marcus combines his background in athletic training with Lagree precision to create challenging yet accessible classes for all fitness levels.",
    image: "/images/instructors/Marcus.png"
  },
  {
    name: "Jordan Kim",
    specialty: "Lagree Method Expert",
    initials: "JK",
    gradient: "from-accent/20 to-accent/10",
    bgColor: "bg-accent/20",
    description: "Jordan's precision and attention to form ensures every Lagree session maximizes strength building while maintaining safety and proper alignment.",
    image: "/images/instructors/Jordan.png"
  },
  {
    name: "Luna Martinez",
    specialty: "Wellness & Recovery",
    initials: "LM",
    gradient: "from-secondary/30 to-secondary/10",
    bgColor: "bg-primary/20",
    description: "Luna specializes in restorative practices and helps clients overcome challenges and maintain balance through personalized wellness approaches.",
    image: "/images/instructors/Luna.png"
  }
];

export function Instructors() {
  return (
    <section id="instructors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-light tracking-tight mb-4">Meet Our Instructors</h2>
          <p className="text-lg font-sans text-muted-foreground max-w-2xl mx-auto">
            Experienced guides dedicated to supporting your wellness journey with expertise and care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorsData.map((instructor, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none p-0">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={instructor.image}
                  alt={`${instructor.name} - ${instructor.specialty}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-medium mb-2">{instructor.name}</h3>
                <p className="text-accent font-sans font-medium mb-3">{instructor.specialty}</p>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {instructor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}