'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function CafeteriaBanner() {
  return (
    <section className="py-4 px-4">
      <div className="bg-background overflow-hidden" style={{ borderRadius: '30px' }}>
        <div className="relative min-h-[50vh] flex items-center justify-center">
            <div className="absolute inset-0">
              <img
                src="/images/cafeteria.jpg"
                alt="Cafeteria - Your New Working Space"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center px-6"
          >
        <h2 className="font-serif text-5xl md:text-7xl font-semibold text-white mb-6">
          Your New Working Space
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light font-sans">
          Healthy bites, great coffee, and calm space to focus.
        </p>
        <Button
          size="lg"
          className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 font-sans rounded-full"
        >
          View Menu
        </Button>
            </motion.div>
        </div>
      </div>
    </section>
  )
}
