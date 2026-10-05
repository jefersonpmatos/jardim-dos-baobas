"use client"

import { cn } from "cn"
import { motion } from "motion/react"

const cardsData = [
  {
    n: "01",
    t: "Espaço e natureza",
    x: "Ambientes vivos para brincar, observar, plantar e descobrir com o corpo inteiro.",
    className: "bg-[#ffde67]",
  },
  {
    n: "02",
    t: "Equipe e cuidado",
    x: "Adultos presentes, atentos aos detalhes e às necessidades de cada criança.",
    className: "bg-[#6f9a88] ",
  },
  {
    n: "03",
    t: "Rotina Waldorf",
    x: "Ritmo, repetição e previsibilidade para que a imaginação tenha espaço para florescer.",
    className: "bg-[#f0ad98]",
  },
  {
    n: "04",
    t: "Comunidade",
    x: "Famílias e escola caminhando juntas, com escuta, confiança e participação.",
    className: "bg-[#eadfcf]",
  },
]

export function ValuesSection() {
  return (
    <section className="bg-[#f4ecd0] px-6 py-20 md:px-[9vw] md:py-32">
      <motion.div
        className="text-terracotta mb-5 text-xs font-medium tracking-[.2em] uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        03 / Um jeito de cuidar
      </motion.div>

      <div className="mb-12 grid gap-7 md:mb-18.75 md:grid-cols-[1.2fr_.8fr] md:items-center md:gap-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-terracotta text-[clamp(43px,4vw,80px)] leading-tight font-bold">
            O que cultivamos no
            <br />
            nosso jardim?
          </h2>
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
