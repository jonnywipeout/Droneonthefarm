import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin, DrillIcon as Drone, Leaf, ArrowRight } from "lucide-react";

export default function AgricultureDroneLandingPage() {
  const galleryImages = [
    { src: "/images/drone-in-flight.jpeg", alt: "Professional drone in flight", title: "Precision Drone Technology" },
    { src: "/images/green-crop-field.jpeg", alt: "Lush green crop field", title: "Healthy Crop Monitoring" },
    { src: "/images/aerial-tractor-planting.jpeg", alt: "Aerial view of tractor", title: "Precision Planting Operations" },
    { src: "/images/construction-site-aerial.png", alt: "Residential construction site", title: "Construction Progress Monitoring" },
    { src: "/images/aerial-field-furrows.jpeg", alt: "Parallel field furrows", title: "Precision Field Patterns" },
    { src: "/images/agricultural-machinery-field.png", alt: "Tractor during golden hour", title: "Advanced Agricultural Machinery" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-slate-100 text-gray-800">
      {/* Header Section with new background */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-green-100 to-green-50">
        <h1 className="text-4xl md:text-6xl font-bold text-green-700 mb-4 tracking-tight">Droneonthefarm</h1>
        <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Agricultural Drone Mapping Services – Precision aerial insights for farms and sites
        </h2>
        <div className="mt-8 bg-white/80 border border-green-200 shadow-md rounded-lg max-w-xl mx-auto p-4">
          <p className="text-sm text-gray-600 mb-2">Visit your map site here:</p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-700 font-medium text-lg hover:text-green-800 transition-colors"
          >
            Your site map link 🗺️ <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Agricultural Drone Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: <MapPin className="w-8 h-8 text-green-700" />, title: "Field Mapping", desc: "Comprehensive aerial mapping of agricultural fields for planning and analysis", quote: "Creating detailed digital maps from above"
          }, {
            icon: <Drone className="w-8 h-8 text-green-700" />, title: "AEC Progress Reports", desc: "Documentation for construction/field projects with progress insights", quote: "Tracking progress from above"
          }, {
            icon: <Leaf className="w-8 h-8 text-green-700" />, title: "3D Mapping & Orthomosaics", desc: "High-resolution orthomosaic maps and 3D field models for spatial analysis", quote: "Transforming fields into digital twins"
          }].map((s, i) => (
            <Card key={i} className="border-green-200 shadow-md hover:shadow-lg transition">
              <CardContent className="pt-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-green-100 rounded-full">{s.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
                <p className="text-green-700 text-sm font-medium italic mt-2">"{s.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-green-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Agricultural Drone Imagery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <div key={i} className="aspect-video overflow-hidden rounded-lg shadow-lg group">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-900">Ready to explore our detailed mapping portal?</h2>
          <p className="text-lg text-green-700 mb-8">
            Visit our interactive agricultural drone mapping site for comprehensive field analysis and insights
          </p>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-lg px-8 py-6 rounded-lg shadow-lg transition-colors"
          >
            Your site map link 🗺️ <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What The Industry Says</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-green-200 shadow-lg">
              <CardContent className="py-10 px-6">
                <p className="text-gray-600 text-lg italic mb-6 text-center">
                  "Drone mapping technology is revolutionizing modern agriculture. These aerial systems give farmers
                  insights into field conditions, crop health, and resource management—enabling precision farming that
                  boosts yields and reduces environmental impact."
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

      {/* Footer with matched header color scheme */}
      <footer className="bg-gradient-to-b from-green-100 to-green-50 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-gray-800">
              <h3 className="text-2xl font-bold mb-2">Agricultural Drone Services</h3>
              <p className="text-green-900">Professional UAV mapping and surveying in the UK</p>
            </div>
            <div className="text-center md:text-right text-gray-800">
              <p className="mb-2">Email: droneonthefarm@outlook.com</p>
              <p className="mb-2">YouTube: @jonnywipeout</p>
              <p>Mobile: 07771190394</p>
              <div className="mt-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-600 transition"
                >
                  Your site map link 🗺️ →
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-200 text-center text-green-800 text-sm">
            <p>© {new Date().getFullYear()} Agricultural Drone Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
