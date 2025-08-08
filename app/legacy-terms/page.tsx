import Back from "@/components/Back";
import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      Legacy
      <div className="mb-6">
        <Back label="Retour" fallbackUrl="/" />
      </div>
    </div>
  );
}
