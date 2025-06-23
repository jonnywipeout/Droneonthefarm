import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, MapPin, DrillIcon as Drone, Leaf, ArrowRight, Cuboid } from 'lucide-react'

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
      ...
          <Card className="border border-green-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 transform ring-1 ring-green-100 ring-inset">
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <Cuboid className="w-8 h-8 text-green-700" />
                </div>
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
...
    </div>
  )
}
