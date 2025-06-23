import Image from "next/image"
import Liimport Image from "next/image"
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
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-green-200 max-w-xl w-full">
            <p className="font bold text-gray-500 mb-2 text-sm">Visit your map site here :</p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <a
                href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium text-lg md:text-xl hover:text-green-800 transition-colors flex items-center gap-1 break-all"
              >
                Click to view test site 🗺️ <ExternalLink className="w-4 h-4" />
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
                <div className="p-3 bg-green-100 rounded-full">
                  <Image src="/images/icon-3d-mapping.webp" alt="3D Mapping Drone Icon" width={48} height={48} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">3D Maps & Orthomosaics</h3>
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

      {/* Image Gallery */}
      <section className="py-16 bg-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Agricultural Drone Imagery</h2>

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
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4 bg-green-50 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-900">Ready to explore our detailed mapping portal?</h2>
          <p className="text-lg text-green-700 mb-8">
            Visit our interactive agricultural drone mapping site for comprehensive field analysis and insights
          </p>
          <Link
            href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-colors duration-200 no-underline font-medium"
          >
            Click to view test site 🗺️ <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What The Industry Says</h2>

          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 shadow-lg">
              <CardContent className="pt-8 pb-8">
                <p className="text-gray-600 text-lg italic mb-6 text-center">
                  "Drone mapping technology is revolutionizing modern agriculture. These advanced aerial systems provide
                  farmers with unprecedented insights into field conditions, crop health, and resource
                  management—enabling precision farming practices that boost yields while reducing environmental
                  impact."
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-semibold text-gray-800">Modern Farming Today</p>
                    <p className="text-gray-500">Agricultural Technology Special Issue, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Agricultural Drone Services</h3>
              <p className="text-slate-300">Professional UAV mapping and surveying in the UK</p>
            </div>

            <div className="text-center md:text-right">
              <p className="mb-2">Email: <a href="mailto:droneonthefarm@outlook.com" className="text-green-400 hover:underline">droneonthefarm@outlook.com</a></p>
              <p className="mb-2">YouTube: <a href="https://www.youtube.com/@jonnywipeout" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@jonnywipeout</a></p>
              <p>Mobile: 07771190394</p>
              <div className="mt-4">
                <a
                  href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Click to view test site 🗺️ →
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
nk from "next/link"
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
          <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6 shadow-md border border-green-300 max-w-xl w-full">
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
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative w-full h-60">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-semibold text-lg text-gray-800">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Want to see more?</h2>
          <p className="mb-6 text-green-800">Explore our live mapping projects to see our technology in action.</p>
          <Link
            href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md"
          >
            Open map viewer <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Agricultural Drone Services</h3>
              <p className="text-slate-300">Professional UAV mapping and surveying in the UK</p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">Email: <a href="mailto:droneonthefarm@outlook.com" className="text-green-400 hover:underline">droneonthefarm@outlook.com</a></p>
              <p className="mb-2">YouTube: <a href="https://www.youtube.com/@jonnywipeout" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">@jonnywipeout</a></p>
              <p>Mobile: 07771190394</p>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md"
            >
              Open map viewer <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
