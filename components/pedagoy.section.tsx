"use client"

import { cn } from "cn"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "./ui/button"

const cardsData = [
  {
    n: "01",
    t: "Ritmo",
    x: "O dia tem um compasso que acolhe e dá segurança para a infância florescer.",
    className: "bg-[#ffde67]",
  },
  {
    n: "02",
    t: "Imaginação",
    x: "Histórias, arte e brincadeira livre abrem caminhos para pensar o mundo.",
    className: "bg-[#6f9a88] ",
  },
  {
    n: "03",
    t: "Natureza",
    x: "A terra, as estações e o fazer manual são parte essencial do currículo.",
    className: "bg-[#f0ad98]",
  },
  {
    n: "04",
    t: "Imitação",
    x: "A criança aprende imitando adultos que fazem com presença e cuidado.",
    className: "bg-[#eadfcf]",
  },
]

export function PedagogySection() {
  return (
    <section
      id="pedagogia"
      className="bg-[#f4ecd0] px-6 py-20 md:px-[9vw] md:py-28"
    >
      <motion.div
        className="text-terracotta mb-5 text-xs font-medium tracking-[.2em] text-muted-foreground uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        01 / O jeito Baobá
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_.8fr] md:gap-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-terracotta mb-5 text-[clamp(36px,5vw,80px)] leading-tight font-bold uppercase">
            Educar é despertar
            <br />o que já existe.
          </h2>
        </motion.div>

        <motion.div
          className="max-w-md pt-0 md:pt-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-display text-xl leading-relaxed md:text-[22px]">
            A pedagogia Waldorf olha para a criança por inteiro: corpo, alma e
            espírito.
          </p>
          <p className="text-moss my-4 text-sm leading-relaxed md:text-[15px]">
            Mais do que transmitir conteúdos, criamos condições para que cada
            criança desenvolva sua autonomia, sua imaginação e o gosto por
            aprender.
          </p>
          <a href="#contato" className={buttonVariants({ variant: "link" })}>
            Saiba mais sobre a pedagogia <ArrowRight />
          </a>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4.5">
        {cardsData.map(({ n, t, x, className }, i) => (
          <motion.div
            key={n}
            className={cn(
              "rounded-xl border bg-white/60 p-5 transition-all duration-300 hover:scale-105 md:p-[22px_20px]",
              className
            )}

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
          >
            <span className="text-xs font-semibold">{n}</span>
            <h3 className="mt-4 text-2xl font-bold uppercase md:mt-6 md:text-[27px]">
              {t}
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-90">{x}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
