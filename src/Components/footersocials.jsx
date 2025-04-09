export default function FooterSocials() {
  return (
    <>
      <div className="w-full text-white flex flex-col items-center" style={{ fontFamily: 'Unbounded, sans-serif' }}>
        <div className="w-full flex bg-[#0d0d0d] text-white px-6 py-10 md:p-20 mt-10 rounded-3xl shadow-lg">
          <div className="w-full flex flex-col items-center space-y-6">
            {/* Follow Us Label */}
            <div>
              <p className="text-[#CCFF00] text-sm md:text-base">Follow Us:</p>
            </div>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { href: "https://www.facebook.com/profile.php?id=61550662513810", src: "/facebook.png", alt: "Facebook" },
                { href: "https://x.com/the_Shashank810", src: "/twitter.png", alt: "Twitter" },
                { href: "https://www.instagram.com/prodigiwave/", src: "/instagram.png", alt: "Instagram" },
                { href: "", src: "/pinterest.png", alt: "Pinterest" },
                { href: "https://api.whatsapp.com/send/?phone=917903768481&text&type=phone_number&app_absent=0", src: "/whatsapp.png", alt: "WhatsApp" },
              ].map(({ href, src, alt }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 transform hover:scale-110 hover:brightness-125"
                >
                  <img src={src} alt={alt} className="w-6 md:w-8 cursor-pointer" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Credit with enhanced styling */}
<div className="flex justify-center md:justify-end mt-6 px-6 md:px-20">
  <p className="text-[11px] sm:text-xs text-gray-400 tracking-wider font-mono italic">
    <span className="inline-block mr-1">✦</span>
    designed by{" "}
    <a
      href="https://github.com/Rito1506"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-[#CCFF00] via-white to-[#CCFF00] bg-clip-text text-transparent font-semibold hover:underline underline-offset-4 transition-all duration-300 hover:tracking-wide hover:skew-x-2"
    >
      Rohit Kumar
    </a>
    <span className="inline-block ml-1">✦</span>
  </p>
</div>
    </>
  );
}
