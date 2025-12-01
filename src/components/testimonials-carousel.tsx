"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Carousel } from "@/components/ui/carousel"
import { motion } from "framer-motion"

interface Testimonial {
  id: number
  name: string
  memberSince: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emily Chen",
    memberSince: "Member since 2023",
    text: "Tria has completely transformed my approach to wellness. The combination of yoga and Lagree has given me strength and peace I never thought possible.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    memberSince: "Member since 2022",
    text: "The instructors here truly understand the mind-body connection. Every session leaves me feeling centered and energized.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia Rivera",
    memberSince: "Member since 2024",
    text: "Tria isn't just a studio, it's a sanctuary. The space and community here have been essential to my healing and growth journey.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    memberSince: "Member since 2023",
    text: "I've tried many studios, but none compare to Tria. The attention to detail and personalized approach makes all the difference.",
    rating: 5,
  },
  {
    id: 5,
    name: "Luna Martinez",
    memberSince: "Member since 2022",
    text: "The Lagree classes here have completely reshaped my body and mindset. I'm stronger and more confident than ever before.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Thompson",
    memberSince: "Member since 2024",
    text: "After struggling with stress and anxiety, Tria's meditation and yoga classes have given me tools for lasting peace and resilience.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aria Patel",
    memberSince: "Member since 2023",
    text: "The sense of community at Tria is incredible. I've made lifelong friends while transforming my relationship with movement and mindfulness.",
    rating: 5,
  },
  {
    id: 8,
    name: "Ryan Foster",
    memberSince: "Member since 2024",
    text: "As a former athlete dealing with chronic pain, Tria's restorative approach has been life-changing. I'm pain-free and moving better than in years.",
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  return (
    <div className="relative max-w-7xl mx-auto">
      <Carousel
        className="w-full"
        options={{
          align: "start",
          slidesToScroll: 1,
          containScroll: "trimSnaps",
          inViewThreshold: 0.6,
        }}
        arrowVisibility="all"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="h-full"
          >
            <Card
              className="border-none shadow-none hover:shadow-none transition-shadow duration-300 h-full"
              style={{ backgroundColor: '#5A6E53' }}
            >
              <CardContent className="p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: '#E6E3DC' }}
                        initial={{ scale: 0, rotate: 180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: (index * 0.1) + (i * 0.1),
                          duration: 0.5,
                          type: "spring",
                          stiffness: 300
                        }}
                      />
                    ))}
                  </div>
                  <p className="font-sans text-white/80 leading-relaxed text-base mb-8 min-h-[140px] italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="font-serif font-semibold text-lg" style={{ color: '#E6E3DC' }}>{testimonial.name}</p>
                  <p className="font-sans text-sm text-white/60 mt-1">{testimonial.memberSince}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Carousel>
    </div>
  )
}
