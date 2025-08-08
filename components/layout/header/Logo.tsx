// src/components/Logo.tsx
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative group cursor-pointer">
        {/* Effet de glow en arrière-plan */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>

        {/* Logo principal */}
        <h1
          className="
          relative
          text-2xl md:text-3xl lg:text-4xl 
          font-black
          bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700
          tracking-wide
          font-sans
          group-hover:scale-105
          transition-all duration-300
          drop-shadow-sm
        "
        >
          Grand
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h1>
      </div>
    </div>
  );
}
