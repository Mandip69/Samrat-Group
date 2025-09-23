// src/portfolioData.js

// Define categories and how many photos each has
export const categories = {
  // Example other categories you might add later
  // wedding: { prefix: "we", count: 30 },
  // bartabanda: { prefix: "bar", count: 10 },
  awrad: { prefix: "d", count: 20 },
};

// Auto-generate image objects for each category
export const portfolioImages = Object.entries(categories).flatMap(
  ([category, { prefix, count }]) =>
    Array.from({ length: count }, (_, i) => ({
      src: `/awarded/${prefix}${i + 1}.JPG`, // ⚠ Make sure folder & filenames match exactly
      category,
    }))
);
