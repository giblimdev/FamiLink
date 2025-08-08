// src/components/IsConnect.tsx
import React, { useState } from "react";
import Link from "next/link";

export default function IsConnect() {
  const [isConnected, setIsConnected] = useState(false); // État de connexion
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogin = () => {
    // Logique de connexion ici
    setIsConnected(true);
  };

  const handleLogout = () => {
    // Logique de déconnexion ici
    setIsConnected(false);
    setShowDropdown(false);
  };

  // Version utilisateur non connecté
  if (!isConnected) {
    return (
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Bouton Se connecter */}
        <button
          onClick={handleLogin}
          className="
            px-3 py-2 sm:px-4 sm:py-2
            text-sm sm:text-base font-medium
            text-blue-600 hover:text-blue-700
            bg-transparent hover:bg-blue-50
            border border-blue-600 hover:border-blue-700
            rounded-lg
            transition-all duration-300
            whitespace-nowrap
          "
        >
          Se connecter
        </button>

        {/* Bouton S'inscrire */}
        <button
          className="
            px-3 py-2 sm:px-4 sm:py-2
            text-sm sm:text-base font-medium
            text-white
            bg-gradient-to-r from-blue-600 to-purple-600
            hover:from-blue-700 hover:to-purple-700
            rounded-lg
            shadow-md hover:shadow-lg
            transition-all duration-300
            whitespace-nowrap
          "
        >
          S'inscrire
        </button>
      </div>
    );
  }

  // Version utilisateur connecté
  return (
    <div className="relative">
      {/* Avatar utilisateur */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="
          flex items-center space-x-2 sm:space-x-3
          p-1 sm:p-2
          rounded-full
          hover:bg-gray-100
          transition-colors duration-200
          group
        "
      >
        {/* Avatar */}
        <div
          className="
          w-8 h-8 sm:w-10 sm:h-10
          bg-gradient-to-br from-blue-500 to-purple-600
          rounded-full
          flex items-center justify-center
          text-white font-bold text-sm sm:text-base
          shadow-md
          group-hover:shadow-lg
          transition-shadow duration-200
        "
        >
          JD
        </div>

        {/* Nom utilisateur (caché sur mobile) */}
        <span className="hidden sm:block text-sm font-medium text-gray-700 group-hover:text-gray-900">
          John Doe
        </span>

        {/* Flèche dropdown */}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
            showDropdown ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Menu dropdown */}
      {showDropdown && (
        <>
          {/* Overlay pour fermer le dropdown */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowDropdown(false)}
          />

          {/* Menu */}
          <div
            className="
            absolute right-0 top-full mt-2 z-20
            w-48 sm:w-56
            bg-white
            border border-gray-200
            rounded-xl
            shadow-lg
            py-2
            animate-in slide-in-from-top-2 duration-200
          "
          >
            {/* Profil */}
            <Link
              href="/profile"
              className="
                flex items-center px-4 py-3
                text-sm text-gray-700 hover:text-blue-600
                hover:bg-blue-50
                transition-colors duration-200
              "
              onClick={() => setShowDropdown(false)}
            >
              <svg
                className="w-4 h-4 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Mon profil
            </Link>

            {/* Paramètres */}
            <Link
              href="/settings"
              className="
                flex items-center px-4 py-3
                text-sm text-gray-700 hover:text-blue-600
                hover:bg-blue-50
                transition-colors duration-200
              "
              onClick={() => setShowDropdown(false)}
            >
              <svg
                className="w-4 h-4 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Paramètres
            </Link>

            {/* Séparateur */}
            <hr className="my-2 border-gray-200" />

            {/* Déconnexion */}
            <button
              onClick={handleLogout}
              className="
                flex items-center w-full px-4 py-3
                text-sm text-red-600 hover:text-red-700
                hover:bg-red-50
                transition-colors duration-200
              "
            >
              <svg
                className="w-4 h-4 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Se déconnecter
            </button>
          </div>
        </>
      )}
    </div>
  );
}
