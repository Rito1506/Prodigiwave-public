import { useState } from "react";

export default function SplitButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="inline-flex rounded-full overflow-hidden border border-[#CCFF00] bg-[#d7ff00] text-black font-medium text-sm cursor-pointer transition"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Text Side */}
      <div
        className={` px-6 py-3 transition-all ${
          hovered ? "border-r-4 border-black" : "border-transparent"
        }`}
      >
        <span className="Button-Font">Back to Home</span>
      </div>

      {/* Arrow Side */}
      <div
        className={`px-4 py-3 flex items-center justify-center transition-all ${
          hovered ? "border-l-4 border-black" : "border-transparent"
        }`}
      >
        <span
          className={`transition-transform duration-400 ${
            hovered ? "rotate-[45deg]" : ""
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>

        </span>
      </div>
    </div>
  );
}
