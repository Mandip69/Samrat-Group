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
  title="Samrat Frame House Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.172202813447!2d85.31304791505492!3d27.73611848278838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1900495b20d1%3A0x7f4427c7a159a2d9!2sSamakhusi%20Tokha%20Rd%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1696200000000!5m2!1sen!2snp"
  width="100%"
  height="400"
  style={{ border: 0, borderRadius: "12px" }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
