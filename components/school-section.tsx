"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { buttonVariants } from "./ui/button"
import { cn } from "cn"

export function SchoolSection() {
  return (
    <section
      id="escola"
      className="grid bg-[#6f9a88] text-white md:grid-cols-[1.1fr_.9fr]"
    >
      <motion.div
        className="relative h-80 w-full overflow-hidden md:h-full md:min-h-150"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          className="absolute inset-0 size-full object-cover"
          src="https://images.pexels.com/photos/5623736/pexels-photo-5623736.jpeg"
          alt="Espaço externo arborizado da escola"
          loading="lazy"
        />
      </motion.div>

      <div className="flex flex-col justify-center px-6 py-18 md:px-[7vw] md:py-22.5">
        <motion.div
          className="mb-4 text-xs font-medium tracking-[.2em] text-primary uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          02 / A escola
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-[clamp(40px,3vw,76px)] leading-tight font-bold uppercase">
            Uma escola com
            <br />
            <em className="text-primary not-italic">tempo</em> para ser.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="mt-6 max-w-md leading-[1.75] text-white/75">
            O Jardim dos Baobás é um lugar para famílias com bebês e crianças
            pequenas encontrarem acolhimento, natureza e uma rotina que respeita
            a infância.
          </p>
          <p className="mt-3 max-w-md leading-[1.75] text-white/60">
            Nossa história está sendo construída no encontro entre educadores,
            crianças e famílias. O nome Baobás traduz o que desejamos cultivar:
            raízes profundas, presença e uma árvore capaz de abrigar muitos
            encontros.
          </p>

          <a
            href="https://wa.me/5583999601477"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "mt-8 bg-transparent"
            )}
          >
            Venha nos conhecer <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
