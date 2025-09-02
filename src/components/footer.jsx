import React from "react";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src="/logo.png" alt="Studio Logo" className="h-16 w-auto mb-4" />
          <p className="text-gray-400 mb-4">
           Samrat Movies Pvt. Ltd (Nepal Wedding Gallery) offers a high quality Photography & Videography Services. Our Wedding shoots are most important events of your life and our team puts in great effort at capturing all the emotions and relationships and narrating your story through portraits & Albums. <br /> <br />

You can also make a style statement, our team is skilled at commercial, lifestyle and Fashion Photography as well as Documentary, Music Video Shoots, Concerts, Stage Programs, Sports, Events etc and Editing with better color corrections.
          </p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-sky-400"><Facebook /></a>
            <a href="#" className="hover:text-pink-400"><Instagram /></a>
            <a href="#" className="hover:text-red-500"><Youtube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/" className="hover:text-sky-400">Home</a></li>
            <li><a href="/services" className="hover:text-sky-400">Services</a></li>
            <li><a href="/rental" className="hover:text-sky-400">Rental</a></li>
            <li><a href="/portfolio" className="hover:text-sky-400">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="/services/wedding" className="hover:text-sky-400">Wedding Equipment</a></li>
            <li><a href="/services/class" className="hover:text-sky-400">Studio Training</a></li>
            <li><a href="/rental/camera" className="hover:text-sky-400">Camera Rental</a></li>
            <li><a href="/rental/drone" className="hover:text-sky-400">Drone Rental</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center mb-2 text-gray-400">
            <MapPin className="mr-2" /> <span>Tokha road, Samakhusi, Kathmandu
Nepa</span>
          </div>
          <div className="flex items-center mb-2 text-gray-400">
            <Phone className="mr-2" /> <span>01-4380056, +977- 9841419740, 9840797919, 9808598261</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Mail className="mr-2" /> <span> samratmovies197@gmail.com</span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
