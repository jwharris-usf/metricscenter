'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(5, -10 * t)
}

interface AnimatedCounterProps {
  target: number
  duration?: number
  className?: string
}

export default function AnimatedCounter({ target, duration = 4000, className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef<HTMLHeadingElement>(null)

  const formatNumber = (num: number) => {
    return Math.round(num).toLocaleString('en-US')
  }

  const startAnimation = useCallback(() => {
    let startTime: number | null = null
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      const easedProgress = easeOutExpo(progress)
      const currentCount = easedProgress * target

      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [duration, target])

  useEffect(() => {
    const currentRef = counterRef.current // Store the current ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
          startAnimation()
        }
      },
      { threshold: 0.5 }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasStarted, startAnimation])

  return (
    <h2 ref={counterRef} className={className}>
      {formatNumber(count)}
    </h2>
  )
}
