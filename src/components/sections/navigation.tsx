"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Image
              src="/logo/logo.svg"
              alt="Tria Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="hidden md:flex space-x-6">
              <a href="#classes" className="font-sans text-muted-foreground hover:text-foreground transition-colors">Classes</a>
              <a href="#studio" className="font-sans text-muted-foreground hover:text-foreground transition-colors">Studio</a>
              <a href="#instructors" className="font-sans text-muted-foreground hover:text-foreground transition-colors">Instructors</a>
              <a href="#services" className="font-sans text-muted-foreground hover:text-foreground transition-colors">Services</a>
            </div>
            <Button asChild className="font-sans hidden sm:flex">
              <a href="#classes">
                Book Session
              </a>
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#classes"
                className="block px-3 py-2 font-sans text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Classes
              </a>
              <a
                href="#studio"
                className="block px-3 py-2 font-sans text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Studio
              </a>
              <a
                href="#instructors"
                className="block px-3 py-2 font-sans text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Instructors
              </a>
              <a
                href="#services"
                className="block px-3 py-2 font-sans text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <div className="px-3 py-2">
                <Button asChild className="font-sans w-full" onClick={() => setIsMenuOpen(false)}>
                  <a href="#classes">
                    Book Session
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
