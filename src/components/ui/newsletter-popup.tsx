'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    // Check if popup has been shown before
    const hasSeenPopup = localStorage.getItem('tria-newsletter-popup-seen')

    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('tria-newsletter-popup-seen', 'true')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      // Here you would typically send the email to your newsletter service
      console.log('Newsletter signup:', email)

      // Close popup after 2 seconds
      setTimeout(() => {
        handleClose()
      }, 2000)
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="bg-[#F5F3EA] max-w-sm w-full rounded-[30px] overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                handleClose()
              }}
              className="absolute top-4 right-4 p-3 hover:bg-white/20 rounded-full transition-colors z-20 cursor-pointer"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Header with logo */}
            <div className="relative h-32 bg-primary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
              <div className="relative z-10 flex items-center justify-center h-full">
                <Image
                  src="/logo/logo.svg"
                  alt="Tria Logo"
                  width={80}
                  height={80}
                  className="h-16 w-auto"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                      Stay Connected
                    </h3>
                    <p className="text-muted-foreground font-sans leading-relaxed">
                      Be the first to know and get<br />10% off your first package
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-12 h-12 rounded-full border-muted bg-white"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-sans font-medium"
                    >
                      Subscribe
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    Welcome to the Tria community. Check your email for your 10% discount code.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}