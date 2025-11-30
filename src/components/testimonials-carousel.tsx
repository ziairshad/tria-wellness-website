"use client"

import { useState, useRef, useEffect } from "react"
import { motion, PanInfo } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [containerWidth, setContainerWidth] = useState(1200) // Default desktop width
  const constraintsRef = useRef<HTMLDivElement>(null)

  const cardWidth = 350 // Width of each testimonial card
  const gap = 24 // Gap between cards
  const slideWidth = cardWidth + gap

  // Calculate how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(3)

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth
      if (width < 768) {
        setCardsToShow(1)
        setContainerWidth(cardWidth)
      } else if (width < 1024) {
        setCardsToShow(2)
        setContainerWidth((cardWidth * 2) + gap)
      } else {
        setCardsToShow(3)
        setContainerWidth((cardWidth * 3) + (gap * 2))
      }
    }

    updateLayout()
    window.addEventListener('resize', updateLayout)
    return () => window.removeEventListener('resize', updateLayout)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - cardsToShow)

  // Auto-play functionality (paused when dragging)
  useEffect(() => {
    if (isDragging) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex >= maxIndex ? 0 : prevIndex + 1
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isDragging, maxIndex])

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    setIsDragging(false)
    const threshold = 100
    const swipeDirection = info.offset.x > threshold ? -1 : info.offset.x < -threshold ? 1 : 0

    if (swipeDirection === 1 && currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    } else if (swipeDirection === -1 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => prev < maxIndex ? prev + 1 : 0)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => prev > 0 ? prev - 1 : maxIndex)
  }

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Main Carousel Container */}
      <div className="relative mx-auto overflow-x-hidden py-4" style={{ width: containerWidth }}>
        <motion.div
          ref={constraintsRef}
          className="flex cursor-grab active:cursor-grabbing"
          style={{
            gap: gap,
            width: testimonials.length * slideWidth
          }}
          animate={{
            x: -currentIndex * slideWidth,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 80,
            duration: 1.2
          }}
          drag="x"
          dragConstraints={{
            left: -(testimonials.length - cardsToShow) * slideWidth,
            right: 0,
          }}
          dragElastic={0.05}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: "grabbing" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex-shrink-0"
              style={{ width: cardWidth }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              <Card
                className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
                style={{ backgroundColor: '#5A6E53' }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-5 h-5 rounded-full bg-white"
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
                  <div>
                    <p className="font-serif font-semibold text-lg text-white">{testimonial.name}</p>
                    <p className="font-sans text-sm text-white/60 mt-1">{testimonial.memberSince}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <motion.button
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="absolute -left-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg z-10 hidden lg:flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        onClick={nextSlide}
        disabled={currentIndex === maxIndex}
        className="absolute -right-16 top-1/2 -translate-y-1/2 p-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg z-10 hidden lg:flex items-center justify-center transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-12">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground/50"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

    </div>
  )
}
