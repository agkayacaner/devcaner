import React from "react";
import Link from "next/link";
import { RiGithubLine, RiTwitterXLine } from "@remixicon/react";
import { ModeToggle } from "./mode-toggle";
export default function Navbar() {
  return (
    <header className="w-full h-16 bg-white dark:bg-black border-b">
      <div className="max-w-7xl h-full px-5 md:mx-auto md:px-0 flex items-center justify-between">
        <div className="me-20">
          <Link href="/" className="text-4xl">
            ⎇
          </Link>
        </div>
        <nav className="h-full flex items-center gap-5">
          <ModeToggle />
          <Link
            href="https://github.com/agkayacaner"
            className="dark:text-white"
          >
            <RiGithubLine />
          </Link>
          <Link href="https://x.com/incidenbiri" className="dark:text-white">
            <RiTwitterXLine />
          </Link>
        </nav>
      </div>
    </header>
  );
}
