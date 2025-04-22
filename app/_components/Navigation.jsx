"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Icons from "./Icons";
import NavLink from "./NavLink";

const navLinks = [
  { name: "home", url: "/" },
  { name: "about", url: "#about" },
  { name: "tech", url: "#tech" },
  { name: "projects", url: "#projects" },
  { name: "contact", url: "#contact" },
];

function Navigation({ setIsOpen }) {
  const [active, setActive] = useState("");
  const pathName = usePathname();

  function handleClose() {
    setIsOpen(false);
  }

  function getActiveSection() {
    const sections = document.querySelectorAll("section");
    const scrollY = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const offset = 65; // header height

      if (
        scrollY + offset >= sectionTop &&
        scrollY < sectionTop + sectionHeight
      ) {
        setActive(section.id);
      }
    });
  }

  useEffect(
    function () {
      window.addEventListener("scroll", getActiveSection);

      if (pathName.startsWith("/projects")) {
        setActive("projects");
      } else getActiveSection();

      return () => window.removeEventListener("scroll", getActiveSection);
    },
    [pathName]
  );

  return (
    <nav className="py-7 md:p-0">
      <ul className="nav-links md:flex capitalize tracking-wider">
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

      <div className="md:hidden">
        <Icons center="justify-center" />
      </div>
    </nav>
  );
}

export default Navigation;
