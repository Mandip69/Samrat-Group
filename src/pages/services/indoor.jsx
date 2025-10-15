import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function IndoorOutdoor() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-100 min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left (Indoor) */}
        <div className="w-full md:w-1/2 relative mb-10 md:mb-0">
          <img
            src="/images/per3.jpg"
            alt="Indoor Studio"
            className="rounded-2xl shadow-2xl border-4 border-gray-200 object-cover w-full h-[400px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-lg">
            Indoor Studio Magic 🎬
          </h2>
        </div>

        {/* Right (Outdoor) */}
        <div className="w-full md:w-1/2 relative">
          <img
            src="/images/we18.jpg"
            alt="Outdoor Photoshoot"
            className="rounded-2xl shadow-2xl border-4 border-gray-200 object-cover w-full h-[400px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-lg">
            Outdoor Shots 🌳
          </h2>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto mt-16 text-center px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Indoor & Outdoor Shoots
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Whether you love the creative control of a studio or the beauty of natural light, 
          we bring both worlds together. Our team captures your best angles and moments — 
          <span className="text-gray-800 font-semibold"> indoor with artistic lighting </span> 
          and <span className="text-gray-800 font-semibold"> outdoor with nature’s vibe.</span>
        </p>
        <p className="text-gray-600">
          Perfect for portraits, pre-weddings, product shoots, or creative storytelling.  
          Let’s create frames that speak your style, wherever you feel most yourself.
        </p>
      </div>

      {/* Inquiry Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-10">
        <a
          href="https://forms.gle/your-google-form-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-gray-900 transition-all"
        >
          Inquire via Google Form
        </a>
        <a
          href="https://wa.me/9779800000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition-all"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
        <a
          href="viber://chat?number=9779800000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-purple-500 text-white px-5 py-3 rounded-full hover:bg-purple-600 transition-all"
        >
          <Phone size={18} /> Viber
        </a>
      </div>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Our Favorite Indoor & Outdoor Moments
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
              "/images/per1.jpg",
               "/images/per2.jpg",
                "/images/fod1.jpg", 
                "/images/fod2.jpg",

          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt={`IndoorOutdoor ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
