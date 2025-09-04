import React, { useState } from "react";
import { MessageCircle, MapPin, X, BarChart2, Users, Target, Headphones } from "lucide-react";

const SocialMediaMarketing = () => {
  const [openForm, setOpenForm] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="w-full bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative w-full h-96 flex items-center justify-center text-white">
        <img src="/soc.png" alt="Social Media Marketing" className="absolute inset-0 w-full h-full object-cover brightness-75 rounded-b-2xl" />
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Social Media Marketing</h1>
          <p className="text-lg md:text-xl">Grow your business with effective social campaigns and engagement</p>
          <button
            onClick={() => setOpenForm(true)}
            className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our SMM Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Users size={36} className="text-pink-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Audience Growth</h3>
            <p className="text-gray-600">Increase followers and engagement organically.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Target size={36} className="text-pink-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Targeted Ads</h3>
            <p className="text-gray-600">Reach the right audience with cost-effective campaigns.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <BarChart2 size={36} className="text-pink-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Analytics</h3>
            <p className="text-gray-600">Track performance with detailed reports and insights.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition">
            <Headphones size={36} className="text-pink-500 mb-4" />
            <h3 className="font-semibold text-xl mb-2">Support</h3>
            <p className="text-gray-600">Professional team available to manage your campaigns.</p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">SMM Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "Starter", features: "Content Creation, 3 Posts/Week, Basic Engagement", price: "NPR 10,000/month" },
            { name: "Growth", features: "Content + Ads, 5 Posts/Week, Analytics Reporting", price: "NPR 25,000/month" },
            { name: "Advanced", features: "Full Management, Daily Posts, Paid Campaigns, Detailed Reports", price: "Custom Quote" },
          ].map((plan, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition">
              <h3 className="font-bold text-xl mb-3">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.features}</p>
              <div className="text-pink-500 font-semibold text-lg">{plan.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: "How long to see results?", a: "Organic growth takes 1-3 months depending on campaign and content strategy." },
            { q: "Do you manage ad campaigns?", a: "Yes, we manage Facebook, Instagram, and other social media ads." },
            { q: "Do you provide analytics reports?", a: "Yes, monthly reports with performance insights and recommendations." },
            { q: "Can you handle multiple platforms?", a: "Absolutely, we manage multiple social media accounts simultaneously." },
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
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between bg-pink-50 rounded-2xl">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">Boost your social presence today!</h2>
        <div className="flex gap-4">
          <button onClick={() => setOpenForm(true)} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full transition">
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
            <h2 className="text-2xl font-semibold mb-4">SMM Inquiry</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
              <input type="tel" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
              <input type="email" placeholder="Email" className="w-full border rounded-lg px-3 py-2" />
              <select className="w-full border rounded-lg px-3 py-2">
                <option>Starter Package</option>
                <option>Growth Package</option>
                <option>Advanced Package</option>
              </select>
              <textarea className="w-full border rounded-lg px-3 py-2" rows={3} placeholder="Message…"></textarea>
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full transition">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaMarketing;
