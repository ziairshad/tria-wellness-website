import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Navigation() {
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
            <Button asChild className="font-sans">
              <a href="#classes">
                Book Session
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
