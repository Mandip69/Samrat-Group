import React, { useState } from "react";
import { MessageCircle, MapPin, X, PenTool, Layout, Image, Headphones } from "lucide-react";

const GraphicDesign = () => {
  const [openForm, setOpenForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-96 flex items-center justify-center text-white">
        <img src="/gra.jpeg" alt="Graphic Design" className="absolute inset-0 w-full h-full object-cover brightness-75 rounded-b-2xl" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Creative Graphic Design</h1>
          <p className="text-lg md:text-xl">Logos, Banners, Posters, Social Media & More</p>
          <button
            onClick={() => setOpenForm(true)}
            className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Graphic Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <PenTool size={36} className="text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Creative Designs</h3>
            <p className="text-gray-600">Unique and visually appealing designs tailored to your brand.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Layout size={36} className="text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Versatile Styles</h3>
            <p className="text-gray-600">Logos, social media posts, banners, posters, and more.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Image size={36} className="text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">High Quality</h3>
            <p className="text-gray-600">High-resolution, print-ready, and digital graphics for all purposes.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Headphones size={36} className="text-purple-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Support & Revisions</h3>
            <p className="text-gray-600">Unlimited revisions in packages and continuous communication.</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Design Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Basic", features: "Logo or 3 Social Media Graphics, 2 Revisions", price: "NPR 5,000" },
            { name: "Standard", features: "Logo + Banner + 5 Posts, 3 Revisions", price: "NPR 10,000" },
            { name: "Premium", features: "Full Branding Package, Unlimited Graphics & Revisions", price: "Custom Quote" },
          ].map((plan, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.features}</p>
              <div className="text-purple-500 font-semibold text-lg">{plan.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How many revisions are included?", a: "Packages include 2-3 revisions; Premium package offers unlimited revisions." },
            { q: "Do you provide source files?", a: "Yes, source files and editable formats are provided after project completion." },
            { q: "Can you design for social media campaigns?", a: "Absolutely, we create engaging posts, banners, and ads for social platforms." },
            { q: "What is the delivery time?", a: "Depends on package: Basic 2-3 days, Standard 5-7 days, Premium depends on scope." },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center font-semibold text-left"
              >
                <span>{faq.q}</span>
                <span>{activeFAQ === idx ? "−" : "+"}</span>
              </button>
              {activeFAQ === idx && <p className="mt-2 text-gray-600">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry CTA */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between bg-purple-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Start your creative project today!</h2>
        <div className="flex gap-4">
          <button onClick={() => setOpenForm(true)} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-full transition">
            Inquiry Now
          </button>
          <a href="https://wa.me/9779800000000" target="_blank" rel="noreferrer" className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-full flex items-center gap-2 transition">
            <MessageCircle size={18} /> WhatsApp
          </a>
        </div>
      </div>

      {/* Inquiry Modal */}
      {openForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative">
            <button onClick={() => setOpenForm(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500">
              <X size={22} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Graphic Design Inquiry</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Logo Design</option>
                <option>Social Media Graphics</option>
                <option>Banners & Posters</option>
                <option>Full Branding Package</option>
              </select>
              <textarea className="w-full border rounded-lg px-3 py-2" rows={3} placeholder="Message…"></textarea>
              <button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesign;
