import React from "react";

const StudioBooking = () => {
  return (
    <section id="studio-booking" className="bg-white">
      {/* Hero Video */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/inter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Premium <span className="text-sky-400">Studio Booking</span>
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Book Our Studio
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our fully equipped studio is available for professional shoots,
          content creation, training sessions, and events. With top-class
          lighting, cameras, drones, and projectors, we provide the perfect
          environment for creative production. Whether you're an individual,
          brand, or production house, our studio adapts to your needs.
        </p>
        <button className="mt-6 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-medium transition">
          Book Studio Now
        </button>
      </div>

      {/* Studio Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Studio Space
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/sto1.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/sto2.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/sto3.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/sto4.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/sto8.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/sto6.jpg"
            alt="Studio setup"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default StudioBooking;
