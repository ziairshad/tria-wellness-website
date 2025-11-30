'use client'

import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const instagramPosts = [
  {
    id: 1,
    image: '/images/instagram/insta1.jpg',
    alt: 'Community moment 1'
  },
  {
    id: 2,
    image: '/images/instagram/insta2.jpg',
    alt: 'Community moment 2'
  },
  {
    id: 3,
    image: '/images/instagram/insta3.jpg',
    alt: 'Community moment 3'
  },
  {
    id: 4,
    image: '/images/instagram/insta4.jpg',
    alt: 'Community moment 4'
  },
  {
    id: 5,
    image: '/images/instagram/insta5.jpg',
    alt: 'Community moment 5'
  },
  {
    id: 6,
    image: '/images/instagram/insta6.jpg',
    alt: 'Community moment 6'
  }
]

export function InstagramFeedV2() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-4 px-4">
      <div className="bg-accent p-8 overflow-hidden" style={{ borderRadius: '30px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="relative inline-block rounded-full">
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="px-6 py-6 bg-accent text-white hover:bg-accent/90 rounded-full border-2 border-white text-xl font-semibold"
              >
                <a href="https://instagram.com/triadxb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <img src="/icons/instagram.svg" alt="Instagram" width="28" height="28" className="w-7 h-7" />
                  triadxb
                </a>
              </Button>
            </div>
          </motion.div>

          <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex -mx-3">
              {instagramPosts.map((post, index) => (
                <div key={post.id} className="embla__slide flex-none w-80 md:w-96 px-3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative aspect-[4/5] rounded-[30px] overflow-hidden"
                  >
                    <img
                      src={post.image}
                      alt={post.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          </div>

      </div>
    </section>
  )
}
