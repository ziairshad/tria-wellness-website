"use client"

import { Button } from "@/components/ui/button";

export function Instagram() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#1D1D1D' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif font-light tracking-tight mb-6 text-white">
            Follow Our Journey
          </h2>
          <p className="text-lg font-sans text-white/80 max-w-2xl mx-auto mb-8">
            Experience the sacred balance through our community's transformative moments
          </p>
          <div className="relative inline-block p-[2px] rounded-lg bg-gradient-to-r from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] hover:shadow-lg transition-all duration-300">
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="px-6 bg-[#1D1D1D] text-white hover:bg-[#1D1D1D]/80 rounded-md border-none"
            >
              <a href="https://instagram.com/triastudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                </svg>
                TriaStudio
              </a>
            </Button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-4 w-full max-w-6xl mx-auto">
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className={`aspect-square rounded-lg sm:rounded-xl bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-primary to-accent' :
                  index % 4 === 1 ? 'from-accent to-secondary' :
                  index % 4 === 2 ? 'from-secondary to-primary/60' :
                  'from-primary/60 to-accent'
                } opacity-80 hover:opacity-100 transition-opacity duration-300`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}