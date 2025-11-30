'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const classes = [
  {
    title: 'Heated & Non-Heated Yoga',
    description: 'Dynamic sequences linking breath with movement for strength, flexibility, and mindful awareness.',
    duration: '75 minutes',
    level: 'All Levels',
    instructor: 'Sarah Chen'
  },
  {
    title: 'Iyengar Yoga',
    description: 'High-intensity, low-impact training that builds strength, endurance, and lean muscle mass using Konnector Reformer technology.',
    duration: '50 minutes',
    level: 'Intermediate',
    instructor: 'Marcus Rivera'
  },
  {
    title: 'Barre',
    description: 'Gentle, passive poses held for extended periods to promote deep relaxation and healing.',
    duration: '90 minutes',
    level: 'All Levels',
    instructor: 'Luna Kim'
  },
  {
    title: 'Mat Pilates',
    description: 'Vigorous, athletic yoga practice building heat, strength, and stamina through challenging poses.',
    duration: '60 minutes',
    level: 'Advanced',
    instructor: 'James Wilson'
  },
  {
    title: 'Sculp',
    description: 'Slow-paced practice with poses held for 3-7 minutes, targeting deep connective tissues and promoting flexibility.',
    duration: '75 minutes',
    level: 'All Levels',
    instructor: 'Emma Thompson'
  },
  {
    title: 'HIIT Classes',
    description: 'Specially designed sequences to support expecting mothers through safe, nurturing movement practices.',
    duration: '60 minutes',
    level: 'Beginner',
    instructor: 'Sofia Martinez'
  },
  {
    title: 'Pilates Equipped (Reformer, Chairs & Towers)',
    description: 'Intense yoga practice in a heated room to build strength, flexibility, and detoxification.',
    duration: '60 minutes',
    level: 'Advanced',
    instructor: 'David Chen'
  },
  {
    title: 'Lagree Classes with Megaformers',
    description: 'Guided meditation sessions combined with pranayama techniques for mental clarity and stress relief.',
    duration: '45 minutes',
    level: 'All Levels',
    instructor: 'Aria Patel'
  }
]

const sliderImages = [
  { src: '/images/lagree.jpg', alt: 'Lagree class' },
  { src: '/images/pilates.jpg', alt: 'Pilates class' },
  { src: '/images/yoga.jpg', alt: 'Yoga class' }
]

export function ClassesAccordion() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start w-full px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-1 overflow-hidden"
          >
            <div className="aspect-square overflow-hidden relative" style={{ borderRadius: '30px' }}>
              {sliderImages.map((image, index) => (
                <img
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 order-2 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Classes
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed font-sans mb-8">
              We offer personalized classes for all levels, focusing on strength, flexibility and posture. With expert guidance and small class sizes, we ensure individual attention in a supportive environment. Whether you're recovering from an injury or enhancing fitness, our sessions help you achieve your goals.
            </p>

            <Accordion type="single" collapsible className="space-y-3">
              {classes.map((classItem, index) => (
                <AccordionItem key={classItem.title} value={`item-${index}`} className="rounded-[30px]">
                  <AccordionTrigger className="rounded-[30px] font-semibold">{classItem.title}</AccordionTrigger>
                  <AccordionContent className="rounded-b-[30px]">
                    <p className="text-muted-foreground mb-4 leading-relaxed font-sans">
                      {classItem.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full">
                View Schedule
              </Button>
            </div>
          </motion.div>
        </div>
    </section>
  )
}
