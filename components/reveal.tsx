"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: "delay-1" | "delay-2" | "delay-3"
}

export function Reveal({ children, className, delay }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.motion = "safe"
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={cn(
        "data-[motion=safe]:animate-reveal-in transform-[translateY(24px)] opacity-0",
        delay,
        className
      )}
    >
      {children}
    </div>
  )
}

export function RevealGroup({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={cn("contents", className)}>{children}</div>
}
