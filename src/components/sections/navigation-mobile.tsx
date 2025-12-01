'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Instagram, Menu } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function NavigationMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationLinks = [
    { label: 'About', href: '/landing-v2/about' },
    { label: 'Membership & Packages', href: '#' },
    { label: 'Gift Cards', href: '#' },
    { label: 'Contact Us', href: '/landing-v2/contact' },
    { label: 'Classes', href: '#' },
    { label: 'Workshops', href: '#' },
    { label: 'Retreats', href: '#' },
    { label: 'Upcoming Instructor Trainings', href: '#' },
    { label: 'Blog', href: '/landing-v2/blog' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 p-4 md:hidden">
        <div style={{ backgroundColor: '#5A6E53', borderRadius: '30px' }}>
          <div className="flex items-center justify-between px-6" style={{ height: '64px' }}>
            <Link href="/landing-v2">
              <Image
                src="/logo/logo.svg"
                alt="Tria Logo"
                width={48}
                height={48}
                className="w-12 h-12"
                style={{
                  filter: 'brightness(0) invert(1)',
                  width: 'calc(var(--spacing) * 32)',
                  height: 'calc(var(--spacing) * 24)'
                }}
              />
            </Link>

            <div className="flex items-center -space-x-2">
              <Button className="bg-transparent text-background hover:bg-background/10 font-sans font-medium rounded-full px-3 py-2 text-sm">
                BOOK NOW
              </Button>

              <Button
                onClick={() => setIsMenuOpen(true)}
                className="bg-transparent text-background hover:bg-background/10 p-2 rounded-full"
              >
                <Menu size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 p-4"
          >
            <div className="h-full overflow-hidden relative" style={{ borderRadius: '30px' }}>
              <div className="absolute inset-0">
                <img
                  src="/images/footerbg.png"
                  alt="Menu background"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 h-full">
                <div className="flex h-full">
                  <div className="flex-1 p-8 overflow-y-auto">
                    <div className="flex justify-between items-center">
                      <Link href="/landing-v2">
                        <Image
                          src="/logo/logo.svg"
                          alt="Tria Logo"
                          width={120}
                          height={120}
                          className="w-30 h-30"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </Link>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-2 text-background hover:text-background/80 transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <nav className="space-y-6 -mt-4 mb-8">
                      {navigationLinks.map((link, index) => (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="block text-2xl font-serif font-light text-background hover:text-background/80 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </motion.a>
                      ))}
                    </nav>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex space-x-4"
                    >
                      <a
                        href="#"
                        className="p-3 bg-background/10 rounded-full text-background hover:bg-background/20 hover:text-background transition-colors"
                      >
                        <Instagram size={20} />
                      </a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}