import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close mobile menu on outside click
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
        {/* Left: Logo */}
        <div className="flex-1">
          <img className="h-10" src="/logo.png" alt="Prodigiwave Logo" />
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden md:flex  absolute left-1/2 transform -translate-x-1/2">
          <div className="Navbar Nav flex space-x-6 p-3 text-[12px] border border-[#222222] bg-[#0a0a0a] rounded-full">
            {["HOME", "ABOUT", "SERVICES", "PROJECTS", "REVIEWS", "BLOGS", "CONTACT"].map((tab) => (
              <a
                key={tab}
                href="#"
                className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                  activeTab === tab ? "bg-[#384036] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Mobile Hamburger */}
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

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`transition-all duration-500 ease-in-out overflow-hidden md:hidden bg-[#0D0D0D] px-6 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="Navbar Nav flex flex-col items-center space-y-4 py-4 text-xs font-light border border-[#CCFF00] rounded-2xl bg-[#0a0a0a]">
          {["HOME", "ABOUT", "SERVICES", "PROJECTS", "REVIEWS", "BLOGS", "CONTACT"].map((tab) => (
            <a
              key={tab}
              href="#"
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                activeTab === tab ? "bg-[#384036] text-[#CCFF00]" : "text-white hover:text-[#CCFF00]"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setMenuOpen(false);
              }}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
