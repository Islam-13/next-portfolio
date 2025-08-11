import BackButton from "@/app/_components/BackButton";
import TransitionLink from "@/app/_components/TransitionLink";
import Image from "next/image";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";
import { projectsDetails } from "../../../constants/constants";

export async function generateMetadata({ params }) {
  const project = projectsDetails.filter((proj) => proj.id == params.id);

  return { title: `${project[0].title}` };
}

export async function generateStaticParams() {
  const ids = projectsDetails.map((project) => ({ id: String(project.id) }));

  return ids;
}

function ProjectDetails({ params }) {
  const project = projectsDetails.filter((proj) => proj.id == params.id);

  return (
    <main className="my-16 py-8">
      <div className="wrapper flex flex-col gap-9 ">
        <div className="border rounded-lg p-2 text-sm md:text-base flex flex-wrap items-center">
          <TransitionLink
            href="/"
            styles="px-3 py-1 rounded-xl hover:bg-[--color-grey-200] duration-500 ease-in"
          >
            Home
          </TransitionLink>
          &raquo;
          <TransitionLink
            href="/projects"
            styles="px-3 py-1 rounded-xl ml-1 hover:bg-[--color-grey-200] duration-500 ease-in"
          >
            Projects
          </TransitionLink>
          &raquo;
          <span className="bg-[--color-grey-200] px-3 py-1 rounded-xl ml-1 whitespace-nowrap">
            {project[0].title}
          </span>
        </div>

        <div className="relative flex flex-col md:grid grid-cols-5 gap-3 md:gap-6 items-center">
          <BackButton />

          <div className="relative aspect-square w-[80%] md:w-full  h-[230px] mx-auto col-span-2">
            <Image
              src={project[0].src}
              alt={`${project[0].title} image`}
              className="rounded-lg object-cover"
              fill
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="py-2 px-4 flex flex-col gap-4  col-span-3">
            <h2 className="capitalize text-2xl">{project[0].title}</h2>

            <h3 className="capitalize text-xl">{project[0].role}</h3>

            <p className="text-[--color-grey-500]">{project[0].desc}</p>

            <div className="flex flex-wrap gap-3">
              {project[0]?.tech?.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[--color-grey-200] relative"
                >
                  <Image src={tool} alt="logo" fill className="p-3" />
                </div>
              ))}
            </div>

            <a
              href={project[0].code}
              target="_blank"
              className="flex items-center gap-1 min-w-fit link"
            >
              Source code <RiGithubLine />
            </a>

            <a
              href={project[0].demo}
              target="_blank"
              className="flex items-center gap-1 min-w-fit link"
            >
              Live demo <RiExternalLinkLine />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
