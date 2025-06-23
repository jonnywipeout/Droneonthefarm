import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, MapPin, DrillIcon as Drone, Leaf, ArrowRight } from 'lucide-react'

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
            className="object-cover"
            style={{ filter: "brightness(0.7)" }}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-green-400 mb-4 tracking-wide">Droneonthefarm</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Agricultural Drone Mapping Services
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mb-8">
            Precision solutions using advanced drone technology for mapping, surveying, and crop analysis within the AEC industries
          </p>
          <div className="bg-gradient-to-br from-green-100 via-white to-green-50 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-green-200 max-w-xl w-full">
            <p className="font-bold text-gray-600 mb-3 text-base text-center">View your latest orthomosaic map:</p>
            <div className="flex items-center justify-center">
              <a
                href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-base md:text-lg px-6 py-3 rounded-lg shadow-md transition-colors duration-200 font-medium"
              >
                Open map viewer <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Agricultural Drone Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-green-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform ring-1 ring-green-100 ring-inset">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <Image src="/images/icon-mapping-fresh.webp" alt="Field Mapping Icon" width={48} height={48} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Field Mapping</h3>
              <p className="text-gray-600 text-center">
                Comprehensive aerial mapping of agricultural fields for precise planning and analysis
              </p>
              <p className="text-green-700 text-center text-sm font-medium italic mt-2">
                "Creating detailed digital maps from above"
              </p>
            </CardContent>
          </Card>

          <Card className="border border-green-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform ring-1 ring-green-100 ring-inset">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <Image src="/images/icon-aec-final.webp" alt="AEC Progress Icon" width={48} height={48} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">AEC Progress Reports</h3>
              <p className="text-gray-600 text-center">
                Comprehensive aerial documentation for construction and field projects, providing detailed progress
                reports for AEC professionals
              </p>
              <p className="text-green-700 text-center text-sm font-medium italic mt-2">
                "Tracking progress from above"
              </p>
            </CardContent>
          </Card>

          <Card className="border border-green-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform ring-1 ring-green-100 ring-inset">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Image src="/images/icon-3d-mapping.webp" alt="3D Mapping Drone Icon" width={48} height={48} />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">3D Mapping & Orthomosaics</h3>
              <p className="text-gray-600 text-center mb-3">
                High-resolution 2D orthomosaic maps and detailed 3D field models for comprehensive spatial analysis and
                planning
              </p>
              <p className="text-green-700 text-center text-sm font-medium italic">
                "Transforming fields into digital twins"
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
