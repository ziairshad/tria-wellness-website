'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedNumberProps {
  value: string
  className?: string
}

export function AnimatedNumber({ value, className = '' }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView || hasAnimated) return

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
    const suffix = value.replace(/[0-9.]/g, '')

    if (isNaN(numericValue)) {
      setDisplayValue(value)
      setHasAnimated(true)
      return
    }

    let startTime: number
    const duration = 2000 // 2 seconds

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(numericValue * easedProgress)

      setDisplayValue(`${currentValue}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
        setHasAnimated(true)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, hasAnimated])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={className}
    >
      {displayValue}
    </motion.span>
  )
}