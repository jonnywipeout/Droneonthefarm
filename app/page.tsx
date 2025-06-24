
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowRight, Mail, Youtube } from "lucide-react"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"]
})

export default function AgricultureDroneLandingPage() {
  const galleryImages = [
    { src: "/images/drones-collection.jpeg", alt: "Professional drone in flight for agricultural surveying", title: "Precision Drone Technology" },
    { src: "/images/green-crop-field.jpeg", alt: "Lush green crop field under dramatic sky - ideal for drone monitoring", title: "Healthy Crop Monitoring" },
    { src: "/images/aerial-tractor-planting.jpeg", alt: "Aerial view of tractor with planting equipment working in field during twilight", title: "Precision Planting Operations" },
    { src: "/images/construction-site-aerial.png", alt: "Aerial view of residential construction site showing building progress and site layout", title: "Construction Progress Monitoring" },
    { src: "/images/potato3.jpg", alt: "Aerial view of perfectly parallel field furrows showing precision agriculture patterns", title: "Precision Field Patterns" },
    { src: "/images/fendt-tractor-field.jpeg", alt: "Fendt tractor with agricultural equipment working in plowed field", title: "Advanced Agricultural Machinery" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-100 font-sans border border-black p-4 md:p-6">

      {/* Hero Section with Lighter Overlay */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/drone-landscape.jpeg"
            alt="Agricultural drone surveying landscape"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl p-8 max-w-3xl text-white">
            <h1 className={`${playfair.className} text-5xl md:text-6xl font-semibold tracking-wide mb-3 drop-shadow-lg`}>
              Drone on the farm
            </h1>
            <p className="text-xl md:text-2xl italic font-light text-green-100 drop-shadow-sm">
              Aerial Mapping Services for Farms and Construction Sites
            </p>
          </div>
          <a
            href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full max-w-3xl bg-green-600/70 hover:bg-green-700/80 border border-green-800 hover:shadow-2xl text-black text-lg p-6 rounded-md shadow-lg transition-all font-semibold italic"
          >
            Ed Udale potato field orthomosaic map – 19th May 2025 – Apley, Telford
          </a>
        </div>
      </section>

      {/* Remaining sections untouched */}
      {/* We'll reuse the rest of the code from the uploaded file for consistency */}
    </div>
  )
}
