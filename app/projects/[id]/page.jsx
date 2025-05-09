import BackButton from "@/app/_components/BackButton";
import TransitionLink from "@/app/_components/TransitionLink";
import Image from "next/image";
import { RiExternalLinkLine, RiGithubLine } from "react-icons/ri";

const projects = [
  {
    id: 1,
    src: "/images/projects/sticky-tasks.png",
    role: "Full Stack",
    title: "Sticky Tasks",
    desc: "Single-page CRUD app for task management. Users can easily add, edit, and delete tasks, as well as filter them by category to focus on specific areas of work.  It’s a good way to stay organized.",
    code: "https://github.com/Islam-13/sticky-tasks-Front-end",
    demo: "https://sticky-tasks-01.netlify.app",
    category: "javaScript",
    tech: [
      "/images/tech/html-logo.svg",
      "/images/tech/css-logo.svg",
      "/images/tech/javaScript-logo.svg",
      "/images/tech/nodejs-logo.svg",
      "/images/tech/mongodb-logo.svg",
    ],
  },
  {
    id: 2,
    src: "/images/projects/cash-tracker.jpg",
    title: "Cash Tracker",
    role: "full stack",
    desc: "This secure web app empowers you to effortlessly track your expenses providing valuable insights into your cash flow. Users can easily input detailed information about each expense, including the date, price, and category. The app offers intuitive charts and visualizations to help users gain insights into their spending habits, identify areas for cost reduction, and make informed financial decisions.",
    code: "https://github.com/Islam-13/Cash-Tracker",
    demo: "https://cash-tracker-13.netlify.app",
    category: "React",
    tech: [
      "/images/tech/tailwind-logo.svg",
      "/images/tech/reactjs-logo.svg",
      "/images/tech/supabase-logo.svg",
    ],
  },
  {
    id: 3,
    src: "/images/projects/fresh-cart.jpg",
    title: "Fresh Cart(e-commerce)",
    role: "front-end",
    desc: "This e-commerce application offers a seamless online shopping experience, allowing users to browse through various categories, brands, and products. The platform incorporates robust features such as a user-friendly checkout process that supports both cash and online payments. To enhance user experience and optimize search engine visibility, the app utilizes Formik for form handling, React Helmet for SEO, and React Query for efficient remote global UI state management.",
    code: "https://github.com/Islam-13/Fresh-Cart--e-commerce-",
    demo: "https://fresh-cart-react.netlify.app",
    category: "React",
    tech: [
      "/images/tech/bootstrap-logo.svg",
      "/images/tech/reactjs-logo.svg",
      "/images/tech/react-query-logo.svg",
    ],
  },
  {
    id: 4,
    src: "/images/projects/Fast Pizza Co..png",
    role: "front-end",
    title: "Fast Pizza Co.",
    desc: "This intuitive pizza ordering application offers a straightforward user interface for customers to explore the menu and place their orders. The app leverages React Router for seamless navigation between different pages, Redux Toolkit for efficient state management, and React Hook Form for streamlined order form handling. Customers can conveniently track the status of their orders, ensuring a hassle-free and enjoyable pizza-ordering experience.",
    code: "https://github.com/Islam-13/Fast-Pizza-Co.",
    demo: "https://fast-pizza-01.netlify.app",
    category: "React",
    tech: [
      "/images/tech/tailwind-logo.svg",
      "/images/tech/reactjs-logo.svg",
      "/images/tech/redux-logo.svg",
    ],
  },
  {
    id: 5,
    src: "/images/projects/yummy.jpg",
    role: "front-end",
    title: "Yummy",
    desc: "This website offers a vast collection of recipes from diverse cultures and cuisines worldwide. Built with Bootstrap for responsive design and enhanced user experience, the site incorporates jQuery animations to create a dynamic and engaging interface. This website offers a rich and inspiring resource for discovering new flavors and preparing authentic dishes from around the globe.",
    code: "https://github.com/Islam-13/food-recipes",
    demo: "https://islam-13.github.io/food-recipes",
    category: "javaScript",
    tech: [
      "/images/tech/html-logo.svg",
      "/images/tech/bootstrap-logo.svg",
      "/images/tech/javaScript-logo.svg",
      "/images/tech/jQuery-logo.svg",
    ],
  },
  {
    id: 6,
    src: "/images/projects/jQuery.png",
    title: "jQuery",
    role: "front-end",
    desc: "This is a training project in jQuery, a popular JavaScript library for creating dynamic and interactive web applications. While the content is placeholder, this website demonstrates my ability to structure and style web pages using jQuery's core functionalities. I have effectively utilized jQuery selectors, event handling and DOM manipulation to create a responsive and engaging user interface.",
    code: "https://github.com/Islam-13/jQuery",
    demo: "https://islam-13.github.io/jQuery",
    category: "javaScript",
    tech: [
      "/images/tech/html-logo.svg",
      "/images/tech/bootstrap-logo.svg",
      "/images/tech/javaScript-logo.svg",
      "/images/tech/jQuery-logo.svg",
    ],
  },

  {
    id: 7,
    src: "/images/projects/weather-app.png",
    title: "Weather App",
    role: "front-end",
    desc: "This web-based application provides real-time weather information for various locations worldwide. Users can easily input their desired location and receive up-to-date weather data, including temperature, humidity, precipitation, and wind conditions. The app offers a user-friendly interface for quick and easy access to weather forecasts.",
    code: "https://github.com/Islam-13/weather-js",
    demo: "https://islam-13.github.io/weather-js",
    category: "javaScript",
    tech: [
      "/images/tech/html-logo.svg",
      "/images/tech/bootstrap-logo.svg",
      "/images/tech/javaScript-logo.svg",
    ],
  },

  {
    id: 8,
    src: "/images/projects/random-quotes.png",
    title: "Random Quotes",
    role: "front-end",
    desc: "This app gives you a random quote every time you open it. The quotes are inspiring and can help you feel motivated. It’s easy to use and you can share the quotes with your friends.",
    code: "https://github.com/Islam-13/08-random-quote-generator-js-",
    demo: "https://islam-13.github.io/08-random-quote-generator-js-",
    category: "javaScript",
    tech: [
      "/images/tech/html-logo.svg",
      "/images/tech/css-logo.svg",
      "/images/tech/javaScript-logo.svg",
    ],
  },
  {
    id: 9,
    src: "/images/projects/e-commerce.png",
    title: "E-commerce app",
    role: "back-end",
    desc: "This e-commerce backend API provides the foundation for a scalable and feature-rich online shopping platform. Built with Express and Mongoose, the API offers efficient data management and retrieval. Nodemailer enables email confirmation, password resets and more. Joi ensures data integrity and validation, while JWT provides secure authentication and authorization. Stripe facilitate online payments, offering a secure and convenient shopping experience for customers.",
    code: "https://github.com/Islam-13/e-commerce-Back-end",
    demo: "https://e-commerce-back-end-blush.vercel.app/",
    category: "node",
    tech: [
      "/images/tech/javaScript-logo.svg",
      "/images/tech/nodejs-logo.svg",
      "/images/tech/mongodb-logo.svg",
    ],
  },
  {
    id: 10,
    src: "/images/projects/the-wild-oasis.png",
    title: "The Wild Oasis",
    role: "full stack",
    desc: "Internal hotel management system that streamlines guest check-in and check-out processes, provides real-time room availability information, and generates detailed statistics on guest stays and sales performance. The system will enhance operational efficiency, improve guest satisfaction, and enable data-driven decision-making for hotel management.",
    code: "https://github.com/Islam-13/the-wild-oasis",
    demo: "https://the-wild-oasis-03.netlify.app",
    category: "React",
    tech: [
      "/images/tech/styled-components-logo.png",
      "/images/tech/reactjs-logo.svg",
      "/images/tech/supabase-logo.svg",
    ],
  },
];

export async function generateMetadata({ params }) {
  const project = projects.filter((proj) => proj.id == params.id);

  return { title: `${project[0].title}` };
}

export async function generateStaticParams() {
  const ids = projects.map((project) => ({ id: String(project.id) }));

  return ids;
}

function ProjectDetails({ params }) {
  const project = projects.filter((proj) => proj.id == params.id);

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
