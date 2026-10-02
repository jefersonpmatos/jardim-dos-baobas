import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PedagogySection } from "@/components/pedagoy.section"
import { SchoolSection } from "@/components/school-section"
import { ValuesSection } from "@/components/values-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jardim dos Baobás | Escola Waldorf em São Paulo",
  description:
    "Escola Waldorf para crianças de 19 meses a 5 anos. Um jardim de infância com natureza, cuidado, ritmo e comunidade.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Jardim dos Baobás | Escola Waldorf",
    description: "Uma infância com tempo para ser, em contato com a natureza.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <PedagogySection />
      <SchoolSection />
      <ValuesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
