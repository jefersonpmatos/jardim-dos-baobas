"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

const cardsData = [
  {
    n: "01",
    t: "Ritmo",
    x: "O dia tem um compasso que acolhe e dá segurança para a infância florescer.",
  },
  {
    n: "02",
    t: "Imaginação",
    x: "Histórias, arte e brincadeira livre abrem caminhos para pensar o mundo.",
  },
  {
    n: "03",
    t: "Natureza",
    x: "A terra, as estações e o fazer manual são parte essencial do currículo.",
  },
  {
    n: "04",
    t: "Imitação",
    x: "A criança aprende imitando adultos que fazem com presença e cuidado.",
  },
]

export function PedagogySection() {
  return (
    <section
      id="pedagogia"
      className="bg-[#f4ecd0] px-6 py-20 md:px-[9vw] md:py-28"
    >
      <motion.div
        className="text-terracotta mb-5 text-xs font-medium tracking-[.2em] uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        01 / Nossa escolha
      </motion.div>

      <div className="grid items-start gap-10 md:grid-cols-[1.2fr_.8fr] md:gap-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-terracotta mb-5 text-[clamp(36px,5vw,80px)] leading-tight font-medium tracking-wide">
            Educar é <em className="text-primary">despertar</em>
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
          <p className="text-moss mt-4 text-sm leading-relaxed md:text-[15px]">
            Mais do que transmitir conteúdos, criamos condições para que cada
            criança desenvolva sua autonomia, sua imaginação e o gosto por
            aprender.
          </p>
          <a
            className="border-forest text-forest mt-6 inline-flex items-center gap-2.5 border-b pb-2 text-xs font-medium transition-opacity hover:opacity-80"
            href="#contato"
          >
            Saiba mais sobre a pedagogia <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-4.5">
        {cardsData.map(({ n, t, x }, i) => (
          <motion.div
            key={n}
            className="rounded-xl border bg-white/60 p-5 transition-all duration-300 hover:scale-105 md:p-[22px_20px]"

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
          >
            <span className="text-xs font-semibold">{n}</span>
            <h3 className="font-display mt-4 text-2xl md:mt-6 md:text-[27px]">
              {t}
            </h3>
            <p className="mt-3 text-sm leading-relaxed opacity-90">{x}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
