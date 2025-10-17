import React from "react";
import { FaWhatsapp, FaViber, FaCheckCircle } from "react-icons/fa";

const VideoEditingClass = () => {
  // const topics = [
  //   "Introduction to Editing Software",
  //   "Timeline & Workspace Setup",
  //   "Cutting, Trimming & Transitions",
  //   "Color Correction & Grading",
  //   "Audio Editing & Mixing",
  //   "Motion Graphics & Effects",
  //   "Exporting & Project Delivery",
  // ];

  const courseDetailsLeft = [
    "🎬 Learn Adobe Premiere Pro & DaVinci Resolve",
    "🎨 Master color correction and cinematic grading",
    "🧠 Understand storytelling and pacing in editing",
    "🎧 Sound synchronization and background scoring",
    "🪄 Transitions, effects, and text animations",
    "📂 Project management & organized editing workflow",
  ];

  const courseDetailsRight = [
    "💡 Learn motion graphics and intro/outro creation",
    "🎥 Hands-on practice with real-world projects",
    "🧩 Use LUTs and presets for creative effects",
    "🗂️ Learn exporting formats for YouTube, social media, and clients",
    "🎓 Certificate upon successful completion",
    "🚀 Build your personal portfolio for freelancing or jobs",
  ];

  const portfolio = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760597749/rdfakes76zng9wnctgsx.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760599477/b9yyaxphdvmun02ioboa.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760599623/lixejosdet3yz5szz85x.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760599675/blridkosuixvhkq3hjpa.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760599778/gkgjnsx6eds9jdaeopk1.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760600449/ic8czvjws1h8gzwsyufv.jpg",
  ];

  return (
    <section className="bg-white text-gray-900 min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601421/eu2hbzs8xc0ww6kewium.jpg"
            alt="Video Editing Class"
            className="w-full md:w-[95%] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Video Editing Class
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Learn professional video editing techniques to create stunning visuals. 
            From cutting and trimming to color grading, motion graphics, and audio mixing, 
            our Video Editing Class will turn your raw footage into cinematic masterpieces.
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

      {/* What You'll Learn */}
      {/* <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What You'll Learn
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Our class is designed for beginners and aspiring editors to master video editing from start to finish.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {topics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 hover:bg-blue-50 transition-shadow shadow-sm text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            </div>
          ))}
        </div>
      </div> */}

      {/* 🧾 Course Details Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl shadow-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Course Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-lg leading-relaxed">
          <ul className="space-y-4 list-disc list-inside">
            {courseDetailsLeft.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-4 list-disc list-inside">
            {courseDetailsRight.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 italic">
            “Edit like a pro — transform your imagination into stunning visual stories.”
          </p>
        </div>
      </div>

      {/* Portfolio */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Video Editing Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={img}
                alt={`Video Editing Portfolio ${idx + 1}`}
                className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
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
        “Turn your footage into cinematic stories and bring your vision to life.”
      </div>
    </section>
  );
};

export default VideoEditingClass;
