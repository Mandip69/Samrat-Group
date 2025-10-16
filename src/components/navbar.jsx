import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // --- Update active menu based on URL ---
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive("home");
    else if (path.startsWith("/services")) setActive("services");
    else if (path.startsWith("/rental")) setActive("rental");
    else if (path.startsWith("/training")) setActive("training");
    else if (path.startsWith("/service")) setActive("online");
    else if (path.startsWith("/portfolio")) setActive("portfolio");
    else if (path.startsWith("/contact")) setActive("contact");
  }, [location.pathname]);

  // --- Typewriter animation ---
  const services = [
    "WEDDING PACKAGES",
    "CAMERA RENTAL",
    "DRONE RENTAL",
    "STUDIO RENTAL",
    "OTHER SERVICES",
  ];
  const [displayText, setDisplayText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingInterval;
    if (charIndex < services[serviceIndex].length) {
      typingInterval = setInterval(() => {
        setDisplayText((prev) => prev + services[serviceIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      typingInterval = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 2000);
    }
    return () => clearInterval(typingInterval);
  }, [charIndex, serviceIndex, services]);

  const menuItems = [
    { name: "HOME", key: "home", href: "/" },
    {
      name: "SERVICES",
      key: "services",
      dropdown: [
        { name: "WEDDING PACKAGES", href: "/services/wedding" },
        
        { name: "EVENT COVERAGE ", href: "/services/event" },
        { name: "BARTABANDA SHOOT ", href: "/services/barta" },
        { name: "PASNI SHOOT ", href: "/services/pasni" },
        { name: "INDOOR AND OUTDOOR SHOOT ", href: "/services/indoor" },
         { name: "BRAND SHOOT ", href: "/services/Brand" },
         { name: "FRAMING AND LAMINATION ", href: "/services/framing" },
         
         { name: "OTHER SERVICES ", href: "/services/other" },
         
      ],
    },
    {
      name: "RENTAL",
      key: "rental",
      dropdown: [
        { name: "CAMERA RENTAL", href: "/rental/camera" },
        { name: "PROJECTOR RENTAL", href: "/rental/projector" },
        { name: "DRONE RENTAL", href: "/rental/drone" },
        { name: "STUDIO SET RENTAL", href: "/rental/studio" },
      ],
    },
    {
      name: "TRAINING",
      key: "training",
      dropdown: [
        { name: "PHOTOGRAPHY ", href: "/training/photography" },
        {name: "VIDEOGRAPHY", href: "/training/videography"},
        { name: "PHOTOSHOP", href: "/training/graphic" },
        { name: "VIDEO EDITING", href: "/training/video" },
        
        { name: "DRONE OPERATION", href: "/training/drone" },
        { name: "GIMBAL TRAINING", href: "/training/gimble" },
      ],
    },
    {
      name: "ONLINE SERVICES",
      key: "online",
      dropdown: [
        { name: "HOSTING & DOMAINS", href: "/service/web" },
        { name: "WEB DEVELOPMENT", href: "/service/webdev" },
        { name: "SOCIAL MEDIA MARKETING", href: "/service/social" },
        { name: "GRAPHIC DESIGN", href: "/service/graphic" },
      ],
    },
    { name: "GALLERY", key: "portfolio", href: "/portfolio" },
    { name: "CONTACT US", key: "contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-black/95 backdrop-blur-md text-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-800">
        <div className="w-full flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo + Name (fully left) */}
          <Link
            to="/"
            className="flex items-center space-x-3 no-underline"
            style={{ marginLeft: 0, paddingLeft: 0 }}
          >
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
            <h1 className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
              Samrat Movies Pvt. Ltd.
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <li key={item.key} className="relative">
                <div
                  className={`flex items-center space-x-1 px-2 py-1 cursor-pointer transition duration-200 ${
                    active === item.key
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "hover:text-sky-300"
                  }`}
                  onClick={() =>
                    item.dropdown
                      ? setOpenDropdown(
                          openDropdown === item.key ? null : item.key
                        )
                      : setActive(item.key)
                  }
                >
                  {item.dropdown ? (
                    <>
                      <span className="text-sm font-medium">{item.name}</span>
                      <ChevronDown size={14} />
                    </>
                  ) : (
                    <Link to={item.href} className="text-sm font-medium">
                      {item.name}
                    </Link>
                  )}
                </div>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.key && (
                  <div className="absolute top-full left-0 mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 w-56 z-50">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        to={drop.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-sky-400 transition"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/online"
              className="bg-sky-500 hover:bg-sky-400 px-5 py-2 rounded-lg font-semibold text-sm transition"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-sm transition"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B9779841419740"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold text-sm transition"
            >
              <FaViber className="w-4 h-4" />
              <span>Viber</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 px-6 py-4 space-y-2 border-t border-gray-800">
            {menuItems.map((item) => (
              <div key={item.key}>
                <div
                  className="flex items-center justify-between py-2 text-white hover:text-sky-300 cursor-pointer"
                  onClick={() => {
                    if (item.dropdown) {
                      setMobileDropdown(
                        mobileDropdown === item.key ? null : item.key
                      );
                    } else {
                      setActive(item.key);
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.dropdown ? (
                    <>
                      <span className="font-medium">{item.name}</span>
                      {mobileDropdown === item.key ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </>
                  ) : (
                    <Link to={item.href}>{item.name}</Link>
                  )}
                </div>

                {item.dropdown && mobileDropdown === item.key && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        to={drop.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-gray-300 hover:text-sky-400 text-sm"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="space-y-3 mt-4">
              <Link
                to="/online"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg font-semibold text-center transition"
              >
                Book Now
              </Link>
              <a
                href="https://wa.me/9779841419740"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold text-center transition"
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B9779841419740"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold text-center transition"
              >
                Viber
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SERVICES TICKER */}
      <div className="bg-white shadow-md w-full py-3 mt-[90px]">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 px-6">
          <span className="text-sky-500 font-semibold text-lg">
            OUR SERVICES →
          </span>
          <span className="text-gray-900 font-medium text-lg">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9841419740"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </>
  );
};

export default Navbar;
