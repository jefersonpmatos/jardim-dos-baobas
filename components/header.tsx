"use client"

import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const links = [
  { href: "#pedagogia", label: "Pedagogia" },
  { href: "#escola", label: "A escola" },
  { href: "#fotos", label: "Fotos" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/15 bg-emerald-900">
      <div className="flex items-center justify-between gap-4 px-[9vw] py-3">
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Jardim dos Baobás"
            className="h-14 w-14 object-contain"
          />
          <span className="hidden font-heading text-xl text-primary sm:block">
            Jardim dos Baobás
          </span>
        </a>
        <nav className="flex flex-wrap gap-1 text-sm font-semibold">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-muted hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5583999601477"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            Fale Conoco <ArrowRight />
          </a>
        </nav>
      </div>
    </header>
  )
}
