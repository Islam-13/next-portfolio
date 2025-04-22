"use client";

import Link from "next/link";
import Navigation from "./Navigation";
import SwitchTheme from "./SwitchTheme";
import { useState } from "react";
import useDetectClick from "../_hooks/useDetectClick";
import MenuButton from "./MenuButton";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useDetectClick(() => setIsOpen(false));

  return (
    <header className="fixed top-0 w-full p-4 z-10">
      <div
        ref={ref}
        className={`${
          isOpen ? "h-auto" : "h-[65px]"
        } head-center border rounded-2xl px-6 md:px-8 py-4 shadow-md z-[2] bg-[--color-grey-op] backdrop-blur-md md:flex items-center justify-between overflow-clip`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            iM
          </Link>

          <Link
            href="/"
            className="md:hidden font-bold text-lg tracking-wide hover:text-[--main-clr] hover:border-b hover:border-[--main-clr] duration-500"
          >
            Islam Mo&apos;men
          </Link>

          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <Navigation setIsOpen={setIsOpen} />

        <div className="border-t-[1px] border-[--color-grey-800] pt-7 md:contents">
          <SwitchTheme />
        </div>
      </div>
    </header>
  );
}

export default Header;
