import React from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const DroneTraining = () => {
  const droneTopics = [
    "Introduction to Drones & Types",
    "Drone Safety & Regulations",
    "Flight Controls & Maneuvers",
    "Aerial Photography Techniques",
    "Cinematography with Drones",
    "Editing Aerial Footage",
    "Commercial Drone Applications",
  ];

  // High-quality portfolio images
  const portfolio = [
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760528258/codl0tt4kneu9jmpu5kn.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760528365/wtx2efc5irck5uzt8elu.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760528397/hkaldgk0q8heysk3dpwj.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760528495/lnatbgillpmkl8kk5vcw.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760528529/qrnp4kc82dtaefemgsfp.jpg",
  ];

  const heroImage =
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760524376/jq8hfgghmllnrlar3ew2.jpg";

  return (
    <section className="bg-white text-gray-900 min-h-screen py-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={heroImage}
            alt="Drone Operation Training"
            className="w-full md:w-[95%] rounded-2xl shadow-xl object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
            Drone Operation Training
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Learn to fly drones safely and professionally while capturing stunning aerial footage. Our comprehensive Drone Operation Training covers flight control, aerial photography, cinematography, and commercial applications.
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

      {/* Training Topics */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          What You'll Learn
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          From beginner to advanced techniques, our course equips you with everything needed to operate drones confidently and creatively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {droneTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-6 hover:bg-blue-50 transition-shadow shadow-sm text-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">{topic}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Drone Portfolio
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolio.map((img, idx) => (
            <div
              key={idx}
              className="relative group rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={img}
                alt={`Drone Portfolio ${idx + 1}`}
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
        “Fly high, capture breathtaking aerial views, and become a drone expert.”
      </div>
    </section>
  );
};

export default DroneTraining;
