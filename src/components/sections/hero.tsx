import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Announcement } from "@/components/ui/announcement";

export function Hero() {
  return (
    <section className="relative pt-48 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Image
          src="/header.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/80 to-primary/90"></div>
      </div>
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
          {/* Announcement */}
          <div className="animate-fade-in">
            <Announcement className="[&>span]:text-white [&>span]:hover:text-white hover:[&>span]:text-white [&_.bg-secondary]:bg-transparent [&_.bg-secondary]:border [&_.bg-secondary]:border-white [&_.bg-secondary]:text-white">
              First Month 50% Off All Classes
            </Announcement>
          </div>

          {/* Main Heading with Stagger Animation */}
          <div className="space-y-4">
            <div className="animate-fade-in-up opacity-0 [animation-delay:100ms] [animation-fill-mode:forwards]">
              <Image
                src="/images/hero-icon.png"
                alt="Hero icon"
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards] text-white">
              <span className="font-light text-white">Sacred</span>{" "}
              <span className="font-bold text-white">Balance</span>
            </h1>
            <p className="text-lg sm:text-xl font-sans text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              A journey toward sacred balance — the harmony of mind, body, and soul through mindful movement and conscious transformation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
            <Button asChild size="lg" className="px-8 py-3 text-base group bg-white text-primary hover:bg-white/90">
              <a href="#classes">
                <span className="group-hover:scale-105 transition-transform">
                  Begin Your Journey
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-3 text-base border-white text-white bg-transparent hover:bg-transparent">
              <a href="#studio">
                Explore Studio
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}