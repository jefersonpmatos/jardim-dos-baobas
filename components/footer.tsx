"use client"

import { MapPin, MessageCircleMore } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "./ui/button"

export function Footer() {
  return (
    <motion.footer
      className="bg-[#6f9a88] tracking-[.06em] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:items-start md:px-[9vw]">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <a href="#inicio" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Jardim dos Baobás"
              className="-ml-1.5 h-20 object-contain brightness-0 invert"
            />
          </a>
          <p className="text-xs text-white/80">Educação para a vida toda.</p>
        </div>

        <div className="flex flex-col items-center gap-3 text-center text-xs text-white/80 md:items-start md:text-left">
          <span className="font-semibold tracking-wider text-white uppercase">
            Contato & Localização
          </span>
          <a
            href="https://maps.google.com/?q=Rua+Riachuelo+954+Liberdade+Campina+Grande+PB"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MapPin className="size-4 shrink-0" />
            <span>Rua Riachuelo 954, Liberdade · Campina Grande - PB</span>
          </a>
          <a
            href="https://wa.me/5583999601477?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Jardim%20dos%20Baob%C3%A1s"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MessageCircleMore className="size-4 shrink-0" />
            <span>(83) 99960-1477</span>
          </a>
          <a
            href="https://instagram.com/jardimdosbaobas"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="size-4 shrink-0"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @jardimdosbaobas
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 px-6 py-5 text-center text-[10px] text-white/60 md:flex-row md:px-[9vw]">
        <div>
          © {new Date().getFullYear()} Jardim dos Baobás. Todos os direitos
          reservados.
        </div>
        <div className="flex items-center gap-1.5">
          <span>Desenvolvido com ❤️ por</span>
          <a
            href="https://github.com/jefersonpmatos"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white/90 transition-colors hover:text-white"
          >
            jefersonpmatos
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
