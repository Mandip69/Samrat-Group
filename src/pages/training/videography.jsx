import React from "react";
import { FaVideo } from "react-icons/fa";

const VideographyTraining = () => {
  const trainingHighlights = [
    "Professional Camera Handling",
    "Creative Composition & Angles",
    "Lighting Techniques",
    "Sound Recording Tips",
    "Editing & Color Grading",
    "Portfolio Project Guidance",
  ];

  const studentImages = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760606055/clafkhbavaj2iop8xye8.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605838/qru1hakzelb7pvbvawdt.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605817/cvgzrtwi0arwv41vyoyr.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605791/tsk30dsuepzjvdvny3vx.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605755/dtobgck7jlv0kpzviemu.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605679/ou4wh8eslk0wtqgewtdi.jpg",
  ];

  return (
    <section id="videography-training" className="bg-gray-50">
      {/* Hero */}
      <div
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpysgjsq3/image/upload/v1760678933/qix8nlxrga7olqq1dr0k.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Videography Training
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Learn professional videography from basics to advanced techniques.
          </p>
          <a
            href="https://wa.me/9779841419740"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Training Highlights */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          What You Will Learn
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainingHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-sky-100 text-sky-500 p-4 rounded-full mb-4">
                <FaVideo size={32} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{item}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Our Students Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Our Students
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {studentImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Student ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideographyTraining;
