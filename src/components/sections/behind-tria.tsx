'use client'

import { motion } from 'framer-motion'

export function BehindTria() {
  return (
    <section className="py-4 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full px-4">
          <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden order-1 lg:order-2"
          >
            <div className="aspect-square overflow-hidden" style={{ borderRadius: '30px' }}>
              <img
                src="/images/behindtria.jpg"
                alt="Behind Tria studio team"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-muted/50 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-2 lg:order-1"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">
              Behind Tria
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-sans">
              <p>
                Founded with a vision to transform the wellness landscape in the UAE, Tria represents more than just a studio—it&apos;s a sanctuary where movement meets mindfulness. Our journey began with a simple belief: that every body deserves to experience the profound benefits of intentional movement, regardless of experience level or physical limitations.
              </p>

              <p>
                At Tria, we&apos;ve carefully curated a space that honors both tradition and innovation. From our state-of-the-art Konnector Reformer technology to our serene yoga studios, every element has been thoughtfully designed to support your personal transformation. Our diverse team of certified instructors brings together decades of experience in yoga, Pilates, and the revolutionary Lagree Method, ensuring that every class is both challenging and accessible.
              </p>
            </div>
          </motion.div>
        </div>
    </section>
  )
}
