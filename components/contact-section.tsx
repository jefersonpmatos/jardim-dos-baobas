"use client"

import { Camera, MessageCircleMore } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "./ui/button"

export function ContactSection() {
  return (
    <section
      id="contato"
      className="bg-[#f4ecd0] px-6 py-22.5 text-white md:px-[9vw] md:py-28"
    >
      <div className="max-w-200">
        <motion.div
          className="mb-4 text-xs font-medium tracking-[.2em] text-gray-800 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          05 / Vamos conversar
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[clamp(40px,3vw,76px)] leading-tight font-bold text-black uppercase">
            Venha conhecer
            <br />
            <span className="text-primary">o Jardim dos Baobá</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="my-7 max-w-96.25 text-[15px] leading-[1.75] text-muted-foreground">
            Agende uma visita e venha sentir de perto o ritmo, o cuidado e a
            natureza da nossa escola.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/5583999601477?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Jardim%20dos%20Baob%C3%A1s."
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "default" })}
            >
              <MessageCircleMore /> Fale pelo WhatsApp
            </a>

            <a
              href="https://www.instagram.com/jardimdosbaobas/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "secondary" })}
            >
              <Camera />
              Siga no Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
