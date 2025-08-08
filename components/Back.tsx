// src/components/Back.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackProps {
  label?: string;
  href?: string;
  variant?: "default" | "minimal" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
  fallbackUrl?: string;
}

export default function Back({
  label = "Retour",
  href,
  variant = "default",
  size = "md",
  className = "",
  fallbackUrl = "/",
}: BackProps) {
  const router = useRouter();

  const handleBack = React.useCallback(() => {
    if (href) {
      router.push(href);
    } else {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push(fallbackUrl);
      }
    }
  }, [href, router, fallbackUrl]);

  const variants = {
    default: `
      text-gray-600 hover:text-blue-600
      bg-white hover:bg-blue-50
      border border-gray-300 hover:border-blue-300
      shadow-sm hover:shadow-md
    `,
    minimal: `
      text-gray-600 hover:text-blue-600
      bg-transparent hover:bg-gray-100
      border-none
    `,
    gradient: `
      text-white
      bg-gradient-to-r from-blue-600 to-purple-600
      hover:from-blue-700 hover:to-purple-700
      border-none
      shadow-md hover:shadow-lg
    `,
  } as const;

  const sizes = {
    sm: "px-2 py-1 text-sm gap-1",
    md: "px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base gap-2",
    lg: "px-4 py-3 text-base gap-3",
  } as const;

  const iconSizes = { sm: 16, md: 18, lg: 20 } as const;

  const baseClasses = `
    inline-flex items-center
    font-medium
    rounded-lg
    transition-all duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    active:scale-95
    group
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <ArrowLeft
          size={iconSizes[size]}
          className="group-hover:-translate-x-1 transition-transform duration-300"
        />
        <span className="whitespace-nowrap">{label}</span>
      </Link>
    );
  }

  return (
    <button onClick={handleBack} className={baseClasses} type="button">
      <ArrowLeft
        size={iconSizes[size]}
        className="group-hover:-translate-x-1 transition-transform duration-300"
      />
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
}
