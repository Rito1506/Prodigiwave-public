import Navbar from "./navbar";
import Footer from "./footer";
import CustomButton from "./custombutton";


export default function Header() {
  return (
    <div className="w-full bg-black text-white flex flex-col" >
      {/* Navbar */}
      <Navbar />

      {/* Heading Container */}
      <div className="w-full h-[65vh] flex flex-col"> {/* Reduced height to bring content closer */}
        {/* Empty space for Navbar overlap */}
        <div className="flex-1"></div>
        
        {/* Heading Section */}
        <div className="flex-1 flex flex-col w-full">
          <h1 className="Body_XXL Heading_1 text-[#CCFF00]">Ooops!</h1>
          <div className=""><p className=" my-5 Paragraph_S">
            404 Error: Looks like you've hit a dead end. Don't worry, our web ninjas are on the case to bring you back to safety!
          </p></div>
        </div>
        
        {/* Back to Home Button */}
        <div className="flex flex-1 text-center items-center justify-center ">
          <CustomButton/>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}
