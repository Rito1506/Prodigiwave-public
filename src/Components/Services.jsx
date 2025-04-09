import React from "react";
import Navbar from "./navbar";
import ServiceCards from "./service_card";

export default function Services() {
    return (

        <div className="w-full bg-black text-white flex flex-col" >
              {/* Navbar */}
              <Navbar />
        
              {/* Navbar Container */}
              <div className="w-full h-[40vh] flex flex-col"> {/* Reduced height to bring content closer */}
                {/* Empty space for Navbar overlap */}
        
             {/* Heading Section */}
             <div className="flex-1 flex flex-col w-full mt-20">
             <h1 className="Heading_Inner_Pages ">Discover Our Services</h1>
             </div>
             </div>
             <div className="w-full grid relative">
                <div className="grid grid-cols-2 grid-rows-2 gap-2 m-10 items-center justify-center">
                    <ServiceCards/>
                    <ServiceCards/>
                    <ServiceCards/>
                    <ServiceCards/>
                </div>
             </div>
        </div>
    );
}