"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/components/ui/announcement";
import { useState, useEffect, useCallback, useRef } from "react";

interface Slide {
  announcement: string;
  title1: string;
  title2: string;
  description: string;
  primaryCTA: string;
  primaryHref: string;
  secondaryCTA: string;
  secondaryHref: string;
}

const slides: Slide[] = [
  {
    announcement: "First Month 50% Off All Classes",
    title1: "Sacred Balance",
    title2: "",
    description: "A journey toward sacred balance — the harmony of mind, body, and soul through mindful movement and conscious transformation.",
    primaryCTA: "Begin Your Journey",
    primaryHref: "#classes",
    secondaryCTA: "Explore Studio",
    secondaryHref: "#studio"
  },
  {
    announcement: "First Month 50% Off All Classes",
    title1: "Begin Your Transformation",
    title2: "",
    description: "Step into a sanctuary for balance, clarity and connection",
    primaryCTA: "Schedule Tour",
    primaryHref: "/contact",
    secondaryCTA: "Meet Our Team",
    secondaryHref: "#instructors"
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayText, setDisplayText] = useState({
    announcement: "",
    title1: "",
    description: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationPromiseRef = useRef<{ cancelled: boolean }>({ cancelled: false });

  useEffect(() => {
    const typeText = async () => {
      const animationRef = { cancelled: false };
      animationPromiseRef.current = animationRef;

      setIsTyping(true);
      setShowButtons(false);
      const slide = slides[currentSlide];

      // Reset all text
      setDisplayText({ announcement: slide.announcement, title1: "", description: "" });

      // Type title1 and description simultaneously
      await new Promise(resolve => setTimeout(resolve, 300));
      if (animationRef.cancelled) return;

      const maxLength = Math.max(slide.title1.length, slide.description.length);

      for (let i = 0; i <= maxLength; i++) {
        if (animationRef.cancelled) return;

        setDisplayText(prev => ({
          ...prev,
          title1: slide.title1.slice(0, Math.min(i, slide.title1.length)),
          description: slide.description.slice(0, Math.min(i, slide.description.length))
        }));
        await new Promise(resolve => setTimeout(resolve, 35));
      }

      if (animationRef.cancelled) return;

      // Show buttons with animation
      await new Promise(resolve => setTimeout(resolve, 300));
      if (animationRef.cancelled) return;

      setShowButtons(true);
      setIsTyping(false);
    };

    const eraseText = async () => {
      const animationRef = animationPromiseRef.current;

      setShowButtons(false);
      const slide = slides[currentSlide];

      // Erase title1 and description simultaneously
      const maxEraseLenth = Math.max(slide.title1.length, slide.description.length);
      for (let i = maxEraseLenth; i >= 0; i--) {
        if (animationRef.cancelled) return;

        setDisplayText(prev => ({
          ...prev,
          title1: slide.title1.slice(0, Math.min(i, slide.title1.length)),
          description: slide.description.slice(0, Math.min(i, slide.description.length))
        }));
        await new Promise(resolve => setTimeout(resolve, 20));
      }

      // Keep announcement visible during transition
    };

    const animationSequence = async () => {
      const animationRef = animationPromiseRef.current;

      if (isPaused || animationRef.cancelled) return;

      await typeText();
      if (animationRef.cancelled) return;

      // Hold for 9 seconds with ability to interrupt
      await new Promise(resolve => {
        animationTimeoutRef.current = setTimeout(() => {
          if (!animationRef.cancelled) resolve(undefined);
        }, 9000);
      });

      if (isPaused || animationRef.cancelled) return;
      await eraseText();
      if (animationRef.cancelled) return;

      await new Promise(resolve => setTimeout(() => {
        if (!animationRef.cancelled) resolve(undefined);
      }, 500)); // Pause before next slide

      if (!isPaused && !animationRef.cancelled) {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }
    };

    if (!isPaused) {
      animationSequence();
    }
  }, [currentSlide, isPaused]);

  const currentSlideData = slides[currentSlide];


  return (
    <section className="relative pt-48 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary/30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Subtle Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Image
          src="/logo/logo.svg"
          alt=""
          width={400}
          height={400}
          className="w-96 h-96"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Announcement - show for both slides */}
          <div className="animate-fade-in">
            <Announcement>
              {displayText.announcement}
            </Announcement>
          </div>

          {/* Main Heading with Typing Animation */}
          <div className="space-y-2">
            <div className="animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
              <Image
                src="/images/hero-icon.png"
                alt="Hero icon"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight text-foreground min-h-[120px] flex items-center justify-center">
              <span className="font-bold text-foreground">{displayText.title1}</span>
              {displayText.title1.length < currentSlideData.title1.length && (
                <span className="animate-pulse">|</span>
              )}
            </h1>
            <div className="min-h-[120px] sm:min-h-[80px] flex items-center justify-center">
              <p className="text-lg sm:text-xl font-sans text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                {displayText.description}
                {displayText.description.length < currentSlideData.description.length && displayText.title1.length === currentSlideData.title1.length && (
                  <span className="animate-pulse">|</span>
                )}
              </p>
            </div>
          </div>

          {/* CTA Buttons with Animation */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${
            showButtons ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}>
            <Button asChild size="lg" className="px-8 py-3 text-base group">
              <a href={currentSlideData.primaryHref}>
                <span className="group-hover:scale-105 transition-transform">
                  {currentSlideData.primaryCTA}
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base">
              <a href={currentSlideData.secondaryHref}>
                {currentSlideData.secondaryCTA}
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}