import React from "react";


export default function ServiceCards() {
    return (
        <>
        <div className="flex flex-col bg-[#1F1D1D]  rounded-3xl p-5 space-y-5">
            <a href=""><img src="/facebook.png" alt="" /></a>
            <h3 className="Heading_3 ">Our Services</h3>
            <p className="Paragraph_XS opacity-[0.6] text-balance">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem aut est tempora error laborum illum! Doloremque, ipsum consequatur alias sint sapiente eveniet nulla reiciendis aliquam, assumenda sunt, quisquam atque mollitia!</p>
            <div className="flex flex-row space-x-5">
            <span className="font-[unbounded] text-[12px]">LEARN MORE</span>
            <a href="" className=" p-1 border-2 rounded-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg></a>
            </div>
        </div>
        </>
        
    );
}