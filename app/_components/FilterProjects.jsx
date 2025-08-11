"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import Button from "./Button";
import CardContainer from "./CardContainer";
import { allProjects } from "../../constants/constants";

const filterBtns = [
  { name: "all", style: "bg-[--color-grey-200]" },
  { name: "javaScript", style: "bg-yellow-300 border-black text-black" },
  { name: "React", style: "bg-blue-400 text-white" },
  { name: "Next", style: "bg-black text-white" },
  { name: "Node", style: "bg-green-500 border border-black" },
];

function FilterProjects() {
  const [activeTab, setActiveTab] = useState("all");
  const [filtered, setFiltered] = useState(allProjects);

  function filterData(category) {
    if (category !== "all") {
      let filter = [];

      for (const proj of allProjects) {
        if (proj.category.includes(category)) filter.push(proj);
      }

      setFiltered(filter);
    } else setFiltered(allProjects);
  }

  function handleClick(tab) {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        flushSync(() => {
          setActiveTab(tab);
          filterData(tab);
        });
      });
    } else {
      setActiveTab(tab);
      filterData(tab);
    }
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
