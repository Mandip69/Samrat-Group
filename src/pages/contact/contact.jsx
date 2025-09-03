import React from "react";

const ContactUs = () => {
  return (
    <section className="pt-[120px] pb-16 bg-gray-50"> {/* Added extra top padding */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            Reach out to us for bookings, inquiries, or any questions you have.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">01-4380056, +977- 9841419740, 9840797919, 980859826 </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">samratmovies197@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition text-center">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Tokha Road, Samakhuch, Kathmandu</p>
          </div>
        </div>

        {/* Contact Form + Map */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-sky-500 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow hover:shadow-2xl transition">
          <iframe
  title="Studio Location"
  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d464.4692443793645!2d85.31801909832896!3d27.73..."
  width="100%"
  height="100%"
  style={{ minHeight: "400px", border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
