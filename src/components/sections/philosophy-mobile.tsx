'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function PhilosophyMobile() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="philosophy-mobile" className="py-6 px-4 block md:hidden">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-6 bg-background rounded-[30px] shadow-sm hover:shadow-md transition-shadow"
        >
          <h2 className="text-2xl font-serif font-semibold text-foreground text-left">
            Philosophy Behind TRIA
          </h2>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 ml-4"
          >
            <ChevronDown className="w-6 h-6 text-foreground" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="p-6 mt-4 bg-background rounded-[30px] shadow-sm">
                <div className="space-y-4">
                  <p className="text-base font-sans text-muted-foreground leading-relaxed">
                    Founded with a vision to transform the wellness landscape in the UAE, Tria represents more than just a studio—it's a sanctuary where movement meets mindfulness. Our journey began with a simple belief: that every body deserves to experience the profound benefits of intentional movement, regardless of experience level or physical limitations.
                  </p>
                  <p className="text-base font-sans text-muted-foreground leading-relaxed">
                    At Tria, we've carefully curated a space that honors both tradition and innovation. From our state-of-the-art Konnector Reformer technology to our serene yoga studios, every element has been thoughtfully designed to support your personal transformation. Our diverse team of certified instructors brings together decades of experience in yoga, Pilates, and the revolutionary Lagree Method, ensuring that every class is both challenging and accessible.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}