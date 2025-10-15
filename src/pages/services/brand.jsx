import React from "react";
import { MessageCircle, Phone, Camera } from "lucide-react";

export default function BrandShoot() {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white min-h-screen py-20">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Camera className="text-indigo-400 w-10 h-10 animate-pulse" />
            <h1 className="text-5xl font-bold text-indigo-400 tracking-wide">
              Brand Shoot
            </h1>
          </div>
          <p className="text-gray-200 text-lg leading-relaxed">
            Bring your brand to life with visuals that capture emotion, energy, 
            and identity. Our <span className="text-indigo-300 font-semibold">
            Brand Shoot</span> sessions combine creativity with precision to 
            craft images that define who you are — bold, elegant, and unforgettable.
          </p>
          <p className="text-gray-400">
            Whether it’s a product line, fashion brand, or corporate identity, 
            our professional setups transform your concept into art.
          </p>

          {/* Inquiry Buttons */}
          <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-600 transition-all font-semibold"
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

        {/* Right Hero Image */}
        <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="relative group">
            <img
              src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760510858/eazqalffosjmwofy5jqm.jpg"
              alt="Brand shoot setup"
              className="rounded-2xl shadow-2xl border-2 border-indigo-400 w-[90%] md:w-[85%] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all" />
          </div>

          {/* Glowing Circle Accent */}
          <div className="absolute top-[-40px] right-[-40px] bg-indigo-500/40 blur-3xl w-32 h-32 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-indigo-700/50 my-16 max-w-5xl mx-auto" />

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-300 mb-10">
          Creative Brand Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760510873/hqc0urckcmanrudhji6a.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760510841/eaflijkncgxhhvmjttzw.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760510882/g06z602j9g5nuhkxa5ad.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760510816/yompmacm5gmlejbup4yh.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760511100/u5xmtbfo9yekxnt1ckql.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760511141/yyjroyezpsxkmcoa94fe.jpg",
          ].map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-indigo-600/40 transition-all"
            >
              <img
                src={`${img}?auto=format&fit=crop&w=800&q=80`}
                alt={`Brand Shoot ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-600/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-white text-lg font-semibold">View More</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center mt-16 text-indigo-300 italic tracking-wide text-lg">
        “Where creativity meets precision — your brand deserves cinematic visuals.” ✨
      </div>
    </div>
  );
}
