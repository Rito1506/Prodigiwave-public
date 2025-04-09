import Navbar from "./navbar";
import Footer from "./footer";
import CustomButton from "./custombutton";

export default function Header() {
  return (
    <div className="w-full bg-black text-white flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Heading Container */}
      <div className="w-full flex-1 flex flex-col justify-center items-center xl:px-0 md:px-6 px-4 py-10 md:py-16 xl:py-20">
        
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="Body_XXL Heading_1 text-[#CCFF00]">Ooops!</h1>
          <p className="max-w-[750px] mx-auto my-5 Paragraph_S text-pretty opacity-[0.7]">
            404 Error: Looks like you've hit a dead end. Don't worry, our web ninjas are on the case to bring you back to safety!
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="mt-8">
          <CustomButton />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
