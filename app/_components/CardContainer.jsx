import Project from "./Project";

function CardContainer({ projects }) {
  return (
    <div className="[container:card/inline-size] grid sm:grid-cols-2 md:grid-cols-3  gap-3 md:gap-y-10 md:gap-6">
      {projects.map((proj) => (
        <Project key={proj.title} project={proj} />
      ))}
    </div>
  );
}

export default CardContainer;
