import React, { useState } from "react";
import { MessageCircle, MapPin, X } from "lucide-react";

const StudioRental = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Image */}
      <div
        className="w-full h-200 bg-cover bg-center rounded-b-2xl shadow-lg"
        style={{ backgroundImage: "url('/sto3.jpg')" }}
      ></div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="p-5 bg-white rounded-2xl shadow-md">
              <h2 className="text-xl font-bold mb-3">Inquiry Now</h2>
              <p className="mb-3 text-gray-600">
                Book your studio session now or inquire for more details.
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
              <span>Samakhusi, Kathmandu, Tokha Road</span>
            </div>
          </div>
        </div>

        {/* Right Main Content */}
        <div className="lg:col-span-3 space-y-10">
          {/* Description */}
          <section>
            <h1 className="text-3xl font-bold mb-4">Studio Rental Services</h1>
            <p className="mb-3 text-gray-700">
              Our professional studio rental in Samakhusi, Kathmandu is perfect for photography, videography, and content creation. We provide a fully equipped space with lighting, cameras, and props to help you get the perfect shot.
            </p>
            <p className="text-gray-700">
              Whether you are a photographer, filmmaker, or influencer, renting our studio gives you access to high-quality equipment and a comfortable space without the hassle of buying or setting up expensive gear.
            </p>
          </section>

          {/* Why Rent */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Rent a Studio?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Professional space with controlled lighting.</li>
              <li>Access to high-quality cameras and equipment.</li>
              <li>Perfect for photography, videos, and content creation.</li>
              <li>Save on buying expensive equipment.</li>
              <li>Comfortable and private location for shoots.</li>
            </ul>
          </section>

          {/* Why Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Why Us?</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Fully equipped studio with professional gear.</li>
              <li>Flexible booking per hour.</li>
              <li>Affordable rates at NPR 2,500 per hour.</li>
              <li>Experienced staff available for assistance.</li>
              <li>Easy access in Samakhusi, Kathmandu, Tokha Road.</li>
              <li>Safe and clean environment for your shoots.</li>
            </ul>
          </section>

          {/* Studio Features */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Studio Features</h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Equipment</th>
                    <th className="border border-gray-300 px-4 py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">Cameras</td>
                    <td className="border px-4 py-2">DSLRs, Mirrorless, Professional Video Cameras</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Lighting</td>
                    <td className="border px-4 py-2">Softboxes, LED Panels, Ring Lights, Studio Lights</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Props & Backdrops</td>
                    <td className="border px-4 py-2">Various colors, textures, and creative props</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Audio</td>
                    <td className="border px-4 py-2">Microphones, Sound Recorders, Audio Accessories</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Tripods & Stabilizers</td>
                    <td className="border px-4 py-2">Professional Tripods, Gimbals, Slider Accessories</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rental Packages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Studio Rental Packages</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Per Hour: NPR 2,500 (includes studio + basic equipment)</li>
              <li>Additional equipment can be rented if required.</li>
              <li>Custom packages available for longer shoots.</li>
            </ul>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How is the rental process?</h3>
                <p className="text-gray-700">You can book online, call, or visit our studio in Samakhusi. ID verification is required.</p>
              </div>
              <div>
                <h3 className="font-semibold">Do you provide additional equipment?</h3>
                <p className="text-gray-700">Yes, cameras, lighting, and other props are available in the studio.</p>
              </div>
              <div>
                <h3 className="font-semibold">What if equipment is damaged?</h3>
                <p className="text-gray-700">Customers must cover repair or replacement costs according to our rental policy.</p>
              </div>
              <div>
                <h3 className="font-semibold">Where is your studio located?</h3>
                <p className="text-gray-700">Samakhusi, Kathmandu, Tokha Road.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-700">
              Our studio rental is ideal for photographers, videographers, and creators seeking professional space with full equipment. Book your slot today and elevate your content!
            </p>
          </section>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {openForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 relative">
            <button
              onClick={() => setOpenForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Studio Inquiry Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Full Name</label>
                <input type="text" className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input type="tel" className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="98XXXXXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input type="email" className="w-full border rounded-lg px-3 py-2 mt-1" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium">Rental Duration</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>Per Hour</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea className="w-full border rounded-lg px-3 py-2 mt-1" rows="3" placeholder="Any specific requirement…" />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudioRental;
