import Image from "next/image";
import TransitionLink from "./TransitionLink";

function Project({ project }) {
  const { id, src, title, desc } = project;
  return (
    <div className="card border border-transparent p-4 md:p-4 rounded-lg shadow-lg flex flex-col gap-5 group bg-[--color-grey-200] hover:border-[--main-clr] hover:bg-[--color-grey-300] duration-700">
      <div className="image-wrap group-hover:grayscale-0 relative aspect-video grayscale-[50%]">
        <Image
          fill
          src={src}
          alt={`${title} image`}
          className="rounded-lg object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold capitalize">{title}</h4>
        <p className="text-sm tracking-wide line-clamp-3 text-[--color-grey-500]">
          {desc}
        </p>

        <hr />

        <TransitionLink href={`/projects/${id}`} styles="link">
          More details &rarr;
        </TransitionLink>
      </div>
    </div>
  );
}

export default Project;
