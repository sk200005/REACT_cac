import { useState } from "react";

export default function ChangeColor() {
  const [bgColor, setBgColor] = useState("bg-red-500");

  return (
    <div className={`w-full min-h-screen duration-300 ${bgColor}`}>
      
      {/* Bottom buttons */}
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-6 px-4 py-2 rounded-2xl bg-black">
          
          <button
            onClick={() => setBgColor("bg-red-500")}
            className="text-white"
          >
            Red
          </button>

          <button
            onClick={() => setBgColor("bg-green-500")}
            className="text-white"
          >
            Green
          </button>

          <button
            onClick={() => setBgColor("bg-orange-500")}
            className="text-white"
          >
            Orange
          </button>

        </div>
      </div>
    </div>
  );
}
