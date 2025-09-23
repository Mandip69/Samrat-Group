// src/portfolioData.js

// Define categories and how many photos each has
export const categories = {
  Wedding: { prefix: "we", count: 30 },       // /images/wed1.jpg → /images/wed10.jpg
  Bartabanda: { prefix: "bar", count: 10 }, 
  Pasni: { prefix: "pas", count: 8 },    // /images/bar1.jpg → /images/bar8.jpg
  Program: { prefix: "tej", count: 5 },        // /images/fam1.jpg → /images/fam12.jpg
  family: { prefix: "per", count: 3 },          // /images/fam1.jpg → /images/fam12.jpg
  Food: { prefix: "fod", count: 6 },     // /images/prog1.jpg → /images/prog15.jpg
  // ➕ Add more categories here with prefix and count
};

// Auto-generate image objects for each category
export const portfolioImages = Object.entries(categories).flatMap(
  ([category, { prefix, count }]) =>
    Array.from({ length: count }, (_, i) => ({
      src: `/images/${prefix}${i + 1}.jpg`, // ✅ note: /images/ folder
      category,
    }))
);
