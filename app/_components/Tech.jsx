import Image from "next/image";

const logos = [
  { src: "/images/tech/docker-mark-blue.svg", alt: "Docker logo" },
  { src: "/images/tech/nestjs-logo.svg", alt: "Nest logo" },
  { src: "/images/tech/mongodb-logo.svg", alt: "MongoDB logo" },
  { src: "/images/tech/nodejs-logo.svg", alt: "Node logo" },
  { src: "/images/tech/angular-logo.svg", alt: "Angular logo" },
  { src: "/images/tech/nextjs-logo.svg", alt: "Next logo" },
  { src: "/images/tech/reactjs-logo.svg", alt: "React logo" },
  { src: "/images/tech/jQuery-logo.svg", alt: "jQuery logo" },
  { src: "/images/tech/typeScript-logo.svg", alt: "Typescript logo" },
  { src: "/images/tech/javaScript-logo.svg", alt: "javaScript logo" },
  { src: "/images/tech/bootstrap-logo.svg", alt: "Bootstrap logo" },
  { src: "/images/tech/tailwind-logo.svg", alt: "Tailwind logo" },
  { src: "/images/tech/css-logo.svg", alt: "Css logo" },
  { src: "/images/tech/html-logo.svg", alt: "Html logo" },
];

const settings = {
  "--numItems": logos.length,
  "--width": "130px",
  "--height": "50px",
  "--speed": "20s",
  "--gap": "20px",
  "--single-slide-speed": "calc(var(--speed) / var(--numItems))",
  "--track-width": "calc((var(--width) + var(--gap)) * (var(--numItems) - 1))",
};

function Tech() {
  return (
    <section className="py-20" id="tech">
      <div className="wrapper">
        <h3 className="heading">Tech Stack</h3>

        <div
          style={{ ...settings }}
          className={`max-w-[90%] m-auto overflow-hidden py-7 [mask-image:linear-gradient(to_right,transparent,#fff_20%,#fff_80%,transparent)]`}
        >
          <div className="w-max grid [container-type:inline-size] grid-cols-[var(--track-width)_[track]_0px_[resting]]">
            {logos.map((logo, i) => (
              <div
                key={logo.alt}
                style={{ "--position": `${i + 1}` }}
                className="marquee-item relative w-[var(--width)] h-[var(--height)] [grid-area:resting]"
              >
                <Image fill src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;
