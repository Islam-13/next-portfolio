import Image from "next/image";
import Link from "next/link";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

function Project({ project }) {
  const { src, title, desc, code, demo } = project;
  return (
    <div className="card p-4 md:p-4 rounded-lg shadow-lg flex flex-col gap-5 bg-[--color-grey-200] hover:scale-105 duration-500">
      <div className="image-wrap relative aspect-video">
        <Image
          fill
          src={src}
          alt={`${title} image`}
          className="rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold capitalize">{title}</h4>
        <p className="text-sm tracking-wide line-clamp-3">{desc}</p>

        <hr />

        <div className="flex justify-between text-sm ">
          <Link
            href={code}
            target="_blank"
            className="flex items-center gap-1 min-w-fit link"
          >
            source code <RiGithubLine />
          </Link>
          <Link
            href={demo}
            target="_blank"
            className="flex items-center gap-1 min-w-fit link"
          >
            live demo <RiExternalLinkLine />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
