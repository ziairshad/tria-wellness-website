"use client"

import { Button } from "@/components/ui/button";
import DomeGallery from "@/components/DomeGallery";

const instagramImages = [
  {
    src: "/images/studio-main.jpg",
    alt: "Beautiful studio interior at Tria"
  },
  {
    src: "/images/classes/lagree-method.webp",
    alt: "Lagree method workout session"
  },
  {
    src: "/images/classes/Vinyasa Flow.jpg",
    alt: "Vinyasa flow yoga class"
  },
  {
    src: "/images/studio-meditation.jpg",
    alt: "Peaceful meditation space"
  },
  {
    src: "/images/classes/restorative-yoga.webp",
    alt: "Restorative yoga session"
  },
  {
    src: "/images/studio-lounge.jpg",
    alt: "Studio lounge area"
  },
  {
    src: "/images/classes/power-flow.webp",
    alt: "Power flow yoga class"
  },
  {
    src: "/images/instructors/Sara.png",
    alt: "Instructor Sara"
  },
  {
    src: "/images/studio-entrance.jpg",
    alt: "Studio entrance"
  },
  {
    src: "/images/classes/mindful-meditation.webp",
    alt: "Mindful meditation session"
  },
  {
    src: "/images/studio-lagree.jpg",
    alt: "Lagree equipment area"
  },
  {
    src: "/images/instructors/Marcus.png",
    alt: "Instructor Marcus"
  },
  {
    src: "/images/classes/prenatal-yoga.jpg",
    alt: "Prenatal yoga class"
  },
  {
    src: "/images/instructors/Luna.png",
    alt: "Instructor Luna"
  },
  {
    src: "/images/studio-changing.jpg",
    alt: "Studio changing area"
  }
];

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

        <div className="h-[600px] w-full">
          <DomeGallery
            images={instagramImages}
            fit={0.7}
            overlayBlurColor="#1D1D1D"
            grayscale={false}
            imageBorderRadius="20px"
            openedImageBorderRadius="24px"
            openedImageWidth="320px"
            openedImageHeight="480px"
            segments={30}
          />
        </div>

      </div>
    </section>
  );
}