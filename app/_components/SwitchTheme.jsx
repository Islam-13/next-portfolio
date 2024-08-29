"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

function SwitchTheme() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <RiSunLine />;

  if (resolvedTheme === "dark")
    return (
      <button className=" cursor-pointer">
        <RiMoonClearLine onClick={() => setTheme("light")} />
      </button>
    );

  if (resolvedTheme === "light")
    return (
      <button className=" cursor-pointer">
        <RiSunLine onClick={() => setTheme("dark")} />
      </button>
    );
}

export default SwitchTheme;
