import React, { useState } from "react";
import { MessageCircle, MapPin, X } from "lucide-react";

const DroneRental = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Image */}
      <div
        className="w-full h-96 bg-cover bg-center rounded-b-2xl shadow-lg"
        style={{ backgroundImage: "url('/dro.png')" }}
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
            <h1 className="text-3xl font-bold mb-4">
              Drone Rental Services in Nepal
            </h1>
            <p className="mb-3 text-gray-700">
              Looking for breathtaking aerial shots, event coverage, or
              professional filmmaking? Our drone rental service in Nepal
              provides you with high-quality drones for stunning visuals,
              photography, and videography at affordable rates.
            </p>
            <p className="text-gray-700">
              Whether you’re capturing landscapes, weddings, or creating
              promotional content, renting a drone is the best way to access
              premium equipment without the high upfront cost. We ensure safe,
              well-maintained, and easy-to-fly drones for your projects.
            </p>
          </section>

          {/* Why Rent */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why Rent a Drone in Nepal?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Capture cinematic aerial views.</li>
              <li>Perfect for weddings, travel, and promotional videos.</li>
              <li>Affordable access to high-end drones.</li>
              <li>No need to worry about storage or maintenance.</li>
              <li>Different models available for different needs.</li>
              <li>Try before buying your own drone.</li>
            </ul>
          </section>

          {/* Why Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why Us for Drone Rental?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Wide range of drones from beginner to professional.</li>
              <li>Flexible rental durations (day/week/month).</li>
              <li>Affordable packages with no hidden fees.</li>
              <li>Training and guidance available for beginners.</li>
              <li>Delivery or self-pickup in Kathmandu.</li>
              <li>Technical support during your rental period.</li>
              <li>Conveniently located at Samakhusi, Kathmandu.</li>
            </ul>
          </section>

          {/* Drone Types */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Drone Types and Their Features
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto border-collapse border border-gray-300 w-full text-sm">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">
                      Drone Type
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
                    <td className="border px-4 py-2">Beginner Drone</td>
                    <td className="border px-4 py-2">DJI Mini 2</td>
                    <td className="border px-4 py-2">
                      4K Camera, Lightweight, 31-min Flight
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Professional Drone</td>
                    <td className="border px-4 py-2">DJI Mavic 3</td>
                    <td className="border px-4 py-2">
                      5.1K Camera, 46 min Flight, Hasselblad Lens
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">FPV Drone</td>
                    <td className="border px-4 py-2">DJI FPV</td>
                    <td className="border px-4 py-2">
                      First-Person View, Racing-Ready
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Cinematic Drone</td>
                    <td className="border px-4 py-2">DJI Inspire 2</td>
                    <td className="border px-4 py-2">
                      6K RAW, Dual Camera, Pro Filmmaking
                    </td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Compact Drone</td>
                    <td className="border px-4 py-2">DJI Air 2S</td>
                    <td className="border px-4 py-2">
                      1-in Sensor, 5.4K Video, 31-min Flight
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rental Packages */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Drone Rental Packages
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Per Day: NPR 3,000 – 10,000 (depending on model)</li>
              <li>Per Week: NPR 15,000 – 50,000</li>
              <li>Per Month: NPR 40,000 – 120,000</li>
              <li>Custom packages available for film projects</li>
            </ul>
          </section>

          {/* Drone Rules */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Drone Flying Rules in Nepal
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Maximum altitude: 120 meters (400 ft) and max 500 m range.</li>
              <li>Keep visual line of sight; FPV requires a spotter.</li>
              <li>No dropping items or payloads from drones.</li>
              <li>
                Avoid flying within 150 m of crowds or assemblies of 1,000+
                people.
              </li>
              <li>Maintain at least 50 m from structures, vessels, and cars.</li>
              <li>
                No flying within 5 km of airports or 1 km of heritage,
                government, military, and VIP zones.
              </li>
              <li>
                Drones over 2 kg or for commercial use require CAAN registration
                and permits.
              </li>
              <li>
                Drones under 2 kg can fly below 200 ft on private property
                without CAAN permit (not in restricted zones).
              </li>
              <li>Night flying is prohibited unless specially permitted.</li>
            </ol>
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
                <h3 className="font-semibold">What if the drone is damaged?</h3>
                <p className="text-gray-700">
                  Customers must cover repair or replacement costs as per our
                  rental policy.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Where is your location?</h3>
                <p className="text-gray-700">We are at Samakhusi, Kathmandu.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>
            <p className="text-gray-700">
              Renting a drone in Nepal is the best option for stunning aerial
              photography, filmmaking, and event coverage. With affordable rates
              and professional models, we ensure you get the perfect drone for
              your needs. Please fly responsibly and within legal limits.
              Contact us today and capture the skies!
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
            <h2 className="text-2xl font-semibold mb-4">Drone Inquiry Form</h2>
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
                <label className="block text-sm font-medium">Drone Type</label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>Beginner Drone</option>
                  <option>Professional Drone</option>
                  <option>FPV Drone</option>
                  <option>Cinematic Drone</option>
                  <option>Compact Drone</option>
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
                  placeholder="Any specific requirement…"
                />
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

export default DroneRental;
