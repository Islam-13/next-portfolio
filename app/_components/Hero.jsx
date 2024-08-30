import Link from "next/link";
import Icons from "./Icons";
import { RiEyeLine } from "react-icons/ri";

function Hero() {
  return (
    <section id="home" className=" h-screen">
      <div className="wrapper h-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <p>Hi, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl text-[--main-clr] font-bold">
            Islam Mo&apos;men
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold">
            Junior Front-end Developer
          </h2>
          <Link
            href="/Islam-Hussen-Frontend.pdf"
            aria-label="watch resume link"
            className="text-white bg-[--main-clr] rounded-md w-max py-2 px-4 space-x-3 tracking-wider font-light hover:opacity-75 duration-500"
            target="_blank"
          >
            <RiEyeLine
              size={20}
              style={{ display: "inline-block", marginRight: "6px" }}
            />
            Resume
          </Link>
          <Icons />
        </div>
      </div>
    </section>
  );
}

export default Hero;
