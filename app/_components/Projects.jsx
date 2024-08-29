import Link from "next/link";
import { RiGithubLine } from "react-icons/ri";
import Project from "./Project";

const projects = [
  {
    src: "/images/projects/sticky-tasks.png",
    title: "sticky tasks",
    desc: "Single-page CRUD app for task management. Implemented filtering, searching, validation, and authentication.",
    code: "https://github.com/Islam-13/sticky-tasks-Front-end",
    demo: "https://sticky-tasks-front-end.vercel.app/",
  },
  {
    src: "/images/projects/cash-tracker.jpg",
    title: "cash tracker",
    desc: "This secure web app empowers you to effortlessly track your expenses providing valuable insights into your cash flow.",
    code: "https://github.com/Islam-13/Cash-Tracker",
    demo: "https://cash-tracker-01.netlify.app/",
  },
  {
    src: "/images/projects/fresh-cart.jpg",
    title: "fresh cart",
    desc: "User-friendly web app provides a comprehensive solution for businesses to establish a powerful online store.",
    code: "https://github.com/Islam-13/Fresh-Cart--e-commerce-",
    demo: "https://fresh-cart-react.netlify.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[--color-grey-100]">
      <div className="wrapper">
        <h3 className="heading">Projects</h3>

        <div className="card-container grid sm:grid-cols-2 md:grid-cols-3  gap-4 md:gap-5">
          {projects.map((proj) => (
            <Project key={proj.title} project={proj} />
          ))}
        </div>

        <div className="mt-8 text-center text-2xl">
          <Link
            href="https://github.com/Islam-13"
            target="_blank"
            className="link"
          >
            Check <RiGithubLine style={{ display: "inline-block" }} /> for more
            &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
