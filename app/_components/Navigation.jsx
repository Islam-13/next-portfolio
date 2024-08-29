"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseCircleLine } from "react-icons/ri";
import Icons from "./Icons";
import useDetectClick from "../_hooks/useDetectClick";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";

const navLinks = [
  { name: "home", url: "/" },
  { name: "about", url: "#about" },
  { name: "tech", url: "#tech" },
  { name: "projects", url: "#projects" },
  { name: "contact", url: "#contact" },
];

function Navigation({ isOpen, setIsOpen }) {
  const [active, setActive] = useState("home");
  const pathName = usePathname();
  const ref = useDetectClick(handleClose);

  function handleClose() {
    setIsOpen(false);
  }

  useEffect(function () {
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const offset = 56; // header height

        if (
          scrollY + offset >= sectionTop &&
          scrollY < sectionTop + sectionHeight
        ) {
          setActive(section.id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={ref}
      className={`side-menu ${isOpen ? "left-0" : "left-[-281px]"}`}
    >
      <div className="md:hidden text-2xl flex justify-between items-center h-14 shadow-md p-3">
        <strong>Menu</strong>
        <button
          className="text-red-400 hover:animate-spin"
          onClick={handleClose}
        >
          <RiCloseCircleLine />
        </button>
      </div>

      <ul className="nav-links flex gap-2 p-3 md:gap-4 capitalize tracking-wider">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            active={active}
            name={link.name}
            pathName={pathName}
            url={link.url}
            handleClose={handleClose}
          />
        ))}
      </ul>

      <div className="mb-10 md:hidden">
        <Icons center="justify-center" />
      </div>
    </nav>
  );
}

export default Navigation;
