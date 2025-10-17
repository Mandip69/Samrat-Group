import React from "react";
import { motion } from "framer-motion";
import { FormInput, MessageCircle, Phone } from "lucide-react";

export default function Bartabanda() {
  return (
    <div className="bg-[#fffaf5] text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <img
          src="/images/bar7.jpg"
          alt="Bartabanda Ceremony"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide"
          >
            Bartabanda Ceremony Shoot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl"
          >
            Preserving the purity, rituals, and joy of a sacred milestone in cinematic detail.
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold text-[#b3832e] font-serif mb-6"
        >
          A Sacred Transition, Captured Forever
        </motion.h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
          Bartabanda is not just a ceremony — it’s a spiritual awakening.  
          Our team captures every sacred mantra, every proud smile, and every emotional moment in high cinematic detail.
          With creative storytelling and traditional sensitivity, we preserve the divine energy of your Bartabanda.
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-10">
          {[
            {
              title: "Cultural Sensitivity",
              desc: "We understand the rituals, capturing every holy moment with respect and precision.",
              img: "/images/bar1.jpg",
            },
            {
              title: "Cinematic Filming",
              desc: "4K drone shots, multi-camera setups, and artistic storytelling in every frame.",
              img: "/images/bar4.jpg",
            },
            {
              title: "Family Emotions",
              desc: "We immortalize the love, laughter, and tears of pride shared during the ceremony.",
              img: "/images/bar6.jpg",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#b3832e] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gradient-to-b from-[#fff8ee] to-[#fff1dc] py-20">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-[#b3832e] mb-10 font-serif">
          Recent Bartabanda Highlights
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
          {[
            "/images/bar2.jpg",
            "/images/bar3.jpg",
            "/images/bar5.jpg",
            "/images/bar8.jpg",
            "/images/bar9.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613647/zyn0yrqlsugh4dahbqra.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613997/oafuigilcomui3luvb6r.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613793/vwa049ezkldpjyucluqb.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760613918/xndkjyzfwbiromshqvfx.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614049/wms1qzfs3j3aluqyhbgx.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614096/msx7xrnqlr8viknnxiwt.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614549/yudvo1std1i21uzhvhco.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614585/yj37an1eog5ktkrriku9.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614641/mnxtr29eklecacinf1qv.jpg",
           "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760614641/mnxtr29eklecacinf1qv.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615247/z4mq6jbtxxkdoqof2yp3.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615475/wogusbtrhjrf1enxx8bp.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615310/uuhnyan4ps7hpgglpsep.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760615591/lxvouct3fvfu7yd0ypvw.jpg",
            "https://res.cloudinary.com/dpysgjsq3/image/upload/v1760678650/fddizx754euaqmtw7bo1.jpg",
           
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl shadow-lg h-60 w-full object-cover"
              alt="Bartabanda gallery"
            />
          ))}
        </div>
      </section>

      {/* Inquiry Section */}
      <section className="relative py-20 bg-[#b3832e]/10 text-center backdrop-blur-lg">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#b3832e] font-serif mb-6"
        >
          Book Your Bartabanda Shoot
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Make your son’s sacred journey unforgettable.  
          Fill our inquiry form or reach us directly via WhatsApp or Viber.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://forms.gle/your-google-form-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#b3832e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d59c4e] transition shadow-md"
          >
            <FormInput size={18} /> Inquiry Form
          </a>

          <a
            href="https://wa.me/9779841419740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition shadow-md"
          >
            <MessageCircle size={18} /> WhatsApp
          </a>

          <a
            href="viber://chat?number=%2B9779841419740"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-md"
          >
            <Phone size={18} /> Viber
          </a>
        </div>
      </section>
    </div>
  );
}
 