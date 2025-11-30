'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Book Your Class',
    image: '/images/classes/Vinyasa Flow.jpg',
    cta: {
      primary: { text: 'Click Here', href: '#' }
    }
  },
  {
    title: 'Meet TRIA Team',
    image: '/images/meettheteam.jpg',
    cta: {
      buttons: [
        { text: 'Yoga', href: '#' },
        { text: 'Pilates', href: '#' },
        { text: 'Lagree', href: '#' },
        { text: 'HIIT & Strength', href: '#' }
      ]
    }
  },
  {
    title: 'Memberships, Packages & Giftcards',
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
    title: 'Retreats, Upcoming Workshops, Teacher Training & Events',
    image: '/images/classes/restorative-yoga.webp',
    cta: {
      primary: { text: 'Click Here', href: '#' }
    }
  }
]

export function CardGrid() {
  return (
    <section className="py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden" style={{ borderRadius: '30px' }}
            >
              <div className="absolute inset-0">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 z-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-white mb-8">
                  {card.title}
                </h3>

                {card.cta.primary ? (
                  <Button
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans rounded-full"
                  >
                    {card.cta.primary.text}
                  </Button>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-3">
                    {card.cta.buttons?.map((button, buttonIndex) => (
                      <Button
                        key={buttonIndex}
                        size="lg"
                        className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans rounded-full"
                      >
                        {button.text}
                      </Button>
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
