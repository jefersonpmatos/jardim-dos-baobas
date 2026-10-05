"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "./ui/button"

const links = [
  { href: "#pedagogia", label: "A Pedagogia" },
  { href: "#escola", label: "A Escola" },
  { href: "#fotos", label: "Vivências" },
]

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const overHero = pathname === "/" && !scrolled

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <div
        ref={sentinelRef}
        className="pointer-events-none absolute top-0 h-10 w-full"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          overHero
            ? "text-cream bg-transparent"
            : "border-b border-border/60 bg-background/90 text-foreground backdrop-blur-md"
        )}
      >
        <div className="flex h-18 items-center justify-between px-4 py-4 sm:px-6 md:px-[9vw]">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Jardim dos Baobás — início"
          >
            <img src="/logo.png" className="h-16 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            <nav
              aria-label="Principal"
              className="hidden items-center gap-8 lg:flex"
            >
              {links.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative text-[1rem] text-foreground opacity-85 transition-opacity hover:opacity-100",
                      isActive &&
                        "opacity-100 after:absolute after:-bottom-1.5 after:left-1/2 after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-current"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="https://wa.me/5583999601477?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Jardim%20dos%20Baob%C3%A1s."
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({
                  variant: overHero ? "secondary" : "default",
                  size: "lg",
                  className: "hidden sm:inline-flex",
                })}
              >
                Agendar uma visita <ArrowRight />
              </a>
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger
                  render={
                    <Button
                      size="icon"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
                    >
                      <Menu />
                    </Button>
                  }
                />

                <SheetContent side="right" className="w-[85vw] max-w-sm p-8">
                  <SheetTitle>
                    <img src="/logo.png" className="h-14 w-auto" />
                  </SheetTitle>
                  <nav
                    aria-label="Menu móvel"
                    className="mt-10 flex flex-col gap-1"
                  >
                    {links.map((item) => {
                      const isActive = pathname === item.href

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "font-display border-b border-border/70 py-4 text-2xl font-light",
                            isActive && "text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </nav>
                  <a
                    className={buttonVariants({
                      size: "lg",
                      className: "mt-10 w-full",
                    })}
                    href="https://wa.me/5583999601477?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Jardim%20dos%20Baob%C3%A1s."
                    target="_blank"
                    rel="noreferrer"
                  >
                    Agendar uma visita
                  </a>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
