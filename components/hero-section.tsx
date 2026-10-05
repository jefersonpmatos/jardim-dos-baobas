"use client"

import { motion } from "motion/react"
import { ArrowRight, Sun } from "lucide-react"
import { buttonVariants } from "./ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const delay = {
  blobs: 0,
  photo: 0.35,
  logo: 0.75,
  text: 1,
  cta: 1.2,
  badge: 1.5,
  tag: 1.75,
}

const rise = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease, delay: d },
})

const pop = (d: number) => ({
  initial: { opacity: 0, scale: 0.6 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.8, ease, delay: d },
})

const sway = (d: number) => ({
  repeat: Infinity,
  duration: 4,
  ease: "easeInOut" as const,
  delay: d,
})

const scallop = (n = 14, outer = 50, inner = 45) =>
  `polygon(${Array.from({ length: n * 10 }, (_, i) => {
    const a = (i / (n * 10)) * 2 * Math.PI
    const r = inner + (outer - inner) * Math.abs(Math.cos((a * n) / 2))
    return `${50 + r * Math.cos(a)}% ${50 + r * Math.sin(a)}%`
  }).join(",")})`

const badgeClip = scallop()

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#ffde67] px-5 pt-28 pb-10 sm:px-8 md:px-[9vw] md:pt-32 md:pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#b96852_1px,transparent_1px)] bg-size-[22px_22px] opacity-40" />

      <motion.div
        className="pointer-events-none absolute top-20 -left-20 -z-10 size-64 rounded-full bg-[#f7c4a9]/70 blur-sm"
        {...pop(delay.blobs)}
      />

      <motion.div
        className="pointer-events-none absolute -right-16 bottom-0 -z-10 size-80 rounded-full bg-[#cfe6c6]/80"
        {...pop(delay.blobs + 0.12)}
      />

      <motion.div
        className="pointer-events-none absolute top-36 right-84 -z-10 grid size-36 place-items-center rounded-full bg-[#b96852] p-4 text-center font-heading text-xs font-bold tracking-wider text-white uppercase opacity-95 sm:size-48 sm:text-lg"
        {...pop(delay.blobs + 0.24)}
      >
        <span>
          Educação infantil
          <br />
          <span className="text-[0.8em] font-normal lowercase opacity-90">
            de
          </span>{" "}
          19 meses a 5 anos
        </span>
      </motion.div>

      <div className="relative z-10 mt-34 max-w-3xl">
        <motion.img
          src="/logo.png"
          alt="Jardim dos Baobás"
          className="-ml-4 w-full max-w-105 object-contain object-left sm:max-w-150 md:mt-0"
          {...rise(delay.logo)}
        />

        <motion.p
          className="mt-6 max-w-xl text-lg text-gray-800 opacity-95"
          {...rise(delay.text)}
        >
          No Jardim dos Baobás, a infância tem espaço para ser o que é. <br />O
          saber ganha vida quando as crianças exploram, sentem e se conectam
          genuinamente com o mundo ao redor.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start"
          {...rise(delay.cta)}
        >
          <a
            href="https://wa.me/5583999601477?text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20o%20Jardim%20dos%20Baob%C3%A1s"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Agendar uma visita <ArrowRight />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: [5, 1, 5] }}
          transition={{
            opacity: { duration: 0.5, delay: delay.badge },
            scale: {
              type: "spring",
              stiffness: 260,
              damping: 16,
              delay: delay.badge,
            },
            rotate: sway(delay.badge + 0.8),
          }}
          className="absolute -top-10 -right-8 z-20 size-32 drop-shadow-[0_12px_20px_rgba(64,94,81,0.35)] sm:right-[4%] sm:size-40 md:right-[8%] md:size-44"
        >
          <div
            className="grid size-full place-items-center bg-[#6f9a88] text-[#fffaf1]"
            style={{ clipPath: badgeClip }}
          >
            <div className="grid size-[82%] place-items-center rounded-full border-2 border-dashed border-[#fffaf1]/60 text-center">
              <div className="flex flex-col items-center leading-none">
                <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase opacity-90 sm:text-xs">
                  Matrículas
                </span>
                <span className="font-display my-1 text-2xl font-extrabold uppercase sm:text-xl md:text-2xl">
                  abertas
                </span>
                <span className="rounded-full bg-[#ffde67] px-3 py-1 text-xs font-extrabold text-[#405e51] sm:text-sm">
                  2027
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute top-[14%] right-0 -z-10 size-24 rounded-full bg-[#cfe6c6] sm:size-32"
          {...pop(delay.blobs + 0.36)}
        />
      </div>

      <motion.div
        className="absolute right-1/6 bottom-14 size-140 overflow-hidden rounded-[47%_53%_8%_8%/42%_40%_10%_10%] border-8 border-[#f7c4a9] shadow-2xl shadow-[#8b5b45]/25 max-md:right-5 max-md:bottom-10 max-md:size-[min(70vw,420px)]"
        {...rise(delay.photo)}
      >
        <img
          className="size-full object-cover object-center"
          src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
          alt="Criança brincando"
        />
      </motion.div>

      <motion.div
        className="font-display absolute right-52 bottom-20 z-20 rounded-[2rem] bg-[#405e51] px-5 py-4 text-lg leading-none font-bold text-[#fffaf1] shadow-xl max-md:right-8 max-md:bottom-6 max-md:px-4 max-md:py-3 max-md:text-base sm:text-xl"
        initial={{ opacity: 0, y: 16, rotate: 4 }}
        animate={{ opacity: 1, y: 0, rotate: [4, 1, 4] }}
        transition={{
          opacity: { duration: 0.5, delay: delay.tag },
          y: { duration: 0.6, ease, delay: delay.tag },
          rotate: sway(delay.tag + 0.7),
        }}
      >
        tempo para
        <br />
        ser criança
      </motion.div>
    </section>
  )
}
