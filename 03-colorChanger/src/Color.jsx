import { useState } from "react";

export default function ChangeColor() {
  // 1. Define the state for the background color
  const [bgColor, setBgColor] = useState("bg-red-500");

  return (
    // 2. Use the state variable in the className to dynamically update the color
    <div className={`w-full min-h-screen duration-300 ${bgColor}`}>
      
      <div className="fixed bottom-12 inset-x-0 flex justify-center">
        <div className="flex gap-6 px-4 py-2 rounded-2xl bg-black">
          
          {/* 3. Update the state when the button is clicked */}
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

        </div>
      </div>
    </div>
  );
}