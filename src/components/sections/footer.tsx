
import Image from "next/image";
import { AnimatedSection } from "@/components/sections/animated-section";

const QUICK_LINKS = [
  { label: "Classes", href: "#classes" },
  { label: "Membership & Packages", href: "#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-6 px-4 sm:px-6 lg:px-8">
      <AnimatedSection className="max-w-7xl mx-auto space-y-10">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div className="space-y-0">
            <Image
              src="/logo/logo.svg"
              alt="Tria Logo"
              width={96}
              height={96}
              className="w-24 h-24"
            />
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xl">
              A sanctuary for balance, clarity, and connection through mindful movement and conscious transformation.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-lg">Quick Links</h3>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="font-sans text-sm text-muted-foreground">
            © 2025 Tria Studio. All rights reserved.
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
}
