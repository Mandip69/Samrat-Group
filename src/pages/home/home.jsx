import React, { useState, useEffect } from "react";

// Carousel Items
const carouselItems = [
  { image: "/hero3.jpg", text: "Marriage Photography & Videography" },
  { image: "/hero7.jpg", text: "Professional Photography Training" },
  { image: "/hero9.png", text: "Event Photography & Videography" },
  { image: "/hero5.jpg", text: "Interview & Event Coverage" },
  { image: "/hero8.jpg", text: "Camera Drone Rental Services" },
];

// Services
const services = [
  {
    title: "Wedding Photography",
    description: "Capture your special day with our professional team.",
    image: "/ser5.jpg",
  },
  {
    title: "Drone & Aerial Videography",
    description: "High-quality aerial shots for weddings and events.",
    image: "/ser6.png",
  },
  {
    title: "Studio Training",
    description: "Learn photography and videography from experts.",
    image: "/ser3.jpg",
  },
  {
    title: "Personal & Brand Shoot",
    description: "Professional photoshoots for individuals and brands.",
    image: "/ser2.jpg",
  },
  {
    title: "Event Coverage",
    description: "Capture interviews, parties, and other events professionally.",
    image: "/ser4.jpg",
  },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  // Carousel Auto-Slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateText(true);
      setTimeout(() => {
        setAnimateText(false);
        setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
      }, 800); // animation duration before switching
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Carousel */}
      <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-full object-cover"
            />

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2
                className={`text-3xl md:text-5xl font-extrabold text-white text-center px-6 drop-shadow-xl transform transition-all duration-700 ${
                  animateText ? "translate-y-[-20px] opacity-90" : "opacity-100"
                }`}
              >
                {index === currentIndex ? item.text : ""}
              </h2>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {carouselItems.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "bg-sky-500 scale-125" : "bg-gray-400 hover:bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 mb-12">
            We provide professional photography and videography services for all occasions.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="rounded-xl shadow-lg p-4 hover:shadow-2xl hover:-translate-y-2 transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-32 w-full object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src="/about1.jpg"
              alt="About Studio"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">About Our Studio</h2>
            <p className="text-gray-600 mb-4">
              We are a professional movie and photography studio with years of experience. Our team is passionate about capturing moments that last forever.
            </p>
            <p className="text-gray-600">
              From weddings to brand shoots, interviews, and creative projects, we provide high-quality services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-600 mb-12">
            A glimpse of our previous work in photography and videography.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <img
              src="/po1.jpg"
              alt="Portfolio 1"
              className="rounded-lg shadow-md hover:scale-105 transition transform"
            />
            <img
              src="/po14.jpg"
              alt="Portfolio 2"
              className="rounded-lg shadow-md hover:scale-105 transition transform"
            />
            <img
              src="/po9.jpg"
              alt="Portfolio 3"
              className="rounded-lg shadow-md hover:scale-105 transition transform"
            />
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-16 text-center bg-sky-50">
        <h2 className="text-4xl font-bold mb-4">Book Your Session Today!</h2>
        <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
          Whether it's a wedding, brand shoot, or personal project, we are ready to capture your moments professionally.
        </p>
        <a
          href="/contact"
          className="bg-sky-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-sky-600 shadow-md transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default HomePage;
