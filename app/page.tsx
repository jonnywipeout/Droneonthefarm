import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, ArrowRight } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-100 font-sans">
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
          <h1 className="text-3xl md:text-4xl font-bold text-green-400 mb-2 tracking-widest uppercase">Droneonthefarm</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">Agricultural Drone Mapping Services</h2>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mb-8">Precision drone solutions for agriculture, construction, and environmental mapping</p>
          <a
            href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 px-6 py-3 rounded-md text-base font-medium shadow-lg"
          >
            View Latest Map <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 tracking-tight">Our Drone Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: "/images/icon-mapping-fresh.webp",
            title: "Field Mapping",
            desc: "Comprehensive aerial mapping of agricultural fields for precise planning and analysis",
            quote: "Creating detailed digital maps from above"
          }, {
            icon: "/images/icon-aec-final.webp",
            title: "AEC Progress Reports",
            desc: "Aerial documentation for construction and field projects with professional-grade outputs",
            quote: "Tracking progress from above"
          }, {
            icon: "/images/icon-3d-mapping.webp",
            title: "3D Maps & Orthomosaics",
            desc: "High-resolution 2D and 3D models for planning and insight",
            quote: "Transforming fields into digital twins"
          }].map((card, i) => (
            <Card key={i} className="min-h-[360px] border border-green-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform ring-1 ring-green-100 ring-inset">
              <CardContent className="pt-6 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-green-100 rounded-full">
                      <Image src={card.icon} alt={card.title} width={48} height={48} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-center">{card.desc}</p>
                </div>
                <p className="text-green-700 text-center text-sm font-medium italic mt-4">"{card.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 tracking-tight">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-video overflow-hidden rounded-lg shadow-md group">
              <div className="relative w-full h-full">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
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

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4 bg-green-50 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-900 tracking-tight">Ready to explore our detailed mapping portal?</h2>
          <p className="text-lg text-green-700 mb-8">Visit our interactive drone mapping site for in-depth agricultural and construction analysis</p>
          <Link
            href="https://cloud1.webodm.net/public/project/79ec4733-fccb-4fb2-8fd0-7f053da179f3/map/?t=orthophoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-lg shadow-lg font-medium"
          >
            Open map viewer <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 tracking-tight">What The Industry Says</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 shadow-md">
              <CardContent className="pt-8 pb-8">
                <p className="text-gray-600 text-lg italic mb-6 text-center">
                  "Drone mapping technology is revolutionizing modern agriculture. These aerial systems provide
                  unprecedented insights into field conditions and resource management—enabling precision farming
                  practices that boost yields and reduce environmental impact."
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-800">Modern Farming Today</p>
                  <p className="text-gray-500">Agricultural Technology Special Issue, 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Droneonthefarm</h3>
            <p className="text-slate-300 text-sm">Professional UAV mapping and surveying in the UK using drone technology for agriculture and construction.</p>
          </div>
          <div className="md:text-right">
            <p>Email: <a href="mailto:droneonthefarm@outlook.com" className="text-green-400 hover:underline">droneonthefarm@outlook.com</a></p>
            <p>YouTube: <a href="https://www.youtube.com/@jonnywipeout" className="text-green-400 hover:underline">@jonnywipeout</a></p>
            <p>Mobile: 07771190394</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
