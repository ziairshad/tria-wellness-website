"use client"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface AnnouncementProps {
  children: React.ReactNode
  href?: string
  className?: string
  variant?: "default" | "secondary" | "outline"
}

export function Announcement({
  children,
  href,
  className,
  variant = "secondary"
}: AnnouncementProps) {
  const Component = href ? "a" : "div"

  return (
    <Component
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium transition-colors",
        href && "hover:bg-accent/50 cursor-pointer",
        className
      )}
    >
      <Badge variant={variant} className="px-2 py-0.5 bg-accent text-accent-foreground border-transparent">
        New
      </Badge>
      <span className="text-muted-foreground group-hover:text-foreground transition-colors">
        {children}
      </span>
    </Component>
  )
}