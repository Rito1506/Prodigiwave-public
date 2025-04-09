import FooterContact from './footercontacts';
import FooterSocial from './footersocials';

export default function Footer() {
  return (
    <div className="w-full text-white" style={{ fontFamily: 'Unbounded, sans-serif' }}>
      
      {/* Contact Form Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-8 xl:px-20 py-10 md:py-16 xl:py-20">

        {/* Left Heading */}
        <div className="w-full md:w-1/2 text-center md:text-left relative">
          <h1 className="leading-tight">
            <span className="text-[80px] md:text-[120px] xl:text-[156px] block">Let’s</span>
            <span className="text-[#CCFF00] text-[80px] md:text-[120px] xl:text-[156px] block md:absolute md:top-20 md:left-32">Talk!</span>
          </h1>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/2">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full bg-[#171717] p-5 md:p-6 xl:p-8 rounded-3xl shadow-xl text-sm"
            style={{ fontFamily: 'inter, sans-serif-400' }}
          >
            <input type="hidden" name="access_key" value="a73e3a87-2bd3-40b6-9a3b-9f19d847aebf" />

            {/* Name Field */}
            <div className="relative mb-6">
              <input
                type="text"
                name="name"
                required
                className="peer w-full bg-[#27272a] text-[#999999] p-5 pt-7 rounded-3xl focus:outline-none placeholder-transparent"
                placeholder="Full Name"
              />
              <label
                htmlFor="name"
                className="absolute left-5 top-3 text-[#888888] text-[12px] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[12px] peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#CCFF00]"
              >
                Name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                required
                className="peer w-full bg-[#27272a] text-[#999999] p-5 pt-7 rounded-3xl focus:outline-none placeholder-transparent"
                placeholder="you@example.com"
              />
              <label
                htmlFor="email"
                className="absolute left-5 top-3 text-[#888888] text-[12px] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[12px] peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#CCFF00]"
              >
                Email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative mb-6">
              <textarea
                name="message"
                required
                placeholder="Write your Message Here"
                className="peer w-full bg-[#27272a] text-[#999999] p-5 pt-7 rounded-3xl focus:outline-none h-32 placeholder-transparent resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-5 top-3 text-[#888888] text-[12px] transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-[12px] peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-[#CCFF00]"
              >
                Message
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-4 bg-[#CCFF00] text-black font-bold rounded-2xl hover:bg-white transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <FooterContact />
      <FooterSocial />
    </div>
  );
}
