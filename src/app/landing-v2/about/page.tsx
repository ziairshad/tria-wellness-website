import { NavigationV2 } from '@/components/sections/navigation-v2'
import { FooterV2 } from '@/components/sections/footer-v2'
import { CheckCircle } from 'lucide-react'
import { Testimonials } from '@/components/sections/testimonials'
import { AnimatedNumber } from '@/components/ui/animated-number'
import Image from 'next/image'

const ABOUT_CONTENT = {
  hero: {
    label: '',
    title: 'Know the story of TRIA',
    description:
      'TRIA represents a journey toward sacred balance — the harmony of mind, body, and soul. Founded on the principles of intentional movement and mindful transformation, we create a sanctuary where strength meets serenity.'
  },
  stats: [
    {
      number: '1000+',
      label: 'Classes',
      description: 'Transformative yoga and Lagree sessions delivered with precision.'
    },
    {
      number: '500+',
      label: 'Members',
      description: 'Community members on their wellness journey with us.'
    },
    {
      number: '3',
      label: 'Principles',
      description: 'Grounded, Intentional, and Harmonious approach to wellness.'
    },
    {
      number: '100%',
      label: 'Dedication',
      description: 'Committed to your transformation and sacred balance.'
    }
  ],
  sections: [
    {
      title: 'Why Choose TRIA?',
      description:
        'We bridge the gap between strength and stillness, offering both dynamic Lagree sessions and grounding yoga practices in one harmonious space.'
    },
    {
      title: 'Our Vision',
      description:
        'To become a sanctuary for balance, clarity, and connection — a living embodiment of the alignment of mind, body, and soul.'
    },
    {
      title: 'Our Community',
      description:
        'Expert instructors and welcoming members create an environment where transformation feels intentional, never rushed.'
    }
  ]
}

export default function AboutLandingV2() {
  return (
    <div className="min-h-screen landing-v2-bg">
      <NavigationV2 />

      <section className="pt-32 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                {ABOUT_CONTENT.hero.label ? (
                  <p className="text-muted-foreground text-lg mb-4">{ABOUT_CONTENT.hero.label}</p>
                ) : null}
                <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6 flex flex-wrap items-center gap-2 md:gap-3">
                  <span className="whitespace-nowrap">Know the story of</span>
                  <Image
                    src="/logo/logo.svg"
                    alt="Tria Logo"
                    width={60}
                    height={60}
                    className="h-8 md:h-10 w-auto inline-block"
                    style={{ filter: 'brightness(0) saturate(100%) invert(11%) sepia(8%) saturate(1015%) hue-rotate(314deg) brightness(95%) contrast(96%)' }}
                  />
                </h1>
                <p className="text-xl font-sans text-muted-foreground leading-relaxed mb-8">
                  {ABOUT_CONTENT.hero.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {ABOUT_CONTENT.stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <AnimatedNumber value={stat.number} className="text-3xl font-bold text-foreground" />
                      <span className="text-lg text-foreground font-medium">{stat.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[30px] overflow-hidden">
                <img
                  src="/images/aboutus.jpg"
                  alt="About Tria"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {ABOUT_CONTENT.sections.map((section) => (
              <div key={section.title} className="space-y-4">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-primary fill-primary/20" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-foreground mb-3">{section.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{section.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FooterV2 />
    </div>
  )
}
