import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight font-serif mb-4">
          Droneonthefarm
        </h1>
        <p className="text-xl font-light text-gray-600">
          Agricultural Drone Mapping Services
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div className="rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4">Crop Monitoring</h2>
          <p className="text-gray-600">
            High-resolution mapping for crop health analysis and field variability.
          </p>
        </div>
        <div className="rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4">Construction Progress</h2>
          <p className="text-gray-600">
            Track development over time with aerial surveys and visual reports.
          </p>
        </div>
        <div className="rounded-2xl shadow-lg p-6 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold mb-4">Roof Inspections</h2>
          <p className="text-gray-600">
            Cost-effective drone-based inspections with 4K imagery and reports.
          </p>
        </div>
      </section>

      {/* Image Grid */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="group relative overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/fendt-tractor-field.jpeg"
              alt="Tractor Field"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-sm">
              Precision Agriculture with Ground Truth
            </div>
          </div>
          {/* Add more images here as needed */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-green-100 to-green-200">
        <h2 className="text-3xl font-bold mb-4">Ready to elevate your land?</h2>
        <p className="text-gray-700 mb-6">
          Contact us today for a drone survey tailored to your farm or site.
        </p>
        <Button className="text-lg px-6 py-3">Contact Us</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-10 px-4">
        <p className="mb-2">&copy; 2025 Droneonthefarm</p>
        <p className="text-sm">Email: contact@droneonthefarm.netlify.app</p>
      </footer>
    </main>
  );
}
