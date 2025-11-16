"use client"

import { cn } from "@/lib/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  speed = "normal",
  children,
  ...props
}: MarqueeProps) {
  const speedClass = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  }[speed]

  return (
    <div
      className={cn(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around min-w-full gap-4",
          speedClass,
          reverse && "animate-reverse",
          pauseOnHover && "hover:animation-paused"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around min-w-full gap-4",
          speedClass,
          reverse && "animate-reverse",
          pauseOnHover && "hover:animation-paused"
        )}
      >
        {children}
      </div>
    </div>
  )
}