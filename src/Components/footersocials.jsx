export default function FooterSocials() {
  return (
    <>
      <div className="w-full text-white flex flex-col items-center " style={{ fontFamily: 'Unbounded, sans-serif' }}>
        <div className="w-full flex bg-[#0d0d0d] text-white p-20 mt-10 rounded-3xl shadow-lg ">
            <div className="w-full flex flex-col items-center ">
              <div className="flex"><p className="text-[#CCFF00] m-3">Follow Us:</p>
              </div>
              <div className="flex justify-space-between space-x-8">
                <a href="https://www.facebook.com/profile.php?id=61550662513810"><img src="/facebook.png" alt="" /></a>
                <a href="https://x.com/the_Shashank810"><img src="/twitter.png" alt="" /></a>
                <a href="https://www.instagram.com/prodigiwave/"><img src="/instagram.png" alt="" /></a>
                <a href=""><img src="/pinterest.png" alt="" /></a>
                <a href="https://api.whatsapp.com/send/?phone=917903768481&text&type=phone_number&app_absent=0"><img src="/whatsapp.png" alt="" /></a>
              </div>
            </div>
         </div>
      </div>
      <div className="flex text-xs justify-end mt-10"><p className="">@designed by Rito@1506</p></div>
    </>
  )
}