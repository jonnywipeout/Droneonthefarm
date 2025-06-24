// NOTE: This file has been updated to use your HTML design (glassmorphism style) within your existing Next.js layout
import Image from "next/image";
import Link from "next/link";
import { Mail, Youtube, Phone } from "lucide-react";

export default function AgricultureDroneLandingPage() {
  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16"
        style={{
          backgroundImage:
            "url('https://readdy.ai/api/search-image?query=DJI%20Matrice%204E%20enterprise%20drone%20flying%20over%20vast%20green%20agricultural%20fields%2C%20aerial%20view%20showing%20drone%20and%20farmland%20below%2C%20golden%20hour%20lighting%2C%20cinematic%20atmosphere%2C%20professional%20drone%20photography&width=1920&height=1080&seq=drone1&orientation=landscape')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl px-8 py-10 text-white">
            <h1 className="text-5xl font-bold mb-6">Drone on the farm</h1>
            <h2 className="text-2xl text-white/90 mb-8">
              Aerial Mapping Services for Farms and Construction Sites
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Precision mapping solutions using advanced drone technology to optimize your agricultural operations and
              construction projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="bg-green-700/30 hover:bg-green-700/40 backdrop-blur px-8 py-3 text-white font-medium rounded-lg"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="bg-green-700 hover:bg-green-800 px-8 py-3 text-white font-medium rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Project Banner */}
      <div className="bg-green-700 text-white py-4 px-6 text-center">
        Ed Udale potato field orthomosaic map – 19th May 2025 – Apley, Telford
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Drone Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: "ri-landscape-line",
              title: "Field Mapping",
              desc: "Comprehensive aerial mapping of agricultural fields for precise planning and analysis",
              quote: "Creating detailed digital maps from above"
            }, {
              icon: "ri-building-4-line",
              title: "AEC Progress Reports",
              desc: "Aerial documentation for construction and field projects with professional-grade outputs",
              quote: "Tracking progress from above"
            }, {
              icon: "ri-map-2-line",
              title: "3D Maps & Orthomosaics",
              desc: "High-resolution 2D and 3D models for planning and insight",
              quote: "Transforming fields into digital twins"
            }].map((card, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg p-8 flex flex-col items-center text-center shadow-md hover:shadow-lg transition"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-green-100 rounded-full mb-6">
                  <i className={`${card.icon} text-3xl text-green-700`} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.desc}</p>
                <p className="text-green-700 italic mt-auto">"{card.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 px-6 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Gallery</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="rounded-lg overflow-hidden aspect-video relative group">
                <img
                  src={`https://public.readdy.ai/gen_page/gallery-${i + 1}.jpg`}
                  alt={`Gallery item ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4 text-sm">Image Caption {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Get in Touch</h2>
          <div className="max-w-4xl mx-auto bg-white/30 backdrop-blur rounded-lg p-12 shadow-lg">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/70 text-gray-800 border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
              />
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-2">Drone on the Farm</h3>
          <p className="text-slate-300 mb-2">Professional UAV mapping and surveying in the UK</p>
          <p className="mb-1">Email: droneonthefarm@outlook.com</p>
          <p className="mb-1">YouTube: @jonnywipeout</p>
          <p>Mobile: 07771190394</p>
          <div className="mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 transition"
            >
              Your site map link 🗺️ →
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} Drone on the Farm. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
