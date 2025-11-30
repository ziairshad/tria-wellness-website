'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Smartphone, FileText, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Image from 'next/image'

const slides = [
  {
    heading: 'New Customer Offer',
    subHeading: 'Any 3 classes for AED 300',
    backgroundVideo: '/videos/slide1.mp4',
    cta: {
      text: 'Buy Now',
      icon: null
    }
  },
  {
    heading: 'Download TRIA App',
    subHeading: 'Take your wellness journey anywhere. Access classes, book sessions, and connect with our community right from your phone.',
    cta: {
      text: 'Get the App',
      icon: <Smartphone className="w-5 h-5" />,
      secondary: true
    }
  },
  {
    heading: "Middle East's First Konnector® Reformer Studio",
    subHeading: 'Pioneer the future of fitness with cutting-edge Konnector Reformer technology. Experience innovation in movement.',
    backgroundImage: '/images/slides/Konnector-Slide.jpg',
    cta: {
      text: 'Read More',
      icon: <FileText className="w-5 h-5" />
    }
  },
  {
    heading: 'A Balance Body Studio Where You Will Meet Real Pilates',
    subHeading: 'A fully equipped balance body studio where you will rediscover pilates methods',
    icon: '/icons/balancedbody.svg',
    cta: null
  },
  {
    heading: 'Your New Working Space',
    subHeading: 'Healthy bites, great coffee, and calm space to focus.',
    backgroundImage: '/images/cafeteria.jpg',
    cta: {
      text: 'View Menu',
      icon: null
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

    let interval: NodeJS.Timeout

    const startAutoSlide = () => {
      clearInterval(interval)
      interval = setInterval(() => {
        emblaApi.scrollNext()
      }, 15000)
    }

    const resetAutoSlide = () => {
      startAutoSlide()
    }

    // Start the initial auto-slide
    startAutoSlide()

    // Reset timer when user manually navigates
    emblaApi.on('settle', resetAutoSlide)

    return () => {
      clearInterval(interval)
      emblaApi.off('settle', resetAutoSlide)
    }
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
      <div className="bg-background overflow-hidden min-h-[85vh] relative" style={{ borderRadius: '30px' }}>
          <div className="embla overflow-hidden h-full" ref={emblaRef}>
            <div className="embla__container flex h-full">
              {slides.map((slide, index) => (
                <div key={index} className="embla__slide flex-none w-full min-h-[85vh] relative">
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
                  className="max-w-5xl text-center"
                >
                  {slide.icon && (
                    <div className="mb-6">
                      <Image src={slide.icon} alt="Balance Body" width={120} height={60} className="mx-auto h-16 w-auto" />
                    </div>
                  )}
                  <h1 className={`font-serif text-5xl md:text-7xl font-semibold mb-6 leading-tight ${slide.backgroundImage || slide.backgroundVideo ? 'text-white' : 'text-foreground'}`}>
                    {slide.heading}
                  </h1>
                  <p className={`text-lg md:text-xl mb-8 leading-relaxed font-sans ${slide.backgroundImage || slide.backgroundVideo ? 'text-white/90' : 'text-muted-foreground'}`}>
                    {slide.subHeading}
                  </p>

                  {slide.cta?.secondary ? (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <a href="#" className="hover:scale-105 transition-transform duration-300">
                        <Image src="/icons/googleplay.svg" alt="Get it on Google Play" width={150} height={45} className="h-12 w-auto" />
                      </a>
                      <a href="#" className="hover:scale-105 transition-transform duration-300">
                        <Image src="/icons/appstore.svg" alt="Download on the App Store" width={150} height={45} className="h-12 w-auto" />
                      </a>
                    </div>
                  ) : slide.cta ? (
                    <div className="flex justify-center">
                      <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 flex items-center gap-2 font-sans rounded-full">
                        {slide.cta.icon}
                        {slide.cta.text}
                      </Button>
                    </div>
                  ) : null}
                </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 p-3 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors z-10 hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 p-3 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors z-10 hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Social Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-8 z-10 flex gap-4"
          >
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-gray-200/50"
            >
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
              <span className="font-medium text-sm">Chat with us</span>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/90 hover:bg-white text-gray-800 hover:text-gray-900 px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 backdrop-blur-sm border border-gray-200/50"
            >
              <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
              <span className="font-medium text-sm">Follow us on IG</span>
            </a>
          </motion.div>
      </div>
    </section>
  )
}
