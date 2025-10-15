import React from "react";
import { Phone, MessageCircle, FormInput } from "lucide-react";
import { motion } from "framer-motion";

export default function Event() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden">
        <img
          src="/event1.png"
          alt="Event Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Capture Your Magical Moments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl text-gray-200"
          >
            From weddings to corporate events — we turn your special day into cinematic memories.
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Every Frame Tells a Story
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Our professional event coverage captures not just visuals — but emotions, energy, and elegance.
          Whether it’s a wedding, birthday, or corporate gala, we ensure your moments live forever in cinematic quality.
        </p>

        {/* Event Types */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "School  Events",
              desc: "Celebrate love and life — captured with cinematic style and emotional depth.",
              img: "/event6.jpg",
            },
            {
              title: "Corporate Events",
              desc: "From conferences to product launches, we showcase your professional highlights.",
              img: "/event5.jpg",
            },
            {
              title: "Private Parties",
              desc: "Candid laughter and lively moments — we make every frame sparkle with joy.",
              img: "/event4.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-900 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          Our Event Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {[
            "/event2.jpg",
            "/event3.jpg",
            "/event7.jpg",
            "/awarded/d1.jpg",
            "/awarded/d2.jpg",
            "/awarded/d3.jpg",
            "/awarded/d9.jpg",
            "/awarded/d5.jpg",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt="Event Gallery"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have an Event Coming Up?</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
          Book your event today! Fill out our inquiry form or connect with us instantly.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Google Form */}
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            <FormInput size={18} /> Inquiry Form
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition shadow-lg"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          {/* Viber */}
          <a
            href="viber://chat?number=+9779800000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg"
          >
            <Phone size={18} /> Viber
          </a>
        </div>
      </section>
    </div>
  );
}
