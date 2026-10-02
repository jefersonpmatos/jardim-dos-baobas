"use client"

import { Sprout } from "lucide-react"
import { motion } from "motion/react"

export function Footer() {
  return (
    <motion.footer
      className="bg-emerald-900 tracking-[.06em] text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-start gap-6 px-6 py-10 text-[11px] md:flex-row md:items-center md:justify-between md:px-[9vw]">
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

        <div className="flex flex-col gap-1 text-white/75 md:text-center">
          <span>Educação para a vida toda.</span>
          <span className="text-[10px] opacity-60">
            Rua Riachuelo 954, Liberdade · Campina Grande - PB
          </span>
        </div>

        <div className="text-[10px] opacity-60">
          © {new Date().getFullYear()} Jardim dos Baobás. Todos os direitos
          reservados.
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 border-t border-white/10 px-6 py-4 text-center text-[10px] text-white/60 md:px-[9vw]">
        <span>Desenvolvido com ❤️ por</span>
        <a
          href="https://github.com/jefersonpmatos"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-white/90 transition-colors hover:text-white"
        >
          jefersonpmatos
        </a>
      </div>
    </motion.footer>
  )
}
