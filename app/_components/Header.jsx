"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import { RiMenuUnfoldLine } from "react-icons/ri";
import SwitchTheme from "./SwitchTheme";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="h-14 fixed top-0 w-full shadow-md z-[1] bg-[--color-grey-50]">
      {isOpen && (
        <div className="fixed inset-0 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-sm"></div>
      )}
      <div className="h-full w-[90%] max-w-[1050px] mx-auto flex justify-between items-center">
        <Link href="/" className=" hidden md:block text-2xl font-bold">
          iM
        </Link>

        <button
          className="md:hidden text-3xl p-2"
          aria-label="menu button"
          onClick={() => setIsOpen(true)}
        >
          <RiMenuUnfoldLine />
        </button>

        <Link
          href="/"
          className="md:hidden font-bold text-lg tracking-wide hover:text-[--main-clr] hover:border-b hover:border-[--main-clr] duration-500"
        >
          Islam Mo&apos;men
        </Link>

        <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />

        <SwitchTheme />
      </div>
    </header>
  );
}

export default Header;
