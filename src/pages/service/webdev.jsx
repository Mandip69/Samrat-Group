import React, { useState } from "react";
import { MessageCircle, MapPin, X, Code, Layout, Server, Headphones } from "lucide-react";

const WebDevelopment = () => {
  const [openForm, setOpenForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-96 flex items-center justify-center text-white">
        <img src="/dev.png" alt="Web Development" className="absolute inset-0 w-full h-full object-cover brightness-75 rounded-b-2xl" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Professional Web Development</h1>
          <p className="text-lg md:text-xl">Static, Dynamic, E-commerce & Custom Solutions</p>
          <button
            onClick={() => setOpenForm(true)}
            className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Web Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Code size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Custom Development</h3>
            <p className="text-gray-600">Websites tailored to your business needs, static or dynamic.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Layout size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Responsive Design</h3>
            <p className="text-gray-600">Mobile-friendly, user-friendly, and modern layouts.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Server size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Secure & Scalable</h3>
            <p className="text-gray-600">Built with security, performance, and future growth in mind.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Headphones size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Support & Maintenance</h3>
            <p className="text-gray-600">Continuous support and maintenance after launch.</p>
          </div>
        </div>
      </section>

      {/* Development Plans */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Development Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Basic", features: "Static Website, Up to 5 Pages, Responsive Design", price: "NPR 10,000" },
            { name: "Advanced", features: "Dynamic Website, CMS Integration, Up to 15 Pages", price: "NPR 25,000" },
            { name: "E-commerce / Custom", features: "Online Store, Payment Integration, Unlimited Pages", price: "Custom Quote" },
          ].map((plan, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.features}</p>
              <div className="text-cyan-600 font-semibold text-lg">{plan.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How long does a website take to develop?", a: "Timeline depends on complexity: Basic 1-2 weeks, Advanced 3-6 weeks, E-commerce 4-8 weeks." },
            { q: "Do you provide domain and hosting?", a: "Yes, we can provide complete solutions including hosting and domain registration." },
            { q: "Can you maintain my website?", a: "Yes, we offer ongoing maintenance and support packages." },
            { q: "Are your websites mobile-friendly?", a: "Absolutely, all our websites are responsive and optimized for mobile devices." },
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
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between bg-cyan-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Ready to build your website?</h2>
        <div className="flex gap-4">
          <button onClick={() => setOpenForm(true)} className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-6 rounded-full transition">
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
            <h2 className="text-2xl font-semibold mb-4">Web Development Inquiry</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Static Website</option>
                <option>Dynamic Website</option>
                <option>E-commerce Website</option>
                <option>Custom Web Solution</option>
              </select>
              <textarea className="w-full border rounded-lg px-3 py-2" rows={3} placeholder="Message…"></textarea>
              <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-full transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevelopment;
