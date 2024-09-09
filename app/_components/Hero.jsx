import Icons from "./Icons";
import { RiEyeLine } from "react-icons/ri";

function Hero() {
  return (
    <section id="home" className=" h-screen">
      <div className="wrapper h-full flex justify-between items-center">
        <div className="hero flex flex-col gap-2 duration-[2s]">
          <p>Hi, I&apos;m</p>

          <h1 className="text-5xl md:text-6xl text-[--main-clr] font-bold">
            Islam Mo&apos;men
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold">
            Front-end Developer
          </h2>

          <div className="resume w-[130px] p-[2px] rounded-3xl [transition:all_0.2s_ease]">
            <a
              href="/Islam-Hussen-Frontend.pdf"
              aria-label="watch resume link"
              className="bg-[--color-grey-50] rounded-full block py-1 px-4 space-x-3 tracking-wider font-light duration-500"
              target="_blank"
            >
              <RiEyeLine
                size={20}
                style={{ display: "inline-block", marginRight: "6px" }}
              />
              Resume
            </a>
          </div>

          <Icons />
        </div>
      </div>
    </section>
  );
}

export default Hero;
