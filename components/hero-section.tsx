"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "./ui/button"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-white">
      <motion.img
        src="/criancas-brincando.jpg"
        alt="Crianças brincando sob uma árvore no jardim"
        width={1600}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-foreground/30 via-foreground/45 to-foreground/70" />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center text-background">
        <motion.img
          src="/logo-arvore.png"
          alt="Logo do Jardim dos Baobá"
          className="mx-auto size-64"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.p
          className="mx-auto w-fit rounded-full border bg-white/20 px-4 py-2 text-sm font-bold tracking-[0.25em] uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Educação infantil · 19 meses a 5 anos
        </motion.p>
        <motion.h1
          className="mt-5 text-5xl leading-tight text-background drop-shadow-md md:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Um jardim para <em className="text-primary">florescer</em> por inteiro
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg opacity-95"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          No Jardim dos Baobás, a infância tiene espaço para ser o que é. <br />{" "}
          O saber ganha vida quando as crianças exploram, sentem e se conectam
          genuinamente com o mundo ao redor.
        </motion.p>
        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Button>Agende uma visita</Button>
        </motion.div>
      </div>
    </section>
  )
}
