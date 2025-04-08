import FooterContact from './footercontacts'
import FooterSocial from './footersocials'

export default function footer() {
    return (
      <div>
        <div className="w-full flex-1 text-white flex flex-col items-center mt-60" style={{ fontFamily: 'Unbounded, sans-serif' }}>
        {/* Footer Form Section */}
        <div className="w-full flex flex-col md:flex-row rounded-3xl shadow-lg">
          {/* Footer Text */}
          <div className="w-1/2 ">
            <h1 className=" text-center relative right-25 top-20 text-white leading-tight flex flex-col">
             <span className="text-[156px]">Let’s</span><span className="text-[#CCFF00] absolute top-27 left-34 text-[156px] "> Talk!</span>
            </h1>
          </div>
          <div className="w-1/2">
            {/* Footer Form */}
          <form action="https://api.web3forms.com/submit" method="POST" className="w-full bg-[#171717] p-5 rounded-3xl shadow-xl text-sm" style={{ fontFamily: 'inter, sans-serif-400' }}>
            <h6 className='text-[12px] font-medium leading-6 text-[#888888] ' >Name</h6>
            <input type="hidden" name="access_key" value="a73e3a87-2bd3-40b6-9a3b-9f19d847aebf"></input>
            <input type="text" name='name' placeholder="Enter Your Full Name" className="w-full p-5 mb-4 bg-[#27272a] text-[#999999] rounded-3xl focus:outline-none" />
            <h6 className='text-[12px] font-medium leading-6 text-[#888888]'>Email</h6>
            <input type="email" name='email' placeholder="Example@gmail.com" className="w-full p-5 mb-4 bg-[#27272a] text-[#999999] rounded-3xl focus:outline-none" />
            <h6 className='text-[12px] font-medium leading-6 text-[#888888]'>Message</h6>
            <textarea placeholder="Write your Message Here" name='message' className="w-full p-5 bg-[#27272a] text-[#999999] rounded-3xl focus:outline-none h-32"></textarea>
            <button type="submit" className="w-full mt-6 py-4 bg-[#CCFF00] text-black font-bold rounded-2xl cursor-pointer hover:bg-white transition">
              Submit
            </button>
           </form>
            </div> 
          
        </div>
       </div>
       <FooterContact/>
       <FooterSocial/>
      </div>
      
    );
  }
  