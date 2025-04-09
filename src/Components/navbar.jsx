import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Define tab labels and their routes
  const tabRoutes = {
    HOME: "/",
    ABOUT: "/about",
    SERVICES: "/services",
    PROJECTS: "/projects",
    REVIEWS: "/reviews",
    BLOGS: "/blogs",
    CONTACT: "/contact",
  };

  // Detect current active tab based on URL
  const currentPath = location.pathname;
  const activeTab = Object.keys(tabRoutes).find(
    (key) => tabRoutes[key] === currentPath
  ) || "HOME";

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm text-white shadow-md" style={{ fontFamily: 'Unbounded, sans-serif' }}>
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* Logo */}
        <div className="flex-1">
          <img className="h-10" src="/logo.png" alt="Prodigiwave Logo" />
        </div>

        {/* Desktop Nav Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="Navbar Nav flex space-x-6 p-3 text-[12px] border border-[#222222] bg-[#0a0a0a] rounded-full">
            {Object.keys(tabRoutes).map((tab) => (
              <Link
                key={tab}
                to={tabRoutes[tab]}
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab ? "bg-[#384036] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"
                }`}
              >
                {tab}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="z-50 focus:outline-none relative w-8 h-8 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden bg-[#0D0D0D] px-6 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="Navbar Nav flex flex-col items-center space-y-4 py-4 text-xs font-light border border-[#CCFF00] rounded-2xl bg-[#0a0a0a]">
          {Object.keys(tabRoutes).map((tab) => (
            <Link
              key={tab}
              to={tabRoutes[tab]}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeTab === tab ? "bg-[#384036] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {tab}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
