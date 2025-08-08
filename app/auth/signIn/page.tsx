import Back from "@/components/Back";
import React from "react";

export default function page() {
  return (
    <div>
      form de connexion {/* Retour automatique vers la page précédente */}
      <div className="mb-6">
        <Back label="Retour" fallbackUrl="/" />
      </div>
    </div>
  );
}
