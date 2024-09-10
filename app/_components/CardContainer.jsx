import Project from "./Project";

function CardContainer({ projects }) {
  return (
    <div className="[container:card/inline-size] grid sm:grid-cols-2 md:grid-cols-3  gap-5 md:gap-y-10 md:gap-6">
      {projects.map((proj, i) => (
        <Project key={proj.title} project={proj} index={i + 1} />
      ))}
    </div>
  );
}

export default CardContainer;
