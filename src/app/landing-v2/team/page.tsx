import { NavigationV2 } from '@/components/sections/navigation-v2'
import { FooterV2 } from '@/components/sections/footer-v2'
import { Card } from '@/components/ui/card'
import { INSTRUCTORS_DATA } from '@/data/constants'
import { InstructorData } from '@/types'
import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

// Design Variation 1: Classic Card with Image Overlay
function ClassicTeamCard({ instructor }: { instructor: InstructorData }) {
  const imageName = instructor.name === "Sarah Chen" ? "Sara" : instructor.name.split(' ')[0] // Handle Sara/Sarah mismatch

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-none p-0 bg-white rounded-[25px]">
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={`/images/instructors/${imageName}.png`}
          alt={instructor.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-serif text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
            {instructor.name}
          </h3>
          <p className="text-accent text-sm font-medium mb-3 uppercase tracking-wide">
            {instructor.specialty}
          </p>
          <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
            {instructor.description}
          </p>

          {/* Social icons */}
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Design Variation 2: Minimal Split Layout
function MinimalTeamCard({ instructor }: { instructor: InstructorData }) {
  const imageName = instructor.name === "Sarah Chen" ? "Sara" : instructor.name.split(' ')[0]

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border border-primary/10 p-0 bg-background rounded-[30px]">
      <div className="p-6">
        <div className="aspect-square relative overflow-hidden rounded-[20px] mb-6">
          <Image
            src={`/images/instructors/${imageName}.png`}
            alt={instructor.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
              {instructor.name}
            </h3>
            <p className="text-primary text-sm font-medium uppercase tracking-wide">
              {instructor.specialty}
            </p>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
            {instructor.description}
          </p>

          <div className="flex justify-center gap-3 pt-2">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <Instagram className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
              <Linkedin className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// Design Variation 3: Modern Asymmetric Layout
function ModernTeamCard({ instructor }: { instructor: InstructorData }) {
  const imageName = instructor.name === "Sarah Chen" ? "Sara" : instructor.name.split(' ')[0]

  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-none p-0 bg-card rounded-[35px]">
      <div className="relative">
        {/* Image section */}
        <div className="relative h-64 overflow-hidden rounded-t-[35px]">
          <Image
            src={`/images/instructors/${imageName}.png`}
            alt={instructor.name}
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-primary/10" />

          {/* Floating specialty badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
            <span className="text-primary text-xs font-medium uppercase tracking-wide">
              {instructor.specialty}
            </span>
          </div>
        </div>

        {/* Content section */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-vonca text-2xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {instructor.name}
              </h3>
              <div className="w-12 h-1 bg-accent rounded-full"></div>
            </div>

            <div className="flex gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <Linkedin className="w-4 h-4" />
              </div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed line-clamp-4">
            {instructor.description}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default function MeetTheTeam() {
  return (
    <div className="min-h-screen landing-v2-bg">
      <NavigationV2 />

      <section className="pt-32 px-4 pb-20 bg-gradient-to-br from-muted/20 via-transparent to-primary/5">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
              Meet the TRIA Team
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Our passionate instructors bring years of experience and dedication to guide you on your wellness journey.
            </p>
          </div>

          {/* Design Variation 1: Classic Cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8 text-muted-foreground">
              Classic Design
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {INSTRUCTORS_DATA.map((instructor) => (
                <ClassicTeamCard key={instructor.name} instructor={instructor} />
              ))}
            </div>
          </div>

          {/* Design Variation 2: Minimal Cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8 text-muted-foreground">
              Minimal Design
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {INSTRUCTORS_DATA.map((instructor) => (
                <MinimalTeamCard key={instructor.name} instructor={instructor} />
              ))}
            </div>
          </div>

          {/* Design Variation 3: Modern Cards */}
          <div className="mb-20">
            <h2 className="text-2xl font-serif font-semibold text-center mb-8 text-muted-foreground">
              Modern Design
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {INSTRUCTORS_DATA.map((instructor) => (
                <ModernTeamCard key={instructor.name} instructor={instructor} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  )
}