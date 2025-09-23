import React, { useState } from "react";
import { portfolioImages, categories } from "./portfolioData";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter images by category
  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((img) => img.category === activeCategory);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
        <p className="text-gray-600 mb-12">
          Capturing moments from different angles and poses to showcase creativity.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeCategory === "All"
                ? "bg-sky-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            All
          </button>

          {Object.keys(categories).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-sky-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((item, idx) => (
            <div
              key={idx}
              className="break-inside-avoid relative overflow-hidden rounded-lg group"
            >
              <img
                src={item.src}
                alt={`${item.category} ${idx + 1}`}
                className="w-full mb-4 object-cover transform transition duration-500 group-hover:scale-110"
              />

              {/* Category name on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500">
                <p className="text-white font-semibold text-lg">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
