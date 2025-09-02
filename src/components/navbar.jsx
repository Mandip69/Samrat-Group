import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      }, 100); // typing speed
    } else {
      // pause before moving to next word
      typingInterval = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }, 2000); // 2s pause after full word
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, serviceIndex, services]);

  const menuItems = [
    { name: "Home", key: "home", href: "/" },
    {
      name: "Services",
      key: "services",
      dropdown: [
        { name: "Wedding", href: "/services/wedding" },
        { name: "Class", href: "/services/class" },
        { name: "Movie Studio Services", href: "/services/studio" },
      ],
    },
    {
      name: "Rental",
      key: "rental",
      dropdown: [
        { name: "Camera", href: "/rental/camera" },
        { name: "Projector", href: "/rental/projector" },
        { name: "Drone", href: "/rental/drone" },
        { name: "Other", href: "/rental/other" },
      ],
    },
    { name: "Portfolio", key: "portfolio", href: "/portfolio" },

    { 
        name: "Online Services",
         key: "online", 
    dropdown: [
        { name: "Hosting and Domain Regsiter", href: "/online Services/domain" },
        { name: "Web development", href: "/online Services/web" },
        { name: "Social Media Marking", href: "/online Services/socail" },
        { name: "Graphic Design", href: "/rental/Graphic" },
      ], },
    { name: "Contact Us", key: "contact", href: "/contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left - Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-white">Studio</span>
          </div>

          {/* Middle - Menu (Desktop) */}
          <ul className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <li
                key={item.key}
                className="relative group"
                onMouseEnter={() =>
                  item.dropdown ? setOpenDropdown(item.key) : null
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href || "#"}
                  onClick={() => setActive(item.key)}
                  className={`flex items-center space-x-1 px-2 py-1 transition ${
                    active === item.key
                      ? "text-sky-400 border-b-2 border-sky-400"
                      : "hover:text-sky-300"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown size={16} />}
                </a>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.key && (
                  <div className="absolute top-full mt-2 left-0 bg-gray-800 rounded-lg shadow-lg py-2 w-48">
                    {item.dropdown.map((drop, i) => (
                      <a
                        key={i}
                        href={drop.href}
                        className="block px-4 py-2 hover:bg-gray-700 hover:text-sky-300 transition"
                      >
                        {drop.name}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Right - Book Now (Desktop) */}
          <button className="hidden md:block bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg font-semibold transition">
            Book Now
          </button>

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
          <div className="md:hidden bg-gray-800 px-6 py-4 space-y-2">
            {menuItems.map((item) => (
              <div key={item.key}>
                <a
                  href={item.href || "#"}
                  className="block py-2 text-white hover:text-sky-300"
                  onClick={() => {
                    setActive(item.key);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 space-y-1">
                    {item.dropdown.map((drop, i) => (
                      <a
                        key={i}
                        href={drop.href}
                        className="block py-1 text-gray-300 hover:text-sky-300"
                      >
                        {drop.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full bg-sky-500 hover:bg-sky-400 px-4 py-2 rounded-lg font-semibold transition mt-2">
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* SERVICES TICKER (Typewriter effect) */}
      <div className="bg-white shadow-md w-full py-3 mt-[72px]">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 px-6">
          {/* Left fixed text */}
          <span className="text-sky-500 font-semibold text-lg">
            Our Services →
          </span>

          {/* Typewriter animation text */}
          <span className="text-gray-900 font-medium text-lg">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
