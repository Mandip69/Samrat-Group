import React from "react";
import { Gift, IdCard, BriefcaseBusiness, Heart } from "lucide-react";

const OtherServices = () => {
  const services = [
    {
      title: "Business Card Design & Printing",
      desc: "Make a lasting impression with professional business cards — available in matte, glossy, or textured finishes.",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760594008/zr1jcyp68hdcwpn2usau.png",
      icon: <BriefcaseBusiness className="text-sky-500" size={40} />,
    },
    {
      title: "ID Card & Badge Making",
      desc: "We design and print custom ID cards for companies, schools, and events — durable, stylish, and high-quality.",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760594026/mxlwqxz8lp61zqrsvfhi.png",
      icon: <IdCard className="text-purple-500" size={40} />,
    },
    {
      title: "Token of Love & Personalized Gifts",
      desc: "From custom photo gifts to beautiful decorative frames — express your emotions with our personalized creations.",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760594342/o9xjtire63qvolthfeu3.jpg",
      icon: <Heart className="text-rose-500" size={40} />,
    },
    {
      title: "Certificates, Labels & Badges",
      desc: "We create certificates, labels, and badges for offices, events, and schools — precise, elegant, and long-lasting.",
      img: "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760594050/wk5u8qdgcfoqibjadtlo.png",
      icon: <Gift className="text-green-500" size={40} />,
    },
  ];

  return (
    <section id="other-services" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-5 tracking-tight">
            Other Studio Services
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-xl leading-relaxed">
            Beyond photography and frames, we provide a wide range of creative
            and personalized printing services — crafted with care, design, and
            professional finishing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-center gap-10 bg-gray-50 hover:bg-gray-100 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="relative w-full sm:w-80 h-72 flex justify-center items-center overflow-hidden rounded-2xl bg-white shadow-md">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-contain w-full h-full transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x400.png?text=Image+Unavailable";
                  }}
                />
              </div>

              {/* Text */}
              <div className="text-center sm:text-left space-y-5">
                <div className="flex justify-center sm:justify-start items-center gap-4">
                  {service.icon}
                  <h3 className="text-3xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-24">
          <h4 className="text-2xl text-gray-700 mb-6 font-medium">
            Explore more of our creative work and custom products
          </h4>
          <button
            onClick={() =>
              window.open("https://samrat-frame.vercel.app/", "_blank")
            }
            className="bg-sky-600 hover:bg-sky-700 text-white px-14 py-5 rounded-xl shadow-xl transition-all font-semibold text-xl tracking-wide"
          >
            Visit Our Website
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default OtherServices;
