import React from "react";
import { MessageCircle, Phone } from "lucide-react";

export default function Pasni() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-rose-50 to-white min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 md:px-10">
        {/* Left: Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src="/images/pas3.jpg"
            alt="Pasni celebration"
            className="rounded-2xl shadow-2xl w-[90%] md:w-[85%] border-4 border-pink-200"
          />
          <div className="absolute top-[-30px] right-[-30px] bg-rose-200 rounded-full p-6 animate-pulse" />
        </div>

        {/* Right: Description */}
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left">
          <h1 className="text-5xl font-bold text-rose-600 mb-4">Pasni Shoot</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Celebrate your little one’s first rice-feeding ceremony with style and love! 
            Our <span className="font-semibold text-rose-500">Pasni Shoot</span> captures 
            the pure joy, colors, and blessings of this special milestone — blending 
            traditional elegance with modern creativity.
          </p>
          <p className="text-gray-600">
            We provide customized setups — from cultural decor to candid family moments — 
            making sure every click tells your story beautifully.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-rose-600 transition-all"
            >
              Inquire via Google Form
            </a>
            <a
              href="https://wa.me/9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition-all"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="viber://chat?number=9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-500 text-white px-5 py-3 rounded-full hover:bg-purple-600 transition-all"
            >
              <Phone size={18} /> Viber
            </a>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">
          Recent Pasni Moments
        </h2>
        <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "/images/pas1.jpg",
            "/images/pas2.jpg",
            "/images/pas7.jpg",
            "/images/pas4.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613559/hxv3m95suqrucqgul7et.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613861/tjgxtdemqyobd1xc77fq.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614387/wtci12qd59r9sibda7ul.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614419/q98mmuzuoe5uj11zwstf.jpg",
            
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615006/simr8pcul1lqjbawetqr.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615046/huzmnxqjfieofdojenoq.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615081/yo4beuvbnoky2ogn7dxn.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615108/ch1zqkbjospeoqqgrheu.jpg",
             "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615155/y5cfprgempkihxial8lx.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760678402/kn6xuserqlbrz7petrq4.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt={`Pasni ${i + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
