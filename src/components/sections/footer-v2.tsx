'use client'

import Image from 'next/image'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export function FooterV2() {
  return (
    <footer className="py-4 px-4">
      <div
        className="p-8 overflow-hidden"
        style={{ borderRadius: '30px', backgroundColor: '#DFDDD4' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="w-28 h-12 relative">
              <Image
                src="/logo/logo.svg"
                alt="Tria logo"
                fill
                className="object-contain"
                sizes="112px"
                priority
              />
            </div>
            <p className="text-foreground/80 leading-relaxed font-sans">
              Transform your wellness journey with us. Experience the perfect blend of traditional yoga, innovative Lagree Method, and mindful movement.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="p-2 bg-foreground/5 text-foreground/70 rounded-full hover:bg-foreground/10 hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="/landing-v2/about" className="text-foreground/80 hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Classes</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Memberships</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Instructors</a></li>
              <li><a href="/landing-v2/contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/landing-v2/blog" className="text-foreground/80 hover:text-foreground transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Yoga Classes</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Lagree Method</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Workshops</a></li>
              <li><a href="#" className="text-foreground/80 hover:text-foreground transition-colors">Retreats</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-foreground/60" />
                <span className="text-foreground/80">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-foreground/60" />
                <span className="text-foreground/80">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-foreground/60" />
                <span className="text-foreground/80">hello@tria.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-foreground/10 mt-12 pt-8 text-center">
          <p className="text-foreground/60 font-sans">
            © 2025 Tria Wellness Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
