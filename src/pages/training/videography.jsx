import React from "react";
import { FaVideo, FaCheckCircle } from "react-icons/fa";

const VideographyTraining = () => {
  // const trainingHighlights = [
  //   "Professional Camera Handling",
  //   "Creative Composition & Angles",
  //   "Lighting Techniques",
  //   "Sound Recording Tips",
  //   "Editing & Color Grading",
  //   "Portfolio Project Guidance",
  // ];

  const courseDetailsLeft = [
   "Introduction and Camera History",
   "Rules And Regulation For Cameraman",
   "Part of Movies Camera (Using Nerbs)",
   "Focusing - Subject - Program",
   "Picture Composing",
   "Video Shooting",
   "Electric View Finder - Warning Alarm Indication ",
   "Camera Level | Shot Size | Shot Divison",
  ];

  const courseDetailsRight = [
   "Manual-IRIS | GAIN | Shutterspeed",
   "White Balance | Lenses | Lighting | Filter",
   "Day Light Expossure",
   "Editing SHooting | Multi Camera",
   "External Lighting- Indoor and Outdoor",
   "Basic Three-Point Studio Lighting",
   "Tripod | Slider",
   "Videography accessories uses",
   "Project works and Indoor and Outdoors Shoots"
  ];

  const studentImages = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760606055/clafkhbavaj2iop8xye8.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605838/qru1hakzelb7pvbvawdt.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605817/cvgzrtwi0arwv41vyoyr.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605791/tsk30dsuepzjvdvny3vx.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605755/dtobgck7jlv0kpzviemu.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760605679/ou4wh8eslk0wtqgewtdi.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760683315/se1d6e4csctj92m2lcmz.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760683377/gdxmesdioqfqphs7lqv5.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760683584/exxomzk0evtymbr4kae7.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760683721/qhtnmqgp9vqsjuqmzfsq.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760684106/ou9zknphuu3famhqqvu9.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760684203/u9ow5lmnhlgt7hr5bjfk.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760684408/zxognlbgjkwfmogm7ly3.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760684632/ysvrdk2zbpjnf4qqo5ao.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760684764/q72xbbwsbtd3avfuklcv.jpg",
  ];

  return (
    <section id="videography-training" className="bg-gray-50">
      {/* Hero Section */}
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
      {/* <div className="max-w-5xl mx-auto px-6 py-16">
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
                <FaCheckCircle className="text-sky-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className="space-y-4 list-disc list-inside">
            {courseDetailsRight.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaCheckCircle className="text-sky-500 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 italic">
            “PRACTICAL ASSIGMENT AND WORKSHOP.”
          </p>
        </div>
      </div>

      {/* Our Students Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-16">
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
