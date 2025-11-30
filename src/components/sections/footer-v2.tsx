'use client'

import Image from 'next/image'
import { Instagram, MapPin, Phone, Mail } from 'lucide-react'

export function FooterV2() {
  return (
    <footer className="py-4 px-4">
      <div
        className="p-8 overflow-hidden relative"
        style={{ borderRadius: '30px' }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/footerbg.png"
            alt="Footer background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center">
            <div className="w-full h-32 relative">
              <Image
                src="/logo/logo.svg"
                alt="Tria logo"
                fill
                className="object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
                sizes="100%"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="/landing-v2/about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Classes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Memberships</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Instructors</a></li>
              <li><a href="/landing-v2/contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/landing-v2/blog" className="text-white/80 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Services</h4>
            <ul className="space-y-2 font-sans">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Yoga Classes</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Lagree Method</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Personal Training</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Retreats</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium mb-4 text-white">Contact</h4>
            <div className="space-y-3 font-sans">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Dubai, UAE</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">hello@tria.ae</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 font-sans">
            © 2025 Tria Wellness Studio. All rights reserved.
          </p>
        </div>
        </div>
      </div>
    </footer>
  )
}
