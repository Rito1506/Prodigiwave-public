export default function FooterContacts() {
  return (
    <div className="w-full bg-[#0d0d0d] text-white p-5 mt-10 rounded-3xl shadow-lg font-[inter] Paragraph_XS ">
      <div className=" w-full mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Contact Info Section */}
        <div className="w-1/2 pr-10 space-y-3 -top-3 left-6 ">
          {/* Email */}
          <div className="bg-[#1a1a1a] px-10 py-6 m rounded-3xl shadow-md relative w-full link link-hover">
            <span className="text-[#CCFF00] text-xl absolute "><img src="/mail.png" alt="" /></span>
            <p className="text-sm font-light mt-10 ">Prodigiwaveofficial@gmail.com</p>
          </div>
          {/* Phone */}
          <div className="bg-[#1a1a1a] px-10 py-5 rounded-3xl shadow-md relative w-full link link-hover">
            <span className="text-[#CCFF00] text-xl absolute "><img src="/phone.png" alt="" /></span>
            <p className="text-sm font-light mt-10 font-[] ">+91-7903768481</p>
          </div>
          {/* Address */}
          <div className="bg-[#1a1a1a] px-10 py-5  rounded-3xl shadow-md relative w-full link link-hover">
            <span className="text-[#CCFF00] text-xl absolute "><img src="/map.png" alt="" /></span>
            <p className="text-sm font-light mt-10">Noida, Uttar Pradesh 201301</p>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="w-1/3 flex gap-20 mt-10  md:mt-0">
          <div>
            <h4 className="text-[#CCFF00] text-xl mb-4 font-normal">Menu</h4>
            <ul className="space-y-4 font-light text-xs">
              <li className="link link-hover">Home</li>
              <li className="link link-hover">About</li>
              <li className="link link-hover">Services</li>
              <li className="link link-hover">Projects</li>
              <li className="link link-hover">Blog</li>
              <li className="link link-hover">Review</li>
              <li className="link link-hover">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#CCFF00] text-xl mb-4 font-normal">Services</h4>
            <ul className="space-y-4 font-light text-xs">
              <li>SEO</li>
              <li>Content Marketing</li>
              <li>Website Design</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#CCFF00] text-xl mb-4 font-normal">Other Pages</h4>
            <ul className="space-y-4 font-light text-xs">
              <li>License</li>
              <li>404</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
