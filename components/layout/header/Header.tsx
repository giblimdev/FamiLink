// src/components/Header.tsx
"use client";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import IsConnect from "./IsConnect";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="
      w-full
      bg-white/95 backdrop-blur-sm
      shadow-lg
      sticky top-0 z-50
      border-b border-gray-200/50
    "
    >
      <div
        className="
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
        py-3 sm:py-4
      "
      >
        <div
          className="
          flex items-center justify-between
          gap-4
        "
        >
          {/* Logo - Toujours visible */}
          <Link href="/">
            <div className="flex-shrink-0">
              <Logo />
            </div>
          </Link>
          {/* Navigation - Cachée sur mobile, visible sur tablette+ */}
          <div className="hidden md:flex flex-1 justify-center">
            <Nav />
          </div>

          {/* Connexion - Toujours visible */}
          <div className="flex-shrink-0">
            <IsConnect />
          </div>

          {/* Menu burger pour mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="
                p-2 rounded-md
                text-gray-600 hover:text-gray-900
                hover:bg-gray-100
                transition-colors duration-200
                relative z-50
              "
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                // Icône X pour fermer
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Icône hamburger
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation mobile - Menu déroulant */}
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 mt-4 pt-4 border-t border-gray-200"
              : "max-h-0 opacity-0"
          }
        `}
        >
          <div className="pb-4">
            {/* Bouton fermer en haut du menu */}
            <div className="flex justify-end mb-3">
              <button
                onClick={closeMobileMenu}
                className="
                  p-2 rounded-full
                  text-gray-500 hover:text-gray-700
                  hover:bg-gray-100
                  transition-colors duration-200
                "
                aria-label="Fermer le menu"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation avec fonction de fermeture */}
            <div onClick={closeMobileMenu}>
              <Nav />
            </div>
          </div>
        </div>
      </div>

      {/* Overlay pour fermer le menu en cliquant à côté */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </header>
  );
}
