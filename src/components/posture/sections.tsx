"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const },
  viewport: { once: true, amount: 0.3 }
};

const stagger = {
  initial: {},
  whileInView: {},
  transition: { staggerChildren: 0.15, delayChildren: 0.1 }
};

// Hero Carousel Component - Exact replica of Posture website
export function PostureHero() {
  const slides = [
    {
      desktop: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2070",
      mobile: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000",
      title: "Transform Your Body",
      subtitle: "Experience the Tria Method",
      cta: "Join the Challenge"
    },
    {
      desktop: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070",
      mobile: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000",
      title: "Precision Movement",
      subtitle: "Every session, every breath matters",
      cta: "Book Your Class"
    },
    {
      desktop: "https://images.unsplash.com/photo-1506629905877-33d3de6e4bef?q=80&w=2070",
      mobile: "https://images.unsplash.com/photo-1506629905877-33d3de6e4bef?q=80&w=1000",
      title: "Mind-Body Connection",
      subtitle: "Discover your potential",
      cta: "Start Today"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Image Carousel */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.05
            }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobile} />
              <img
                src={slide.desktop}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
          </motion.div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-110'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-vonca font-extralight text-white leading-none">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i} className={i === 1 ? 'font-bold block' : 'block'}>
                  {word}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-medium rounded-full"
            >
              {slides[currentSlide].cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Membership Cards - Exact replica layout
export function PostureMembership() {
  const memberships = [
    {
      icon: "💫",
      title: "Foundation",
      subtitle: "Single Class",
      description: "Perfect for trying our method for the first time",
      price: "$35"
    },
    {
      icon: "🎯",
      title: "Explorer",
      subtitle: "Class Package",
      description: "Dive deeper with multiple sessions",
      price: "$150"
    },
    {
      icon: "🔥",
      title: "Transformer",
      subtitle: "Monthly Unlimited",
      description: "Full access to transform your practice",
      price: "$195"
    },
    {
      icon: "✨",
      title: "Lifestyle",
      subtitle: "Annual Membership",
      description: "Complete wellness journey with all benefits",
      price: "$1,800"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-vonca font-light text-primary mb-6">
            Membership & Credits
          </h2>
        </motion.div>

        <motion.div
          {...stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {memberships.map((membership, index) => (
            <motion.div key={index} {...fadeInUp}>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 h-full group">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {membership.icon}
                  </div>
                  <h3 className="text-2xl font-vonca font-medium text-primary mb-2">
                    {membership.title}
                  </h3>
                  <p className="text-secondary font-medium mb-4">
                    {membership.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 flex-1">
                    {membership.description}
                  </p>
                  <div className="text-3xl font-vonca font-bold text-primary mb-6">
                    {membership.price}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-full">
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Our Method Section - Exact replica
export function PostureMethod() {
  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-6">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-vonca font-light text-primary mb-8">
            Our Method
          </h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-700">
            <p>
              At Tria, we believe that true transformation comes from precision, awareness, and
              dedication to the process. Our method combines classical movement principles with
              modern understanding of the body.
            </p>
            <p>
              Each session is carefully crafted to challenge your body and mind, creating lasting
              change that extends far beyond our studio walls. We focus on quality over quantity,
              ensuring every movement serves a purpose.
            </p>
            <p>
              Our expert instructors guide you through a journey of discovery, helping you unlock
              your body's potential through mindful, controlled movement that builds strength,
              flexibility, and confidence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Classes Section - Exact replica
export function PostureClasses() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-vonca font-light text-primary mb-8">
              Classes
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Our classes are designed for individuals seeking personalized attention
                and transformative results. With small class sizes, you'll receive the
                guidance needed to reach your goals.
              </p>
              <p>
                Whether you're new to movement or looking to deepen your practice,
                our expert instructors will meet you where you are and help you
                discover what your body is truly capable of.
              </p>
              <p>
                Every class is a step toward a stronger, more balanced version of yourself.
              </p>
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full">
                View Schedule
              </Button>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070"
              alt="Tria class in session"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Contact CTA - Minimal footer style
export function PostureCTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-vonca font-light mb-2">Ready to begin?</h3>
            <p className="text-white/80">Join us for a transformative experience</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-full">
              Book Your First Class
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full">
              Chat with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep these for backward compatibility but they won't be used in the new layout
export function PostureStrip() { return null; }
export function PosturePrograms() { return null; }
export function PostureExperience() { return null; }
export function PostureSchedule() { return null; }