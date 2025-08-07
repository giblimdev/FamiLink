import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      header
      <div>
        <Link href={"/com"}>Communication</Link>
      </div>
    </div>
  );
}
