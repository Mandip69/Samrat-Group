import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  // Active menu highlight
  const [active, setActive] = useState("home");
  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") {
      setActive("home");
    } else if (currentPath.startsWith("/services")) {
      setActive("services");
    } else if (currentPath.startsWith("/rental")) {
      setActive("rental");
    } else if (currentPath.startsWith("/online")) {
      setActive("online");
    } else if (currentPath.startsWith("/portfolio")) {
      setActive("portfolio");
    } else if (currentPath.startsWith("/contact")) {
      setActive("contact");
    }
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", key: "home", href: "/" },
    {
      name: "Services",
      key: "services",
      dropdown: [
        { name: "Photography", href: "/services/photography" },
        { name: "Videography", href: "/services/videography" },
        { name: "Editing", href: "/services/editing" },
      ],
    },
    {
      name: "Rental",
      key: "rental",
      dropdown: [
        { name: "Camera Rental", href: "/rental/camera" },
        { name: "Lens Rental", href: "/rental/lens" },
        { name: "Lighting Rental", href: "/rental/lighting" },
      ],
    },
    { name: "Online Booking", key: "online", href: "/online" },
    { name: "Portfolio", key: "portfolio", href: "/portfolio" },
    { name: "Contact", key: "contact", href: "/contact" },
  ];

  // Close mobile menu after clicking a link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <img src="/logo.png" alt="" />
        <Link
          to="/"
          className="text-4xl font-bold text-sky-400 hover:text-sky-300 transition"
          onClick={handleLinkClick}
        >
          Samrat Group
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.key)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href || "#"}
                className={`flex items-center space-x-1 px-2 py-1 transition ${
                  active === item.key
                    ? "text-sky-400 border-b-2 border-sky-400"
                    : "hover:text-sky-300"
                }`}
              >
                <span>{item.name}</span>
                {item.dropdown &&
                  (openDropdown === item.key ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </Link>

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.key && (
                <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
                  {item.dropdown.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        to={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Book Now Button */}
          <li>
            <Link
              to="/book"
              className="ml-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow transition"
            >
              Book Now
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-gray-800">
          {menuItems.map((item) => (
            <li key={item.key} className="border-b border-gray-700">
              <div
                className="flex items-center justify-between px-4 py-3"
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === item.key ? null : item.key
                  )
                }
              >
                <Link
                  to={item.href || "#"}
                  className={`${
                    active === item.key ? "text-sky-400" : "hover:text-sky-300"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
                {item.dropdown &&
                  (mobileDropdown === item.key ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  ))}
              </div>

              {/* Mobile Dropdown */}
              {item.dropdown && mobileDropdown === item.key && (
                <ul className="bg-gray-700">
                  {item.dropdown.map((subItem, idx) => (
                    <li key={idx}>
                      <Link
                        to={subItem.href}
                        className="block px-6 py-2 hover:bg-gray-600"
                        onClick={handleLinkClick}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Book Now Button in Mobile */}
          <li className="px-4 py-3">
            <Link
              to="/book"
              className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg shadow transition"
              onClick={handleLinkClick}
            >
              Book Now
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
