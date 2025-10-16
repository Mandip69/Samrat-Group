import React, { useState } from "react";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const WeddingSection = () => {
  const [openForm, setOpenForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Thank you for booking! We will contact you soon.");
    setOpenForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const galleryImages = [
    "bannerofmarriage.jpg",
    "wed2.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758612975/portfolio/nafymntzyzjtugdfyrli.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1758612978/portfolio/l9eurcuccypijkthweo4.jpg",
    "wed5.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760511621/fhpcana2rwbrmcawg1of.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602068/bkvj8zpdbbrobuo24hpb.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602064/we8fz6xtdvpjxxsazqrc.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601999/tplxnavu3mzxehsbff8b.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601995/ruzufqozqu1gbfpqdxix.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601932/omhprj48qi4zhdphlaiq.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601905/ooigbo9gmgrv6qt16xvk.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601901/mup6hivuib52mclitcv1.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601792/ncwasizucp2bdp42ep4z.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760601789/rkzbgs5tfqgesrdfageu.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602271/mhrdpjwwxep6ou9rejav.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602275/yakqxwqvdomualvrv6q8.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602411/ysmqwbzsqglkimi5hi97.jpg",
    "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760602531/xefineccseqryve2lp1t.jpg",
  ];

  return (
    <section id="wedding" className="bg-white">
      {/* ✅ Hero Image Section */}
      <div
        className="relative w-full h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dpysgjsq3/image/upload/v1760527031/oypns0qyc2ddebcbmc6d.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Caputer your wedding memories with us.
          </h1>
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSeg2-YYAwJ7oUqUOiiPEudZIsk9_CRZlLqP2A-saTeK7vjlKw/viewform?usp=dialog",
                "_blank"
              )
            }
            className="mt-6 bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* ✅ Description */}
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Wedding Services
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          We specialize in capturing life’s most cherished moments with a
          cinematic touch. From pre-wedding shoots to the big day, our team
          provides professional photography and videography tailored to your
          love story. With the perfect blend of creativity, lighting, and
          storytelling, we turn your wedding into timeless memories you’ll
          treasure forever.
        </p>

        {/* ✅ WhatsApp & Viber Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://wa.me/9779841419740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            <FaWhatsapp size={20} /> WhatsApp
          </a>
          <a
            href="viber://chat?number=+9779841419740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
          >
            <FaViber size={20} /> Viber
          </a>
        </div>
      </div>

      {/* ✅ Wedding Gallery */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Wedding Moments
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.startsWith("http") ? img : `/${img}`}
              alt="Wedding event"
              className="rounded-xl shadow-lg object-cover h-64 w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </div>

      {/* ✅ Booking Form Modal */}
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
              Book Your Wedding Shoot
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
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your wedding..."
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
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingSection;
