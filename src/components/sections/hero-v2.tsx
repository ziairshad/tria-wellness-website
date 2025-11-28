'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Smartphone, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const slides = [
  {
    heading: 'New Customer Offer',
    subHeading: 'Experience the transformative power of movement with our exclusive welcome package. Join our community and discover your strength.',
    backgroundVideo: '/videos/slide1.mp4',
    cta: {
      text: 'Book Session',
      icon: null
    }
  },
  {
    heading: 'Download Tria App',
    subHeading: 'Take your wellness journey anywhere. Access classes, book sessions, and connect with our community right from your phone.',
    cta: {
      text: 'Get the App',
      icon: <Smartphone className="w-5 h-5" />,
      secondary: true
    }
  },
  {
    heading: 'Middle East’s First Konnector® Reformer Studio',
    subHeading: 'Pioneer the future of fitness with cutting-edge Konnector Reformer technology. Experience innovation in movement.',
    backgroundImage: '/images/slides/Konnector-Slide.jpg',
    cta: {
      text: 'Read More',
      icon: <FileText className="w-5 h-5" />
    }
  }
]

export function HeroV2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    const newIndex = emblaApi.selectedScrollSnap()
    setSelectedIndex(newIndex)

    // Ensure all videos keep playing
    const videoElements = document.querySelectorAll<HTMLVideoElement>('.slide-video')
    videoElements.forEach((video) => {
      video.play().catch(() => {})
    })
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const handleSelect = () => {
      onSelect()
    }

    const rafId = requestAnimationFrame(handleSelect)
    emblaApi.on('select', handleSelect)

    return () => {
      cancelAnimationFrame(rafId)
      emblaApi.off('select', handleSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    if (!emblaApi) return
    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)
    return () => clearInterval(interval)
  }, [emblaApi])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          }
        })
      },
      { threshold: 0.4 }
    )

    const videoElements = document.querySelectorAll<HTMLVideoElement>('.slide-video')
    videoElements.forEach((video) => observer.observe(video))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-24 pb-4 px-4">
      <div className="bg-background overflow-hidden min-h-[70vh] relative" style={{ borderRadius: '30px' }}>
          <div className="embla overflow-hidden h-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide flex-none w-full min-h-[70vh] relative">
                  {slide.backgroundImage && (
                    <>
                      <div className="absolute inset-0">
                        <img
                          src={slide.backgroundImage}
                          alt={slide.heading}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                    </>
                  )}
                  {slide.backgroundVideo && (
                    <>
                      <div className="absolute inset-0 overflow-hidden">
                        <video
                          src={slide.backgroundVideo}
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls={false}
                          preload="auto"
                          className="w-full h-full object-cover slide-video"
                          style={{
                            minWidth: '100%',
                            minHeight: '100%'
                          }}
                          onCanPlay={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                          onPause={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                          onEnded={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                          onSuspend={(e) => (e.target as HTMLVideoElement).play().catch(() => {})}
                        />
                        <div className="absolute inset-0 bg-black/40" />
                      </div>
                    </>
                  )}
                  <div className="px-8 py-16 h-full flex items-center justify-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl text-center"
                >
                  <h1 className={`font-serif text-5xl md:text-7xl font-semibold mb-6 leading-tight ${slide.backgroundImage || slide.backgroundVideo ? 'text-white' : 'text-foreground'}`}>
                    {slide.heading}
                  </h1>
                  <p className={`text-lg md:text-xl mb-8 leading-relaxed font-sans ${slide.backgroundImage || slide.backgroundVideo ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {slide.subHeading}
                  </p>

                  {slide.cta.secondary ? (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 font-sans rounded-full">
                        {slide.cta.icon}
                        Android Store
                      </Button>
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 font-sans rounded-full">
                        {slide.cta.icon}
                        App Store
                      </Button>
                    </div>
                  ) : (
                    <div className="flex justify-center">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 font-sans rounded-full">
                        {slide.cta.icon}
                        {slide.cta.text}
                      </Button>
                    </div>
                  )}
                </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={scrollPrev}
          className="p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-accent' : 'bg-muted'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
          </div>
      </div>
    </section>
  )
}
