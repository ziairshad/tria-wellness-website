'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

const cards = [
  {
    title: 'Philosophy Behind TRIA',
    image: '/images/footerbg.png',
    icon: '/images/triaicondrift.png',
    cta: {
      primary: { text: 'See More', href: '#philosophy' }
    }
  },
  {
    title: 'Meet TRIA Team',
    image: '/images/meettheteam.jpg',
    cta: {
      buttons: [
        { text: 'Yoga', href: '/landing-v2/team' },
        { text: 'Pilates', href: '/landing-v2/team' },
        { text: 'Lagree', href: '/landing-v2/team' },
        { text: 'HIIT & Strength', href: '/landing-v2/team' }
      ]
    }
  },
  {
    title: '',
    image: '/images/membership.jpg',
    cta: {
      buttons: [
        { text: 'Memberships', href: '#' },
        { text: 'Packages', href: '#' },
        { text: 'Giftcards', href: '#' }
      ]
    }
  },
  {
    title: 'Upcoming',
    image: '/images/classes/restorative-yoga.webp',
    cta: {
      buttons: [
        { text: 'Retreats', href: '#' },
        { text: 'Workshops', href: '#' },
        { text: 'Teacher Training', href: '#' },
        { text: 'Events', href: '#' }
      ]
    }
  }
]

export function CardGrid() {
  return (
    <section className="pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden" style={{ borderRadius: '30px', aspectRatio: '1 / 0.75' }}
            >
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {index !== 0 && <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />}
              </div>

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 lg:p-8 z-10">
                {card.icon && (
                  <div className="mb-4">
                    <img src={card.icon} alt="Tria Icon" className="mx-auto object-contain w-1/2" />
                  </div>
                )}
                {card.title && (
                  <h3 className={`font-serif text-2xl md:text-3xl font-semibold mb-6 lg:mb-8 ${
                    index === 0 ? 'text-background' : 'text-white'
                  }`}>
                    {card.title}
                  </h3>
                )}

                {card.cta.primary ? (
                  <Button
                    size="sm"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans rounded-full lg:size-lg"
                    onClick={() => {
                      if (card.cta.primary?.href.startsWith('#')) {
                        const element = document.querySelector(card.cta.primary.href)
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                    }}
                  >
                    {card.cta.primary.text}
                  </Button>
                ) : (
                  <div className="flex flex-col gap-2 items-center justify-center w-full sm:flex-row sm:gap-3">
                    {card.cta.buttons?.map((button, buttonIndex) => (
                      <Link key={buttonIndex} href={button.href}>
                        <Button
                          size="sm"
                          className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans rounded-full lg:size-lg w-auto px-4 py-2"
                        >
                          {button.text}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
    </section>
  )
}
