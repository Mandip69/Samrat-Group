// Define categories with folder, prefix, and count
export const categories = {
  award: { folder: "awarded", prefix: "d", count: 15 }, // your awarded images
  wedding: { folder: "images", prefix: "we", count: 30 },
  food: { folder: "images", prefix: "fod", count: 6 },
 Pasni: { folder: "images", prefix: "pas", count: 8 },
 Bartabanda: { folder: "images", prefix: "bar", count: 10 },
 Program: { folder: "images", prefix: "tej", count: 5 },
 Shoot: { folder: "images", prefix: "per", count: 3 },
};


// Generate image objects with both .jpg and .JPG
export const portfolioImages = Object.entries(categories).flatMap(
  ([category, { folder, prefix, count }]) =>
    Array.from({ length: count }, (_, i) => {
      const num = i + 1;
      return {
        src: `/${folder}/${prefix}${num}.jpg`, // lowercase default
         // uppercase fallback
        category,
      };
    })
);
