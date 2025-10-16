import React from "react";
import { ArrowRight } from "lucide-react";

const FrameSection = () => {
  const frames = [
    {
      title: "Classic Black Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758781108/admin-dashboard/wedding/pbw240nhhln5f6jomzzx.jpg",
    },
    {
      title: "Elegant White Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760589222/toscbdxyrmobhiuwutmz.jpg",
    },
    {
      title: "Collage Frame Set",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760589038/asilcdf2ctzjdoz5h5od.jpg",
    },
    {
      title: "Mala Frame Design",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760589189/yhlx4ngv3dlznlicgdwx.jpg",
    },
    {
      title: "Rose Box Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760517859/of4bguiq7a6uagxojcmx.jpg",
    },
    {
      title: "Lamination Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760589481/uy2axqejndgvc3nctjwo.jpg",
    },
    {
      title: "Double Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760589029/ziwuv5cr1xbr7nmc1uts.jpg",
    },
    {
      title: "Lord Ganesh Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612298/runq7ko6hqdcqblzuuaj.jpg",
    },
    {
      title: "Golden Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758781828/admin-dashboard/wedding/rcunvcb6pt8v8a98tqyr.jpg",
    },
    {
      title: "Pasni Mala Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612547/sc2mfhwbbqpeuvlng6ek.jpg",
    },
    {
      title: "Mala Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612709/lvil5dqxyshd2c1z6soo.jpg",
    },
    {
      title: "White Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612712/hyeigg9ejtflnr09jfz0.jpg",
    },
    {
      title: "Mala Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612712/kkrp0tk6ibxkeg98jzis.jpg",
    },
    {
      title: " Mala Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612718/aagch4gasuy5mfjnt9xm.jpg",
    },
    {
      title: "Pasni Mala Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612724/ft60fcjbv3ly7yrtzse2.jpg",
    },
    {
      title: "wooden Frame",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760612866/hdc8mbkv485nnbrvumze.jpg",
    },
  ];

  return (
    <section id="frames" className="bg-white">
      {/* 🌟 Banner Section */}
      <div
        className="relative h-[100vh] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpysgjsq3/image/upload/v1760590414/lyzao0zbiyfputmy9it2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Custom Frame Collection
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200">
            Handcrafted with precision — every frame made with love in our own warehouse 💫
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Designed with Art & Perfection
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From sleek black and white frames to creative collage and lamination designs —
            every piece we craft in our warehouse reflects care, creativity, and quality.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <img
              src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760588986/lvphvceywgvohlhafkzm.jpg"
              alt="Custom Frame Work"
              className="rounded-2xl shadow-2xl w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Handcrafted with Love ❤️
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We proudly manufacture a wide variety of custom frames right here
              in our warehouse — ensuring premium quality and personal touch.
              Whether it’s a photo collage, a dress-set frame, or a traditional
              mala frame, each design reflects your emotion beautifully.
            </p>
            <button
              onClick={() =>
                window.open("https://samrat-frame.vercel.app/", "_blank")
              }
              className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md transition"
            >
              Visit Our Website <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {frames.map((frame, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={frame.img}
                alt={frame.title}
                className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {frame.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <h4 className="text-lg text-gray-700 mb-4">
            Want to explore more frame styles and offers?
          </h4>
          <button
            onClick={() =>
              window.open("https://samrat-frame.vercel.app/", "_blank")
            }
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md transition font-medium"
          >
            View Full Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameSection;
