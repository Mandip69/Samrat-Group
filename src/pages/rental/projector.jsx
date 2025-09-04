import React, { useState } from "react";
import { MessageCircle, MapPin, X } from "lucide-react";

const ProjectorRental = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Image */}
      <div
        className="w-full h-96 bg-cover bg-center rounded-b-2xl shadow-lg"
        style={{ backgroundImage: "url('/pro.png')" }}
      ></div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="p-5 bg-white rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-3">Inquiry Now</h2>
              <p className="mb-3 text-gray-600">
                For quick booking and pricing details, contact us directly.
              </p>
              <button
                onClick={() => setOpenForm(true)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
              >
                Send Inquiry
              </button>
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 mt-4 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="p-5 bg-white rounded-2xl shadow-md flex items-center gap-3">
              <MapPin className="text-red-500" />
              <span>Samakhusi, Kathmandu</span>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-3 space-y-10">
          {/* Description */}
          <section>
            <h1 className="text-3xl font-bold mb-4">Projector Rental Services in Nepal</h1>
            <p className="mb-3 text-gray-700">
              Hosting an event, seminar, wedding, or business meeting in Nepal? 
              Our projector rental service offers high-quality projectors for clear visuals, 
              presentations, and big-screen experiences. Whether for indoor events or outdoor functions, 
              we have the right equipment for you.
            </p>
            <p className="text-gray-700">
              Renting a projector is cost-effective and hassle-free. 
              We provide reliable, well-maintained projectors with all necessary accessories, 
              so you can focus on your event without worrying about setup or equipment failure.
            </p>
          </section>

          {/* Why Rent */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Rent a Projector in Nepal?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Perfect for events, meetings, and weddings.</li>
              <li>Affordable alternative to buying expensive projectors.</li>
              <li>Access to high-lumen projectors for large gatherings.</li>
              <li>Portable and easy to set up anywhere.</li>
              <li>Variety of models for different purposes.</li>
              <li>No long-term storage or maintenance issues.</li>
            </ul>
          </section>

          {/* Why Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Us for Projector Rental?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wide selection of projectors (HD, 4K, Short-Throw, Portable).</li>
              <li>Flexible rental options (per day, week, month).</li>
              <li>Affordable rates with transparent pricing.</li>
              <li>Free setup assistance if required.</li>
              <li>Delivery or self-pickup in Kathmandu.</li>
              <li>Technical support during events.</li>
              <li>Conveniently located at Samakhusi, Kathmandu.</li>
            </ul>
          </section>

          {/* Projector Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projector Types and Their Features</h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Projector Type</th>
                    <th className="border border-gray-300 px-4 py-2">Model Example</th>
                    <th className="border border-gray-300 px-4 py-2">Features</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Standard Projector</td>
                    <td className="border px-4 py-2">Epson EB-S41</td>
                    <td className="border px-4 py-2">3300 Lumens, SVGA, HDMI Support</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">HD Projector</td>
                    <td className="border px-4 py-2">BenQ MH733</td>
                    <td className="border px-4 py-2">4000 Lumens, Full HD 1080p, Wireless Option</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">4K Projector</td>
                    <td className="border px-4 py-2">Optoma UHD50X</td>
                    <td className="border px-4 py-2">4K UHD, HDR, High Contrast</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Short-Throw Projector</td>
                    <td className="border px-4 py-2">ViewSonic PS501X</td>
                    <td className="border px-4 py-2">3500 Lumens, Short Distance Projection</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Portable Mini Projector</td>
                    <td className="border px-4 py-2">Anker Nebula Capsule</td>
                    <td className="border px-4 py-2">Compact, Battery Powered, HDMI/USB/Android</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rental Packages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Projector Rental Packages</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Per Day: NPR 2,000 – 5,000 (depending on model)</li>
              <li>Per Week: NPR 10,000 – 25,000</li>
              <li>Per Month: NPR 30,000 – 70,000</li>
              <li>Custom packages for long-term rentals available</li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How is the rental process?</h3>
                <p className="text-gray-700">You can book online or visit our Samakhusi office. ID verification is required.</p>
              </div>
              <div>
                <h3 className="font-semibold">Do you provide delivery?</h3>
                <p className="text-gray-700">Yes, delivery within Kathmandu valley is available, or you can self-pickup.</p>
              </div>
              <div>
                <h3 className="font-semibold">What if the projector is damaged?</h3>
                <p className="text-gray-700">Customers must cover repair or replacement costs as per our rental policy.</p>
              </div>
              <div>
                <h3 className="font-semibold">Where is your location?</h3>
                <p className="text-gray-700">We are located at Samakhusi, Kathmandu.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-700">
              Renting a projector in Nepal is the best option for events, meetings, 
              and presentations. With affordable rates, reliable service, and convenient location, 
              we make sure your event is successful. Contact us today to book your projector!
            </p>
          </section>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {openForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={22} />
            </button>

            <h2 className="text-2xl font-semibold mb-4">Projector Inquiry Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="98XXXXXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Projector Type</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>Standard Projector</option>
                  <option>HD Projector</option>
                  <option>4K Projector</option>
                  <option>Short-Throw Projector</option>
                  <option>Portable Mini Projector</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Rental Duration</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>Per Day</option>
                  <option>Per Week</option>
                  <option>Per Month</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  rows="3"
                  placeholder="Any specific requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectorRental;
