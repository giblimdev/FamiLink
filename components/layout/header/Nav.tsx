// src/components/Nav.tsx
import Link from "next/link";
import React from "react";

interface NavProps {
  onLinkClick?: () => void;
}

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/com", label: "Communication" },
  { href: "/dev", label: "Développement" },
  { href: "/contact", label: "Contact" },
];

export default function Nav({ onLinkClick }: NavProps) {
  return (
    <nav className="w-full ml-4">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onLinkClick}
              className="
                relative py-2 text-sm lg:text-base font-medium
                transition-all duration-300
                text-gray-700 hover:text-blue-600
                group
              "
            >
              {item.label}

              {/* Soulignement animé au hover */}
              <span
                className="
                absolute bottom-0 left-0 h-0.5 w-0
                bg-gradient-to-r from-blue-600 to-purple-600
                transition-all duration-300
                group-hover:w-full
              "
              ></span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <ul className="md:hidden space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onLinkClick}
              className="
                block w-full px-4 py-3 rounded-lg
                text-base font-medium
                text-gray-700 hover:text-blue-600 hover:bg-gray-50
                transition-all duration-200
              "
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
