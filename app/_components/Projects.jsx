import CardContainer from "./CardContainer";
import TransitionLink from "./TransitionLink";

const projects = [
  {
    id: 1,
    src: "/images/projects/sticky-tasks.png",
    title: "sticky tasks",
    desc: "Single-page CRUD app for task management. Users can easily add, edit, and delete tasks, as well as filter them by category to focus on specific areas of work.  It’s a good way to stay organized.",
  },
  {
    id: 2,
    src: "/images/projects/cash-tracker.jpg",
    title: "cash tracker",
    desc: "This secure web app empowers you to effortlessly track your expenses providing valuable insights into your cash flow. Users can easily input detailed information about each expense, including the date, price, and category. The app offers intuitive charts and visualizations to help users gain insights into their spending habits, identify areas for cost reduction, and make informed financial decisions.",
  },
  {
    id: 3,
    src: "/images/projects/fresh-cart.jpg",
    title: "fresh cart(e-commerce)",
    desc: "This e-commerce application offers a seamless online shopping experience, allowing users to browse through various categories, brands, and products. The platform incorporates robust features such as a user-friendly checkout process that supports both cash and online payments. To enhance user experience and optimize search engine visibility, the app utilizes Formik for form handling, React Helmet for SEO, and React Query for efficient remote global UI state management.",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-[--color-grey-100]">
      <div className="wrapper">
        <h3 className="heading">Projects</h3>

        <CardContainer projects={projects} />

        <div className="mt-8 text-center text-2xl">
          <TransitionLink href="/projects" styles="link">
            Explore more projects
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}

export default Projects;
