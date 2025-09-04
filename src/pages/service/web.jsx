import React, { useState } from "react";
import { MessageCircle, MapPin, X, Server, ShieldCheck, Clock, Headphones } from "lucide-react";

const WebHosting = () => {
  const [openForm, setOpenForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-96 flex items-center justify-center text-white">
        <img src="/web.png" alt="Web Hosting" className="absolute inset-0 w-full h-full object-cover brightness-75 rounded-b-2xl" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Reliable Web Hosting & Domains</h1>
          <p className="text-lg md:text-xl">Fast, Secure, and Affordable Solutions for Your Website</p>
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
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Hosting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Server size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">High Performance</h3>
            <p className="text-gray-600">SSD servers optimized for speed and reliability.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <ShieldCheck size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Secure & Safe</h3>
            <p className="text-gray-600">Free SSL, daily backups, and advanced security.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Clock size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">Reliable hosting with continuous server monitoring.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Headphones size={36} className="text-cyan-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our expert team is always ready to help you.</p>
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Hosting Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Basic Shared", features: "1 Website, 10GB SSD, Free SSL", price: "NPR 2,000/yr" },
            { name: "Advanced Shared", features: "5 Websites, 50GB SSD, Daily Backups", price: "NPR 5,000/yr" },
            { name: "VPS Hosting", features: "2GB RAM, 50GB SSD, Full Root Access", price: "NPR 15,000/yr" },
            { name: "Dedicated Server", features: "Full Control, Custom Configurations", price: "From NPR 50,000/yr" },
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
            { q: "How do I purchase a hosting plan?", a: "Fill the inquiry form or contact us via WhatsApp. Our team will guide you through the process." },
            { q: "Do you provide domain registration?", a: "Yes, we provide domains like .com, .np, and more along with hosting." },
            { q: "Is technical support available?", a: "Yes, 24/7 support via call, chat, and email." },
            { q: "Where is your office located?", a: "Samakhusi, Kathmandu, Tokha Road." },
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
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Ready to start your website?</h2>
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
            <h2 className="text-2xl font-semibold mb-4">Web Hosting Inquiry</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Web Hosting</option>
                <option>Domain Registration</option>
                <option>Website Design</option>
                <option>SEO</option>
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

export default WebHosting;
