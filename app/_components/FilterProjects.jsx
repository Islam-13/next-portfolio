"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import Button from "./Button";
import CardContainer from "./CardContainer";

const filterBtns = [
  { name: "all", style: "bg-[--color-grey-200]" },
  { name: "javaScript", style: "bg-yellow-300 border-black text-black" },
  { name: "React", style: "bg-blue-400 text-white" },
  // { name: "Next", style: "bg-black text-white" },
  { name: "Node", style: "bg-green-500 border border-black" },
];

const projects = [
  {
    id: 1,
    src: "/images/projects/sticky-tasks.png",
    title: "sticky tasks",
    desc: "Single-page CRUD app for task management. Users can easily add, edit, and delete tasks, as well as filter them by category to focus on specific areas of work.  It’s a good way to stay organized.",
    category: ["javaScript", "Node"],
  },
  {
    id: 2,
    src: "/images/projects/cash-tracker.jpg",
    title: "cash tracker",
    desc: "This secure web app empowers you to effortlessly track your expenses providing valuable insights into your cash flow. Users can easily input detailed information about each expense, including the date, price, and category. The app offers intuitive charts and visualizations to help users gain insights into their spending habits, identify areas for cost reduction, and make informed financial decisions.",
    category: ["React"],
  },
  {
    id: 3,
    src: "/images/projects/fresh-cart.jpg",
    title: "Fresh Cart(e-commerce)",
    desc: "This e-commerce application offers a seamless online shopping experience, allowing users to browse through various categories, brands, and products. The platform incorporates robust features such as a user-friendly checkout process that supports both cash and online payments. To enhance user experience and optimize search engine visibility, the app utilizes Formik for form handling, React Helmet for SEO, and React Query for efficient remote global UI state management.",
    category: ["React"],
  },
  {
    id: 4,
    src: "/images/projects/Fast Pizza Co..png",
    title: "Fast Pizza Co.",
    desc: "This intuitive pizza ordering application offers a straightforward user interface for customers to explore the menu and place their orders. The app leverages React Router for seamless navigation between different pages, Redux Toolkit for efficient state management, and React Hook Form for streamlined order form handling. Customers can conveniently track the status of their orders, ensuring a hassle-free and enjoyable pizza-ordering experience.",
    category: ["React"],
  },
  {
    id: 5,
    src: "/images/projects/yummy.jpg",
    title: "Yummy",
    desc: "This website offers a vast collection of recipes from diverse cultures and cuisines worldwide. Built with Bootstrap for responsive design and enhanced user experience, the site incorporates jQuery animations to create a dynamic and engaging interface. This website offers a rich and inspiring resource for discovering new flavors and preparing authentic dishes from around the globe.",
    category: ["javaScript"],
  },
  {
    id: 6,
    src: "/images/projects/jQuery.png",
    title: "jQuery",
    desc: "This is a training project in jQuery, a popular JavaScript library for creating dynamic and interactive web applications. While the content is placeholder, this website demonstrates my ability to structure and style web pages using jQuery's core functionalities. I have effectively utilized jQuery selectors, event handling and DOM manipulation to create a responsive and engaging user interface.",
    category: ["javaScript"],
  },

  {
    id: 7,
    src: "/images/projects/weather-app.png",
    title: "weather App",
    desc: "This web-based application provides real-time weather information for various locations worldwide. Users can easily input their desired location and receive up-to-date weather data, including temperature, humidity, precipitation, and wind conditions. The app offers a user-friendly interface for quick and easy access to weather forecasts.",
    category: ["javaScript"],
  },

  {
    id: 8,
    src: "/images/projects/random-quotes.png",
    title: "Random Quotes",
    desc: "This app gives you a random quote every time you open it. The quotes are inspiring and can help you feel motivated. It’s easy to use and you can share the quotes with your friends.",
    category: ["javaScript"],
  },
  {
    id: 9,
    src: "/images/projects/e-commerce.png",
    title: "e-commerce app",
    role: "back-end",
    desc: "This e-commerce backend API provides the foundation for a scalable and feature-rich online shopping platform. Built with Express and Mongoose, the API offers efficient data management and retrieval. Nodemailer enables email confirmation, password resets and more. Joi ensures data integrity and validation, while JWT provides secure authentication and authorization. Stripe facilitate online payments, offering a secure and convenient shopping experience for customers.",
    category: ["Node"],
  },
];

function FilterProjects() {
  const [activeTab, setActiveTab] = useState("all");
  const [filtered, setFiltered] = useState(projects);

  function filterData(category) {
    if (category !== "all") {
      let filter = [];

      for (const proj of projects) {
        if (proj.category.includes(category)) filter.push(proj);
      }

      setFiltered(filter);
    } else setFiltered(projects);
  }

  function handleClick(tab) {
    document.startViewTransition(() => {
      flushSync(() => {
        setActiveTab(tab);
        filterData(tab);
      });
    });
  }

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
        {filterBtns.map((btn) => (
          <Button
            key={btn.name}
            activeTab={activeTab}
            onclick={handleClick}
            style={btn.style}
          >
            {btn.name}
          </Button>
        ))}
      </div>

      <CardContainer projects={filtered} />
    </>
  );
}

export default FilterProjects;
