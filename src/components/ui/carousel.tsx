"use client";

import React, { useCallback } from "react";
import { EmblaOptionsType, EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  options?: EmblaOptionsType;
  showArrows?: boolean;
  showDots?: boolean;
  arrowVisibility?: "lg-only" | "all";
}

export function Carousel({
  children,
  className = "",
  options = {
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps"
  },
  showArrows = true,
  showDots = true,
  arrowVisibility = "lg-only",
}: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className={`relative w-full ${className}`}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {children.map((child, index) => (
            <div key={index} className="flex-none w-[calc(100%-3rem)] min-w-0 md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
              {child}
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <>
          <motion.button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-accent-foreground disabled:opacity-30 disabled:cursor-not-allowed shadow-lg z-10 items-center justify-center ${arrowVisibility === "lg-only" ? "hidden lg:flex -left-16" : "flex -left-3 sm:-left-6 lg:-left-16"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent text-accent-foreground disabled:opacity-30 disabled:cursor-not-allowed shadow-lg z-10 items-center justify-center ${arrowVisibility === "lg-only" ? "hidden lg:flex -right-16" : "flex -right-3 sm:-right-6 lg:-right-16"}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </>
      )}

      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center space-x-3 mt-6">
          {scrollSnaps.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                selectedIndex === index ? "bg-primary w-8" : "bg-muted hover:bg-muted-foreground/50"
              }`}
              onClick={() => scrollTo(index)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
