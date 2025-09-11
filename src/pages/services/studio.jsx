import React, { useState } from "react";

const StudioBooking = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("https://formcarry.com/s/KpxP3cibXXQ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.code === 200) {
        setStatus("✅ Your booking has been received. We’ll contact you soon!");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
        setOpenForm(false);
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Failed to send. Please check your connection.");
    }
  };

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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Our Studio</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our fully equipped studio is available for professional shoots,
          content creation, training sessions, and events. With top-class
          lighting, cameras, drones, and projectors, we provide the perfect
          environment for creative production. Whether you're an individual,
          brand, or production house, our studio adapts to your needs.
        </p>
        <button
          onClick={() => setOpenForm(true)}
          className="mt-6 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Book Studio Now
        </button>
      </div>

      {/* Studio Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Studio Space
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {["sto1.jpg", "sto2.jpg", "sto3.jpg", "sto4.jpg", "sto8.jpg", "sto6.jpg"].map(
            (img, idx) => (
              <img
                key={idx}
                src={`/${img}`}
                alt="Studio setup"
                className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
              />
            )
          )}
        </div>
      </div>

      {/* Booking Form Modal */}
      {openForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Studio Booking Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full border rounded-lg p-3"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full border rounded-lg p-3"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required
                className="w-full border rounded-lg p-3"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border rounded-lg p-3"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your requirements..."
                rows="4"
                className="w-full border rounded-lg p-3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold"
              >
                Submit Booking
              </button>
            </form>
            {status && (
              <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default StudioBooking;
