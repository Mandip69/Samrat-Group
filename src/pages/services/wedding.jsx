import React, { useState } from "react";
import { FaWhatsapp, FaViber, FaCheckCircle } from "react-icons/fa";

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
  ];

  const packages = [
    {
      title: "Inside Valley Packages",
      prices: [
        { days: "One Day", price: "₨35,000" },
        { days: "Two Days", price: "₨55,000" },
        { days: "Three Days", price: "₨75,000" },
      ],
      includes: [
        "One Photographer",
        "One Videographer",
        "4*6 Photo (200 pics with velvet album)",
        "12*18 Photo + Frame",
        "A4 Mount laminated photo calendar",
        "Full cinematic video",
        "Wedding Highlights",
        "(All raw photos will be provided in pen drive)",
      ],
      note: "If Drone + Drone Pilot = ₨10,000 for one day",
    },
    {
      title: "Outside Valley Packages",
      prices: [
        { days: "One Day", price: "₨45,000" },
        { days: "Two Days", price: "₨75,000" },
        { days: "Three Days", price: "₨1,05,000" },
      ],
      includes: [
        "One Photographer",
        "One Videographer",
        "4*6 Photo (200 pics with velvet album)",
        "12*18 Photo + Frame",
        "A4 Mount laminated photo calendar",
        "Full cinematic video",
        "Wedding Highlights",
        "(All raw photos will be provided in pen drive)",
      ],
      note: "If Drone + Drone Pilot = ₨10,000 for one day",
    },
  ];

  return (
    <section id="wedding" className="bg-white">
      {/* ✅ Hero Section */}
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
            Capture your wedding memories with us.
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

        {/* ✅ Contact Buttons */}
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

      {/* ✅ Wedding Packages */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Wedding Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8"
              >
                <h4 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  {pkg.title}
                </h4>
                {/* Prices */}
                <div className="flex justify-center gap-6 mb-8">
                  {pkg.prices.map((p, i) => (
                    <div
                      key={i}
                      className="bg-sky-50 border border-sky-200 px-6 py-4 rounded-xl text-center"
                    >
                      <h5 className="text-lg font-medium text-gray-800">
                        {p.days}
                      </h5>
                      <p className="text-sky-600 font-bold text-xl mt-1">
                        {p.price}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-gray-700 text-base"
                    >
                      <FaCheckCircle className="text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <p className="text-gray-500 italic text-sm text-center border-t pt-4">
                  Note: {pkg.note}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Important Note (English + Nepali) */}
          <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              📢 Important Booking Information
            </h4>
            <p className="text-gray-700 text-base mb-2">
              50% of the total amount must be paid during booking. The remaining
              50% should be cleared on the wedding day. In case of cancellation,
              50% of the advance amount will be refundable.
            </p>
            <p className="text-gray-700 text-base italic">
              बुकिङ गर्दा जम्मा रकमको ५०% तिर्नु पर्नेछ र विवाहको दिनमा सम्पूर्ण
              रकम बुझाउनुपर्नेछ । यदि विवाह रद्द भयो भने अग्रिम रकमको ५०% मात्र
              फिर्ता दिइनेछ ।
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Gallery */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Our Wedding Moments
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <img
              key={idx}
              src={img.startsWith("http") ? img : `/${img}`}
              alt="Wedding event"
              className="rounded-xl shadow-lg object-cover h-72 w-full hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingSection;
