import React, { useState } from "react";

// List of services with icons/images
const bookingServices = [
  { id: 1, name: "Wedding Photography", image: "/ser5.jpg" },
  { id: 2, name: "Drone Videography", image: "/po1.jpg" },
  { id: 3, name: "Studio Training", image: "/ser3.jpg" },
  { id: 4, name: "Personal / Brand Shoot", image: "/ser2.jpg" },
  { id: 5, name: "Event Coverage", image: "/ser1.jpg" },
];

const OnlineBooking = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service to book.");
      return;
    }
    alert(
      `Booking submitted!\nService: ${selectedService.name}\nName: ${formData.name}\nEmail: ${formData.email}\nDate: ${formData.date}\nMessage: ${formData.message}`
    );
    // Reset form
    setSelectedService(null);
    setFormData({ name: "", email: "", date: "", message: "" });
  };

  return (
    <section className="pt-[120px] pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Book Online</h2>
          <p className="text-gray-600">
            Select a service and fill the form below to schedule your session.
          </p>
        </div>

        {/* Service Selection */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {bookingServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-2xl transition border-2 ${
                selectedService?.id === service.id
                  ? "border-sky-500"
                  : "border-transparent"
              }`}
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold">{service.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow hover:shadow-2xl transition">
          <h3 className="text-2xl font-bold mb-6">
            {selectedService
              ? `Booking: ${selectedService.name}`
              : "Select a Service to Book"}
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              placeholder="Additional Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition w-full"
            >
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OnlineBooking;
