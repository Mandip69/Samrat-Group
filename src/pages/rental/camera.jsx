import React, { useState } from "react";
import { MessageCircle, MapPin, X } from "lucide-react";

const CameraRental = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Image */}
      <div className="w-full rounded-b-2xl shadow-lg overflow-hidden">
        <img
          src="https://res.cloudinary.com/dpysgjsq3/image/upload/v1760515866/siemmlibbzp9vpuwqpki.jpg"
          alt="Camera Rental Service in Nepal"
          className="w-full h-auto object-contain md:object-cover"
        />
      </div>

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

              {/* Google Form Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeLg_UHpkeH9HRU2MunfflUiCSf77DhqcN4CEArGQpr9gPr7g/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 text-center"
              >
                Send Inquiry
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/9779841419740"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 mt-4 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>

              {/* Viber Button */}
              <a
                href="viber://chat?number=+9779841419740"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 mt-4 bg-purple-600 text-white py-2 px-4 rounded-xl hover:bg-purple-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.5 0h-19A2.5 2.5 0 0 0 0 2.5v19C0 22.43.57 23 1.5 23H6v1.49c0 .36.43.55.71.29L11 23h10.5a2.5 2.5 0 0 0 2.5-2.5v-19A2.5 2.5 0 0 0 21.5 0Zm.5 20.5a.5.5 0 0 1-.5.5H10.7l-2.2 2.09V21H1.5a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5ZM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm.01 12.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11Z" />
                </svg>
                Viber Us
              </a>
            </div>

            {/* Location */}
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
            <h1 className="text-3xl font-bold mb-4">
              Camera Rental Services in Nepal
            </h1>
            <p className="mb-3 text-gray-700">
              Looking to capture your travel memories, professional shoots, or
              events in Nepal? Our camera rental service provides high-quality
              cameras and accessories at affordable rates. Whether you are a
              traveler, filmmaker, or event organizer, we have the perfect gear
              for your needs.
            </p>
            <p className="text-gray-700">
              Save money by renting instead of buying expensive equipment. We
              ensure every camera is well-maintained, tested, and ready to
              deliver excellent performance for your photography and videography
              projects.
            </p>
          </section>

          {/* Why Rent */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why Rent a Camera in Nepal?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Capture stunning landscapes without carrying heavy gear from
                abroad.
              </li>
              <li>Affordable rental compared to purchasing new cameras.</li>
              <li>Access to the latest models and professional-grade equipment.</li>
              <li>Perfect for short-term projects, weddings, and travel shoots.</li>
              <li>Support from local experts for setup and guidance.</li>
              <li>No hassle of long-term maintenance and storage.</li>
            </ul>
          </section>

          {/* Why Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why Us for Camera Rental?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wide range of DSLR, Mirrorless, and Cinema cameras.</li>
              <li>Flexible rental duration (per day, week, or month).</li>
              <li>Affordable rates with no hidden charges.</li>
              <li>Well-maintained and fully tested equipment.</li>
              <li>Delivery or self-pickup options available in Kathmandu.</li>
              <li>Friendly support team to guide your choice.</li>
              <li>Located conveniently at Samakhusi, Kathmandu.</li>
            </ul>
          </section>

          {/* Camera Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Camera Types and Their Features
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Camera Type
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Model Example
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Features
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">DSLR</td>
                    <td className="border px-4 py-2">Nikon D7500</td>
                    <td className="border px-4 py-2">
                      Full-frame, 30MP, 4K Video, Low Light Performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">DSLR</td>
                    <td className="border px-4 py-2">Canon 80D</td>
                    <td className="border px-4 py-2">
                      Full-frame, 30MP, 4K Video, Low Light Performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">DSLR</td>
                    <td className="border px-4 py-2">Sony 2500D</td>
                    <td className="border px-4 py-2">
                   Full-frame, 30MP, 4K Video, Low Light Performance
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">DSLR</td>
                    <td className="border px-4 py-2">Blackmagic 6K</td>
                    <td className="border px-4 py-2">
                      Super 35 Sensor, RAW & ProRes, 13 Stops DR
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rental Packages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Camera Rental Packages
            </h2>
            <p className="text-gray-700">
              Please contact us for customized pricing. Thank you!
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How is the rental process?</h3>
                <p className="text-gray-700">
                  You can book online or visit our Samakhusi office. ID
                  verification is required.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Do you provide delivery?</h3>
                <p className="text-gray-700">
                  Yes, delivery within Kathmandu valley is available, or you can
                  self-pickup.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">What if the camera is damaged?</h3>
                <p className="text-gray-700">
                  Customers must cover repair or replacement costs as per our
                  rental policy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Where is your location?</h3>
                <p className="text-gray-700">
                  We are located at Samakhusi, Kathmandu.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-700">
              Renting a camera in Nepal is the smartest choice for travelers,
              creators, and professionals who want top-quality equipment without
              the high cost. Visit us at Samakhusi, Kathmandu, or contact us on
              WhatsApp to book your gear today!
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

            <h2 className="text-2xl font-semibold mb-4">Camera Inquiry Form</h2>
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
                  placeholder="9841419740"
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
                <label className="block text-sm font-medium">Camera Type</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>DSLR</option>
                  <option>Mirrorless</option>
                  <option>Cinema Camera</option>
                  <option>Action Camera</option>
                  <option>Drone Camera</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Rental Duration
                </label>
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

export default CameraRental;
