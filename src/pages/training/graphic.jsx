import React from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { Pencil } from "lucide-react";

const GraphicDesignClass = () => {
  const courseTopics = [
    "Adobe Photoshop Basics",
    "Illustrator Vector Design",
    "Typography & Layouts",
    "Logo & Branding Design",
    "Social Media Graphics",
    "Portfolio Projects",
  ];

  const galleryImages = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760513097/rieh6etgyzra9zinn0lu.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760513121/gc5ihvbrl7fzyfbgzpgw.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760513110/pvxdhpcspgypaqssrdsv.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760529272/evuc3plaiagqyfrsrubw.jpg",
    // "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758612982/portfolio/graphic4.jpg",
    // "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758612985/portfolio/graphic5.jpg",
  ];

  return (
    <section className="bg-white text-gray-900 min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <Pencil className="text-blue-500 w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
              Graphic Design Class
            </h1>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Learn the art of visual communication! Our <span className="font-semibold text-blue-500">Graphic Design Class</span> teaches you creative workflows, essential tools, and professional techniques.
            Perfect for beginners and aspiring designers who want to create stunning visuals.
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

        {/* Right Hero Image */}
        <div className="md:w-1/2 flex justify-center relative">
          <img
            src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760529455/ojaib6gkradykssgtaow.jpg"
            alt="Graphic Design Class"
            className="rounded-2xl shadow-lg w-[90%] md:w-[85%] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Course Highlights */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courseTopics.map((topic, idx) => (
            <div key={idx} className="bg-gray-100 rounded-xl p-6 hover:bg-blue-50 transition-shadow shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Student Works & Projects
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img
                src={img}
                alt={`Graphic Design ${idx + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <p className="text-gray-900 text-lg font-semibold">View Project</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer / Call to Action */}
      <div className="text-center py-16 text-gray-500 italic text-lg">
        “Unleash your creativity — Design your future with us!”
      </div>
    </section>
  );
};

export default GraphicDesignClass;
