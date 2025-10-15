import React from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const PhotoVideoClass = () => {
  const photographyTopics = [
    "Camera Basics & Settings",
    "Composition & Framing",
    "Lighting Techniques",
    "Portrait & Landscape Photography",
    "Editing with Lightroom & Photoshop",
    "Portfolio Projects",
  ];

  const videographyTopics = [
    "Camera Movements & Angles",
    "Storyboarding & Planning",
    "Lighting for Video",
    "Audio Recording Techniques",
    "Editing with Premiere Pro",
    "Short Film & Music Video Projects",
  ];

  // Shared portfolio for both classes
  const sharedGallery = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760513996/iwq1y7u0g3hfzf4usxjm.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760514028/cyofjhaezldop1ohlb8g.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760514086/iymprzriwb3mdermhw0x.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760514178/y6quyeoxrccgzl4mhztb.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760514110/pqx7tbrommx4cmf2i0ot.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760514116/o3fp7m65uz1rpszobeaa.jpg",
  ];

  return (
    <section className="bg-white text-gray-900 min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Photo */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760513591/ez4f9bk4o78ln7apbxej.jpg" // Replace with your hero photo
            alt="Photography & Videography"
            className="w-full md:w-[90%] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Photography & Videography Classes
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Master the art of capturing moments and telling stories through our Photography & Videography classes. Learn professional techniques, lighting, composition, and editing to create stunning photos and videos.
          </p>

          {/* Inquiry Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf1iy9bvqNubA8aSEoRDEbzE_8I91KXlnqnZf_TodUhmfUUmg/viewform?usp=sharing&ouid=100782127818539968867"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition font-medium"
            >
              Enroll via Google Form
            </a>
            <a
              href="https://wa.me/9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full hover:bg-green-600 transition font-medium"
            >
              <FaWhatsapp size={18} /> WhatsApp
            </a>
            <a
              href="viber://chat?number=+9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-purple-500 text-white px-5 py-3 rounded-full hover:bg-purple-600 transition font-medium"
            >
              <FaViber size={18} /> Viber
            </a>
          </div>
        </div>
      </div>

      {/* Photography Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Photography Class
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Learn to take stunning photographs using professional techniques in composition, lighting, and editing. Perfect for beginners or aspiring photographers.
        </p>

        {/* Course Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {photographyTopics.map((topic, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl p-6 hover:bg-blue-50 transition-shadow shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Videography Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 bg-gray-50 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Videography Class
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Learn professional video production including camera techniques, storyboarding, lighting, and editing. Perfect for aspiring videographers or content creators.
        </p>

        {/* Course Topics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {videographyTopics.map((topic, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 hover:bg-blue-50 transition-shadow shadow-sm text-center border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Shared Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sharedGallery.map((img, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img
                src={img}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-gray-900 text-lg font-semibold">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center py-16 text-gray-500 italic text-lg">
        “Capture moments, tell stories, and create your visual legacy.”
      </div>
    </section>
  );
};

export default PhotoVideoClass;
