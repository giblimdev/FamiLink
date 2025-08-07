// src/components/Logo.jsx
import React from "react";

export default function Logo() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          GrandConnect
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-2 italic">
          ou FamiLink
        </p>
        <p className="text-base md:text-lg text-gray-600 font-medium">
          L’assistant qui rapproche les générations
        </p>
      </div>
    </div>
  );
}
