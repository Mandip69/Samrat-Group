import React from "react";

const WeddingSection = () => {
  return (
    <section id="wedding" className="bg-white">
      {/* Hero Video */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/wed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            Celebrate Love with <span className="text-sky-400">Our Studio</span>
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Wedding Services
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We specialize in capturing life’s most cherished moments with a
          cinematic touch. From pre-wedding shoots to the big day, our team
          provides professional photography and videography tailored to your
          love story. With the perfect blend of creativity, lighting, and
          storytelling, we turn your wedding into timeless memories you’ll
          treasure forever.
        </p>
      </div>

      {/* Wedding Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Wedding Moments
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/wed1.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/wed2.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/wed3.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/wed4.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/wed5.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
          <img
            src="/wed6.jpg"
            alt="Wedding event"
            className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default WeddingSection;
