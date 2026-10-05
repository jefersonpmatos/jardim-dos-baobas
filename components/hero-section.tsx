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
    <section className="relative isolate overflow-hidden bg-[#ffde67] px-5 pt-28 pb-12 sm:px-8 md:min-h-screen md:px-[9vw] md:pt-32 md:pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#b96852_1px,transparent_1px)] bg-size-[22px_22px] opacity-40" />

      <motion.div
        className="pointer-events-none absolute top-20 -left-16 -z-10 size-40 rounded-full bg-[#f7c4a9]/70 blur-sm md:-left-20 md:size-64"
        {...pop(delay.blobs)}
      />

      <motion.div
        className="pointer-events-none absolute -right-12 bottom-0 -z-10 size-48 rounded-full bg-[#cfe6c6]/80 md:-right-16 md:size-80"
        {...pop(delay.blobs + 0.12)}
      />

      <motion.div
        className="pointer-events-none absolute top-36 right-[22vw] -z-10 hidden size-40 place-items-center rounded-full bg-[#b96852] p-4 text-center font-heading text-sm font-bold tracking-wider text-white uppercase opacity-95 lg:grid xl:right-84 xl:size-48 xl:text-lg"
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

      <div className="relative z-10 mt-20 max-w-3xl md:mt-34 md:max-w-[52%] lg:max-w-3xl">
        <motion.img
          src="/logo.png"
          alt="Jardim dos Baobás"
          className="-ml-4 w-full max-w-105 object-contain object-left sm:max-w-150"
          {...rise(delay.logo)}
        />

        <motion.p
          className="mt-6 max-w-xl text-base text-gray-800 opacity-95 sm:text-lg"
          {...rise(delay.text)}
        >
          No Jardim dos Baobás, a infância tem espaço para ser o que é. <br />O
          saber ganha vida quando as crianças exploram, sentem e se conectam
          genuinamente com o mundo ao redor.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-start gap-3 md:mt-9"
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
          className="absolute -top-20 right-0 z-20 size-28 drop-shadow-[0_12px_20px_rgba(64,94,81,0.35)] sm:-top-10 sm:right-[4%] sm:size-36 md:-top-24 md:right-[-30%] md:size-40 lg:-top-10 lg:right-[8%] lg:size-44"
        >
          <div
            className="grid size-full place-items-center bg-[#6f9a88] text-[#fffaf1]"
            style={{ clipPath: badgeClip }}
          >
            <div className="grid size-[82%] place-items-center rounded-full border-2 border-dashed border-[#fffaf1]/60 text-center">
              <div className="flex flex-col items-center leading-none">
                <span className="text-[0.55rem] font-bold tracking-[0.2em] uppercase opacity-90 sm:text-xs">
                  Matrículas
                </span>
                <span className="font-display my-1 text-xl font-extrabold uppercase sm:text-2xl">
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
          className="pointer-events-none absolute top-[14%] right-0 -z-10 size-20 rounded-full bg-[#cfe6c6] sm:size-32"
          {...pop(delay.blobs + 0.36)}
        />
      </div>

      <motion.div
        className="relative mx-auto mt-14 aspect-square w-[min(80vw,420px)] md:absolute md:right-[4%] md:bottom-14 md:mt-0 md:w-[min(40vw,560px)] lg:right-1/6"
        {...rise(delay.photo)}
      >
        <div className="size-full overflow-hidden rounded-[47%_53%_8%_8%/42%_40%_10%_10%] border-8 border-[#f7c4a9] shadow-2xl shadow-[#8b5b45]/25">
          <img
            className="size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85"
            alt="Criança brincando"
          />
        </div>

        <motion.div
          className="font-display absolute -bottom-4 -left-2 z-20 rounded-[2rem] bg-[#405e51] px-4 py-3 text-base leading-none font-bold text-[#fffaf1] shadow-xl sm:text-xl md:bottom-6 md:-left-12 md:px-5 md:py-4 lg:-left-24"
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
      </motion.div>
    </section>
  )
}
