"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NAVIGATION_LINKS = [
  { href: "/", label: "Home", isHome: true },
  { href: "/about", label: "About" },
  { href: "#classes", label: "Classes", homeOnly: true },
  { href: "#studio", label: "Studio", homeOnly: true },
  { href: "#instructors", label: "Instructors", homeOnly: true },
  { href: "#services", label: "Services", homeOnly: true },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo/logo.svg"
                alt="Tria Logo"
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-4 sm:space-x-8">
            <div className="hidden md:flex space-x-6">
              {NAVIGATION_LINKS
                .filter(link => !link.isHome && (!link.homeOnly || isHomePage))
                .map((link) => {
                  const isExternal = link.href.startsWith('#');
                  const isActive = !isExternal && pathname === link.href;

                  if (isExternal) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className={`font-sans transition-colors ${
                          isActive
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`font-sans transition-colors ${
                        isActive
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </div>
            <Button asChild className="font-sans">
              {isHomePage ? (
                <a href="#classes">Book Session</a>
              ) : (
                <Link href="/contact">Contact Us</Link>
              )}
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
              {NAVIGATION_LINKS
                .filter(link => !link.isHome && (!link.homeOnly || isHomePage))
                .map((link) => {
                  const isExternal = link.href.startsWith('#');
                  const isActive = !isExternal && pathname === link.href;

                  if (isExternal) {
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        className={`block px-3 py-2 font-sans transition-colors ${
                          isActive
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-3 py-2 font-sans transition-colors ${
                        isActive
                          ? 'text-primary font-medium'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
