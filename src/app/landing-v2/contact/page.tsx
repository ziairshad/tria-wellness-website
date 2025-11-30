'use client'

import { useState } from 'react'
import { NavigationV2 } from '@/components/sections/navigation-v2'
import { FooterV2 } from '@/components/sections/footer-v2'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import Image from 'next/image'

const CONTACT_INFO = {
  address: {
    street: '192 Griffin Street',
    city: 'Gilbert',
    state: 'AZ',
    zip: '32521'
  },
  phone: '(406) 555-0120',
  email: 'hello@example.com',
  hours: [
    { day: 'Monday - Friday', time: '6:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 8:00 PM' },
    { day: 'Sunday', time: '8:00 AM - 7:00 PM' }
  ]
}

interface ContactFormData {
  name: string
  email: string
  message: string
}

export default function ContactLandingV2() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [agreed, setAgreed] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({
      name: '',
      email: '',
      message: ''
    })
    setAgreed(false)

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen landing-v2-bg">
        <NavigationV2 />
        <div className="pt-20 px-4 min-h-screen flex items-center justify-center">
          <Card className="p-8 text-center max-w-md mx-auto">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-4">
              Message Sent!
            </h2>
            <p className="text-xl font-sans text-muted-foreground leading-relaxed">
              Thank you for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
          </Card>
        </div>
        <FooterV2 />
      </div>
    )
  }

  return (
    <div className="min-h-screen landing-v2-bg">
      <NavigationV2 />

      <section className="px-4 pt-24 pb-8">
        <div className="w-full">
          <div
            className="w-full h-[440px] rounded-[30px] overflow-hidden border border-border bg-muted/40"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3578425011137!2d55.15679700000001!3d25.079827299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d673a8379e9%3A0xa9075564b86f6a8!2sVida%20The%20Hills%20-%20Tower%20A1!5e0!3m2!1sen!2sae!4v1764331802798!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tria Location"
            />
          </div>
        </div>
      </section>

      <section className="pt-16 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <div className="mb-4">
                  <Image
                    src="/images/Tria-Icon-02.png"
                    alt="Tria Icon"
                    width={96}
                    height={96}
                    className="object-contain"
                  />
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6">
                  Get in touch
                </h1>
                <p className="text-xl font-sans text-muted-foreground leading-relaxed">
                  Write one or two welcoming sentences that encourage contact. Include your response time commitment and highlight your team&apos;s readiness to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-foreground" />
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-foreground" />
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-foreground mt-0.5" />
                    <span className="text-foreground">
                      {CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}, {CONTACT_INFO.address.state}{' '}
                      {CONTACT_INFO.address.zip}
                    </span>
                  </div>
                  <div className="ml-8">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        const address = `${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.state} ${CONTACT_INFO.address.zip}`
                        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
                        window.open(mapsUrl, '_blank')
                      }}
                      className="text-accent-foreground bg-accent border-transparent hover:bg-accent/90 hover:text-accent-foreground rounded-full"
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="rounded-[30px] p-8 space-y-6"
              style={{ backgroundColor: '#5A6E53' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-white focus:border-transparent"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-white focus:border-transparent resize-none"
                    placeholder="Type your message"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    required
                    className="mt-1"
                  />
                  <label htmlFor="privacy" className="text-sm text-white/80">
                    By selecting this you agree to our{' '}
                    <span className="underline cursor-pointer text-white">Privacy Policy</span>.
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !agreed}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 disabled:opacity-50 py-4 rounded-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    'Send message'
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <FooterV2 />
    </div>
  )
}
