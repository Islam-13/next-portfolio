import Link from "next/link";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";

function Icons({ center = "" }) {
  return (
    <div className={`flex gap-2 ${center}`}>
      <Link
        href="https://www.linkedin.com/in/islam-hussen"
        target="_blank"
        aria-label="linkedin profile link"
        className="group p-2"
      >
        <RiLinkedinLine
          size={28}
          className="group-hover:bg-[--main-clr] group-hover:text-white rounded duration-500 ease-linear"
        />
      </Link>
      
      <Link
        href="https://github.com/Islam-13"
        target="_blank"
        aria-label="github link"
        className="group p-2"
      >
        <RiGithubLine
          size={28}
          className="group-hover:bg-zinc-900 group-hover:text-white rounded duration-500 ease-linear"
        />
      </Link>
    </div>
  );
}

export default Icons;
