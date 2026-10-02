import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { Inter, Lora } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Jardim dos Baobás | Escola Waldorf",
  description:
    "Jardim dos Baobás: escola Waldorf para crianças de 19 meses a 5 anos, com presença, imaginação e respeito pelo tempo de cada infância.",
  metadataBase: new URL("https://jardimdosbaobas.com.br"),
  robots: { index: true, follow: true },
  keywords: [
    "escola Waldorf",
    "educação infantil",
    "maternal",
    "jardim de infância",
    "Paraíba",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#fddd66",
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("font-sans", inter.variable, lora.variable)}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
