"use client"

import { motion } from "motion/react"

const values = [
  [
    "01",
    "Espaço e natureza",
    "Ambientes vivos para brincar, observar, plantar e descobrir com o corpo inteiro.",
  ],
  [
    "02",
    "Equipe e cuidado",
    "Adultos presentes, atentos aos detalhes e às necessidades de cada criança.",
  ],
  [
    "03",
    "Rotina Waldorf",
    "Ritmo, repetição e previsibilidade para que a imaginação tenha espaço para florescer.",
  ],
  [
    "04",
    "Comunidade",
    "Famílias e escola caminhando juntas, com escuta, confiança e participação.",
  ],
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
          <h2 className="text-terracotta text-[clamp(43px,4vw,80px)] leading-tight font-medium tracking-wide">
            O que faz o<br />
            <em className="text-terracotta not-italic">nosso jardim</em>?
          </h2>
        </motion.div>

        <motion.div
          className="border-terracotta/30 border-l-2 pl-5 md:pl-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-moss text-base leading-relaxed md:text-[17px]">
            Mais do que uma escolha pedagógica, construímos uma experiência
            diária de cuidado, beleza e pertencimento.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4.5">
        {values.map(([n, t, x], i) => (
          <motion.article
            key={n}
            className="border-ink/20 min-h-52.5 rounded-xl border bg-white/40 p-5 shadow-xs backdrop-blur-xs md:min-h-58.75 md:p-[22px_20px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
          >
            <span className="text-terracotta text-[11px] font-semibold">
              {n}
            </span>
            <h3 className="font-display mt-6 text-[21px] md:mt-10.5 md:text-2xl">
              {t}
            </h3>
            <p className="text-moss mt-3 text-[13px] leading-[1.65]">{x}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
