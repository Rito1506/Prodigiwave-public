import { useState } from "react";

export default function FooterContacts() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className="w-full bg-[#0d0d0d] text-white p-5 mt-10 rounded-3xl shadow-lg font-[inter] Paragraph_XS">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 space-y-5">
          <div className="bg-[#1a1a1a] px-10 py-6 rounded-3xl shadow-md relative link link-hover">
            <span className="absolute top-5 left-5">
              <img src="/mail.png" alt="Mail" className="w-6 h-6" />
            </span>
            <p className="text-sm font-light mt-10">Prodigiwaveofficial@gmail.com</p>
          </div>

          <div className="bg-[#1a1a1a] px-10 py-6 rounded-3xl shadow-md relative link link-hover">
            <span className="absolute top-5 left-5">
              <img src="/phone.png" alt="Phone" className="w-6 h-6" />
            </span>
            <p className="text-sm font-light mt-10">+91-7903768481</p>
          </div>

          <div className="bg-[#1a1a1a] px-10 py-6 rounded-3xl shadow-md relative link link-hover">
            <span className="absolute top-5 left-5">
              <img src="/map.png" alt="Map" className="w-6 h-6" />
            </span>
            <p className="text-sm font-light mt-10">Noida, Uttar Pradesh 201301</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-between gap-10 md:gap-16">

          {/* Menu */}
          <div className="w-full md:w-auto">
            <button
              className="flex justify-between items-center w-full md:block text-left"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <h4 className="Heading_5 text-[#CCFF00] mb-3">Menu</h4>
              <span className="md:hidden text-[#CCFF00] text-lg">{menuOpen ? "-" : "+"}</span>
            </button>
            <ul className={`space-y-3 transition-all duration-300 overflow-hidden ${menuOpen || window.innerWidth >= 768 ? 'max-h-96' : 'max-h-0'}`}>
              <li className="link link-hover">Home</li>
              <li className="link link-hover">About</li>
              <li className="link link-hover">Services</li>
              <li className="link link-hover">Projects</li>
              <li className="link link-hover">Blog</li>
              <li className="link link-hover">Review</li>
              <li className="link link-hover">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-auto">
            <button
              className="flex justify-between items-center w-full md:block text-left"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              <h4 className="Heading_5 text-[#CCFF00] mb-3">Services</h4>
              <span className="md:hidden text-[#CCFF00] text-lg">{servicesOpen ? "-" : "+"}</span>
            </button>
            <ul className={`space-y-3 transition-all duration-300 overflow-hidden ${servicesOpen || window.innerWidth >= 768 ? 'max-h-96' : 'max-h-0'}`}>
              <li className="link link-hover">SEO</li>
              <li className="link link-hover">Content Marketing</li>
              <li className="link link-hover">Website Design</li>
              <li className="link link-hover">Social Media Marketing</li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="w-full md:w-auto">
            <button
              className="flex justify-between items-center w-full md:block text-left"
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              <h4 className="Heading_5 text-[#CCFF00] mb-3">Other Pages</h4>
              <span className="md:hidden text-[#CCFF00] text-lg">{pagesOpen ? "-" : "+"}</span>
            </button>
            <ul className={`space-y-3 transition-all duration-300 overflow-hidden ${pagesOpen || window.innerWidth >= 768 ? 'max-h-96' : 'max-h-0'}`}>
              <li className="link link-hover">License</li>
              <li className="link link-hover">404</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
