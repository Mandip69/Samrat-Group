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

  // --- Update active menu based on current URL ---
  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActive("home");
    else if (path.startsWith("/services")) setActive("services");
    else if (path.startsWith("/rental")) setActive("rental");
    else if (path.startsWith("/service")) setActive("online");
    else if (path.startsWith("/portfolio")) setActive("portfolio");
    else if (path.startsWith("/contact")) setActive("contact");
  }, [location.pathname]);

  // --- Typewriter Animation State ---
  const services = [
    "Wedding Equipment",
    "Camera Rental",
    "Drone Rental",
    "Studio Training",
    "Other Services",
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
    { name: "Home", key: "home", href: "/" },
    {
      name: "Services",
      key: "services",
      dropdown: [
        { name: "Wedding shoot", href: "/services/wedding" },
        { name: "Training", href: "/services/tranning" },
        { name: "Studio Services", href: "/services/studio" },
      ],
    },
    {
      name: "Rental",
      key: "rental",
      dropdown: [
        { name: "Camera Rental", href: "/rental/camera" },
        { name: "Projector Rental", href: "/rental/projector" },
        { name: "Drone Rental", href: "/rental/drone" },
        { name: "Studio Rental", href: "/rental/studio" },
      ],
    },
    {
      name: "Online Services",
      key: "online",
      dropdown: [
        { name: "Hosting & Domain Register", href: "/service/web" },
        { name: "Web Development", href: "/service/webdev" },
        { name: "Social Media Marketing", href: "/service/social" },
        { name: "Graphic Design", href: "/service/graphic" },
      ],
    },
    { name: "Gallery", key: "portfolio", href: "/portfolio" },
    { name: "Contact Us", key: "contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
            <span className="text-2xl font-bold text-white">Studio</span>
          </div>

          {/* Middle - Menu (Desktop) */}
          <ul className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.key} className="relative">
                <div
                  className={`flex items-center space-x-1 px-2 py-1 cursor-pointer transition ${
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
                      <span>{item.name}</span>
                      <ChevronDown size={16} />
                    </>
                  ) : (
                    <Link to={item.href}>{item.name}</Link>
                  )}
                </div>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.key && (
                  <div className="absolute top-full mt-2 left-0 bg-gray-800 rounded-lg shadow-lg py-2 w-52 z-50">
                    {item.dropdown.map((drop, i) => (
                      <Link
                        key={i}
                        to={drop.href}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-sky-300 transition"
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

          {/* Right - Actions (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/online"
              className="bg-sky-500 hover:bg-sky-400 px-5 py-2 rounded-lg font-semibold transition"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/9779841419740 "
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="viber://chat?number=%2B9779812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition"
            >
              <FaViber className="w-5 h-5" />
              <span>Viber</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[72px] left-0 w-full bg-gray-800 px-6 py-4 space-y-2 z-50">
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
                      <span>{item.name}</span>
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
                        className="block py-1 text-gray-300 hover:text-sky-300"
                      >
                        {drop.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <div className="space-y-2 mt-3">
              <Link
                to="/online"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg font-semibold transition block text-center"
              >
                Book Now
              </Link>
              <a
                href="https://wa.me/9779841419740 "
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition block text-center"
              >
                WhatsApp
              </a>
              <a
                href="viber://chat?number=%2B9779841419740 "
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-semibold transition block text-center"
              >
                Viber
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SERVICES TICKER (Typewriter effect) */}
      <div className="bg-white shadow-md w-full py-3 mt-[72px]">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 px-6">
          <span className="text-sky-500 font-semibold text-lg">
            Our Services →
          </span>
          <span className="text-gray-900 font-medium text-lg">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9841419740 "
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
