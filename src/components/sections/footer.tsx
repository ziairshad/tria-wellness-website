import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image
              src="/logo/logo.svg"
              alt="Tria Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
            <p className="font-sans text-sm text-muted-foreground max-w-xs">
              A sanctuary for balance, clarity, and connection through mindful movement and conscious transformation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-medium">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Dubai, United Arab Emirates</p>
              <p>(555) 123-TRIA</p>
              <p>hello@triastudio.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif font-medium">Quick Links</h3>
            <div className="space-y-2">
              <a href="#classes" className="font-sans text-sm hover:text-foreground transition-colors block">Classes</a>
              <a href="#studio" className="font-sans text-sm hover:text-foreground transition-colors block">Studio</a>
              <a href="#instructors" className="font-sans text-sm hover:text-foreground transition-colors block">Instructors</a>
              <a href="#services" className="font-sans text-sm hover:text-foreground transition-colors block">Services</a>
              <a href="#" className="font-sans text-sm hover:text-foreground transition-colors block">Contact</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 Tria Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}