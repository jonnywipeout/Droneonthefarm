
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from 'lucide-react'

export default function AgricultureDroneLandingPage() {
  const galleryImages = [
    {
      src: "/images/controller.webp",
      alt: "Professional drone in flight for agricultural surveying",
      title: "Precision Drone Technology",
    },
    {
      src: "/images/green-crop-field.jpeg",
      alt: "Lush green crop field under dramatic sky - ideal for drone monitoring",
      title: "Healthy Crop Monitoring",
    },
    {
      src: "/images/aerial-tractor-planting.jpeg",
      alt: "Aerial view of tractor with planting equipment working in field during twilight",
      title: "Precision Planting Operations",
    },
    {
      src: "/images/construction-site-aerial.png",
      alt: "Aerial view of residential construction site showing building progress and site layout",
      title: "Construction Progress Monitoring",
    },
    {
      src: "/images/potato3.jpg",
      alt: "Aerial view of perfectly parallel field furrows showing precision agriculture patterns",
      title: "Precision Field Patterns",
    },
    {
      src: "/images/fendt-tractor-field.jpeg",
      alt: "Fendt tractor with agricultural equipment working in plowed field",
      title: "Advanced Agricultural Machinery",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/drone-landscape.jpeg"
            alt="Agricultural drone surveying landscape"
            fill
            className="object-cover animate-fade-in-down"
            style={{ filter: "brightness(0.7)" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 tracking-wide animate-fade-in-down">Droneonthefarm</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-down">
            Agricultural Drone Mapping Services
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mb-8 animate-fade-in-down">
            Precision solutions using advanced drone technology for mapping, surveying, and crop analysis within the AEC industries
          </p>
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6 shadow-md border border-green-300 max-w-xl w-full animate-fade-in-down">
            <h3 className="text-gray-800 font-semibold text-md mb-2">View your latest orthomosaic map</h3>
            <a
              href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-md text-sm font-medium"
            >
              Open map viewer <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-lg group">
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// Add styles
<style jsx global>{`
@keyframes fade-in-down {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fade-in-down 1s ease-out forwards;
}
`}</style>
