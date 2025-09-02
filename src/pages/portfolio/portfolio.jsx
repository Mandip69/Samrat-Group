import React from "react";

// Array of portfolio images
const portfolioImages = Array.from({ length: 17 }, (_, i) => `/po${i + 1}.jpg`);

const PortfolioSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
        <p className="text-gray-600 mb-12">
          Capturing moments from different angles and poses to showcase creativity.
        </p>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {portfolioImages.map((src, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative overflow-hidden rounded-lg group"
            >
              <img
                src={src}
                alt={`Portfolio ${idx + 1}`}
                className="w-full mb-4 object-cover transform transition duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Samrat Movies</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
