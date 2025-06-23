import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"]
})

export const metadata: Metadata = {
  title: "Agricultural Drone Mapping Services",
  description: "Professional UAV drone mapping and surveying for agricultural fields in the UK",
  openGraph: {
    title: "Agricultural Drone Mapping Services",
    description: "Professional UAV drone mapping and surveying for agricultural fields in the UK",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Agricultural+Drone+Mapping",
        width: 1200,
        height: 630,
        alt: "Agricultural Drone Mapping Services",
      },
    ],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={playfair.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
