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
      <button className=" cursor-pointer" aria-label="change mode button">
        <RiMoonClearLine onClick={() => setTheme("light")} />
      </button>
    );

  if (resolvedTheme === "light")
    return (
      <button className=" cursor-pointer" aria-label="change mode button">
        <RiSunLine onClick={() => setTheme("dark")} />
      </button>
    );
}

export default SwitchTheme;
