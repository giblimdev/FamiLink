// src/app/dev/page.tsx
import React from "react";
import Back from "@/components/Back";

export default function CommunicationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Retour automatique vers la page précédente */}
      <div className="mb-6">
        <Back label="← Retour" fallbackUrl="/" />
      </div>

      <h1 className="text-3xl font-bold mb-4">Communication</h1>
      <section className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700 mb-4">
          Découvrez la page deve ici ses liens vers le schema , l'architecture
          et et les commentaire des scripts.
        </p>
      </section>
    </main>
  );
}
