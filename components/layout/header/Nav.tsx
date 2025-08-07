import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <div>
        <Link href={"/com"}>Communication (c'est un lien)</Link>
      </div>
    </div>
  );
}
