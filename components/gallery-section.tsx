"use client"

import { useState } from "react"
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "cn"
import { buttonVariants } from "./ui/button"

const galleryItems = Array.from({ length: 24 }).map((_, index) => {
  const types = ["vertical", "horizontal", "square"] as const
  const type = types[index % types.length]

  return {
    id: index + 1,
    src: `https://picsum.photos/seed/baobas-${index + 1}/800/800`,
    alt: `Momento vivido no Jardim dos Baobás ${index + 1}`,
    type,
  }
})

const ITEMS_PER_PAGE = 8

export function GallerySection() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentItems = galleryItems.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  return (
    <section
      id="fotos"
      className="bg-[#fddd66] px-6 py-20 md:px-[9vw] md:py-32"
    >
      <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <motion.div
            className="text-terracotta mb-4 text-xs font-medium tracking-[.2em] uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            04 / Dias vividos
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[clamp(40px,4vw,80px)] leading-tight font-medium tracking-wide">
              Pequenos momentos,
              <br />
              <em className="text-primary">grandes descobertas.</em>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/jardimdosbaobas/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ variant: "default" })}
          >
            <Camera size={17} /> @jardimdosbaobas <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>

      {/* Grid Dinâmico Adaptado para Diferentes Proporções */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          className="grid auto-rows-55 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {currentItems.map((item, i) => {
            // Definindo spans baseados no tipo de imagem para criar um layout mosaico harmonioso
            const spanClass =
              item.type === "vertical"
                ? "md:row-span-2"
                : item.type === "horizontal"
                  ? "md:col-span-2"
                  : "col-span-1"

            return (
              <motion.div
                key={item.id}
                className={cn(
                  "group relative overflow-hidden rounded-xl border border-black/10 bg-white/40 shadow-xs",
                  spanClass
                )}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <img
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-foreground transition-colors hover:bg-black/5 disabled:opacity-40"
            aria-label="Página anterior"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-sm font-medium tracking-wide">
            Página {currentPage} de {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-foreground transition-colors hover:bg-black/5 disabled:opacity-40"
            aria-label="Próxima página"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  )
}
